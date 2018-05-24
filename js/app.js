//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');



//Listeners
//tengo que hacer lo mismo pero con localstrage si lo consigo es simple 
//Cuando se guarde para recargar se tiene que hacer con un string

cargarEventListeners();

function cargarEventListeners() {

	cursos.addEventListener('click' , comprarCurso);

	carrito.addEventListener('click' , eliminarCurso);


	vaciarCarritoBtn.addEventListener('click' , vaciarCarrito);

}






//Funciones
	var aux1 = "list";//esta es donde se guarda en el localStorage
	var globo = new Array;
	var aux = localStorage.getItem("num");
	for(var i = 0; i < 100; i++){
		globo[i] = new Array;
	
	}
	if(aux != -1 || aux == null ){
	globo = Olocal();
	}	
	
function Glocal(put, put1, put2, put3) {

var aux2 = 0;
	if(typeof(aux) == "undefined" || globo[0] == "undefined"){
		aux = 0;
	}else{
		aux++;	
	}
		globo[aux][aux2] = put;
		aux2++;
		globo[aux][aux2] = put1;
		aux2++;
		globo[aux][aux2] = put2;
		aux2++;
		globo[aux][aux2]  = put3;
	localStorage.setItem(aux1, globo);	
	localStorage.setItem("num", aux);
	return aux1;
	}
	function Zlocal() {
		localStorage.setItem(aux1, null);	
		localStorage.setItem("num", -1);
		}
	function Olocal() {
		var r = new Array;
		var s = new Array;
		
		r = localStorage.getItem(aux1);
		var r = r.split(",");
		for(var i = 0; i < r.length; i++){
			s[i] = new Array;			
		}
		for (var ii = 0; ii < localStorage.getItem("num"); ii++) {
		for(var i = 0; i < 4; i++){
		s[ii][i] = r[ii + i];
		console.log(r[ii + i] + "\n");
		}
		console.log("Fin");			
			}
		return s;	
		}

function comprarCurso(e) {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {

		 const curso = e.target.parentElement.parentElement;

		leerDatosCurso(curso);
	}

}

function leerDatosCurso(curso) {
	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id')
	}

	insertarCarrito(infoCurso);
}

function insertar(put) {
	for(var ii = 0; ii <= localStorage.getItem("num"); ii++){
	const row = document.createElement('tr');
	row.innerHTML = `
	<td> <img src=${put[ii][0]} width=100></td>
	<td>${put[ii][1]}</td>
	<td>${put[ii][2]}</td>
	<td>
	<a href="#" class="borrar-curso" data-id=${put[ii][3]}>
	X</a>
	</td>`;

	listaCursos.appendChild(row);	
	}
	}
function insertarCarrito(curso) {
	const row = document.createElement('tr');
	row.innerHTML = `
	<td> <img src="${curso.imagen}" width=100></td>
	<td>${curso.titulo}</td>
	<td>${curso.precio}</td>
	<td>
	<a href="#" class="borrar-curso" data-id="${curso.id}">
	X</a>
	</td>`;

	listaCursos.appendChild(row);
	console.log(curso);
	Glocal(curso.imagen, curso.titulo, curso.precio, curso.id);
}

function eliminarCurso (e) {
	e.preventDefault();//esto que es porque no lo entindo no se que va 

	let curso;

	if(e.target.classList.contains('borrar-curso'))
	{
		e.target.parentElement.parentElement.remove();//esta es la funcion que tengo que hacer para acabar con todo
	}
	//a partir de aqui tengo que hacer que funcione todo ja se localstr

}


function vaciarCarrito() {
	//listaCursos.innerHTML = '';

	while (listaCursos.firstChild) {
		listaCursos.removeChild(listaCursos.firstChild);
	}
	Zlocal();
	return false;

}

console.log(Array.isArray(Olocal()) + Olocal());
insertar(Olocal());
console.log("Fin");