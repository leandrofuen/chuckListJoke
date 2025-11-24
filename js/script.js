console.log("Empezamos")




const fetchJoke= document.getElementById ('fetchJoke')
const jokeList= document.getElementById ('jokeList')


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
            const btn= document.createElement('button')
            btn.textContent="Eliminar"
            btn.style.marginLeft="10px"
            btn.addEventListener("click",()=>{
                li.remove()
            chistes=chistes.filter(chiste=>chiste !==data.value) 
            guardarLocalStorage(chistes)   
            
            })

            li.appendChild(btn)

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
