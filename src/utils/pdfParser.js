import * as pdfjsLib from 'pdfjs-dist';
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
const amount=s=>Number(String(s||'0').replace(/[$,]/g,''))||0;
export async function parseIntelcomPdf(file){
 const buffer=await file.arrayBuffer(); const pdf=await pdfjsLib.getDocument({data:buffer}).promise; let text='';
 for(let p=1;p<=pdf.numPages;p++){const page=await pdf.getPage(p); const content=await page.getTextContent(); text += '\n' + content.items.map(i=>i.str).join(' ');}
 const nameMatch=text.match(/(C0[A-Z0-9]{4,}\s+[A-Za-zÀ-ÿ' -]{3,80})\s+Invoice\s+To/i)||text.match(/Driver:\s*(C0[A-Z0-9]{4,}\s+[A-Za-zÀ-ÿ' -]{3,80})/i);
 const driverLine=nameMatch?.[1]?.trim()||''; const code=(driverLine.match(/C0[A-Z0-9]{4,}/)||[''])[0]; const driverName=driverLine.replace(code,'').trim();
 const week=(text.match(/Week reference:\s*([0-9]{4}-[0-9]{2})/i)||text.match(/\b(20\d{2}-\d{2})\b/))?.[1]||'';
 const from=(text.match(/From:\s*(20\d{2}-\d{2}-\d{2})/i)||[])?.[1]||''; const to=(text.match(/To:\s*(20\d{2}-\d{2}-\d{2})/i)||[])?.[1]||'';
 const totalInvoice=amount((text.match(/Total invoice\s*\$?([0-9,]+\.\d{2})/i)||[])[1]);
 const dayRows=[]; const summary=/((?:20\d{2}-\d{2}-\d{2}\s+0\s+\d+\s+\$[0-9,.]+\s+\$[0-9,.]+\s+\$[0-9,.]+\s+\$[0-9,.]+\s*)+)/.exec(text)?.[1]||'';
 const rowRe=/(20\d{2}-\d{2}-\d{2})\s+0\s+(\d+)\s+\$([0-9,.]+)\s+\$([0-9,.]+)\s+\$([0-9,.]+)\s+\$([0-9,.]+)/g; let m;
 while((m=rowRe.exec(summary||text))){dayRows.push({date:m[1],parcels:+m[2],amount:amount(m[6]),vehicle:'Essence'});}
 const parcels=[]; const detailRe=/(20\d{2}-\d{2}-\d{2})\s+(DELIVERY|FLEX|RETNXTDAY)\s+MONT\s+([A-Z]\d[A-Z]\d[A-Z]\d)\s+(ZONE_[A-Z])\s+([A-Z0-9]+)\s+([0-9.]+\s+LB)\s+\$([0-9.]+)/g;
 while((m=detailRe.exec(text))){parcels.push({date:m[1],service:m[2],postal:m[3],zone:m[4],tracking:m[5],weight:m[6],amount:amount(m[7])});}
 return {fileName:file.name,driverName,driverCode:code,week,from,to,totalInvoice,dayRows,parcels};
}
