# jqGrid 的方法

<table>
    <tr>
        <td>方法名</td>
        <td>参数</td>
        <td>返回值</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>addRowData</td>
        <td>rowid, data, position, srcrowid</td>
        <td>添加成功返回 true，其他情况 false 。</td>
        <td>
            根据本地数据（通常为数组），在指定的位置（表格的头部，表格的尾部，或者指定行(srcrowid)的前面或后面，插入一条 id="rowid" 的记录。<br />
            本地数据的结构通常是 {name1:value1,name2: value2…}，其中的属性名(name1等) 应该和 colModel 中的 name 一一对应。 <br /> 
            这个方法也可以一次插入多条记录：<br />
            这种情况下，参数 data 应该是类似这种结构：<br />
             [ {name1:value1,name2: value2…}, {name1:value1,name2: value2…} ]，<br />
             而参数 rowid 就是上述结构中的（name1 或者 name2）等，数组中一系列 name1 之类的数据应该各不相同，从而标识标识这一行，使其 id 唯一。
        </td>
    </tr>
    <tr>
        <td>setGridheight</td>
        <td>new_height</td>
        <td>jqGrid Object</td>
        <td>
            动态设置表格的高度。<br /><strong>注意：</strong>设置的高度是指表格（包含单元格的部分）的主体高度，而不是整个 grid 的高度。<br />
            yhGrid 已经对高度自适应做了处理。
        </td>
    </tr>
    <tr>
        <td>setGridWidth</td>
        <td>new_width, shrink</td>
        <td>
            jqGrid Object
        </td>
        <td>
            动态设置表格的宽度。<br />
            两个参数：new_width 就是将要设置的宽度；shrink(boolean)，和属性 shrinkToFit 有着相同的行为，
            如果该值缺省，那么将默认设置为 shrinkToFit 的值。
        </td>
    </tr>
</table>