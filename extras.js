// Latest news on the home page (copies the cards rendered on the News page)
(function () {
  const grid = document.getElementById('newsGrid');
  const featured = document.getElementById('newsFeatured');
  const target = document.getElementById('homeNews');
  if (!grid || !target) return;

  function featuredCard(f) {
    const img = f.querySelector('.nimg');
    const txt = f.querySelector('.ntxt');
    const card = document.createElement('button');
    card.className = 'ncard';
    card.dataset.story = f.dataset.story;
    card.innerHTML =
      (img ? img.outerHTML : '') +
      '<div class="ntxt">' +
      (txt.querySelector('.nmeta')?.outerHTML || '') +
      '<h3>' + (txt.querySelector('h3')?.innerHTML || '') + '</h3>' +
      '<p>' + (txt.querySelector('p')?.innerHTML || '') + '</p>' +
      '</div>';
    return card;
  }

  function sync() {
    const seen = new Set();
    const cards = [];
    const f = featured && featured.querySelector('.nfeat');
    if (f) {
      seen.add(f.dataset.story);
      cards.push(featuredCard(f));
    }
    for (const c of grid.querySelectorAll('.ncard')) {
      if (cards.length >= 3) break;
      if (seen.has(c.dataset.story)) continue;
      seen.add(c.dataset.story);
      cards.push(c.cloneNode(true));
    }
    if (!cards.length) {
      target.innerHTML = '<p class="news-empty" style="grid-column:1/-1">No news has been published yet. Check back soon.</p>';
      return;
    }
    target.replaceChildren(...cards);
  }

  target.addEventListener('click', e => {
    const card = e.target.closest('[data-story]');
    if (card) location.hash = '#/news/' + encodeURIComponent(card.dataset.story);
  });
  new MutationObserver(sync).observe(grid, { childList: true });
  if (featured) new MutationObserver(sync).observe(featured, { childList: true });
  sync();
})();

// Online giving isn't live yet - show the bank details instead.
// Runs in the capture phase so the old online-payment handler never fires.
(function () {
  const modal = document.getElementById('giveSoon');
  if (!document.getElementById('giveBtn') || !modal) return;

  const BANK_TEXT = [
    'Wantok Radio Light - bank details',
    '',
    'Bank of South Pacific (BSP)',
    'Account name: Wantok Radio Light',
    'Account number: 1000908049',
    'SWIFT: BOSPPGPM',
    'BSB: 088-950',
    '',
    'Kina Bank',
    'Account name: Wantok Radio Light',
    'Account number: 11757718',
    'SWIFT: KINIPGPG',
    'BSB: 028-038'
  ].join('\n');

  function open() {
    const amount = document.getElementById('giveAmtLbl').textContent || '';
    document.getElementById('soonAmt').textContent = amount.trim();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('#giveBtn')) return;
    e.preventDefault();
    e.stopPropagation();
    open();
  }, true);

  document.getElementById('soonX').onclick = close;
  document.getElementById('soonOk').onclick = close;
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
  window.addEventListener('hashchange', () => { if (!modal.hidden) close(); });

  document.getElementById('soonCopy').onclick = async e => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(BANK_TEXT);
      btn.textContent = 'Copied ✓';
    } catch (err) {
      btn.textContent = 'Select & copy above';
    }
    setTimeout(() => { btn.textContent = 'Copy bank details'; }, 2200);
  };
})();

// Pledge form pop-up (same form and Firebase settings as the Pledge page)
(function () {
  const modal = document.getElementById('pledgePop');
  const frame = document.getElementById('ppFrame');
  const giveModal = document.getElementById('giveSoon');
  if (!modal || !frame) return;

  function open() {
    if (giveModal) giveModal.hidden = true;
    if (!frame.dataset.loaded) {
      frame.dataset.loaded = '1';
      frame.srcdoc = PLEDGE_HTML.replace(/\/\*WRL_FIREBASE\*\/[\s\S]*?\/\*END_WRL_FIREBASE\*\//, JSON.stringify(WRL_FIREBASE));
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('[data-pledge-pop]')) return;
    e.preventDefault();
    open();
  });
  document.getElementById('ppX').onclick = close;
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
  window.addEventListener('hashchange', () => { if (!modal.hidden) close(); });
})();
