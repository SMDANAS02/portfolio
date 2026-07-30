gsap.registerPlugin(ScrollTrigger);

/* Entrance sequence — same choreography as the homepage hero */
gsap.timeline({defaults:{ease:'power3.out'}})
  .from('.pd-back', {opacity:0, y:-10, duration:0.5})
  .from('.pd-eyebrow', {opacity:0, y:16, duration:0.6}, "-=0.2")
  .from('.pd-hero h1', {opacity:0, y:40, duration:0.8}, "-=0.35")
  .from('.pd-sub', {opacity:0, y:16, duration:0.6}, "-=0.4")
  .from('.pd-tags span', {opacity:0, y:12, duration:0.4, stagger:0.06}, "-=0.35")
  .from('.pd-actions .btn', {opacity:0, y:16, duration:0.5, stagger:0.1}, "-=0.3")
  .from('.pd-visual-frame', {opacity:0, scale:0.94, duration:0.9, ease:'power2.out'}, "-=0.9");

/* Scroll reveals for body sections */
gsap.utils.toArray('.pd-section').forEach(el=>{
  gsap.from(el.children, {
    opacity:0, y:26, duration:0.7, stagger:0.08, ease:'power3.out',
    scrollTrigger:{trigger: el, start:'top 82%'}
  });
});

gsap.from('.pd-nav-between', {
  opacity:0, y:20, duration:0.6,
  scrollTrigger:{trigger:'.pd-nav-between', start:'top 90%'}
});
