function Point2D(x, y) {
  this._x = x;
  this._y = y;
}

function Ponit3D(x, y, z) {
  Point2D.call(this, x ,y);
  this._z = z;
}

console.log(new Ponit3D(1, 2 ,3));