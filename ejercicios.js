//crear una lista de 10 ejercicios y hacer una funcion que muestre la lista de ejercicios. Imprimir en el documento en una lista
//el ejercicio y la descripcion.

let ejercicios = [
    {
        ejercicio: "Ejercicio 1",
        archivo: "e1.html",
        descripcion: "Ejercicio 1",
    },
    {
        ejercicio: "Ejercicio 2",
        archivo: "e2.html",
        descripcion: "Ejercicio 2",
    },
    {
        ejercicio: "Ejercicio 3",
        archivo: "e3.html",
        descripcion: "Ejercicio 3",
    },
    {
        ejercicio: "Ejercicio 4",
        archivo: "e4.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 5",
        archivo: "e5.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 6",
        archivo: "e6.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 7",
        archivo: "e7.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 8",
        archivo: "e8.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 9",
        archivo: "e9.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    },
    {
        ejercicio: "Ejercicio 10",
        archivo: "e10.html",
        descripcion: "Hacer una funcion que muestre la lista de ejercicios",
    }
];

//Buscar el elemento que tiene la clase listaEjercicios
let listaEjercicios = document.querySelector(".listaEjercicios");
//Crear una funcion que muestre la lista de ejercicios
function mostrarListaEjercicios() {
    let numero = 1;
    //Recorrer el array ejercicios
    for (let i = 0; i < ejercicios.length; i++) {
        //Crear un elemento li
        let li = document.createElement("li");

        //add some classes to the li
        li.classList.add("text-center");
        li.classList.add("font-bolder");
        li.classList.add("bg-blue-600");
        li.classList.add("text-white");
        li.classList.add("p-1");
        li.classList.add("text-lg");
        li.classList.add("uppercase");

        //Agregar el elemento li al elemento ul
        listaEjercicios.appendChild(li);

        //Create a anchor tag inside the li
        let a = document.createElement("a");
        //Add some classes to the a
        a.classList.add("text-center");
        a.classList.add("font-bolder");

        //Add the href to the a
        a.href = ejercicios[i].archivo;
        //Add the text to the a
        a.innerHTML = "Ejercicio " + parseInt(i+1);
        //Add the a to the li
        li.appendChild(a);

        
    }

    //Extract the file name from the url
    let url = window.location.href;
    let fileName = url.substring(url.lastIndexOf('/') + 1);
    //Clear all non-numbers from the file name
    numero = fileName.replace(/[^0-9]/g, '');
    //Print the description of the exercise in the document taking the numero variable
    let descripcion = document.getElementById("descripcion");
    descripcion.innerHTML = ejercicios[numero-1].descripcion;


}
//Llamar a la funcion
mostrarListaEjercicios();