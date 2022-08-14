//Entrega 1

class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName()//String. Retorna el completo del usuario. Utilizar template strings.
    {
        return `Su nombre de  usuario es ${this.nombre} y su apellido es ${this.apellido} ` 
    }
    addMascota()// void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    { this.mascotas.push("Felipe");
        return this.mascotas;
    }
    countMascotas() //Number. Retorna la cantidad de mascotas que tiene el usuario.
    {
        return this.mascotas.length;  
    }
    addBook(nombre, autor) //void. Recibe un string 'nombre' y un string 'autor' y
    // debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    { 
        this.libros.push ({nombre, autor});
        return this.libros;
    }
    getBookNames()// String[]. Retorna un array con sólo los nombres del array de libros del usuario. 
    {
        return this.libros.map((search )=> search.nombre);   
    }
}

const user = new Usuario (
    "Sebastian",
    "Ortega",
    [
    {
        nombre: "El principito",
        autor: "Antoine de Saint-Exupéry"
    },
    {
        nombre: "Siete vidas",
        autor: "John Ray Grisham"
    },
    ],
    ["hamster","leon","gato"]
);

console.log(user);

console.log(user.getFullName());

console.log(user.addMascota("Serpiente"));

console.log(`La cantidad de mascotas en el arreglo es = ${user.countMascotas()}`);

console.log(user.addBook("La piedra filosofal", "J. K. Rowling"));




