# jqGrid 的 参数

[原文](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:options)
持续更新中……


<table>
    <tr>
        <td>属性名</td>
        <td>类型</td>
        <td>描述</td>
        <td>默认值</td>
        <td>可改否</td>
    </tr>
    <tr>
        <td>datatype</td>
        <td>string</td>
        <td>数据类型。可选值有： "xml"， "xmlstring"， "json"， "local"， "javascript"， "clientSide" 。</td>
        <td>xml</td>
        <td>可</td>
    </tr>
    <tr>
        <td>height</td>
        <td>mixed</td>
        <td>表格的高度。可选值： 数值，"100%"，"auto"。 <br />
            <strong>yhGrid 已经默认启用了高宽自适应。</strong>
        </td>
        <td>150</td>
        <td>不可。有对应方法。</td>
    </tr>
    <tr>
        <td>jsonReader</td>
        <td>object</td>
        <td>用来描述 json 数据结构的对象。<a href="组织数据.md">详细</a></td>
        <td></td>
        <td>不可</td>
    </tr>
    <tr>
        <td>rowNum</td>
        <td>integer</td>
        <td>每一页所显示的行数。这个参数会传递到 url 指向的后台，服务器就可以此组织数据。 <br />
            需要说明的是，如果该值为 20，但是后台返回了 30 条数据，那么依旧只显示 20 条数据。</td>
        <td>20</td>
        <td>可。</td>
    </tr>
    <tr>
        <td>shrinkToFit</td>
        <td>boolean or integer</td>
        <td>
            这个值决定了各列的宽度和表格的总宽度之间的关系。<br />
            假如有两列，宽分别为 80px 和 120px ，但是属性 width 设置为 300，
            很明显两个宽度不一致，那么以哪个为准？<br />
            如果这个值为 true，那么以总宽度为准，各列或缩或放达到所有列的宽度之和与总宽度一直。具体的算法就不赘述了。<br />
            如果为 false ，则列宽之和与总宽度没有关系，大家各有各的宽度。<br />
            至于设置为数字，那么在计算列宽的时候就不是默认算法，而是以设置这个值为准。如果你要使用整数，那么你就要精心计算了。
        </td>
        <td>true</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>布尔值</td>
        <td>列是否可以拖动排序。<strong>注意：</strong> colModel 中也有一个 sortable 属性，请区别开来。</td>
        <td>false</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>url</td>
        <td>string</td>
        <td>jqGrid 获取数据的链接。 可以设置为 "clientArray" ，从而可以手动的将数据 post 到服务器。</td>
        <td>null</td>
        <td>可</td>
    </tr>
    <tr>
        <td>width</td>
        <td>数值</td>
        <td>如果这个值没有设置，那么表格的宽度就是各列宽度之和。<br />
            如果设置了，那么初试化表格的宽度会根据属性 shrinkToFit 来计算。<br />
            <strong>yhGrid 已经默认启用了高宽自适应。</strong>
        </td>
        <td>none</td>
        <td>不可。有专有方法。</td>
    </tr>
</table>