console.log("empezamos")

//[Chuck Norris API](https://api.chucknorris.io/jokes/random)








/*CREAMOS LAS VARIABLES,PREFERIBLE CREARLAS CON EL MISMO NOMBRE QUE TIENEN EN EL ID DEL HTML PARA NO PERDERSE
 Y CAPTURAMOS LOS BOTONES CON EL "document.getElementByid("nombre del ID")"*/
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
