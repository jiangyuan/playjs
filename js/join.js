'use strict';



String.prototype.join = function (target) {
  let src = String(this);
  return `${src}${target}`;
};

console.log(1, 'abc'.join('def').join('g'));
