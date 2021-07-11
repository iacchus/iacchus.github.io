// https://github.com/laymonage/giscus/blob/main/ADVANCED-USAGE.md#giscus-to-parent-message-events

function handleMessage(ev) {
  if (ev.origin !== 'https://giscus.app') return;
  if (!(typeof ev.data === 'object' && ev.data.giscus)) return;

  const giscusData = ev.data.giscus;
  // Do whatever you want with it, e.g. `console.log(giscusData)`.
  // You'll need to make sure that `giscusData` contains the message you're
  // expecting, e.g. by using `if ('discussion' in giscusData)`.
  console.log(giscusData);
}

window.addEventListener('message', handleMessage);
// Some time later...
//window.removeEventListener('message', handleMessage);
