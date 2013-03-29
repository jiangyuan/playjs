# jqGrid 的 参数

[原文](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:options)

持续更新中……


<table>
    <tr>
        <th>属性名</th>
        <th>类型</th>
        <th>描述</th>
        <th>默认值</th>
        <th>可改否</th>
    </tr>
    <tr>
        <td>data</td>
        <td>数组</td>
        <td>js 数组，存储了表格需要的数据。这个值可以替代 addRowData 方法。</td>
        <td>空数组</td>
        <td>可</td>
    </tr>
    <tr>
        <td>datatype</td>
        <td>string</td>
        <td>数据类型。可选值有： "xml"， "xmlstring"， "json"， "local"， "javascript"， "clientSide" 。</td>
        <td>xml</td>
        <td>可</td>
    </tr>
    <tr>
        <td>editurl</td>
        <td>字符串</td>
        <td>行编辑和表单编辑时的 url，用来保存修改的数据。</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>emptyrecords</td>
        <td>字符串</td>
        <td>当查询的记录为空时显示的信息。</td>
        <td>"无数据显示"</td>
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
        <td>multikey</td>
        <td>字符串</td>
        <td>
            当 multiselect 为 true 时，该参数才有效。<br />
            按住什么键可以多选。可选值： shiftKey， altKey，ctrlKey
        </td>
        <td>空字符串</td>
        <td>可</td>
    </tr>
    <tr>
        <td>multiboxonly</td>
        <td>布尔值</td>
        <td>
            当 multiselect 为 true 时，该参数才有效。<br />
            multiselect 为 true，点击 行 的任意位置都能选中该行。 <br />
            multiboxonly 为 true 时，只有点击非当前行的复选框才能完成多选。
        </td>
        <td>false</td>
        <td>可</td>
    </tr>
    <tr>
        <td>multiselect</td>
        <td>布尔值</td>
        <td>可以选中多行，表格左边会多出一列复选框。</td>
        <td>false</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>pager</td>
        <td>字符串或者 jQuery 对象</td>
        <td>翻页栏，详情请参见 <strong>翻页栏</strong>。</td>
        <td>空字符串</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>postData</td>
        <td>对象</td>
        <td>传递到服务器端的数据。</td>
        <td>空对象。</td>
        <td>可</td>
    </tr>
    <tr>
        <td>recordpos</td>
        <td>字符串</td>
        <td>“信息区”的位置。详情参见“翻页栏”。</td>
        <td>right</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>records</td>
        <td>数值</td>
        <td>只读属性。查询的总记录书。</td>
        <td>none</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>recordtext</td>
        <td>字符串</td>
        <td> 
            record 的显示形式。以默认值为例：<br />
            {0} -- 记录的开始位置，和页数(page)相关
            {1} -- 记录的结束位置，和开始位置以及 rowNum 相关
            {2} -- 总记录数
        </td>
        <td>"{0} - {1}\u3000共 {2} 条"</td>
        <td>可</td>
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
        <td>savedRow</td>
        <td>对象</td>
        <td>这是一个只读属性，在行和单元格可编辑之前，存放现有数据。</td>
        <td>空对象</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>selarrrow</td>
        <td>数组</td>
        <td>只读属性。可选择多行时，该值是一个包含已选择了的行的 id 的数组。</td>
        <td>空数组</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>selrow</td>
        <td>字符串</td>
        <td>只读属性。选中行的 id 值。如果排序或者翻页，该值被设为 null 。</td>
        <td>null</td>
        <td>不可</td>
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
        <td>viewrecords</td>
        <td>布尔值</td>
        <td>
            "x-y 共 xxx 条"。分页时，显示分页的起始和结束位置，以及总记录数。<br />
            另外，属性 emptyrecords 和 recordtext 可以配合该值使用。
        </td>
        <td>false</td>
        <td>不可</td>
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