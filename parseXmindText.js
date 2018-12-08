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

parse(sample)
