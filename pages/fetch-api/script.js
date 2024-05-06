

let url = " https://pens-api.vercel.app/api/pens/1";
function getPen() {

    // == Using fetch api to get single pen and replace the below pen variable
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
      
          const penListDiv = document.getElementById("single-pen");

          const penElement = createPenElement(data);
          penListDiv.appendChild(penElement);

      
    })
    
    
   
    // ===
    function createPenElement(pen) {
      const penDiv = document.createElement("div");
      penDiv.classList.add("col-3", "text-center");
    
      const penColorDiv = document.createElement("div");
      penColorDiv.classList.add("pen-color");
      penColorDiv.style.backgroundColor = pen.color;
    
      const penNameP = document.createElement("p");
      penNameP.textContent = pen.name;
    
      penDiv.appendChild(penColorDiv);
      penDiv.appendChild(penNameP);
    
      return penDiv;
    }

}



// call function getPen
getPen();
