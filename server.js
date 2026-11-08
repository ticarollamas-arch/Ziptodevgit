const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'public');
const routes = {
  '/': 'index.html', '/apresentacao': 'pages/apresentacao.html', '/venda': 'pages/venda.html',
  '/login': 'pages/login.html', '/admin/login': 'pages/admin-login.html', '/admin': 'pages/admin.html',
  '/painel': 'pages/painel.html', '/painel/carreira': 'pages/carreira.html',
  '/painel/github': 'pages/github.html', '/painel/engenharia': 'pages/engenharia.html',
  '/painel/hackmind': 'pages/hackmind.html'
};
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json'};
http.createServer((req,res)=>{
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/api/health') { res.writeHead(200,{'content-type':'application/json'}); return res.end(JSON.stringify({ok:true,app:'ForgeLab Studio',mode:'portal-shell',authConfigured:false,integrations:'source-included-require-separate-runtime-configuration'})); }
  let file = routes[url.pathname];
  if (!file && url.pathname.startsWith('/assets/')) file = url.pathname.slice(1);
  if (!file) { res.writeHead(404,{'content-type':'text/plain; charset=utf-8'}); return res.end('Página não encontrada'); }
  const full = path.resolve(root,file);
  if (!full.startsWith(root + path.sep) && full !== path.join(root,'index.html')) {res.writeHead(403);return res.end('Forbidden');}
  fs.readFile(full,(err,data)=>{if(err){res.writeHead(404);return res.end('Arquivo não encontrado');} res.writeHead(200,{'content-type':types[path.extname(full)]||'application/octet-stream','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'});res.end(data);});
}).listen(process.env.PORT||4173,()=>console.log(`ForgeLab Studio: http://localhost:${process.env.PORT||4173}`));
