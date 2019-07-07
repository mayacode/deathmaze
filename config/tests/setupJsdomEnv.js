import { JSDOM } from 'jsdom';

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

export default function() {
  const { window } = new JSDOM('<!doctype><html><body></body></html>');

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  global.requestAnimationFrame = function(callback) {
    return setTimeout(callback, 0);
  };
  global.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  };

  copyProps(window, global);
}
