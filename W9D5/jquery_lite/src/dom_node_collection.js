class DOMNodeCollection {
  constructor(array) {
    this.collection = array;
  }

  html(str) {
    if (!str) {
      return this.collection[0].innerHTML;
    } else {
      this.collection.forEach((el) => {
        el.innerHTML = str;
      });
    }
  }

  
  empty() {
    this.collection.forEach((el) => {
      el.innerHTML = "";
    });
  }

  //real jQuery doesn't allow you to append the same object twice
  append(content) {
    this.collection.forEach((el) => {
      if (content instanceof HTMLElement) {
        el.innerHTML += content.outerHTML;
      } else {
        el.innerHTML += content;
      }
    });
  }

  attr(name, value) {
    this.collection.forEach((el) => {
      el.setAttribute(name, value);
    });
  }

  addClass(cname) {
    this.collection.forEach((el) => {
      el.classList.add(cname);
    });
  }

  removeClass(cname)  {
    this.collection.forEach((el) => {
       el.classList.remove(cname);
    });
  }

  // TRAVERSAL
  children() {
    let arr = []
    this.collection.forEach((el) => {
      arr.push(el.children);
    });
    return new DOMNodeCollection(arr);
  }

  parent() {
    let arr = []
    this.collection.forEach((el) => {
      arr.push(el.parentNode);
    });
    return new DOMNodeCollection(arr);
  }

  find(selector) {
    let arr = [];
    this.collection.forEach((el) => {
      let selected = Array.from(el.querySelectorAll(selector))
      selected.forEach((el2) => {
        arr.push(el2);
      });
    });
    return new DOMNodeCollection(arr);
  }

  remove() {
    this.collection.forEach((el) => {
      el.remove();
    });
  }


}

module.exports = DOMNodeCollection;