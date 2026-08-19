const $=s=>document.querySelector(s);const loginModal=$('#loginModal');const dashboardModal=$('#dashboardModal');
function show(el){el.classList.remove('hidden')}function hide(el){el.classList.add('hidden')}
$('#loginBtn').onclick=()=>show(loginModal);$('#openBtn').onclick=()=>show(loginModal);$('#demoBtn').onclick=()=>show(dashboardModal);$('#dashboardBtn').onclick=()=>show(dashboardModal);
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>hide(b.closest('.modal')));
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)hide(m)}));
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();hide(loginModal);show(dashboardModal)});
