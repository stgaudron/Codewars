const validateBattlefield = (field) => {

const extend = (arr) => {
  let f = arr
    for (let i = 0; i<10; i++){
      f[i].push(0)
      f[i].unshift(0)
    }
    f.push([0,0,0,0,0,0,0,0,0,0,0,0])
    f.unshift([0,0,0,0,0,0,0,0,0,0,0,0])
  return f
}

const checkPos = (arr) => {
  let isAdjacent = false
  let isCornerTouched = false
  for (let i=1; i<10; i++) {
    for (let j=1; j<10; j++) {
      isAdjacent = arr[i][j] == 1 && arr[i][j+1] == 1 && arr[i+1][j] == 1
      if (isAdjacent == true)
        return false
      isCornerTouched = arr[i][j] == 1 && (arr[i+1][j+1] == 1 || arr[i+1][j-1] == 1 || arr[i-1][j+1] == 1 || arr[i-1][j-1] == 1)
      if (isCornerTouched == true)
        return false
    }
  }
  return true
}

let sum = 0
const checkSum = (arr) => {
  for (i of arr) {
    for (e of i) {
    if (e == 1) sum += 1
    }
  }
  return sum
}

const f = extend(field)

const boatCoord = (arr) => {
  let bCoord = []
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (arr[i][j] == 1) {
        bCoord.push([i,j])
      }
    }
  }
  return bCoord
}

let coords = boatCoord(f)

  let rCoords = []
  let boatsMap = []
  let fArr = [...coords]
  
  const populate = (arr) => {
    let boatSize = 1
    let prev = [0,0]
    let boatMap = []
    let bMap = []
    let horizontalCoords = []
    while (arr.length){
      let cur = arr.shift()
      if (cur[0] == prev[0]) {
        if (cur[1] == prev[1] + 1) {
          boatSize ++
          horizontalCoords.includes(prev) ? horizontalCoords.push(cur) : horizontalCoords.push(prev) && horizontalCoords.push(cur)
        }
      }
      else {
        boatMap.push(boatSize)
        boatSize = 1
      }
      
      prev = cur
    }
    if (boatSize !=1) boatMap.push(boatSize)
    bMap = boatMap.filter(v => v != 1)
    return [bMap, horizontalCoords]
  }
  
  let [boats, ...hCoords] = populate(fArr)
  rCoords = hCoords[0]
  let curArr = coords.filter(v => !rCoords.includes(v))
  let revArr = curArr.map(e => e.reverse()).sort()
  
  let sArr = [...revArr]
  let [vMap, ...vCoords] = populate(revArr)
  let rArr = sArr.filter(v => !vCoords[0].includes(v))
  let boatCheck = boats.concat(vMap).sort()
  let boatModel = [2,2,2,3,3,4]
  
  return checkSum(f) == 20 && checkPos(f) && boatModel.length === boatCheck.length && boatModel.every(e => boatCheck.includes(e)) && rArr.length == 4  ? true : false
}