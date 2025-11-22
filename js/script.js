console.log("empezamos")

//[Chuck Norris API](https://api.chucknorris.io/jokes/random)


// //////////////////////////////////////////////////////////
// const miBoton = document.createElement('button');
// EXPLICACION BOTON/////////////////////////////////////////
//   // 2. Dale un texto al botón
//   miBoton.innerText = 'Haz clic aquí';

//   // 3. Añade un ID (opcional) para estilos o funcionalidad
//   miBoton.id = 'miBotonJS';

//   // 4. Añade un manejador de eventos (opcional)
//   miBoton.onclick = function() {
//     alert('¡Has hecho clic en el botón!');
//   };

//   // 5. Obtén el contenedor donde quieres poner el botón
//   const contenedor = document.getElementById('contenedor');

//   // 6. Añade el botón al contenedor
//   contenedor.appendChild(miBoton);
// ////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////
// - 📄 **index.html**: Contiene la estructura HTML básica.
// - 📁 **css**: Hoja de estilo básica para dar estilo a la interfaz.
// - 📁 **js**: Código JavaScript que maneja la lógica de obtener, mostrar y eliminar chistes.

// ## Pistas e ideas

// La idea podría ser la siguiente 
// - Manejador de click en el botón "Obtener Chiste" ---->>>>> OK
// - Una función para obtener un chiste de Chuck Norris desde la API -------> OK
// - Una función para renderizar la lista de chistes en el DOM-----> OK
// - Una función para guardar la lista de chistes en localStorage ---->  NOS FALTA !!
// - Una función para cargar la lista de chistes desde localStorage --->>>> NOS FALTA

// revisar si fuera necesario `JSON.stringify` y `JSON.parse` para los datos del localStorage

// ## BONUS
// Como BONUS crear un botón para eliminar todos los elementos a la vez y/o un botón para eliminar uno a uno el elemento seleccionado 
// - Manejador de click en los botones de eliminación (se eliminará desde el local storage como del DOM)

// ## API Utilizada

// - [Chuck Norris API](https://api.chucknorris.io/jokes/random)



// - Una función para guardar la lista de chistes en localStorage ---->  NOS FALTA !!
// - Una función para cargar la lista de chistes desde localStorage --->>>> NOS FALTA



const fetchJoke= document.getElementById('fetchJoke')
const jokeList= document.getElementById('jokeList')
const miBotonEliminar = document.createElement('button');

const contenedor = document.getElementById('eliminar');


let chistes=[]


fetchJoke.addEventListener('click', ()=>{                    
    fetch('https://api.chucknorris.io/jokes/random')        

    .then((response)=> {                                    

        if(!response.ok) {                                  
            throw new Error('causo error')                  
        }


        return response.json()                              
         })


         .then((data)=>{  
            
            // AQUI CREABAMOS EL LI PARA CADA CHISTE
            const li = document.createElement("li");
            li.textContent = data.value;
            // AQUI HE AGREGADO EL BOTON ELIMINAR DENTRO DE LA EJECUCION
            const botonDelete = document.createElement("button")
            //le agregamos el texto dentro
            botonDelete.innerText= "eliminar";
            // agregamos el evento del boton
             botonDelete.addEventListener("click",()=>{
                li.remove(); //<---- si clikas , elimina el li del chiste
             }) 
             // AHORA LO METEMOS DENTRO DEL LI
             li.appendChild(botonDelete)  

            jokeList.appendChild(li);
            
            chistes.push(data.value);

            
            guardarLocalStorage(chistes);                             
            
                         
         })                                                
})                                                         

function guardarLocalStorage(chistes) {
    
    localStorage.setItem("chistes", JSON.stringify(chistes))

}
 guardarLocalStorage()

 console.log(localStorage)
