/* clignotement à la k2000*/
//VARIABLES K2000
	var ledOn=false;
	var ledOns=[];
	var numLedOn=0;
	var increment = 1;
	var led = document.getElementsByClassName("ampoule");
	var start = false;
	var timer;

//VARIABLE DE CREATION 
	

//K2000
	// CLIGNOTEMENT SEUL 
		function clignote(n){
				if (ledOns[n]===false){//allume la lampe
					ledOns[n] = true;
					led[n].style.opacity = "1";
					}else{//étein la lampe
						ledOns[n] = false;
						led[n].style.opacity = "0.2";
						}
			console.log("ok");
		}

	//CHENILLEMENT 
		function chenille2(){
			led[numLedOn].style.opacity = "0.2"; 
			if (numLedOn===8) {// allume vers la droite
				increment = -1;
				}else if (numLedOn===0) {//allume vers la gauche
					increment =1;
				}
			numLedOn = numLedOn+increment ;
			led[numLedOn].style.opacity = "0.5";
		}
			//timer = setInterval(chenille2,1000);

	// BOUTON D'ARRET
		function startStop(){
			if (start===false) {
				start=true;
				timer = setInterval(chenille2,100);
				document.getElementById("butStop").innerText="stop";
			}else{
				clearInterval(timer);
				start=false;
				document.getElementById("butStop").innerText="Start";

			}
		}

		document.getElementById('butStop').addEventListener("click", startStop);

	//initialisation à true du tableau des leds
		
		//COULEURS

			//rend bleu l'élément survolé par la souris
				function bleu (e){
							//console.log("e");
					var ledB = document.getElementsByClassName("led"+e);
					e.target.src = "./img/point_bleu.png";
				}
			//rend rouge de nouveau l'élément survolé par la souris
				function rouge (e){
							//console.log("e");
					var ledB = document.getElementsByClassName("led"+e);
					e.target.src = "./img/point_rouge.png";
				}
	// EVENEMENTS
		function init(){
			for (var i = 0; i < led.length; i++) {
				ledOns.push(true);
			//rend bleu l'élément survolé par la souris
				led[i].addEventListener("mouseenter", function(e){bleu(e);})
				led[i].addEventListener("mouseleave", function(e){rouge(e);})
			}
		}

		init();

	//Clignotements indépendants

		/*	var ti = setInterval(function(){clignote(0);}, 75);
			var ti = setInterval(function(){clignote(1);}, 100);
			var ti = setInterval(function(){clignote(2);}, 75);
			var ti = setInterval(function(){clignote(3);}, 150);
			var ti = setInterval(function(){clignote(4);}, 75);
			var ti = setInterval(function(){clignote(5);}, 200);
			var ti = setInterval(function(){clignote(6);}, 75);
			var ti = setInterval(function(){clignote(7);}, 250);
		*/

//CREATION

		/* cretation d'un nouveau */
		function nouveau(){
			console.log("coucou");
			var creaLi=document.createElement("li");
			var creaImg=document.createElement("img");
			creaImg.getElementsByClassName("ampoule");
			creaImg.src=("./img/point_rouge.png");
			document.getElementById("k2000").appendChild(creaLi);
			creaLi.appendChild(creaImg);
	}

		document.getElementById('creation').addEventListener("click", nouveau);
