Description: Products(type, price, quantity, brand);

Test: "It will add type, price, qty, and brand to the product object"
Code: const newProduct = new Products("biscuits", "$30", "12", "scruffies");
      newProduct;
Expected Output: Object { type: "biscuits", price: "$30", quantity: "12", brand: "scruffies" }

Description: Inventory();

Test: "It should add the product to the inventory function"
Code: const products = new Inventory();
      
Expected Output: 