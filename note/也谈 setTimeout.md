# 也谈 setTimeout

setTimeout ，延迟一段事件执行代码，当然这是最基本的用法，这里不同基本用法。

## jQuery 中的轮询

轮询，可能是 setTimeout 最典型的用法，jQuery 的兼容IE的 document ready 机制就用到了这个：

```js
// jquery 1.9.1
(function doScrollCheck() {
    if ( !jQuery.isReady ) {

        try {
            // Use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            top.doScroll("left");
        } catch(e) {
            // 不停地查看是否准备好
            return setTimeout( doScrollCheck, 50 );
        }

        // detach all dom ready events
        detach();

        // and execute any waiting functions
        jQuery.ready();
    }
})();
```

另外，我还看到了下面这种用法，缺省了 delay 这个参数，不知道会是一个什么状态，待探究。

```js
// jquery 1.9.1
ready: function( wait ) {
    ...

    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
    if ( !document.body ) {
        return setTimeout( jQuery.ready );
    }

    ...
},
```

## setTimeout( func, 0 )

当然，初见这种用法时，我是一愣啊，什么情况，setTimeout( func, 0 ) 和直接调用 func 难道不是同一个效果？

肯定不是一个效果，在 stackOverflow 也有很多人问。

比如这个[Why is setTimeout(fn, 0) sometimes useful?](http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful)，
IE6 种出现的奇葩问题竟然神奇的可用 setTimeout(func, 0) 来解决。

这些问题概括来讲是这样：动态往 dom 树中插入元素，
然后立刻、马上操作这个元素（比如选择文本框的文本，改变 select 的 index 等），
普通方式写代码通常不起作用，但是放入 setTimeout( func, 0 ) 中就可以达到效果。

要理解这个问题还是要了解 浏览器的 UI 线程。

单线程的浏览器， js 引擎和渲染引擎必定是顺序执行 (stack)，比如点击一个按钮，浏览器会先改变按钮的状态（actived，重绘），
然后才执行 js (js引擎) 。

所以往 dom 插入元素再立刻操作这个 dom ，那么很有可能这个 dom 还没有重绘完成，因此自然操作无效。

那么，为什么放入 setTimeout( func, 0 ) 中就可以呢？
其实答案已经出来了， setTimeout 会等到重绘完成才执行代码，自然无往而不利。

## setTimeout 进一步理解

可以更深入的思考： setTimeout( func, 0 ) 是延迟 0ms行，也就是立刻执行，但为什么还是在重绘之后呢？
重绘肯定会超过 0ms 啊！

到这里，这是这篇笔记的终极目的, javascript 单线程的异步模式。

jQuery 作者 John Resig 的这篇《[How JavaScript Timers Work](http://ejohn.org/blog/how-javascript-timers-work/)》通俗易懂地阐述了这个问题……


## setTimeout 中的 this