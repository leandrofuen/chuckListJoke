console.log("empezamos")

//[Chuck Norris API](https://api.chucknorris.io/jokes/random)

// const miBoton = document.createElement('button');

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







const fetchJoke= document.getElementById('fetchJoke')
const jokeList= document.getElementById('jokeList')

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
            const li = document.createElement("li");
            li.textContent = data.value;
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
