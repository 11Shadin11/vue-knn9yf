/**
 * Что выведет лог на 12й строке
 */

var b = new B();

function A() {
  this.propA = 1;
}

A.prototype.method = function () {
  console.log(this.propA, this === b);
};

function B() {
  A.call(this);
  this.propB = 2;
}

B.prototype.method = function () {
  this.propA = this.propB;
  A.prototype.method.call(this);
};

b.method();
