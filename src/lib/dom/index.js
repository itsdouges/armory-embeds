// @flow

export function addScript (src: string) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  window.document.head.appendChild(script);
}

export function addStyleSheet (src: string) {
  const style = document.createElement('link');
  style.href = src;
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('type', 'text/css');
  document.head && document.head.appendChild(style);
}
