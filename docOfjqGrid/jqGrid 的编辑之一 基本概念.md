# jqGrid 的编辑 基本概念

快速简单地编辑数据，应该是表格类控件最为重要的功能之一，jqGrid 支持以下三种编辑方式：

1. 单元格编辑
2. 行编辑
3. 表单编辑：创建一个包含指定行的字段的表单来进行编辑

## 概览

任何一种编辑方式都会在 colModel 中使用如下的属性：

 * editable
 * edittype
 * editoptions
 * editrules
 * formoptions ( 只在表单编辑中有效 )

 通用语法如下：
 ```js
<script>
    jQuery("#grid_id").jqGrid({
    ...
    colModel: [ 
    ... 
        { name:'price', ..., editable:true, edittype:'text', editoptions:{...}, editrules:{...}, formoptions:{...} },
    ...
    ]
    ...
    });
</script>
```

### editable

布尔值，用来表示该列是否可以编辑，默认值是 false ，不可编辑。

值得注意的是，隐藏的列是不可以编辑的，但是他们被标记为了可编辑状态。在行编辑和单元格标记模式中，
应该让他们显示 ( showCol ) 出来，从而可以编辑，而表单编辑则要用到属性 editrules 。

## edittype

这个值决定了可编辑的字段的类型，可以有如下取值：

* text 默认值，编辑状态时，jqGrid会创建如下元素：

    ```html
    <input type="text" ...../>
    ```

    在属性 editoptions 中，我们可以设置上面元素的任意属性，例如：

    ```js
    ... editoptions: { size:10, maxlength: 15 }
    ```

    如上设置，那么 input 元素将会以如下形式呈现：

    ```html
    <input type="text" size="10" maxlength="15" />
    ```

    另外，jqGrid 会自动添加 id 和 name 属性。