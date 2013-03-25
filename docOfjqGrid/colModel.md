# colModel 列模型

持续更新中……
[原文](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:colmodel_options)

属性 colModel ，以数组的形式定义了 grid 中各个列的表现及行为，是 jqGrid 中最重要的属性，没有之一。
语法形式如下：

    jQuery("#gridid").jqGrid({
        ...
        colModel: [ { name:"name1", index:"index1"... }, {...}, ... ],
        ...
    });

colModel 可用的属性都在下面表格中。

**唯一必须设置的属性是 name 。**

colModel 的属性可以通过 getColProp 和 setColProp 方法来获取和修改。

<table>
    <tr>
        <td>属性</td>
        <td>类型</td>
        <td>描述</td>
        <td>默认值</td>
    </tr>
    <tr>
        <td>align</td>
        <td>字符串</td>
        <td>单元格内文字对齐方式。 可选值有 "left" "center" "right"</td>
        <td> "left" </td>
    </tr>
    <tr>
        <td>index</td>
        <td>字符串</td>
        <td>点击表头排序时，会将这个值传到后台，从而标识是以该列排序。<br />
            传递的参数是 "sidx"，也就是说，在后台获取 "sidx" ，即可探知是以哪一列为基准排序。</td>
        <td>空字符串</td>
    </tr>
    <tr>
        <td>label</td>
        <td>字符串</td>
        <td> 如果属性 colNames 是空的，那么列头的名称就是用这个值。如果 colNames 和该值都是空的，那么就将 name 设为列头的名称。</td>
        <td>none</td>
    </tr>
    <tr>
        <td>name</td>
        <td>字符串</td>
        <td>给表格中的每一列设置一个唯一的 name 值，通常这个 name 会拼进列头的 id 中，所以请务必页面唯一。<br />
            <strong>这个值必须设置。</strong> <br />
            有这么几个保留字不能取用：subgrid, cb 和 rn 。
        </td>
        <td> 无默认值。必须设置。 </td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>布尔值。</td>
        <td>该列是否可以排序。</td>
        <td> true </td>
    </tr>
    <tr>
        <td>width</td>
        <td>数值</td>
        <td>该列的宽度</td>
        <td>150</td>
    </tr>
</table>