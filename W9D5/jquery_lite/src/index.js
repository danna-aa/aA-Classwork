const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(selector) {
  // this.console.log(this.document);
  let arr;
  if (selector instanceof HTMLElement) {
    arr = [selector];
  } else {
    const res = document.querySelectorAll(selector);
    arr = Array.from(res);
  }
  return new DOMNodeCollection(arr);
  // console.log(res);
};



// this test doesn't work, do this in chrome console
// ...returns correctly in chrome console
window.$l = $l;
// window.$l('li');






