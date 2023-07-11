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
function Products(type, price, quantity, brand) {
  this.type = type;
  this.price = price;
  this.quantity = quantity;
  this.brand = brand;
}

// Ui logic

// window.addEventListener("load", function() {
//   document.querySelector("form#new-product").addEventListener("submit", handleFormSubmission);
// });

// let inventory = new Inventory();

// function handleFormSubmission(event) {
//   event.preventdefault();
//   const type = document.querySelector("input#new-type").value;
//   const price = document.querySelector("input#new-price").value;
//   const quantity = document.querySelector("input#new-quantity").value;
//   const brand = document.querySelector("input#new-brand").value;
//   inventory.addInventory(newInventory);
//   console.log(inventory.product);
// }

//   window.addEventListener("load", function() {
//     document.querySelector("form#new-product").addEventListener("submit", handleFormSubmission);
//   });
window.onload = function() {
    const form = document.querySelector ("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        const type = document.querySelector("input#new-type").value;
        const price = document.querySelector("input#new-price").value;
        const quantity = document.querySelector("input#new-quantity").value;
        const brand = document.querySelector("input#new-brand").value;
         inventory.addInventory(newInventory);
        console.log(inventory.product);

    }
}
