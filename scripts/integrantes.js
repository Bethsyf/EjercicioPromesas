document.addEventListener('DOMContentLoaded', ()=>{
  let foto = "https://avatars.githubusercontent.com/u/85469419?v=4"  
  let cardBet = document.getElementById("f10");
    
        cardBet.innerHTML=`<div class="card" style="width: 18rem; text-align: center;">
        <img  style="width: 100%;" src="https://res.cloudinary.com/dmaviub4l/image/upload/v1648677306/20220122_132009_aabibx.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title">Bethsy Falcon</h1>
          <p class="card-text">Tengo 39 años, he tenido un poco de contacto con la programacion con Python y Java, soy venezolana y actualmente resido en Medellin, me gusta mucho la tecnologia en especial lo relacionado a la web </p>
          </div>
        </div>
        <div class="p-3 bg-info card border-dark bg-gray mr-9" style="width: 18rem;">
        <img class="card-img-top" src=${foto} alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Miguel Arias</h5>
        <p class="card-text">Soy de Bogota tengo 27 años, tengo conocimentos de python, sql y JAVA.</p>
      </div>
    </div>`
        })


        document.addEventListener('DOMContentLoaded', ()=>{
          let div = document.getElementById('f10')
          div.innerHTML += `
          <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <img src="https://avatars.githubusercontent.com/u/98240755?s=400&u=b5dcb5e18612fb859484164b2b6f172f4667759d&v=4" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Isaac Gomez</h5>
          </ul>   
          <ul class="card-text"><li>Tengo 20 años</li>
          <h5>Conocimiento:</h3>
          <li>Al comenzar ninguno, ahora pues no mucho</li>
          <h5>Ciudad:</h3>
          <li>soy de Bogota</li>
          <h5>Gustos:</h3>
          <li>Me gusta mucho programar, la musica, etc.</li>
      
          </ul>
        </div>
      </div>
          `
       })

