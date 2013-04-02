# 也谈 setTimeout

setTimeout ，延迟一段事件执行代码，当然这是最基本的用法，这里不同基本用法。

## jQuery 中的轮询

## setTimeout( func, 0 )

当然，初见这种用法时，我是一愣啊，什么情况，setTimeout( func, 0 ) 和直接调用 func 难道不是同一个效果？

## setTimeout 中的 this