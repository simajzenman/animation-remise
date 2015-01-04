
$(document).ready(function(){

var factContent= document.getElementsByClassName("factContent")[0],
	factPoint= document.getElementsByClassName("factPoint")[0],
	factBack= document.getElementsByClassName("factBack")[0],
	poubelle= document.getElementsByClassName("poubelle")[0],
	factLink= document.getElementsByClassName("factLink")[0],
	factMove= document.getElementsByClassName("factMove")[0],
	loading= document.getElementsByClassName("anime3")[0],
	arrow= document.getElementsByClassName("arrow")[0],
	factme= document.getElementsByClassName("factme")[0]
	burger= document.getElementsByClassName("burger")[0],
	addFact= document.getElementsByClassName("menuButton--addFact")[0],
	myFact= document.getElementsByClassName("menuButton--myFact")[0],
	burger1= document.getElementsByClassName("burger1")[0],
	addFact1= document.getElementsByClassName("menuButton--addFact1")[0],
	myFact1= document.getElementsByClassName("menuButton--myFact1")[0],
	burgerCheck=false;
	burgerCheck1=false;




	factContent.addEventListener("click",function(){

	factContent.classList.remove("factContentBack");
	factPoint.classList.remove("factMainBack");


	factContent.classList.add("factContentGo");
	factPoint.classList.add("factMainGo");



});



	factBack.addEventListener("click",function(){


	factPoint.classList.remove("factMainGo");
	factPoint.classList.add("factMainBack");


	


				setTimeout(function(){
  	factContent.classList.remove("factContentGo");
	factContent.classList.add("factContentBack");

 }, 300);

});

		loading.addEventListener("click",function(){


			arrow.classList.add("chargement");
			factme.classList.add("title");

							setTimeout(function(){

			arrow.classList.remove("chargement");
			factme.classList.remove("title");



 }, 5100);





	



});


		burger.addEventListener("click",function(){

if (burgerCheck == false) {burgerCheck = true} else {burgerCheck = false};
	
	if (burgerCheck == true) {

	haut.classList.remove("hautBack");
	bas.classList.remove("basBack");
	burger.classList.remove("burgerBack");
	myFact.classList.remove("menu1Back");
	addFact.classList.remove("menu2Back");

	haut.classList.add("hautGo");
	bas.classList.add("basGo");
	burger.classList.add("burgerGo");
	myFact.classList.add("menu1Go");
	addFact.classList.add("menu2Go");


	$("#milieux").css("opacity","0");

	}

	if (burgerCheck == false) {

haut.classList.remove("hautGo");
	bas.classList.remove("basGo");
	burger.classList.remove("burgerGo");
	myFact.classList.remove("menu1Go");
	addFact.classList.remove("menu2Go");

		haut.classList.add("hautBack");
	bas.classList.add("basBack");
	burger.classList.add("burgerBack");
	myFact.classList.add("menu1Back");
	addFact.classList.add("menu2Back");

	$("#milieux").css("opacity","1");
	

	}




});

				burger1.addEventListener("click",function(){

if (burgerCheck1 == false) {burgerCheck1 = true} else {burgerCheck1 = false};
	
	if (burgerCheck1 == true) {

	haut1.classList.remove("hautBack");
	bas1.classList.remove("basBack");
	burger1.classList.remove("burgerBack");
	myFact1.classList.remove("menuScaleBack");
	addFact1.classList.remove("menuScaleBack");

	haut1.classList.add("hautGo");
	bas1.classList.add("basGo");
	burger1.classList.add("burgerGo");
	myFact1.classList.add("menuScaleGo");
	$("#milieux1").css("opacity","0");
								setTimeout(function(){

			
	addFact1.classList.add("menuScaleGo");


 }, 170);
	


	

	}

	if (burgerCheck1 == false) {

haut.classList.remove("hautGo");
	bas1.classList.remove("basGo");
	burger1.classList.remove("burgerGo");
	addFact1.classList.remove("menuScaleGo");

		haut1.classList.add("hautBack");
	bas1.classList.add("basBack");
	burger1.classList.add("burgerBack");
	$("#milieux1").css("opacity","1");
	addFact1.classList.add("menuScaleBack");
	setTimeout(function(){

			
	myFact1.classList.remove("menuScaleGo");
	myFact1.classList.add("menuScaleBack");


 }, 170);
	

	
	

	}




});




$(".poubelle").hide();



	factLink.addEventListener("click",function(){

factLink.classList.add("checked");
$(".factLink--check").css("opacity","1");
$(".factLink--check").css("-webkit-transform","rotateY(0)");
$(".factMove").css("-webkit-transform","translateX(0)");
 $(".poubelle").show(350);
 $(".factLink").addClass("checked");


});


$(".poubelle").click(function(){

  $(".checked").css("-webkit-transform","scaleY(0)");
});


});

console.log(bas);