 

let arrNames  = ["jeremias","julio","joel","javier","jerson","majoana","julio","mario","jose"]
let clases = ["red","blue","magenta","pink","orange","aqua"]
let input = document.getElementById("input")
let button = document.getElementById("button")

	button.addEventListener("click", function(){
		 
		for(let i=0;i<arrNames.length; i++){
			if(input.value.toUpperCase().toLowerCase() === arrNames[i].toUpperCase().toLowerCase()){
				let aleatory = (Math.random(i) * 6);
				let span = document.createElement("p")
					
 			
				let cre = document.createElement("li");
					cre.setAttribute("class", clases[i])
					cre.textContent = arrNames[i];

					span.textContent = `Usuarios encontrados con '${input.value}'`;
					span.setAttribute("class", "span")
					
				
					document.body.appendChild(span)
					document.body.appendChild(cre)
					input.value = ''
					break
			}	
			else{
				if(input.value.toUpperCase().toLowerCase().substr(0,3) == arrNames[i].toUpperCase().toLowerCase().substr(0,3)){
					let aleator = (Math.random(i) * 6);
  					let coinc = document.createElement("p")
  					
  					let creates = document.createElement("li");
  						creates.setAttribute("class", clases[i])
  						creates.textContent = arrNames[i];

  						coinc.setAttribute("class", "span")
  						coinc.textContent = 'Coincidencias'

  						document.body.appendChild(coinc)
  						document.body.appendChild(creates)

  						input.value = ''
				 
				}
			}
		}


	},false);
