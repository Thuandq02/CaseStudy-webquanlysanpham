class ProductManage {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.data = Data.products;
    }

    init() {
        Data.loadData(PRODUCT);
        this.data = Data.products;
        console.log(this.data);
        for (let i = 0; i < this.data.length; i++) {
            let product = new Product(this.data[i]._name, this.data[i]._system, this.data[i]._number, this.data[i]._price, this.data[i]._img);
            this.addProduct(product);
        }
    }

    addProduct(product) {
        this.products.push(product);
    }

    editProduct(product, name, system, number, price, img) {
        product.edit(name, system, number, price, img);
    }

    deleteProduct(index) {
        this.products.splice(index, 1);
    }

    getHtml() {
        let table = `<table border="1px solid" style="border: 1px solid black ; height:200px; width: 1000px; position: relative;">
                        <tr>
                            <th style="font-size: 40px" colspan="7">List Of Products</th>
                        </tr>
                        <tr>
                            <th>Product Name</th>
                            <th>Operating system</th>
                            <th>Product Number</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>`;
        for (let i = 0; i < this.products.length; i++) {
            table += "<tr>" + this.products[i].getHtml() + this.getAction(i) + '</tr>';
        }
        table += `</table>`;
        return table;
    }

    getAction(index) {
        let action = `<th><button class="btn btn-warning btn-md" style="width: 36px" onclick="edit(${index} )">edit</button></th>
                        <th><button class="btn btn-danger btn-md" style="width: 55px" onclick="del(${index} )">delete</button></th>`;
        return action;
    }

    getProductByIndex(index) {
        return this.products[index];
    }
}
