// nav shadow on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('stuck', window.scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// disclosure helper: button[data-x] toggles [data-x-panel]
const toggle = (btn, panel) => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  panel.hidden = open;
};

const govBtn = document.querySelector('[data-gov]');
govBtn.addEventListener('click', () => toggle(govBtn, document.getElementById('gov-more')));

const burger = document.querySelector('[data-menu]');
const drop = document.querySelector('[data-menu-panel]');
burger.addEventListener('click', () => toggle(burger, drop));
drop.addEventListener('click', e => {
  if (e.target.tagName === 'A') toggle(burger, drop);
});

// career-field tabs
const tabs = document.querySelector('[data-tabs]');
tabs.querySelector('.tablist').addEventListener('click', e => {
  const btn = e.target.closest('[data-tab]');
  if (!btn) return;
  tabs.querySelectorAll('[data-tab]').forEach(b =>
    b.setAttribute('aria-selected', String(b === btn)));
  tabs.querySelectorAll('[data-panel]').forEach(p =>
    p.hidden = p.dataset.panel !== btn.dataset.tab);
});
tabs.querySelector('.tablist').addEventListener('keydown', e => {
  const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
  if (!dir) return;
  const all = [...tabs.querySelectorAll('[data-tab]')];
  const next = all[(all.indexOf(document.activeElement) + dir + all.length) % all.length];
  next.focus();
  next.click();
});

// search — no backend, so acknowledge and move on
const toast = document.querySelector('[data-toast]');
let toastTimer;
const say = msg => {
  toast.textContent = msg;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('on'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('on');
    setTimeout(() => (toast.hidden = true), 300);
  }, 3200);
};

const form = document.querySelector('[data-search]');
form.addEventListener('submit', e => {
  e.preventDefault();
  const q = form.q.value.trim();
  const loc = form.loc.value.trim();
  say(q || loc
    ? `Searching “${[q, loc].filter(Boolean).join('” in “')}” — demo only, no results wired up.`
    : 'Enter a job title or keyword to start searching.');
});
document.querySelectorAll('.chip-q').forEach(c =>
  c.addEventListener('click', () => {
    form.q.value = c.dataset.q;
    form.q.focus();
  }));

// scroll reveals
const reveals = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window)) {
  reveals.forEach(el => el.classList.add('in'));
}
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    obs.unobserve(en.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

reveals.forEach(el => {
  // stagger siblings within a group so grids cascade instead of popping
  const sibs = [...el.parentElement.children].filter(n => n.classList.contains('reveal'));
  el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 6) * 65}ms`;
  io.observe(el);
});

// belt and braces: anything already scrolled past on load gets shown outright
addEventListener('load', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in');
  });
});

// cycle the Career Explorer answer highlight
const peeks = [...document.querySelectorAll('.qp-a')];
if (peeks.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = peeks.findIndex(p => p.classList.contains('qp-on'));
  setInterval(() => {
    peeks[i].classList.remove('qp-on');
    i = (i + 1) % peeks.length;
    peeks[i].classList.add('qp-on');
  }, 2600);
}
