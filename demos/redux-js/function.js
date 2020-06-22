const isObject = _ => Object.prototype.toString.call(_) === "[object Object]";
const isArray = _ => Object.prototype.toString.call(_) === "[object Array]";
function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}
// 去除Vue 响应式数据
Object.prototype.getOwnPropertyNamesHelp = function(obj) {
  let result = Object.getOwnPropertyNames(obj);
  return result.filter(item => item !== "__ob__" && obj[item] !== "");
};

function compareObj(obj1, obj2) {
  const props1 = Object.getOwnPropertyNamesHelp(obj1);
  const props2 = Object.getOwnPropertyNamesHelp(obj2);

  if (props1.length !== props2.length) {
    return false;
  }
  for (var i = 0, max = props1.length; i < max; i++) {
    var propName = props1[i];
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }
  return true;
}
// 处理数组 过滤空数组和数值全部位 '' 的数据
function normalizeArray(list) {
  return list.filter(
    item => isPrimitive(item) || (Object.keys(item).length && !isEmptyObj(item))
  );
}
// arr1
function compareList(arr1, arr2, configs) {
  if (!arr1.length && !arr2.length) {
    return true;
  }
  // 数组长度不相等
  let cur1 = normalizeArray(arr1);
  let cur2 = normalizeArray(arr2);

  console.log("cur1", cur1);
  console.log("cur2", cur2);

  if (cur1.length !== cur2.length) {
    // 数据长度不一致  不相等
    return false;
  } else {
    let item1 = arr1[0];
    // if (!configs.length) {
    //   throw new Error("请传入configs");
    // }
    // 指定要比较的项目 configs 默认比较全部
    configs = configs.length ? configs : Object.keys(item1);
    console.log(configs);

    // if (!configs.length) {
    //   throw new Error("请传入configs");
    // }
    return compareArrayByConfig(arr1, arr2, configs);
  }
}
//
function compareArrayByConfig(arr1, arr2, config) {
  let isDifferent = true;
  for (let i = 0; i < config.length; i++) {
    let itemName = config[i];
    let str1 = getStrByName(arr1, itemName);
    let str2 = getStrByName(arr2, itemName);
    console.log(str1);
    console.log(str2);

    if (str1 !== str2) {
      isDifferent = false;
      break;
    }
  }
  return isDifferent;
}

function getStrByName(arr, name) {
  let str = "";
  arr.forEach(item => {
    str += `${item[name]},`;
  });
  return str;
}
function compare(obj1, obj2, configs = []) {
  // 对象比较
  if (isObject(obj1) && isObject(obj2)) {
    return compareObj(obj1, obj2);
  } else if (isArray(obj1) && isArray(obj2)) {
    return compareList(obj1, obj2, configs);
  }
}

// 空对象
function isEmptyObj(obj) {
  let isEmpty = true;
  for (const [key, value] of Object.entries(obj)) {
    if (value !== "") {
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}

let list1 = [
  {
    name: "1",
    age: "2"
  },
  {
    name: "2",
    age: "111"
  }
];

let list2 = [
  {
    name: "1",
    age: "233"
  },
  {
    name: "3",
    age: "222"
  }
];
// let obj1 = {
//   name: "1",
//   age: "2"
// };
// let obj2 = {
//   name: "1",
//   age: "2"
// };
// let obj3 = {
//   name: "2",
//   age: "2"
// };

console.log(compare(list1, list2, ["name"]));
// console.log(compare(list1, list2));
// console.log(compare(list1, list2));
