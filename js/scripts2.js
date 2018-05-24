$(document).ready(function () {	
	$("div.tel").prepend("<p class=tel>telefono: 123456789</p>");
	var c = ["blo", "tex", "tex", "blo", "tex", "tex", "blo", "tex", "tex"]
	var a = ["Direccion", "345 Setwand master", "Washitond United State", "Telefono", "123123123", "12341234", "Email", "example@server.com", "example@server.com"];
	for (var i = a.length - 1; i > -1; i--) {
   $("p.Dir").prepend("<p class= " + c[i] + ">" + a[i] +  "</p>");
   }
   var Cmenu = ["Home", "Shop", "About", "Contact_us"];
   var Clm = "bot";
   for (var i = Cmenu.length - 1; i > -1; i--) {
		$("div.nav").prepend("<a href="+ Cmenu[i] + ".html >"   +"<div class=" +  Clm + " >" + Cmenu[i] + "</div> </a>" );   	
   	}
  
   	 var img1 = "img/im/wp";
   var imgex1 = ".jpg";
   var imgtext1 = ["<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>>", "<p>Camista </p><h2>50€</h2>>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>", "<p>Camista </p><h2>50€</h2>"];
   var Cimg = "col block cent";
   var Simg = " style=width: 10px; "
   var cont = 1;
   var div = "<div class=fil> \n";
   var div2 = "<div class=col gran cent> \n"
   var r = "";
   var url = ["1", "2", "4", "7", "8", "9", "10", "11"];
   for(var i = 0; i < url.length; i++){
   url[i] = img1 + url[i] + imgex1;
   }
  	for (var i = 0; i < url.length; i++) {
  		var simg = "<img  src=" + url[i] + " class=" + Cimg + Simg + ">" + "<p class=gran2>" +imgtext1[i] + "</p>";// este si que funciona
  		simg = div2 + simg;
  		simg = simg + "</div> \n"; 
  		if(cont >= 3){
  		cont = 1;
  		simg = simg + "\n</div>";
  		}
  		else if(cont == 1){
			simg = div + simg;
			cont++;
  		}else{
  		cont++;
  		}
   	console.log(cont + "  " + simg);
   	r += simg;
   	}
   	$("div.img3").prepend(r);
   	
   
});
function green() {
   		console.log("green");
			this.class = "green2";   		
   		}
function valida_envia(){
    //valido el nombre
    
    if (document.getElementById("nombre").value==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
    }
     	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	valueForm = document.getElementById("mail").value;
	if(valueForm.search(patron)!=0){
   alert("La dirección de email es incorrecta.");
  } 
     
     if (document.getElementById("asun").value==0){
       alert("Tiene que escribir un asunto")
       return 0;
    }
     if (document.getElementById("mov").value==0){
       alert("Tiene que escribir un movil")
       return 0;
    }
     if (document.getElementById("text").value==0){
       alert("Tiene que escribir algo en el textarea")
       return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
} 