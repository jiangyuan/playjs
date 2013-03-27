# jqGrid 的方法

[原文](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:methods)

持续更新中……

<table>
    <tr>
        <th>方法名</th>
        <th>参数</th>
        <th>返回值</th>
        <th>描述</th>
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
        <td>delRowData</td>
        <td>rowid</td>
        <td>成功返回 true ，失败返回 false </td>
        <td>删除 id 为 rowid 的行。这个操作不会同步到数据库。 </td>
    </tr>
    <tr>
        <td>editRow</td>
        <td>rowid, keys</td>
        <td>无</td>
        <td>
            根据传入的 rowid 编辑一行。<br />
            key 是布尔值，是否启用键盘快捷键，[enter] 保存编辑， [esc] 取消编辑。<br />
            详情请参见行内编辑。
        </td>
    </tr>
    <tr>
        <td>getGridParam</td>
        <td>属性名</td>
        <td>视具体属性而定</td>
        <td>获取指定的属性值。如果没有传入参数，则会获取整个 options 键值对。</td>
    </tr>
    <tr>
        <td>restoreRow</td>
        <td>rowid</td>
        <td>无</td>
        <td>去小编辑。</td>
    </tr>
    <tr>
        <td>saveRow</td>
        <td>rowid, callback, url, extraparams </td>
        <td></td>
        <td></td>
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
    <tr>
        <td>trigger("reloadGrid")</td>
        <td>无</td>
        <td>无</td>
        <td>
            按照当前的参数设定来重新发送请求加载表格。这里的当前和初始化的参数可能不同。<br />
            这个方法会忽略( colModel ) 中信息，也就是如果你修改了 colModel 中的值，该方法会忽略，仍旧使用初始化
            时候的值。
        </td>
    </tr>
</table>