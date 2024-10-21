const personas = ["Juan", "Laura", "Patricia", "María", "Paula"];

// console.log(personas[3])

// desestructuración arrays

// const [persona1,persona2,p3,p4] = personas
const [, , , , p1, pepito] = personas;
// console.log(pepito);

//**DESESTRUCTURACIÓN OBJETOS */

const Usuario = {
  nombre: "Javier",
  email: "javi@gmail.com",
  registrado: true,
  familia: {
    nombre: "pepe",
  },
  seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
};

// console.log(Usuario.email)
// console.log(Usuario["registrado"])
// console.log(Usuario.seguidores[4])
// const {
//   nombre,
//   registrado,
//   email: correo,
//   edad = 20,
//   familia,
//   seguidores,
// } = Usuario;
// // console.log("datos",email,nombre,registrado)
// const { nombre: nombre1 } = familia;
// const [, , , , delegado] = seguidores;
// console.log(delegado)

const Pokemon = {
  count: 1126,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
  ],
};
// console.log(Pokemon.count)
// const {count,results} = Pokemon
// const [,poke2] = results
// const {name} = poke2
// console.log(name)
// const {results} = Pokemon
// const [,,poke3] = results
// const {url,name} = poke3
// console.log(name)

function sum(a, b, c, d) {
  console.log(a, b, c, d);

  return a + b + c + d;
}

const numbers = [1, 2, 3, 7];

// console.log(sum(numbers));
// console.log(sum([1, 2, 3],"pepe",2));
//spread operator
// console.log(sum(...numbers));
// console.log(sum(1, 2, 3));

const array1 = ["patata", "tomate", "lechuga"];
const array2 = [1, true, "chocolate"];
const array3 = [...array1, ...array2];
// console.log(array3);
const objeto1 = {
  a: 10,
  b: "caracola",
};

const objeto2 = {
  c: 2,
  d: "cocacola",
};
const objeto3 = { ...objeto1, ...objeto2, a: objeto2.c + objeto1.a };
// console.log(objeto3);
// const concatenarArray = [...array1, ...array2]
// console.log(concatenarArray)

// const mergearObjeto = {...objeto1, ...objeto2}
// console.log(mergearObjeto)

const Usuario2 = {
  nombre: "Laura",
  email: "laura@gmail.com",
  edad: 31,
  registrado: false,
  seguidores: ["Ger", "Gabriel", "Angela"],
};

const { edad, registrado, ...losdemas } = Usuario2;
// console.log(losdemas);

function listarArticulos(...articulos){ //rest operator
    console.log(...articulos);//spread operator
}

listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
listarArticulos(2)