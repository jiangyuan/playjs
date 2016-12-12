'use strict';



function Example() {
    // this.a = 'a';
}

Example.prototype.test = function () {
    // console.log(this);
    // console.log(this.a);

    return this;
};


const ex = new Example(); // 1. 创建一个新对象 2. 作用域指向新对象（this 指向这个对象） 3. 执行构造函数 4. 返回新对象，就是这里的 ex

console.log(ex.__proto__ === Example.prototype);
// Example.prototype.test();

const t1 = ex.test();
const t2 = Example.prototype.test();
console.log(t1, t2, t1 === t2, t1.__proto__ === t2);

// 直接调 prototype 上的方法，作用域其实是指向原型对象
// 调实例方法，作用域就是一个新的对象，这个对象的 __proto__ 指向原型对象