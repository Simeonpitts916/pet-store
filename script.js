// store logic
function Inventory() {
  this.product = {};
  this.currentId = 0;
}

Inventory.prototype.addInventory = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
}

// Product logic
function Products(type, price, quantity, brand) {
  this.type = type;
  this.price = price;
  this.quantity = quantity;
  this.brand = brand;
}