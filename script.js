// store logic
function Inventory() {
  this.product = {};
  this.currentId = 0;
}

Inventory.prototype.addInventory = function(item) {
  item.id = this.assignId();
  this.product[item.id] = product;
}

Inventory.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Inventory.prototype.findInventory = function(id) {
  if (this.product[id] !== undefined) {
    return this.product[id];
  }
  return false;
}

Inventory.prototype.deleteInventory = function(id) {
  if (this.product[id] === undefined) {
    return false;
  }
  delete this.product[id];
  return true;
}

// Product logic
function Product(type, price, quantity, brand) {
  this.type = type;
  this.price = price;
  this.quantity = quantity;
  this.brand = brand;
}

// Ui logic

let inventory = new Inventory();


function handleFormSubmission(event) {
  event.preventdefault();
  const type = document.getElementById("new-type").value;
  const price = document.getElementById("new-price").value;
  const quantity = document.getElementById("new-quantity").value;
  const brand = document.getElementById("new-brand").value; 
  const product = new Product(type, price, quantity, brand);
  inventory.addInventory(product);
  return false;
}

  window.addEventListener("load", function() {
    document.getElementById("new-product").addEventListener("submit", handleFormSubmission);
  });
// window.onload = function() {
//     const form = document.querySelector ("form");
//     form.onsubmit = function(event) {
//         event.preventDefault();
//         const type = document.querySelector("new-type").value;
//         const price = document.querySelector("new-price").value;
//         const quantity = document.querySelector("input#new-quantity").value;
//         const brand = document.querySelector("input#new-brand").value;
//          inventory.addInventory(newInventory);
//         console.log(inventory.product);

//     }
// }
