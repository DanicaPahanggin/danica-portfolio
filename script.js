
const P=[
{slug:'smart-screen',n:'01',cat:'Web + Mobile System',title:'Smart Screen System',sub:'Real-Time Bus Information System',
 desc:'A transportation information system designed to provide commuters with real-time bus arrival, departure, and route information.',
 roles:['Project Manager','Research','Documentation','UI/UX','QA / Testing','Presentation / Pitching'],tags:[],
 url:'https://smartscreensystem.online/',
 problem:'Commuters face uncertainty and long waiting times because real-time bus information is hard to access.',
 features:['Commuter web interface','Admin web interface','Bus attendant mobile application','GPS-based bus tracking','Route and schedule information','Real-time bus information']},
{slug:'lunasync',n:'02',cat:'Mobile Application',title:'LunaSync',sub:'Apartment management application',
 desc:'An apartment management application for tenants, rooms, payments, and announcements.',
 roles:['Project Manager','QA / Testing','UI Designer','Documentation'],tags:['Android Studio'],
 url:'https://dharzshiro.github.io/LunaSync',urlLabel:'Download LunaSync app',
 features:['Tenant management','Room management','Room availability','Payment notifications','Announcements','Problem reporting','Garbage collection scheduling'],
 tech:['Android Studio']},
{slug:'cakeland',n:'03',cat:'UI/UX Design',title:'CakeLand Express',sub:'Collaborative UI/UX project',
 desc:'My first-year project. A collaborative design project, focused on visual design, interface, and user experience.',
 roles:['UI/UX Designer'],tags:['Figma'],tech:['Figma'],
 focus:['Visual design','User interface','User experience','Design decisions','Prototype screens']},
{slug:'museum-attendance',n:'04',cat:'QA / Testing',title:'Museum Attendance Monitoring System',sub:'Bukidnon Studies Center · Bukidnon State University',
 desc:'An academic attendance monitoring project, where my contribution centered on testing.',contribution:'My contribution focused on QA and testing, including test-case organization, test execution documentation, defect identification, and exploratory testing.',testCases:'assets/Museum-Attendance-Test-Cases-Portfolio.xlsx',
 roles:['QA / Testing Lead','Test-case organization'],tags:[]},
{slug:'tesda',n:'05',cat:'Web Project',title:'TESDA Training Center Web Project',sub:'Academic web project',
 desc:'An academic, web-based project for a training center.',roles:['Assessing the entire workflow of the project. Presented as a project manager for the project.'],tags:[]}
];
function dl(){const link=document.createElement('a');link.href='assets/Danica-Pahanggin-Resume.pdf';link.download='Danica-Pahanggin-Resume.pdf';link.click()}
document.querySelectorAll('[data-resume]').forEach(b=>b.addEventListener('click',dl));
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const IMG={'smart-screen':{m:'cover',u:'assets/project-covers/smart-screen.webp'},'lunasync':{m:'logo',u:'assets/project-covers/lunasync.webp'},'tesda':{m:'logo',u:'assets/project-covers/tesda.webp'},'museum-attendance':{m:'cover',u:'assets/project-covers/museum-attendance.webp'},'cakeland':{m:'cover',u:'assets/project-covers/cakeland.webp'}};
const SHOTS={
 'smart-screen':[['home.png','Homepage'],['adminlogin.png','Admin login'],['gps.png','GPS showcase'],['ETA.png','ETA'],['commuter.png','Commuter dashboard'],['BusAttendant.png','Bus Attendant Downloadable App']],
 'lunasync':[['login.png','Login'],['addTenant.png','Admin Side'],['dashboard.png','Admin Dashboard'],['roomNav.png','Add Room'],['tenant.png','Tenant Side'],['tenantPorf.png','Tenant Profile']],
 'museum-attendance':[['login.png','Login'],['dashboard.png','Dashboard'],['attendanceLog.png','Attendance Log'],['calendarAPI.png','Calendar API']],
 'cakeland':[['login.png','Login'],['dashboard.png','Dashboard'],['profile.png','Profile'],['Screenshot 2026-09-30 131212.png','Check Out'],['searches.png','Searches']],
 'tesda':[['adminlogin.png','Admin Login'],['dashboard.png','Dashboard'],['LandingPage.png','Landing Page'],['register.png','Register'],['TraineeLogin.png','Trainee Login'],['registerTrainee.png','Register Trainee'],['traineeDashboard.png','Trainee Dashboard']]
};
const ph=p=>{const i=IMG[p.slug];return `<div class="imgw"><div class="ph pj ${i.m}" role="img" aria-label="${esc(p.title)} project cover" style="--img:url(${i.u})">${i.m==='logo'?`<img src="${i.u}" alt="">`:''}<div class="cap"><b>${esc(p.title)}</b><span class="mono">${esc(p.cat)}</span></div></div></div>`};
const samples=p=>`<div class="sec"><h2 class="mono">Samples</h2><div class="samples-grid">${(SHOTS[p.slug]||[]).map(([file,label])=>`<figure class="sample-shot"><img src="assets/projects/${p.slug}/${encodeURIComponent(file)}" alt="${esc(p.title)} - ${esc(label)}" loading="lazy"><figcaption>${esc(label)}</figcaption></figure>`).join('')}</div></div>`;
const tg=p=>p.tags.length?`<ul class="tags">${p.tags.slice(0,4).map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:'';
const card=(p,f)=>`<a class="card ${f?'feat':''}" href="#/projects/${p.slug}">${ph(p)}<div class="b"><span class="mono">${p.n} · ${esc(p.cat)}</span><h3>${esc(p.title)}</h3>${f?`<p class="mono" style="margin:0 0 12px">${esc(p.sub)}</p>`:''}<p>${esc(p.desc)}</p><p class="mono" style="margin-bottom:14px">Role: ${esc(p.roles.slice(0,f?6:3).join(' · '))}</p>${tg(p)}<span class="arr mono">View →</span></div></a>`;
$('#feat').innerHTML=card(P[0],1);
$('#sel').innerHTML=card(P[1])+card(P[2]);
$('#oth').innerHTML=card(P[3])+card(P[4]);

const sec=(t,h)=>h?`<div class="sec"><h2 class="mono">${t}</h2><div>${h}</div></div>`:'';
const ul=a=>a&&a.length?`<ul class="f">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';
let workScrollY=0;
function render(slug){
 const p=P.find(x=>x.slug===slug);
 if(!p){show(false);return}
 $('#csb').innerHTML=`<a class="back mono" href="#/">← Back to work</a>
 <div style="padding:32px 0 48px"><p class="mono">${p.n} · ${esc(p.cat)}</p><h1>${esc(p.title)}</h1><p style="color:var(--mu);font-size:20px;max-width:640px">${esc(p.sub)}</p>
 ${p.url?`<p><a class="btn p" href="${p.url}" target="_blank" rel="noopener">${esc(p.urlLabel||'Visit live website')} ↗</a></p>`:''}</div>
 ${ph(p)}
 ${sec('Overview',`<p>${esc(p.desc)}</p>`)}
 ${sec('Problem',p.problem?`<p>${esc(p.problem)}</p>`:'')}
 ${sec('My role',ul(p.roles))}
 ${p.contribution?sec('My contribution',`<p>${esc(p.contribution)}</p><p><a class="btn p" href="${p.testCases}" download>DOWNLOAD TEST CASES ↗</a></p>`):''}
 ${sec('Features',ul(p.features))}
 ${sec('Design focus',ul(p.focus))}
 ${sec('Technologies',ul(p.tech))}
 ${sec('Note',p.note?`<p>${esc(p.note)}</p>`:'')}
 ${samples(p)}`;
 show(true);window.scrollTo(0,0);document.title=p.title+' — Danica M. Pahanggin';
}
function show(c){$('#home').hidden=c;$('#case').hidden=!c;if(!c)document.title='Danica M. Pahanggin — BSIT Portfolio'}
function route(){
 const h=location.hash;const m=h.match(/^#\/projects\/([\w-]+)/);
 if(m){workScrollY=window.scrollY;render(m[1]);return}
 show(false);
 const t=h.replace(/^#\/?/,'');
 if(t&&document.getElementById(t==='work'?'work':t))document.getElementById(t==='work'?'work':t).scrollIntoView();
 else if(h==='#/'||!h)window.scrollTo(0,workScrollY);
}
addEventListener('hashchange',route);route();
try{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));}catch(e){document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'))}
