function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subpropety = false
}

// 继承
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subpropety
}

// var instace = new SubType()

// alert(instace.getSuperValue()) // true


// class SuperType {
//   constructor (){
//     this.property = true
//   }

//   getSuperValue() {
//     return this.property
//   }
// }

// class SubType extends SuperType {
//   constructor() {
//     super()
//     this.subpropety = false
//   }

//   getSubValue() {
//     return this.subpropety
//   }
// }

var instace = new SubType()

// alert(instace.getSuperValue()) // true