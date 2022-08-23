const fs = require ('fs')

class container {
    constructor(file) {
    this.file = file;
    }
    // save(Object): Number - Recibe un objeto, lo guarda en el file, devuelve el id asignado.
    async save(objProduct) {
    const data = await fs.promises.readFile(`${this.file}/products.txt`,
    "utf-8"
    );
    const products = JSON.parse(data);
    const id = products.length + 1;
    
    objProduct.id = id;    ;
    objProduct.title = title;
    objProduct.price = price;
    objProduct.thumbnail = thumbnail;

    products.push(objProduct);
    const productsString = JSON.stringify(objProduct);
    await fs.promises.writeFile(`${this.file}/products.txt`,productsString);

    return products;
    }
    // getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getProdById(id) {
        const data = await fs.promises.readFile(
        `${this.file}/products.json`,
        "utf-8"
    );
    const products = JSON.parse(data);
    const product = products.find((product) => product.id == id);
    if (product) {
        return product;
    } else {
        return "products no encontrado";
    }
    }
    // getAll(): Object[] - Devuelve un array con los objetos presentes en el file.
    async getAllProducts() {
        try {
        const data = await fs.promises.readFile(
        `${this.file}/products.txt`,
        "utf-8"
        );
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
    }
    // deleteAll(): void - Elimina todos los objetos presentes en el file.
    async deleteAll(){  
        try {
            const data = await fs.promises.readFile(
            `${this.file}/products.txt`,
            "utf-8"
            )
            fs.unlink(`${this.file}/products.txt`, 'utf-8' );
            console.log("the file has been erased")
        } catch (error) {
            return [];
        }
    }
  // deleteById(Number): void - Elimina del file el objeto con el id buscado
    async deleteById(){
        //spliceby id
        try {
            const data = await fs.promises.readFile(
            `${this.file}/products.txt`,
            "utf-8"
            )
            fs.unlink(`${this.file}/products.txt`, 'utf-8' );
        } catch (error) {
            return [];
        }
    }

}

async function start() {
    const db = new container ("data");
    db.save({title: "prod1", price: 100, thumbnail: "www.nada1.com" })
    db.save({title: "prod2", price: 200, thumbnail: "www.nada2.com" }) 
    db.save({title: "prod3", price: 300, thumbnail: "www.nada3.com" })     
}

start(); 






