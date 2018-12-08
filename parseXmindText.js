const fs = require('fs')
const sample = fs.readFileSync('./parseXmindTextSample.txt', 'utf8')

console.log(sample)

function getOwner(target, owner) {
  target = target || {}
  owner.split(/\s/).forEach(o => {
    target[o] = 1
  })
  return target
}


function parse(source) {
  let ret = {}
  const rBreakLine = /\n/
  const rNotTap = /[^\t]/g

  const items = source.split(rBreakLine)
  console.log(items)
  let currentItemObj = null
  items.forEach(item => {
    let len;


    if (/\t/.test(item)) {


      len = item.replace(rNotTap, '').length
      item = item.trim()

      if (len === 1) {
        if (currentItemObj) {
          currentItemObj.owner = Object.keys(currentItemObj.owner)
        }

        currentItemObj = ret[item.trim()] = {
          list: [],
          owner: {}
        }
        // currentItemObj.list = []
        // currentItemObj.level = 1
      }

      if (len >= 2) {
        if (/^@/.test(item)) {
          currentItemObj.owner = getOwner(currentItemObj.owner, item)
        } else {
          len === 2 && currentItemObj.list.push(item)
          let l = currentItemObj.list.length
          if (len > 2) {
            currentItemObj.list[l - 1] = `${currentItemObj.list[l - 1]} ${item}`
          }
        }
      }



      // if (len === 3) {
      //   if (/^@/.test(item)) {
      //     currentItemObj.owner[item] = 1
      //   } else {
      //     currentItemObj.list.push(item)
      //   }
      // }
    }


  })

  if (currentItemObj) {
    currentItemObj.owner = Object.keys(currentItemObj.owner)
  }

  console.log(ret)
  return ret
}

let data = {
  type: 'project',
  attributes: {
    title: '十二月计划',
    items: []
  }
}
const items = data.attributes.items
const originData = parse(sample)
Object.keys(originData).forEach(item => {
  const meta = {}

  if (!originData[item].list.length) {
    meta.type = 'to-do'
    console.log('33333', item)
    meta.attributes = {
      title: (item + ' ' + originData[item].owner.join(' ')).replace('&', '与')
    }
    items.push(meta)
  } else {
    meta.type = 'to-do'
    meta.attributes = {
      title: (item + ' ' + originData[item].owner.join(' ')).replace('&', '与')
    }
    const checkList = []
    originData[item].list.forEach(listItem => {
      checkList.push({
        type: 'checklist-item',
        attributes: {
          title: listItem
        }
      })
    })
    meta.attributes['checklist-items'] = checkList
    items.push(meta)
  }
})

// console.log(data.attributes.items)

data = [data];
console.log('22', data)
// console.log(JSON.stringify(data))
const open = require('open')
open('things:///json?data=' + JSON.stringify(data))
