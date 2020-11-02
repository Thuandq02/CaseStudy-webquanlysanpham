let shop = new ProductManage();
shop.init();
display(shop.getHtml());
let currentProduct = 0;

function display(table) {
    document.getElementById('product-manage').innerHTML = table;
    Data.saveData(shop.products, PRODUCT);
}

function addProduct() {
    let name = document.getElementById("add-name").value;
    let system = document.getElementById("add-system").value;
    let number = document.getElementById("add-number").value;
    let price = document.getElementById("add-price").value;
    let img = document.getElementById("add-img").value;

    let product = new Product(name, system, number, price, img);
    shop.addProduct(product);
    display(shop.getHtml());
    document.getElementById('form-add').reset();
}

function edit(index) {
    document.getElementById('form-edit').style.display = "inline-block";
    let product = shop.getProductByIndex(index);
    document.getElementById('edit-name').value = product.name;
    document.getElementById('edit-system').value = product.system;
    document.getElementById('edit-number').value = product.number;
    document.getElementById('edit-price').value = product.price;
    document.getElementById('edit-img').value = product.img;
    currentProduct = index;
}

function editProduct() {
    let name = document.getElementById("edit-name").value;
    let system = document.getElementById("edit-system").value;
    let number = document.getElementById("edit-number").value;
    let price = document.getElementById("edit-price").value;
    let img = document.getElementById("edit-img").value;
    shop.products[currentProduct].edit(name, system, number, price, img);
    display(shop.getHtml());
    document.getElementById('form-edit').reset();
    document.getElementById('form-edit').style.display = "none";
}

function del(index) {
    shop.deleteProduct(index);
    display(shop.getHtml());
}