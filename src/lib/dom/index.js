// @flow

// eslint-disable-next-line import/prefer-default-export
export function addStyleSheet (src: string) {
  const style = document.createElement('link');
  style.href = src;
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('type', 'text/css');
  document.head && document.head.appendChild(style);
}
