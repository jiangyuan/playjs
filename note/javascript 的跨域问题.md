# javascript 的跨域问题

最近有不少人问到了我跨域问题，也有不少问题是因为跨域引起的，加上我本人对跨域的方法和每种方法背后的机制都不胜了解，
所以就有做个笔记的必要了。

还是那句话，只有亲自敲击了才能理解深刻。

下面就是 javascript 跨域的几个办法：

* document.domain

* jsonp

* 利用 iframe 和 location.hash

* windown.name 实现的跨域数据传输

* HTML5 postMessage

* ajax2 中的跨域资源共享 (CORS: cross-orgin resource sharing)

* flash

## document.domain

修改 document.domain 方法可能是最简单的跨域方法。

假如有两个页面

    http://www.a.com/a.html
    http://script.a.com/b.html

要做跨域通信，那么就可以在 a.html 页面上加上代码：

```js
document.domain = "a.com";
```

相应的 b 页面上也加上上述代码。

a.html 部分 html 如下：

```html
...
<iframe src="http://script.a.com/b.html" ></iframe>
...
```

上面 a 页面是可以顺利的和 b 页面交互的，也就是跨域交互。

这个方法简单是简单，但是局限很大：

1. 主域名必须相同，上面两个域名的主域名都是 a.com ，如果主域名不相同，趁早放弃这种方法。

2. 安全性，b 被攻击， a 也很有可能出现漏洞。

3. 引入多个 iframe 的时候，代码量大且芜杂，性能直线下降。

## 关于 jsonp

参考文章：

1. [jsonp详解](http://www.cnblogs.com/lemontea/archive/2012/12/11/2812268.html)

2. [聊聊 JSONP 的 P](https://github.com/lifesinger/lifesinger.github.com/issues/118)

这个年头，似乎不扯几下 jsonp 就显不出自己的水平似得，唉……

上面两篇文章，第一篇适合入门，第二篇是加深理解。

jsonp， JSON With Padding。

基础是 script 标签的跨域能力。

script 标签加载完成就会执行其中的代码，因此其内容必须合乎 javascript 语法，如下

```js
{
    id: 1,
    name: 2
}

代码肯定要跪掉，因此必须这样： 

```js
callback({
    id: 1,
    name: 2
});
```

callback 可以在放松请求时放在 url 后传过去，当然，当前页面也必须有 callback 函数。

OK，这就是 jsonp 。
