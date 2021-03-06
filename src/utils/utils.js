export const selector = (selector, base = document) => {
  return base.querySelector(selector);
};

export const selectorAll = (selector, base = document) => {
  return base.querySelectorAll(selector);
};

export const addClass = (className, element) => {
  if (!element) return;
  element.classList.add(className);
};

export const removeClass = (className, element) => {
  if (!element) return;
  element.classList.remove(className);
};

export const toggleClass = (className, element) => {
  if (!element) return;
  element.classList.toggle(className);
};

export const createElement = (tagName, className, attrs = {}) => {
  const element = document.createElement(tagName);
  if (className) {
    if (Array.isArray(className)) element.className = className.join(' ');
    else element.className = className;
  }
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};

export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const hasAscendant = ($ascendant, $element) => {
  if (!$element) throw `Error: Unexpected $element Argument ${$element}`;
  if (!$ascendant) return false;

  let $curElement = $element;

  while ($curElement) {
    if ($curElement === $ascendant) {
      return true;
    }

    $curElement = $curElement.parentNode;
  }
  return false;
};

export const webStorage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  clear(key) {
    localStorage.removeItem(key);
  },
};

export const debounce = (cb, delay) => {
  let timerId;
  return (event) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(cb, delay, event);
  };
};

export const throttle = (cb, delay) => {
  let timerId;
  return (event) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      cb(event);
      timerId = null;
    }, delay);
  };
};

export const computeGrad = (oldX, oldY, x, y) => {
  return (oldY - y) / (oldX - x);
};
