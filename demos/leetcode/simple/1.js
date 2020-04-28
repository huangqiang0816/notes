let arr = [{
  name: 'name1'
}, {
  name: 'name2'
}]

let res = arr.reduce((name, item) => {
  console.log('names',name);
  console.log(item.name);
  return name + ',' + item.name
}, '')
console.log(res);