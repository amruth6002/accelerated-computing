const nativeAds = [];

function sendSize(iframe) {
  const breakpoint = window.innerWidth < 768 ? 'sm' : 'lg';
  console.log('breakpoint', breakpoint);
  iframe.postMessage('breakpoint:' + breakpoint, '*');
}

window.addEventListener(
  'resize',
  () => {
    nativeAds.forEach((ad) => {
      sendSize(ad);
    });
  },
  {
    passive: true,
  }
);

window.addEventListener('message', function (e) {
  if (e.data === 'initdfp') {
    nativeAds.push(e.source);
    sendSize(e.source);
  } else if (e.data === 'close-ad') {
    const ad = document.getElementById('div-gpt-ad-1742391132948-0');
    if (ad) {
      ad.remove();
    }
  }
});
