function sayHello() {
  var name;
  this.setName = function(argName) {
    name = argName;
  };

  this.sayName = function() {
    console.log("Hello" + name);
  };
}

module.exports = sayHello;
