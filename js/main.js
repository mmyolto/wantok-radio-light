document.querySelectorAll('[data-logo]').forEach(i => i.src = document.querySelector('.brand .logo').src);
// Firebase config (Firebase console > Project settings > Your apps)
const WRL_FIREBASE = {
  apiKey: "AIzaSyBuNp4RqyJlhmcH5jpGhWRDLJEEgErCl6Y",
  authDomain: "wantok-radio-light-81519.firebaseapp.com",
  projectId: "wantok-radio-light-81519",
  storageBucket: "wantok-radio-light-81519.firebasestorage.app",
  messagingSenderId: "953977170930",
  appId: "1:953977170930:web:2ba5970733622a49b9996b"
};
const FIREBASE_READY = !String(WRL_FIREBASE.apiKey).startsWith('PASTE');

// Contact details
const ICON = {
  pin:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mobile:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>',
  mail:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  fax:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9V3h12v6M6 17H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 14h12v7H6z"/></svg>',
  fb:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M15 8h-1.5A2.5 2.5 0 0 0 11 10.5V21M8.5 13H15"/></svg>',
  play:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  pause:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  vol:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mute:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 6 6M22 9l-6 6"/></svg>'
};
const CONTACT = [
  {i:'pin',   k:'Visit',  v:'Sivari Road, Gerehu Stage 2<br>Port Moresby, NCD'},
  {i:'phone', k:'Call',   v:'<a href="tel:+6753260946">(675) 326 0946</a> · <a href="tel:+6753262933">(675) 326 2933</a>'},
  {i:'mobile',k:'Studio mobile (Digicel)', v:'<a href="tel:+67573560346">(675) 7356 0346</a>', full:true},
  {i:'mail',  k:'Email',  v:'<a href="mailto:wantok@wantokradio.org">wantok@wantokradio.org</a>', full:true},
  {i:'fax',   k:'Fax',    v:'(675) 326 1104', full:true},
  // Facebook page address
  {i:'fb',    k:'Follow', v:'<a href="https://www.facebook.com/ChristianNet" target="_blank" rel="noopener">PNG Christian Broadcasting Network on Facebook</a>'}
];
document.querySelectorAll('[data-clist]').forEach(ul => {
  const full = ul.hasAttribute('data-full');
  ul.innerHTML = CONTACT.filter(c => full || !c.full)
    .map(c => `<li><span class="ic">${ICON[c.i]}</span><div><small>${c.k}</small>${c.v}</div></li>`).join('');
});

// Programs
const JACK_IMG = 'images/program-night-light.webp';   // Ps. Jack Kipoi (also saved as images/jack-kipoi.jpg)
// Program illustrations
const MORNING_IMG = 'images/program-morning-light.webp';
const CHAPEL_IMG = 'images/program-chapel.webp';
const WORLD_IMG = 'images/program-world.webp';
const LOCAL = [
  ['Sunday Service','Rev. Anthony Dalaka · AOG Cornerstone Gateway Church','Powerful live preaching from the church.',['Sun 11:00am – 12:30pm'],'cgc-644x510.png','l'],
  ['Sunday Evening Service','Ps. Dr. Dian Warep · RMCN City of Glory Church, Vadavada','Live preaching service.',['Sun 7:00pm – 8:30pm'],'cityofglorychurchrmcnpng-696x696.jpeg','l'],
  ['Praying for the Nation','','A very popular program praying for our nation, our leaders and community needs.',['Mon–Fri 7:30am','30 min'],'thauna-bada-884x527.jpg','c'],
  ['Belo-Taim Devotion','Evangelical Brotherhood Church Pastors','One of our longest-running programs — a midday devotion.',['Mon–Fri 11:30am','15 min'],'ebcad-696x553.jpg','l'],
  ['NBC News Relay','National Broadcasting Corporation','National and international news bulletins.',['Mon–Fri 6am · 7am · 12pm · 6pm · 7pm'],'wewak-sep162019-884x372.jpeg','c'],
  ['Story Bilong Mi','Sarah Kiap','Personal testimonies of Christians who have seen the hand of God.',[],'sarah-686x750.jpeg','c'],
  ['Krai Bilong ol Meri','','A dramatised program addressing the crises women face, including domestic violence.',['Mon · Wed · Fri','15 min'],'kbm-560x484.jpg','l'],
  ['Kirapim Gutpela Sindaun','Nazarene Radio Ministry, Kudjip','An encouraging program in Tok Pisin.',['Tue · Thu','15 min'],'kgs-2-560x484.jpg','l'],
  ['Health Nuggets','With volunteer doctors','Practical health topics for families and communities.',['Wed 9:30am'],'pslapa-2-884x417.jpeg','c'],
  ['Choice Bilong Listener','','Listener song requests — by letter only.',['Thu 5:00pm – 6:00pm'],'radio2-1-884x644.jpeg','c'],
  ['Hope Behind Bars','Ps. Simon Kuman · Prison Ministry','A prison ministry program bringing the hope of the gospel to those behind bars.',['Thu 9:00am – 10:00am','Sat 9:00am – 10:00am']],
  ['Morning Light Devotion','Ps. John Wak · PNG Bible Church, Gerehu','A morning devotion to start your day in God\'s Word.',['5:00am – 5:30am'],MORNING_IMG,'c'],
  ['Night Light Devotion','Ps. Jack Kipoi · Wantok Radio Light Chaplain','An evening devotion to close your day with God.',['8:30pm – 9:00pm'],JACK_IMG,'c'],
  ['Chapel in the Air','Prayer for our listeners on air','Our team lifts up the needs and prayer requests of our listeners, live on air.',['7:30pm – 8:30pm'],CHAPEL_IMG,'c'],
  ['Prayer for International Brothers and Sisters','','Praying for believers and the persecuted church around the world.',['9:00pm – 9:10pm'],WORLD_IMG,'c'],
];
const INTL = [
  ['Focus on the Family','focusonthefamily.com','A program centred on the family and its matters.',['Daily 6:00am','Daily 8:00pm','30 min'],'https://www.focusonthefamily.com/wp-content/uploads/2024/04/Focus-on-the-Family-Logo.png','l'],
  ['Back to the Bible','backtothebible.org','Very solid Bible preaching.',['Mon–Fri 2am · 8am · 6:30pm','30 min'],'https://static.wixstatic.com/media/65eecc_7c8271792ad940f495475a60fa895fc8~mv2.png','d'],
  ['Leading the Way','Dr. Michael Youssef · au.ltw.org','Preaching from an evangelical minister and worldwide Bible teacher.',['Mon 5:30pm','Sun 9:30pm','30 min'],'https://au.ltw.org/wp-content/themes/launchframe/resources/images/logo.svg','d'],
  ['15 Minutes in the Word','Joyce Meyer · joycemeyer.org','Practical, everyday Bible teaching from Joyce Meyer.',['10:00am','15 min'],'https://joycemeyer.org/-/media/JoyceMeyer/POC/jmm-logo-2023.png','d'],
  ['Heritage & Hope','Rev. James Plank','Weekend Bible teaching.',['Sat · Sun'],'d0k055ew0amnjmk-676x467.jpg','l'],
  ['Unshackled','unshackled.org','Dramatised life stories of men and women who became Christians out of terrible lifestyles.',['Wed 5:30pm','Sat 10pm','Sun 4:00pm'],'https://unshackled.org/wp-content/uploads/2023/12/logo.png','l'],
  ['Redeeming the Time','lifechangingseminars.com','Stories and scripture on being a good steward of your time.',['Mon–Fri 9am · 5:15pm · 10:45pm','2–3 min'],'redeemingthetime-696x711.png','l'],
  ['Reach Beyond','HCJB Global','Stories with spiritual applications that encourage the listener.',['Mon–Fri 5:30pm','2 min'],'reachbeyond-1-696x696.png','l'],
  ['Keys for Kids','keysforkids.org','A short story, a song and a Bible lesson children can remember easily.',['Mon–Fri 3:15pm','3–5 min'],'keysforkids-360x360.png','l'],
  ['Women of Hope','twrwomenofhope.org','A program made especially for women, on a variety of topics.',['Sat 3:00pm','30 min'],'https://twrwomenofhope.org/WOH/footer-logo.png','l'],
  ['Champions Arise','championsarise.org','Encouraging men to be the men God called them to be and to run the race of life well.',['Sat 9:30pm','15 min'],'https://championsarise.org/images/logo-760x192.png','l'],
  ['Guidelines for Living','Dr. Harold Sala','A short inspirational thought.',['Daily','5 min'],'https://www.guidelines.org/wp-content/uploads/2025/07/Logo_white-720x123.webp','d'],
  ['Heralds of Hope','heraldsofhope.org','Bible teaching that makes disciples of Jesus Christ, shared with listeners around the world.',['Sun 8:00am – 9:00am'],'https://heraldsofhope.org/wp-content/uploads/Heralds-of-Hope-logo-christian-audio.webp','l'],
  ['Resounding Liberty Radio Hour','','A weekly hour of Christian radio programming.',['Sat 1:00pm – 2:00pm']],
  ['Adventures in Odyssey','Focus on the Family · whitsend.org',"Dramatised audio adventures for the whole family, teaching biblical values through the stories of Whit's End.",['Mon–Fri 2:30pm – 3:00pm'],'https://www.adventuresinodyssey.com/wp-content/uploads/AIO_Logo_Red.png','l'],
  ['Your Story Hour','yourstoryhour.org','Dramatised Bible and character-building stories for children and families.',['Mon–Fri 3:00pm – 4:00pm'],'https://www.yourstoryhour.org/img/logo-red.svg','l'],
  ['FamilyLife Today','Dave & Ann Wilson · familylife.com','Practical, biblical help for marriages and families.',['Mon–Fri 2:00pm – 2:30pm'],'https://www.familylife.com/wp-content/uploads/sites/1001/2024/08/FamilyLifeToday_White.png?w=800','d'],
];
const NIGHT = [
  ['12:00am','Bible verses with songs and inspirational content'],
  ['12:30am','Focus on the Family'],
  ['4:00am','Back to the Bible'],
  ['5:00am','Morning Light Devotion with Ps. John Wak'],
  ['6:00am','Live announcer comes on air'],
  ['6:02am','NBC News Relay — Tok Pisin'],
  ['6:30am','Focus on the Family'],
  ['7:00am','NBC News Relay — English']
];
const IMGS = 'https://wantokradio.org/assets/images/';
const progCard = ([t,w,d,when,img,mode]) => `<div class="card prog reveal">${!img?`<div class="pimg dark ptitle"><span>${t}</span></div>`:''}${img?`<div class="pimg ${mode==='c'?'photo':mode==='d'?'logo dark':'logo'}"><img src="${/^(https?|data):|^images\//.test(img)?img:IMGS+img}" referrerpolicy="no-referrer" alt="${t}" loading="lazy"></div>`:''}<h3>${t}</h3>${w?`<div class="who">${w}</div>`:''}<p>${d}</p><div class="when">${when.map(x=>`<span class="pill">${x}</span>`).join('')}</div></div>`;
document.querySelector('[data-panel="local"]').innerHTML = LOCAL.map(progCard).join('');
document.querySelector('[data-panel="intl"]').innerHTML = INTL.map(progCard).join('');
document.getElementById('nightSched').innerHTML = NIGHT.map(([t,d]) => `<div><b>${t}</b><span>${d}</span></div>`).join('');
document.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('[data-tab]').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('[data-panel]').forEach(p => p.hidden = p.dataset.panel !== b.dataset.tab);
}));

// Router
const TITLES = {home:'Your Inspiration Station',pledge:'Make a Pledge',support:'Support',ondemand:'On Demand',about:'About Us',history:'Gallery & History',programs:'Programs',partners:'Partners',projects:'Projects',coverage:'Coverage',news:'News',contact:'Contact'};
const header = document.querySelector('header');
function route(){
  const parts = location.hash.replace(/^#\/?/,'').split('/');
  let page = parts[0] || 'home';
  if (!TITLES[page]) page = 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.dataset.page === page));
  const NAVOF = {history:'about', partners:'programs', coverage:'projects', pledge:'support'};
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === (NAVOF[page] || page)));
  document.title = page === 'home' ? 'Wantok Radio Light — Your Inspiration Station' : `${TITLES[page]} — Wantok Radio Light`;
  header.classList.remove('open');
  if (page === 'ondemand') setTimeout(loadOnDemand, 0);
  if (window.__odMiniSync) window.__odMiniSync();
  if (page === 'news') setTimeout(loadFacebook, 0);
  if (!/^#\/news\/./.test(location.hash) && document.getElementById('reader')?.classList.contains('open')) closeStory();
  const target = parts[1] && document.getElementById(parts[1]);
  if (target) setTimeout(() => target.scrollIntoView({behavior:'smooth'}), 30);
  else window.scrollTo({top:0, behavior:'instant'});
}
window.addEventListener('hashchange', route);

// Pledge form: load on first visit, keep it light-themed and sized to its content
const pf = document.getElementById('pledgeFrame');
function loadPledge(){
  if (pf.dataset.loaded) return;
  pf.dataset.loaded = '1';
  pf.src = 'pledge-form.html?v=202610021615';
}
pf.addEventListener('load', () => {
  try{
    const d = pf.contentDocument;
    d.documentElement.setAttribute('data-theme','light');
    const fit = () => { pf.style.minHeight = '0'; pf.style.height = (d.documentElement.scrollHeight + 4) + 'px'; };
    fit(); new ResizeObserver(fit).observe(d.body);
  }catch(e){ /* different origin (e.g. opened from disk) - fixed height is used */ }
});
window.addEventListener('hashchange', () => { if (location.hash.startsWith('#/pledge')) loadPledge(); });
if (location.hash.startsWith('#/pledge')) loadPledge();
route();

document.getElementById('yr').textContent = new Date().getFullYear();
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
const burger = document.getElementById('burger');
burger.addEventListener('click', () => burger.setAttribute('aria-expanded', header.classList.toggle('open')));

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Horizontal timeline: hover or tap a year
const hy=[...document.querySelectorAll('.htl-y')], hc=[...document.querySelectorAll('.htl-card')];
function showYear(i){
  hy.forEach(b=>{const on=b.dataset.i==i;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});
  hc.forEach(c=>c.hidden=c.dataset.i!=i);
}
hy.forEach(b=>{
  b.addEventListener('click',()=>showYear(b.dataset.i));
  b.addEventListener('focus',()=>showYear(b.dataset.i));
  if (matchMedia('(hover:hover)').matches) b.addEventListener('mouseenter',()=>showYear(b.dataset.i));
});
document.querySelector('.htl-track').addEventListener('keydown',e=>{
  const cur=hy.findIndex(b=>b.classList.contains('on'));
  if(e.key==='ArrowRight'&&cur<hy.length-1){hy[cur+1].focus();e.preventDefault();}
  if(e.key==='ArrowLeft'&&cur>0){hy[cur-1].focus();e.preventDefault();}
});

// Network map: respect reduced motion
if (matchMedia('(prefers-reduced-motion: reduce)').matches) document.querySelectorAll('.netmap').forEach(m=>m.pauseAnimations && m.pauseAnimations());


// News feed
const NEWS_CATS = ["Testimonies", "Church News", "Israel News", "Awareness"];
const NEWS_STARTERS = [{"id":"shareathon-2026","title":"Share-a-thon 2026: help us reach the unreached","category":"Church News","date":"2026-10-01","author":"Wantok Radio Light","featured":true,"published":true,"summary":"Our yearly Share-a-thon fundraising drive is here. Every pledge helps keep the gospel on air across Papua New Guinea.","body":"Share-a-thon is Wantok Radio Light's yearly fundraising drive, and it is how this ministry stays on air.\n\nYour giving keeps our studio in Gerehu running, carries our signal by satellite to our FM sites around the nation, and helps us build for the future, including the new Wantok Radio Light Studio Building.\n\nYou can make your Share-a-thon 2026 pledge online using our Shareathon Pledge Form. You will receive a pledge number and a receipt straight away. You can also call the office on (675) 326 0946 or visit us at Gerehu Stage 2, Sivari Road.\n\nThank you for your continued support. We are still on air today as a testimony of your giving.","linkText":"Make a pledge","linkUrl":"#/pledge"},{"id":"new-fm-site-nuku","title":"New FM site: Wantok Radio Light now on air in Nuku","category":"Church News","date":"2026-09-30","author":"Wantok Radio Light","featured":false,"published":true,"summary":"Listeners in Nuku, Sandaun Province, can now tune in to Wantok Radio Light on FM.","body":"Wantok Radio Light is now broadcasting on FM in Nuku, Sandaun Province.\n\nNuku joins our growing network of FM sites across Papua New Guinea. Our signal starts at the studio in Gerehu and reaches each site via satellite, bringing Christian programming, prayer and teaching to communities right where they are.\n\nWe thank God, and every partner and Share-a-thon giver who made this possible.","linkText":"See our coverage map","linkUrl":"#/coverage"},{"id":"prison-ministry-14-graduates","title":"14 graduates as Wantok Radio Light works with the prison","category":"Testimonies","date":"2026-09-29","author":"Wantok Radio Light","featured":false,"published":true,"summary":"Our work with the prison has celebrated 14 graduates.","body":"Wantok Radio Light has been working with the prison, and we are celebrating 14 graduates.\n\nOur prison ministry program, Hope Behind Bars with Ps. Simon Kuman, airs on Thursdays and Saturdays from 9:00 to 10:00am, bringing the hope of the gospel to those behind bars.\n\nPlease keep the graduates, their families and our prison ministry team in your prayers.","linkText":"","linkUrl":""}];
const NEWS_FB = WRL_FIREBASE;
let newsStories = NEWS_STARTERS.slice(), newsCat = 'All', newsDb = null, newsFs = null;
const nEsc = t => String(t ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const nDate = d => { if(!d) return ''; const x = new Date(d + 'T00:00:00'); return isNaN(x) ? d : x.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}); };
const nImg = s => `<div class="nimg" data-cat="${nEsc(s.category)}">${s.thumb ? `<img src="${s.thumb}" alt="" loading="lazy">` : `<span class="nart">${nEsc(s.category || 'News')}</span>`}</div>`;
function sortedNews(){ return newsStories.filter(s => s.published !== false).sort((a,b) => (b.date||'').localeCompare(a.date||'')); }
function renderNews(){
  const all = sortedNews();
  renderNewsTabs();
  const feat = all.find(s => s.featured) || all[0];
  const fEl = document.getElementById('newsFeatured');
  if (feat && newsCat === 'All') {
    fEl.innerHTML = `<button class="nfeat" data-story="${nEsc(feat.id)}">${nImg(feat)}<div class="ntxt"><span class="flag">Main feature</span><div class="nmeta"><span class="ncat">${nEsc(feat.category)}</span><span>${nDate(feat.date)}</span></div><h3>${nEsc(feat.title)}</h3><p>${nEsc(feat.summary)}</p><span class="readmore">Read the full story →</span></div></button>`;
  } else fEl.innerHTML = '';
  const list = all.filter(s => newsCat === 'All' ? s !== feat : s.category === newsCat);
  document.getElementById('newsGrid').innerHTML = list.map(s => `<button class="ncard" data-story="${nEsc(s.id)}">${nImg(s)}<div class="ntxt"><div class="nmeta"><span class="ncat">${nEsc(s.category)}</span><span>${nDate(s.date)}</span></div><h3>${nEsc(s.title)}</h3><p>${nEsc(s.summary)}</p></div></button>`).join('');
  document.getElementById('newsEmpty').hidden = list.length > 0 || (newsCat === 'All' && !!feat);
  document.querySelectorAll('[data-story]').forEach(b => b.onclick = () => openStory(b.dataset.story));
}
const CAT_ICON = (d) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const CAT_META = {
  'All':          ['Every story', CAT_ICON('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>')],
  'Testimonies':  ['Lives changed by God', CAT_ICON('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6M9 10h6"/>')],
  'Church News':  ['From churches across PNG', CAT_ICON('<path d="M12 2v5M10 4h4"/><path d="M5 21V11l7-4 7 4v10"/><path d="M10 21v-5h4v5"/>')],
  'Israel News':  ['Israel News Service', CAT_ICON('<path d="M12 3l3 5.2h6L18 13.4l3 5.2h-6L12 24l-3-5.4H3l3-5.2-3-5.2h6z" transform="scale(.9) translate(1.3 -1)"/>')],
  'Awareness':    ['Health, safety and community', CAT_ICON('<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>')],
};
function renderNewsTabs(){
  const all = sortedNews();
  document.getElementById('newsTabs').innerHTML = ['All', ...NEWS_CATS].map(c => {
    const n = c === 'All' ? all.length : all.filter(s => s.category === c).length, [sub, icon] = CAT_META[c] || ['', ''];
    return `<button class="ctab${c === newsCat ? ' on' : ''}" data-ncat="${c}" role="tab" aria-selected="${c === newsCat}"><span class="pi">${icon}</span><span class="ct"><b>${c}</b><small>${sub}</small></span><span class="cn">${n}</span></button>`;
  }).join('');
  document.getElementById('newsHeading').textContent = newsCat === 'All' ? 'Latest stories' : newsCat;
}
document.getElementById('newsTabs').addEventListener('click', e => {
  const b = e.target.closest('[data-ncat]'); if (!b) return;
  newsCat = b.dataset.ncat; renderNews();
});
renderNews();

async function connectNews(){
  if (newsDb || !FIREBASE_READY) return;
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js');
    newsFs = await import('https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js');
    newsDb = newsFs.getFirestore(initializeApp(NEWS_FB, 'news'));
    const snap = await newsFs.getDocs(newsFs.query(newsFs.collection(newsDb, 'news'), newsFs.where('published', '==', true)));
    if (!snap.empty) { newsStories = snap.docs.map(d => ({ id: d.id, ...d.data() })); renderNews(); }
  } catch (e) { /* offline or not set up yet: keep starter stories */ }
}
window.addEventListener('hashchange', () => { const m = location.hash.match(/^#\/news\/(.+)$/); if (m) openStory(decodeURIComponent(m[1])); });
connectNews().then(() => { const m = location.hash.match(/^#\/news\/(.+)$/); if (m) openStory(decodeURIComponent(m[1])); });

const reader = document.getElementById('reader');
async function openStory(id){
  const s = newsStories.find(x => x.id === id); if (!s) return;
  const img = document.getElementById('rdImg');
  img.className = 'rd-img nimg' + (s.thumb ? '' : ' none'); img.dataset.cat = s.category || '';
  img.innerHTML = s.thumb ? `<img src="${s.thumb}" alt="">` : '';
  document.getElementById('rdCat').textContent = s.category || '';
  document.getElementById('rdDate').textContent = nDate(s.date);
  document.getElementById('rdAuthor').textContent = s.author ? 'By ' + s.author : '';
  document.getElementById('rdTitle').textContent = s.title;
  document.getElementById('rdText').innerHTML = String(s.body || '').split(/\n\s*\n/).map(p => `<p>${nEsc(p).replace(/\n/g,'<br>')}</p>`).join('');
  document.getElementById('rdLink').innerHTML = s.linkText && s.linkUrl ? `<a class="btn btn-gold" href="${nEsc(s.linkUrl)}" ${/^https?:/.test(s.linkUrl)?'target="_blank" rel="noopener"':''}>${nEsc(s.linkText)} →</a>` : '';
  document.getElementById('rdLink').querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', closeStory));
  reader.classList.add('open'); reader.scrollTop = 0; document.body.style.overflow = 'hidden';
  history.replaceState(null, '', '#/news/' + encodeURIComponent(id));
  if (s.hasImage && newsDb) {
    try { const d = await newsFs.getDoc(newsFs.doc(newsDb, 'newsImages', id)); if (d.exists() && reader.classList.contains('open')) img.querySelector('img').src = d.data().data; } catch (e) {}
  }
}
function closeStory(){ reader.classList.remove('open'); document.body.style.overflow = ''; if (location.hash.startsWith('#/news/')) history.replaceState(null, '', '#/news'); }
document.getElementById('rdClose').onclick = closeStory;
reader.addEventListener('click', e => { if (e.target === reader) closeStory(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && reader.classList.contains('open')) closeStory(); });
document.getElementById('rdShare').onclick = async e => {
  try { await navigator.clipboard.writeText(location.href); e.target.textContent = 'Link copied ✓'; } catch (err) { e.target.textContent = location.href; }
  setTimeout(() => e.target.textContent = 'Copy link to this story', 2500);
};


// Site database
let _siteDB = null;
async function siteDB(){
  if (_siteDB) return _siteDB;
  if (!FIREBASE_READY) throw new Error('Firebase not set up yet');
  const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js');
  const fs = await import('https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js');
  _siteDB = { fs, db: fs.getFirestore(initializeApp(NEWS_FB, 'site')) };
  return _siteDB;
}

// Contact form: "Enquire now" cards pre-select the topic
document.querySelectorAll('[data-topic]').forEach(a => a.addEventListener('click', () => {
  setTimeout(() => {
    const sel = document.querySelector('#msgForm select[name="topic"]'); if (sel) sel.value = a.dataset.topic;
    document.getElementById('msgForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}));

// TokSave & prayer request pop-up
const rq = document.getElementById('rq'), rqForm = document.getElementById('rqForm');
let rqType = 'prayer';
const RQ = {
  toksave: { eyebrow: 'TokSave', title: 'Send a TokSave', intro: 'Free community announcements for churches and communities, read on air by our announcers.', label: 'Your announcement', done: 'Our announcers will schedule your TokSave.' },
  ondemand:{ eyebrow: 'On demand request', title: 'Request a program', intro: 'Tell us which international program and episode you would like to hear again.', label: 'Which episode? (the day it aired, or the topic)', done: 'We will look for this episode. If we can add it, it will be on the On Demand page for two weeks and we will let you know.' },
  prayer:  { eyebrow: 'Prayer request', title: 'Send a prayer request', intro: 'Share your need with us. Our pastors and team pray over every request we receive.', label: 'Your prayer request', done: 'Our pastors and team will be praying with you.' }
};
function openRequest(type){
  rqType = type; const t = RQ[type];
  rqForm.reset(); document.getElementById('rqDone').hidden = true; document.getElementById('rqErr').hidden = true;
  document.getElementById('rqSend').hidden = false; document.getElementById('rqSend').disabled = false;
  document.getElementById('rqEyebrow').textContent = t.eyebrow; document.getElementById('rqTitle').textContent = t.title;
  document.getElementById('rqIntro').textContent = t.intro; document.getElementById('rqMsgLabel').textContent = t.label;
  rqForm.querySelectorAll('.rq-toksave').forEach(e => e.hidden = type !== 'toksave');
  rqForm.querySelectorAll('.rq-prayer').forEach(e => e.hidden = type !== 'prayer');
  rqForm.querySelectorAll('.rq-ondemand').forEach(e => e.hidden = type !== 'ondemand');
  rq.classList.add('open'); document.body.style.overflow = 'hidden';
  setTimeout(() => rqForm.querySelector('input[name="name"]').focus(), 50);
}
function closeRequest(){ rq.classList.remove('open'); document.body.style.overflow = ''; }
document.querySelectorAll('[data-request]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openRequest(b.dataset.request); }));
document.getElementById('rqClose').onclick = closeRequest;
rq.addEventListener('click', e => { if (e.target === rq) closeRequest(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && rq.classList.contains('open')) closeRequest(); });
rqForm.addEventListener('submit', async e => {
  e.preventDefault();
  const f = new FormData(rqForm), btn = document.getElementById('rqSend');
  const err = document.getElementById('rqErr'); err.hidden = true;
  const phone = (f.get('phone') || '').replace(/[^\d ]/g, '').trim(), email = (f.get('email') || '').trim(), cc = f.get('cc') || '+675';
  const location = rqType === 'prayer' ? (f.get('location') || '').trim() : '';
  const bad = m => { err.textContent = m; err.hidden = false; };
  if (!f.get('name').trim()) return bad('Please enter your name.');
  if (rqType === 'prayer' && !location) return bad('Please tell us your location (town or village and province).');
  if (!phone && !email) return bad('Please give us a phone number or an email so we can reach you.');
  if (phone && phone.replace(/ /g, '').length < 6) return bad('Please check your phone number.');
  if (!f.get('message').trim()) return bad(rqType === 'prayer' ? 'Please write your prayer request.' : rqType === 'ondemand' ? 'Please tell us which episode you would like.' : 'Please write your announcement.');
  const contact = [phone ? `${cc} ${phone.replace(/^0+/, '')}` : '', email].filter(Boolean).join(' · ');
  const data = { type: rqType, name: f.get('name').trim(), contact, phone: phone ? `${cc} ${phone.replace(/^0+/, '')}` : '', countryCode: cc, email, location, message: f.get('message').trim(),
    org: (f.get('org') || '').trim(), program: rqType === 'ondemand' ? (f.get('program') || '') : '', dates: (f.get('dates') || '').trim(), onAir: f.get('onair') === 'on', status: 'new' };
  btn.disabled = true; btn.textContent = 'Sending…';
  try {
    const { fs, db } = await siteDB();
    await fs.addDoc(fs.collection(db, 'requests'), { ...data, createdAt: fs.serverTimestamp() });
    btn.hidden = true; document.getElementById('rqDoneTxt').textContent = RQ[rqType].done; document.getElementById('rqDone').hidden = false;
  } catch (err) {
    // Fallback: open the visitor's email app with the request filled in
    const subj = (rqType === 'toksave' ? 'TokSave' : rqType === 'ondemand' ? 'On demand request: ' + data.program : 'Prayer request') + ' — ' + data.name;
    const body = `${data.message}\n\nName: ${data.name}\nContact: ${data.contact}` + (data.location ? `\nLocation: ${data.location}` : '') + (data.org ? `\nOrganisation: ${data.org}` : '') + (data.dates ? `\nDates: ${data.dates}` : '');
    location.href = `mailto:wantok@wantokradio.org?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    btn.disabled = false; btn.textContent = 'Send';
  }
  btn.textContent = 'Send';
});

// Online donation (Kina Bank payment gateway, see KINA_PAY below)
const KINA_PAY = { enabled: false, url: '' };
let gAmt = 50, gFreq = 'One-time';
const amtBtns = document.querySelectorAll('[data-amt]'), amtOther = document.getElementById('amtOther');
function setAmt(v){ gAmt = v; document.getElementById('giveAmtLbl').textContent = v ? 'K' + Number(v).toLocaleString() : ''; }
amtBtns.forEach(b => b.onclick = () => { amtBtns.forEach(x => x.classList.toggle('on', x === b)); amtOther.value = ''; amtOther.parentElement.classList.remove('on'); setAmt(+b.dataset.amt); });
amtOther.addEventListener('input', () => { amtBtns.forEach(x => x.classList.remove('on')); amtOther.parentElement.classList.add('on'); setAmt(+amtOther.value || 0); });
document.querySelectorAll('[data-freq]').forEach(b => b.onclick = () => {
  gFreq = b.dataset.freq; document.querySelectorAll('[data-freq]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-checked', x === b); });
});
document.getElementById('giveBtn').onclick = async () => {
  const err = document.getElementById('gErr'); err.hidden = true;
  const name = document.getElementById('gName').value.trim(), contact = document.getElementById('gContact').value.trim();
  if (!gAmt || gAmt < 1) { err.textContent = 'Please choose or type an amount.'; err.hidden = false; return; }
  if (!name || !contact) { err.textContent = 'Please add your name and a phone number or email so we can thank you.'; err.hidden = false; return; }
  const d = new Date(), ref = 'WRL' + String(d.getFullYear()).slice(2) + String(d.getMonth()+1).padStart(2,'0') + '-' + Math.random().toString(36).slice(2,6).toUpperCase();
  const gift = { amount: gAmt, frequency: gFreq, name, contact, anonymous: document.getElementById('gAnon').checked, ref, status: 'started', method: KINA_PAY.enabled ? 'kina-ipg' : 'bank-transfer' };
  try { const { fs, db } = await siteDB(); await fs.addDoc(fs.collection(db, 'donations'), { ...gift, createdAt: fs.serverTimestamp() }); } catch (e) {}
  if (KINA_PAY.enabled && KINA_PAY.url) {
    location.href = KINA_PAY.url + (KINA_PAY.url.includes('?') ? '&' : '?') + new URLSearchParams({ amount: gAmt.toFixed ? gAmt.toFixed(2) : gAmt, reference: ref, name });
    return;
  }
  document.getElementById('g2Amt').textContent = 'K' + Number(gAmt).toLocaleString() + (gFreq === 'Monthly' ? ' a month' : '');
  document.getElementById('g2Ref').textContent = ref;
  document.getElementById('giveStep1').hidden = true; document.getElementById('giveStep2').hidden = false;
  document.getElementById('giveCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
};
document.getElementById('giveBack').onclick = () => { document.getElementById('giveStep2').hidden = true; document.getElementById('giveStep1').hidden = false; };

// Giving totals (kept up to date by staff in the Newsroom > Giving totals)
(async function loadGiving(){
  try {
    const { fs, db } = await siteDB();
    const snap = await fs.getDoc(fs.doc(db, 'stats', 'giving')); if (!snap.exists()) return;
    const g = snap.data(); document.getElementById('giveStats').hidden = false;
    const countUp = (el, to) => { const t0 = performance.now(); const step = t => { const k = Math.min(1, (t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString(); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
    countUp(document.querySelector('[data-count="givers"]'), +g.givers || 0);
    countUp(document.querySelector('[data-count="amount"]'), +g.amount || 0);
    if (+g.goal > 0) { const pct = Math.min(100, Math.round((+g.amount || 0) / +g.goal * 100));
      document.getElementById('goalBox').hidden = false; document.getElementById('goalPct').textContent = pct + '%';
      document.getElementById('goalAmt').textContent = (+g.goal).toLocaleString(); setTimeout(() => document.getElementById('goalFill').style.width = pct + '%', 200); }
    if (g.updatedAt && g.updatedAt.toDate) document.getElementById('giveUpdated').textContent = 'Updated ' + g.updatedAt.toDate().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e) { /* totals not set up yet */ }
})();


// Live pledge count on the Pledge page (reads the public pledge counter)
(async function livePledgeCount(){
  try {
    const { fs, db } = await siteDB();
    fs.onSnapshot(fs.doc(db, 'counters', 'pledges'), snap => {
      const n = snap.exists() ? (snap.data().seq || 0) : 0;
      if (n > 0) { document.getElementById('pledgeLiveN').textContent = n.toLocaleString(); document.getElementById('pledgeLive').hidden = false; }
    }, () => {});
  } catch (e) {}
})();


// Song submissions (files go to Cloudinary, details to Firebase)
const CLOUDINARY = { cloudName: 'va65d0ab', uploadPreset: 'wrl_songs' };
const SONG_MAX_MB = 20;
const song = document.getElementById('song'), songForm = document.getElementById('songForm');
const songFile = document.getElementById('songFile'), songDrop = document.getElementById('songDrop');
const songRef = document.getElementById('songRef'), refDrop = document.getElementById('refDrop'), songKnown = document.getElementById('songKnown');
const REF_HINT = "Tap to attach your reference letter, or drag it here", REF_MAX_MB = 5;
const songWarn = document.getElementById('songWarn'), warnAgree = document.getElementById('warnAgree'), warnGo = document.getElementById('warnGo');
// "Known by Wantok Radio Light" hides the reference letter
function syncKnown(){ document.getElementById('refWrap').hidden = songKnown.checked; }
songKnown.addEventListener('change', syncKnown);
songRef.addEventListener('change', () => {
  const f = songRef.files[0];
  document.getElementById('songRefName').textContent = f ? `${f.name} · ${(f.size/1048576).toFixed(1)} MB` : REF_HINT;
  refDrop.classList.toggle('has', !!f);
});
['dragenter','dragover'].forEach(ev => refDrop.addEventListener(ev, () => refDrop.classList.add('over')));
['dragleave','drop'].forEach(ev => refDrop.addEventListener(ev, () => refDrop.classList.remove('over')));
function closeWarn(){ songWarn.hidden = true; warnAgree.checked = false; warnGo.disabled = true; }
warnAgree.addEventListener('change', () => warnGo.disabled = !warnAgree.checked);
document.getElementById('warnBack').onclick = closeWarn;
warnGo.onclick = () => { if (!warnAgree.checked) return; closeWarn(); startSongUpload(true); };
function openSong(){
  songForm.reset(); ['songErr','songProg','songDone'].forEach(id => document.getElementById(id).hidden = true);
  const b = document.getElementById('songSend'); b.hidden = false; b.disabled = false; b.textContent = 'Submit song';
  document.getElementById('songFileName').textContent = 'Tap to choose a song, or drag it here'; songDrop.classList.remove('has');
  document.getElementById('songRefName').textContent = REF_HINT; refDrop.classList.remove('has'); syncKnown(); closeWarn();
  song.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeSong(){ song.classList.remove('open'); document.body.style.overflow = ''; }
document.querySelectorAll('[data-song]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openSong(); }));
document.getElementById('songClose').onclick = closeSong;
song.addEventListener('click', e => { if (e.target === song) closeSong(); });
document.addEventListener('keydown', e => { if (e.key !== 'Escape' || !song.classList.contains('open')) return; if (!songWarn.hidden) closeWarn(); else closeSong(); });
songFile.addEventListener('change', () => {
  const f = songFile.files[0];
  document.getElementById('songFileName').textContent = f ? `${f.name} · ${(f.size/1048576).toFixed(1)} MB` : 'Tap to choose a song, or drag it here';
  songDrop.classList.toggle('has', !!f);
});
['dragenter','dragover'].forEach(ev => songDrop.addEventListener(ev, () => songDrop.classList.add('over')));
['dragleave','drop'].forEach(ev => songDrop.addEventListener(ev, () => songDrop.classList.remove('over')));
// Cloudinary upload helper (returns the parsed response; reports progress)
function cloudUpload(kind, file, tags, onProg){
  return new Promise((resolve, reject) => {
    const fd = new FormData();
    fd.append('file', file); fd.append('upload_preset', CLOUDINARY.uploadPreset); fd.append('tags', tags);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/${kind}/upload`);
    xhr.upload.onprogress = ev => { if (ev.lengthComputable && onProg) onProg(ev.loaded / ev.total); };
    xhr.onload = () => { let r = {}; try { r = JSON.parse(xhr.responseText); } catch (x) {}
      (xhr.status === 200 && r.secure_url) ? resolve(r) : reject(new Error(r.error && r.error.message ? r.error.message : 'upload failed')); };
    xhr.onerror = () => reject(new Error('network'));
    xhr.send(fd);
  });
}
const songFail = m => { const err = document.getElementById('songErr'); err.textContent = m; err.hidden = false; err.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); };
songForm.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('songErr').hidden = true;
  const f = new FormData(songForm), file = songFile.files[0], ref = songRef.files[0], known = songKnown.checked;
  if (f.get('website')) return;                                   // spam trap
  if (!f.get('artist').trim() || !f.get('title').trim() || !f.get('contact').trim()) return songFail('Please fill in the artist, song title and your phone or email.');
  if (!file) return songFail('Please choose your song file.');
  if (!/^audio\//.test(file.type) && !/\.(mp3|wav|m4a|aac|ogg)$/i.test(file.name)) return songFail('Please choose an audio file (MP3, WAV or M4A).');
  if (file.size > SONG_MAX_MB * 1048576) return songFail(`That file is ${(file.size/1048576).toFixed(1)} MB. Please upload a song under ${SONG_MAX_MB} MB (an MP3 is best).`);
  if (!known) {
    if (!ref) return songFail("Please attach your reference letter from your pastor, elder, priest or ministry leader — or tick the box if Wantok Radio Light already knows you.");
    if (!/\.(pdf|jpe?g|png|docx?|heic|webp)$/i.test(ref.name) && !/^image\/|pdf|word/.test(ref.type)) return songFail("The reference letter should be a PDF, photo or Word document.");
    if (ref.size > REF_MAX_MB * 1048576) return songFail(`The reference letter is ${(ref.size/1048576).toFixed(1)} MB. Please attach one under ${REF_MAX_MB} MB.`);
  }
  if (!f.get('consent')) return songFail('Please tick the box to confirm you allow us to broadcast this song.');
  if (!CLOUDINARY.cloudName || !CLOUDINARY.uploadPreset || !FIREBASE_READY) return songFail('Song uploads are being set up. For now, please drop your song at our studio on Sivari Road, Gerehu Stage 2.');
  if (known) { songWarn.hidden = false; warnAgree.focus(); return; }   // no reference → must agree to the archive check first
  startSongUpload(false);                                            // reference attached → upload straight away
});
async function startSongUpload(agreed){
  const f = new FormData(songForm), file = songFile.files[0], known = songKnown.checked, ref = known ? null : songRef.files[0];
  const btn = document.getElementById('songSend'); btn.disabled = true; btn.textContent = 'Uploading…';
  const prog = document.getElementById('songProg'), bar = document.getElementById('songBar'), pct = document.getElementById('songPct');
  prog.hidden = false; bar.style.width = '0'; pct.textContent = 'Starting upload…';
  const failed = m => { prog.hidden = true; btn.disabled = false; btn.textContent = 'Submit song'; songFail(m); };
  const details = { artist: f.get('artist').trim(), title: f.get('title').trim(), contact: f.get('contact').trim(), from: (f.get('from') || '').trim(),
    language: f.get('language'), notes: (f.get('notes') || '').trim(), fileName: file.name, knownArtist: known };
  const total = file.size + (ref ? ref.size : 0);
  const show = (done) => { const k = Math.round(done / total * 100); bar.style.width = k + '%'; pct.textContent = k < 100 ? `Uploading… ${k}%` : 'Saving…'; };
  let refRes = null, r;
  try {
    if (ref) { pct.textContent = "Uploading reference letter…"; refRes = await cloudUpload('auto', ref, 'song-reference', x => show(x * ref.size)); }
    r = await cloudUpload('video', file, 'song-submission', x => show((ref ? ref.size : 0) + x * file.size));   // "video" also handles audio
  } catch (e) {
    return failed(e.message === 'network' ? 'Upload failed — please check your internet connection and try again.' : `Sorry, the upload did not finish (${e.message}). Please try again.`);
  }
  try {
    const { fs, db } = await siteDB();
    const rec = { ...details, url: r.secure_url, publicId: r.public_id, bytes: r.bytes || file.size,
      duration: r.duration || null, format: r.format || '', status: 'new', createdAt: fs.serverTimestamp() };
    if (refRes) Object.assign(rec, { referenceUrl: refRes.secure_url, referenceName: ref.name, referenceType: refRes.resource_type || '' });
    if (known) Object.assign(rec, { archiveCheck: 'pending', agreedToRemoval: !!agreed });
    await fs.addDoc(fs.collection(db, 'songs'), rec);
    prog.hidden = true; btn.hidden = true;
    document.querySelector('#songDone span').textContent = known
      ? 'We will check your name in our archive. If you are recognised, our music team will listen to your song and contact you if it is selected for broadcast.'
      : 'Our music team will listen to it and contact you if it is selected for broadcast.';
    document.getElementById('songDone').hidden = false;
  } catch (e) { failed('Your song uploaded, but we could not save your details. Please try again.'); }
}

// Gallery lightbox
const lb=document.getElementById('lb');
document.querySelectorAll('.gph').forEach(f=>f.addEventListener('click',()=>{document.getElementById('lbi').src=f.dataset.full;document.getElementById('lbc').textContent=f.querySelector('figcaption').textContent;lb.classList.add('open');}));
lb.addEventListener('click',e=>{if(e.target!==document.getElementById('lbi'))lb.classList.remove('open');});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open');});

// Contact form > opens the visitor's email app
document.getElementById('msgForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `${f.get('topic')} — ${f.get('name')}`;
  const body = `${f.get('message')}\n\nName: ${f.get('name')}\nReply to: ${f.get('reply')}`;
  location.href = `mailto:wantok@wantokradio.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Live player
const API = 'https://radio.kinect.com.pg/api/nowplaying/wrl';
const FALLBACK_STREAMS = [
  'https://radio.kinect.com.pg/listen/wrl/radio.mp3',
  'https://ca7ssl.rcast.net/radio/61643/'
];
const audio = document.getElementById('audio');
const pbtn = document.getElementById('pbtn');
const pstate = document.getElementById('pstate');
const player = document.getElementById('player');
let streams = [...FALLBACK_STREAMS], idx = 0, wantPlay = false, state = 'idle';

document.querySelectorAll('[data-play-label]').forEach(l => l.dataset.orig = l.textContent);

function setState(s){
  state = s;
  document.body.classList.toggle('playing', s === 'playing');
  pbtn.innerHTML = s === 'loading' ? '<span class="spin"></span>' : (s === 'playing' ? ICON.pause : ICON.play);
  pbtn.setAttribute('aria-label', s === 'playing' ? 'Pause live stream' : 'Play live stream');
  pstate.textContent = s === 'playing' ? 'On Air · Live Now' : s === 'loading' ? 'Connecting…' : s === 'error' ? 'Stream unavailable — please try again shortly' : 'Live · Wantok Radio Light';
  document.querySelectorAll('[data-play-label]').forEach(l => l.textContent = s === 'playing' ? 'Pause Live Stream' : s === 'loading' ? 'Connecting…' : l.dataset.orig);
  document.querySelectorAll('[data-play-icon]').forEach(i => i.innerHTML = s === 'playing' ? ICON.pause : ICON.play);
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = s === 'playing' ? 'playing' : 'paused';
}

function start(){
  wantPlay = true; setState('loading');
  audio.src = streams[idx];
  audio.play().catch(() => {});
}
function stop(){
  wantPlay = false;
  audio.pause();
  audio.removeAttribute('src'); audio.load();   // stop buffering; resume = rejoin live
  setState('idle');
}
function toggle(){ (state === 'playing' || state === 'loading') ? stop() : (idx = 0, start()); }

audio.addEventListener('playing', () => setState('playing'));
audio.addEventListener('waiting', () => wantPlay && setState('loading'));
audio.addEventListener('error', () => {
  if (!wantPlay || !audio.getAttribute('src')) return;
  if (++idx < streams.length) start();
  else { wantPlay = false; setState('error'); }
});
pbtn.addEventListener('click', toggle);
document.querySelectorAll('[data-play]').forEach(b => b.addEventListener('click', toggle));

const vol = document.getElementById('vol'), muteBtn = document.getElementById('mute');
audio.volume = +vol.value;
muteBtn.innerHTML = ICON.vol;
vol.addEventListener('input', () => { audio.volume = +vol.value; audio.muted = false; muteBtn.innerHTML = audio.volume ? ICON.vol : ICON.mute; });
muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; muteBtn.innerHTML = audio.muted ? ICON.mute : ICON.vol; });

if ('mediaSession' in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({title:'Wantok Radio Light', artist:'Your Inspiration Station'});
  navigator.mediaSession.setActionHandler('play', () => start());
  navigator.mediaSession.setActionHandler('pause', () => stop());
}
setState('idle');

// Now playing info from the station's radio server (if available)
async function nowPlaying(){
  try{
    const r = await fetch(API, {cache:'no-store'});
    if (!r.ok) return;
    const d = await r.json();
    const st = d.station || {};
    const urls = [st.listen_url, ...(st.mounts || []).map(m => m.url)].filter(Boolean).map(u => u.replace(/^http:/,'https:'));
    if (urls.length) streams = [...new Set([...urls, ...FALLBACK_STREAMS])];
    const song = d.now_playing && d.now_playing.song;
    if (song && (song.title || song.text)){
      const text = song.artist && song.title ? `${song.title} — ${song.artist}` : (song.text || song.title);
      document.querySelectorAll('[data-np]').forEach(el => el.textContent = text);
      if (song.art && !/default/.test(song.art)) document.getElementById('part').innerHTML = `<img src="${song.art}" alt="">`;
      if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({title: song.title || text, artist: song.artist || 'Wantok Radio Light', album:'Wantok Radio Light', artwork: song.art ? [{src:song.art, sizes:'512x512'}] : []});
    }
  }catch(e){ /* keep defaults */ }
}
nowPlaying(); setInterval(nowPlaying, 30000);

// Studio animation: plays from the website's images folder
(function(){
  const v=document.getElementById('studioVid'); if(!v) return;
  const src=v.querySelector('source');
  const sb=document.getElementById('vsound');
  let radioPausedForVideo=false;
  sb.addEventListener('click',()=>{
    v.muted=!v.muted; if(!v.muted){ v.volume=0.8; v.play().catch(()=>{}); }
    sb.classList.toggle('on',!v.muted); sb.setAttribute('aria-pressed',!v.muted);
    sb.querySelector('span').textContent=v.muted?'Sound on':'Sound off';
    if(!v.muted && (state==='playing'||state==='loading')){ stop(); radioPausedForVideo=true; }
    else if(v.muted && radioPausedForVideo){ idx=0; start(); radioPausedForVideo=false; }
  });
  window.addEventListener('hashchange',()=>{ if(!location.hash.startsWith('#/projects') && !v.muted){ sb.click(); } });
  const fallback=()=>{ const f=document.createElement('iframe'); f.src='https://drive.google.com/file/d/'+v.dataset.drive+'/preview'; f.allow='autoplay; fullscreen'; f.title='Wantok Radio Light Studio Building — 3D concept'; f.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0'; v.replaceWith(f); sb.remove(); };
  let done=false; const fb=()=>{ if(!done){ done=true; fallback(); } };
  src.addEventListener('error',fb);
  v.addEventListener('error',fb);
  setTimeout(()=>{ if(v.isConnected && v.readyState===0 && (v.networkState===3 || v.error)) fb(); },4000);
})();



// On demand
const OD_INTL = INTL.map(p => p[0]);
document.getElementById('rqProgram').innerHTML = OD_INTL.map(n => `<option>${n}</option>`).join('') + '<option>Other</option>';
document.getElementById('odIntl').innerHTML = OD_INTL.map(n => `<div class="od-req"><b>${n}</b><button type="button" data-odreq="${n.replace(/"/g,'&quot;')}">Request</button></div>`).join('');
document.getElementById('odIntl').addEventListener('click', e => {
  const b = e.target.closest('[data-odreq]'); if (!b) return;
  openRequest('ondemand'); document.getElementById('rqProgram').value = b.dataset.odreq;
});
const odAudio = document.getElementById('odAudio');
let odEps = [], odFilter = 'All', odLoaded = 0, odCurrent = null;
const odEsc = t => String(t ?? '').replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
const odTime = s => !isFinite(s) ? '0:00' : Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2,'0');
const PLAY_I = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const PAUSE_I = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
async function loadOnDemand(){
  if (Date.now() - odLoaded < 60000) return;
  const list = document.getElementById('odList');
  if (!FIREBASE_READY) { list.innerHTML = '<div class="od-empty">On demand is being set up — check back soon.</div>'; return; }
  try {
    const { fs, db } = await siteDB();
    const snap = await fs.getDocs(fs.query(fs.collection(db, 'episodes'), fs.where('expiresAt', '>', fs.Timestamp.now()), fs.orderBy('expiresAt', 'desc')));
    odEps = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => String(b.airDate || '').localeCompare(String(a.airDate || '')));
    odLoaded = Date.now(); renderOnDemand();
  } catch (e) { list.innerHTML = '<div class="od-empty">Could not load episodes right now. Please try again later.</div>'; }
}
let odSort = 'new';
const DL_I = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';
const odDl = u => String(u).replace('/upload/', '/upload/fl_attachment/');
const odLong = s => { if (!s) return '—'; const m = Math.round(s / 60), h = Math.floor(m / 60); return (h ? h + ' hr ' : '') + (m % 60 || !h ? (m % 60) + ' min' : '').trim(); };
function renderOnDemand(){
  const progs = ['All', ...new Set(odEps.map(e => e.program))];
  if (!progs.includes(odFilter)) odFilter = 'All';
  document.getElementById('odFilter').innerHTML = odEps.length > 1 ? progs.map(p => `<button type="button" class="${p === odFilter ? 'on' : ''}" data-odf="${odEsc(p)}">${odEsc(p)}</button>`).join('') : '';
  const eps = odEps.filter(e => odFilter === 'All' || e.program === odFilter)
    .sort((a, b) => { const c = String(a.airDate || '').localeCompare(String(b.airDate || '')); return odSort === 'new' ? -c : c; });
  let lastDay = '', html = '';
  for (const e of eps) {
    const day = e.airDate ? new Date(e.airDate + 'T00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Date not set';
    if (day !== lastDay) { html += `<h3 class="od-day">${day}</h3>`; lastDay = day; }
    const days = Math.max(0, Math.ceil((e.expiresAt.toMillis() - Date.now()) / 86400000));
    html += `<div class="od-ep${odCurrent === e.id ? ' playing' : ''}" data-ep="${e.id}">
      <button class="od-play" type="button" aria-label="Play ${odEsc(e.title)}">${odCurrent === e.id && !odAudio.paused ? PAUSE_I : PLAY_I}</button>
      <dl class="od-desc">
        <div><dt>Program</dt><dd>${odEsc(e.program)}${e.category === 'international' ? ' <span class="od-intl-tag">International</span>' : ''}</dd></div>
        <div class="t"><dt>Title</dt><dd>${odEsc(e.title)}</dd></div>
        <div><dt>Pastor</dt><dd>${odEsc(e.pastor || '—')}</dd></div>
        <div><dt>Duration</dt><dd>${odLong(e.duration)}</dd></div>
      </dl>
      <div class="od-side">
        <a class="od-dl" href="${odEsc(odDl(e.url))}" download aria-label="Download ${odEsc(e.title)}">${DL_I}<span>Download</span></a>
        <span class="od-left${days <= 2 ? ' soon' : ''}">${days <= 1 ? 'Last day' : days + ' days left'}</span>
      </div>
      <div class="od-bar"><span class="od-cur">0:00</span><input type="range" min="0" max="1000" value="0" aria-label="Seek"><span class="od-dur">${e.duration ? odTime(e.duration) : ''}</span></div>
    </div>`;
  }
  document.getElementById('odList').innerHTML = html || '<div class="od-empty">New episodes are added every week. Please check back soon.</div>';
}
document.querySelector('.od-sort').addEventListener('click', e => {
  const b = e.target.closest('[data-ods]'); if (!b) return; odSort = b.dataset.ods;
  document.querySelectorAll('[data-ods]').forEach(x => x.classList.toggle('on', x === b)); renderOnDemand();
});
document.getElementById('odFilter').addEventListener('click', e => { const b = e.target.closest('[data-odf]'); if (b) { odFilter = b.dataset.odf; renderOnDemand(); } });
document.getElementById('odList').addEventListener('click', e => {
  const b = e.target.closest('.od-play'); if (!b) return;
  const id = b.closest('[data-ep]').dataset.ep, ep = odEps.find(x => x.id === id);
  if (odCurrent === id) { odAudio.paused ? odAudio.play() : odAudio.pause(); return; }
  if (!audio.paused) audio.pause();                     // stop the live stream while listening again
  odCurrent = id; odAudio.src = ep.url; odAudio.play(); renderOnDemand();
});
document.getElementById('odList').addEventListener('input', e => {
  if (e.target.type === 'range' && odAudio.duration) odAudio.currentTime = e.target.value / 1000 * odAudio.duration;
});
const odSync = () => {
  const row = odCurrent && document.querySelector(`.od-ep[data-ep="${odCurrent}"]`); if (!row) return;
  row.querySelector('.od-play').innerHTML = odAudio.paused ? PLAY_I : PAUSE_I;
  row.querySelector('.od-cur').textContent = odTime(odAudio.currentTime);
  if (isFinite(odAudio.duration)) { row.querySelector('.od-dur').textContent = odTime(odAudio.duration); row.querySelector('input').value = odAudio.currentTime / odAudio.duration * 1000; }
};
['timeupdate','play','pause','loadedmetadata'].forEach(ev => odAudio.addEventListener(ev, odSync));
audio.addEventListener('play', () => { if (!odAudio.paused) odAudio.pause(); });   // live stream takes over

// Facebook feed
const FACEBOOK_PAGE = 'https://www.facebook.com/ChristianNet';   // e.g. 'https://www.facebook.com/YourPageName'
if (FACEBOOK_PAGE) document.querySelectorAll('#fbFollow, a[href="#"][target="_blank"]').forEach(a => a.href = FACEBOOK_PAGE);
function loadFacebook(){
  const box = document.getElementById('fbFrame');
  if (box.dataset.loaded) return;
  if (!FACEBOOK_PAGE) { box.innerHTML = '<div class="od-empty">Our Facebook feed will appear here soon.</div>'; document.getElementById('fbFollow').hidden = true; return; }
  box.dataset.loaded = '1';
  const w = Math.min(500, Math.max(280, box.clientWidth - 20));
  box.innerHTML = `<iframe title="Wantok Radio Light on Facebook" loading="lazy" allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
    src="https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_PAGE)}&tabs=timeline&width=${w}&height=680&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"></iframe>`;
}

// Section tabs
(() => {
  const I = (d) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const T = {
    '#/about':    ['Who we are, our mission and team', I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>')],
    '#/history':  ['Our timeline and photo gallery', I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>')],
    '#/programs': ['Local, international and overnight', I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>')],
    '#/partners': ['Ministries we work alongside', I('<path d="M7 11l4-4 3 3 3-3 4 4-7 7z"/><path d="M3 12l4 4"/>')],
    '#/projects': ['Towers, studio and what we are building', I('<path d="M12 2v20M8 22l4-14 4 14M5 7a10 10 0 0 1 14 0"/>')],
    '#/coverage': ['Where you can hear us across PNG', I('<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>')],
    '#/support':  ['Give online or by bank transfer', I('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>')],
    '#/pledge':   ['Make a Share-a-thon pledge', I('<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>')],
    '#news-stories': ['Station updates and testimonies', I('<path d="M4 4h13a2 2 0 0 1 2 2v13a1 1 0 0 0 2 0V8"/><path d="M4 4v15a2 2 0 0 0 2 2h14"/><path d="M8 8h6M8 12h6M8 16h4"/>')],
    '#news-fb':      ['Posts from our Facebook page', I('<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>')],
    '#news-notices': ['Apps, Israel news and more', I('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>')],
    '#news-work':    ['Adverts, jingles and TokSaves', I('<path d="M3 11l18-8v18L3 13z"/><path d="M7 12v6a2 2 0 0 0 4 0v-5"/>')],
  };
  document.querySelectorAll('nav.ptoggle').forEach(nav => {
    const scroll = nav.hasAttribute('data-scroll'), links = [...nav.querySelectorAll('a')];
    const box = document.createElement('nav'); box.className = 'ptabs'; box.setAttribute('aria-label', nav.getAttribute('aria-label') || 'Sections');
    box.innerHTML = `<div class="ptabs-label">${scroll ? 'Jump to a section' : links.length + ' sections on this page<span class="hide-sm"> — choose one</span>'}</div>
      <div class="ptabs-row${links.length > 3 ? ' n4' : ''}">${links.map(a => {
        const [sub, icon] = T[a.getAttribute('href')] || ['', ''], on = !scroll && a.classList.contains('on');
        return `<a class="ptab${on ? ' on' : ''}" href="${a.getAttribute('href')}"${on ? ' aria-current="page"' : ''}><span class="pi">${icon}</span><span><b>${a.textContent}</b><small>${sub}</small></span><span class="go">${on ? 'Viewing' : '→'}</span></a>`;
      }).join('')}</div>`;
    nav.closest('.wrap').appendChild(box); nav.remove();
    if (scroll) box.addEventListener('click', e => {
      const a = e.target.closest('a'); if (!a) return; e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// Mini player: keeps an On Demand episode playing while visitors browse other pages
const odMini = document.getElementById('odMini');
function odMiniSync(){
  const onPage = document.querySelector('.page.active')?.dataset.page === 'ondemand';
  const ep = odCurrent && odEps.find(x => x.id === odCurrent);
  const active = ep && odAudio.src && (!odAudio.paused || odAudio.currentTime > 0) && !odAudio.ended;
  odMini.hidden = !active || onPage;
  if (!ep) return;
  document.getElementById('odmProg').textContent = ep.program + (ep.pastor ? ' · ' + ep.pastor : '');
  document.getElementById('odmTitle').textContent = ep.title;
  document.getElementById('odmPP').innerHTML = odAudio.paused ? PLAY_I : PAUSE_I;
  document.getElementById('odmPP').setAttribute('aria-label', odAudio.paused ? 'Play' : 'Pause');
  const d = isFinite(odAudio.duration) ? odAudio.duration : ep.duration || 0;
  document.getElementById('odmBar').style.width = d ? (odAudio.currentTime / d * 100) + '%' : '0';
  document.getElementById('odmTime').textContent = odTime(odAudio.currentTime) + (d ? ' / ' + odTime(d) : '');
}
document.getElementById('odmPP').onclick = () => { if (odAudio.paused) { if (!audio.paused) audio.pause(); odAudio.play(); } else odAudio.pause(); };
document.getElementById('odmStop').onclick = () => { odAudio.pause(); odAudio.currentTime = 0; odAudio.removeAttribute('src'); odAudio.load(); odCurrent = null; odMini.hidden = true; renderOnDemand(); };
['timeupdate','play','pause','ended','loadedmetadata'].forEach(ev => odAudio.addEventListener(ev, odMiniSync));
window.__odMiniSync = odMiniSync;
