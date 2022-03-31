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

