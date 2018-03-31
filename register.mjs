import makeElement from './';

Object.defineProperty(HTMLDocument.prototype, 'makeElement', {
    value: makeElement,
    writable: true,
    configurable: true,
    enumerable: false
});

export default true;
