const fs = require ('fs')

class contenedor {
    constructor(archivo) {
    this.archivo = archivo;
    }
    //*  crear producto
    async createProduct(objProduct) {
    const data = await fs.promises.readFile(
    `${this.archivo}/productos.json`,
    "utf-8"
    );
    const productos = JSON.parse(data);
    const id = productos.length + 1;

    objProduct.id = id;

    objProduct.likes = [];
    productos.push(objProduct);
    const productosString = JSON.stringify(objProduct);
    await fs.promises.writeFile(`${this.archivo}/productos.json`,productosString);

    return productos;
    }
    async getProdById(id) {
        const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
    );
    const productos = JSON.parse(data);
    const producto = productos.find((producto) => producto.id == id);
    if (producto) {
        return producto;
    } else {
        return "producto no encontrado";
    }
    }
    async getAllUsers() {
        try {
        const data = await fs.promises.readFile(
        `${this.archivo}/productos.json`,
        "utf-8"
        );
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
    }
    // deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    // deleteAll(): void - Elimina todos los objetos presentes en el archivo.
}  


// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.




// Podemos listar algunas de ellas:
// readFile: lectura de un archivo en forma asincrónica
// writeFile: escritura de un archivo en forma asincrónica
// appendFile: actualización de un archivo en forma asincrónica
// unlink: borrado de un archivo en forma asincrónica
// mkdir: creación de una carpeta


