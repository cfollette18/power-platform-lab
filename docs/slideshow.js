(() => {
  const $ = id => document.getElementById(id);
  let index = 0, timer = null;
  function crop(frame, image, slide) {
    const [x, y, w, h] = slide.crop;
    const [iw, ih] = slide.size;
    frame.style.aspectRatio = `${w} / ${h}`;
    image.style.width = `${iw / w * 100}%`;
    image.style.height = `${ih / h * 100}%`;
    image.style.left = `${-x / w * 100}%`;
    image.style.top = `${-y / h * 100}%`;
  }
  function fit() {
    const [,,w,h] = slides[index].crop;
    const area = $('image-link');
    $('crop-frame').style.width = `${Math.min(area.clientWidth, area.clientHeight * w / h)}px`;
  }
  const buttons = slides.map((slide, i) => {
    const button = document.createElement('button');
    button.className = 'thumb';
    button.setAttribute('aria-label', `Screenshot ${slide.id}: ${slide.title}`);
    const img = document.createElement('img');
    img.src = slide.file; img.alt = ''; img.loading = 'lazy';
    const label = document.createElement('span');
    label.textContent = `${slide.id} / ${slide.chapter}`;
    const preview = document.createElement('span');
    preview.className = 'thumb-preview';
    const frame = document.createElement('span');
    frame.className = 'crop-frame';
    frame.append(img); preview.append(frame);
    crop(frame, img, slide);
    frame.style.width = `${Math.min(112, 68 * slide.crop[2] / slide.crop[3])}px`;
    button.append(preview, label);
    button.addEventListener('click', () => { stop(); show(i); });
    $('thumbnails').append(button);
    return button;
  });
  function show(i, scroll = true) {
    index = (i + slides.length) % slides.length;
    const s = slides[index];
    $('slide-image').src = s.file;
    $('slide-image').alt = `Screenshot ${s.id}: ${s.title}. ${s.description}`;
    crop($('crop-frame'), $('slide-image'), s);
    fit();
    $('image-link').href = $('full-size').href = s.file;
    $('chapter').textContent = s.chapter;
    $('number').textContent = s.id;
    $('slide-title').textContent = s.title;
    $('description').textContent = s.description;
    $('position').textContent = `${index + 1} / ${slides.length}`;
    $('progress').style.width = `${(index + 1) / slides.length * 100}%`;
    buttons.forEach((b, n) => b.setAttribute('aria-current', String(n === index)));
    if (scroll) {
      const strip = $('thumbnails'), b = buttons[index];
      strip.scrollLeft = b.offsetLeft - strip.offsetLeft - strip.clientWidth / 2 + b.clientWidth / 2;
    }
    history.replaceState(null, '', `#${s.id}`);
  }
  function stop() {
    clearInterval(timer); timer = null;
    $('play').textContent = 'Play slideshow';
    $('play').setAttribute('aria-pressed', 'false');
    $('caption').setAttribute('aria-live', 'polite');
  }
  $('prev').onclick = () => { stop(); show(index - 1); };
  $('next').onclick = () => { stop(); show(index + 1); };
  $('play').onclick = () => {
    if (timer) return stop();
    $('play').textContent = 'Pause slideshow';
    $('play').setAttribute('aria-pressed', 'true');
    $('caption').setAttribute('aria-live', 'off');
    timer = setInterval(() => show(index + 1), 8000);
  };
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    const next = {ArrowRight:index + 1, ArrowLeft:index - 1, Home:0, End:slides.length - 1}[event.key];
    if (next !== undefined) { event.preventDefault(); stop(); show(next); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', () => { const n = slides.findIndex(s => `#${s.id}` === location.hash); if (n >= 0) { stop(); show(n); } });
  const start = slides.findIndex(s => `#${s.id}` === location.hash);
  show(start < 0 ? 0 : start, false);
})();
