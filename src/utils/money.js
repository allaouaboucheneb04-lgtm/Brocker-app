export const money=n=>(Number(n||0)).toLocaleString('fr-CA',{minimumFractionDigits:2,maximumFractionDigits:2})+' $';
export const num=s=>Number(String(s||'0').replace(/[^0-9.-]/g,''))||0;
export const safeFile=s=>String(s||'fichier').replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim();
