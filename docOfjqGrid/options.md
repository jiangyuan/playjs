# jqGrid 的 参数

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
        <td>表格的高度。可选值： 数值，"100%"，"auto"。</td>
        <td>150</td>
        <td>不可。有对应方法。</td>
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
</table>