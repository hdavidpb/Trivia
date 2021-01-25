/*
2.APLICACION DE TRIVIAS

Al ingresar a la app pedira ingresar algunos datos.

Poder elegir categoria de preguntas

Mostrar de manera aleatoria preguntas que se encuantran en un banco de preguntas con 5 posibilidades de respuesta pero solo 1 es la correcta

Pedir responder 20 preguntas, al reponder la ultima debe mostrar un mensaje que diga Felicitaciones

Agregar al ranking de usuarios que han terminado el juego de trivia

Mostrar el tiempo que tomo terminar el juego
*/
document.addEventListener("DOMContentLoaded", (e) => {
	fetchData();
});

const nav = document.querySelector(".nav");
const register = document.querySelector(".register");
const registrar = document.querySelector(".registrar");
const close_registar = document.querySelector(".close");
const userLogin = document.querySelector(".user");
const passLogin = document.querySelector(".pass");

const usuario = document.querySelector(".usuario");
const passwordRegister = document.querySelector(".newPass");

const btnlogin = document.querySelector(".login");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const main = document.querySelector(".main");
const preguntas = document.querySelector(".preguntas");
const items = document.getElementById("item");
const modal_results = document.querySelector(".modal_results");

//Li
let li = [...document.getElementsByTagName("li")];
//const li = document.querySelectorAll("li");
//////////////SELECTORES DE TIPO DE TRIVIA/////////////
const questions = document.querySelectorAll(".question");
const cultura = document.getElementById("cultura");
const deporte = document.getElementById("deporte");
const geografia = document.getElementById("geografia");

const clock = document.querySelector(".time");
const current = document.querySelector(".current");
const counterBox = document.querySelector(".contador");
let arrUser = [];
let quest = [...questions];

let count = 0;
let currentQuestionIndex = 0;
let correctAnswer;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

let objQuestions;
/////////////////////////////////////CONSUMIR API//////////////////////////////////////////////////
const fetchData = async () => {
	try {
		const res = await fetch(
			"https://opentdb.com/api.php?amount=20&category=9&type=multiple"
		);
		const res2 = await fetch(
			"https://opentdb.com/api.php?amount=20&category=21&type=multiple"
		);
		const res3 = await fetch(
			"https://opentdb.com/api.php?amount=20&category=22&type=multiple"
		);
		const culturaaaa = await res.json();
		const sportsssss = await res2.json();
		const geografyyy = await res3.json();
		quest.forEach((q, i) => {
			q.addEventListener("click", function () {
				if (i === 0) {
					preguntas.classList.remove("hide");

					//	counterBox.classList.remove("hide");

					objQuestions = culturaaaa;
					printQuestions(currentQuestionIndex, objQuestions);
					counterBox.classList.remove("hide");
					contador();

					main.classList.add("hide");
				} else if (i === 1) {
					preguntas.classList.remove("hide");

					//counterBox.classList.remove("hide");

					objQuestions = sportsssss;
					printQuestions(currentQuestionIndex, objQuestions);
					counterBox.classList.remove("hide");
					contador();
					main.classList.add("hide");
				} else if (i === 2) {
					preguntas.classList.remove("hide");

					//		counterBox.classList.remove("hide");

					objQuestions = geografyyy;
					printQuestions(currentQuestionIndex, objQuestions);
					counterBox.classList.remove("hide");
					contador();
					main.classList.add("hide");
				}
			});
		});

		console.log(culturaaaa);
		console.log(sportsssss);
		console.log(geografyyy);
	} catch (error) {
		console.log(error);
	}
};

/////////////////////////////////////CREAR USUARIO///////////////////////////////////////////////
registrar.addEventListener("click", function (e) {
	e.preventDefault();
	const idReg = usuario.value.toLowerCase();
	const credencialReg = Number(passwordRegister.value);
	const creados = arrUser.find((users) => users.user === idReg);
	console.log("sirve");
	console.log(creados);
	function User(name, password) {
		this.user = name;
		this.pass = password;
		this.scores = [];
	}
	if (
		idReg !== "" &&
		credencialReg !== "" &&
		idReg !== " " &&
		credencialReg !== " " &&
		credencialReg !== 0 &&
		creados === undefined &&
		!idReg.includes(" ")
	) {
		const newUser = new User(idReg, credencialReg);
		arrUser.push(newUser);
		console.log(newUser);
		usuario.value = "";
		passwordRegister.value = "";

		form.classList.add("hide");
		overlay.classList.add("hide");
	}
	if (creados !== undefined) {
		alert("Este usuario ya esta en uso");
	}
	if (
		idReg === "" ||
		credencialReg === "" ||
		idReg === " " ||
		credencialReg === " " ||
		credencialReg === 0
	) {
		alert("Llene todo los campos para crear su usuario");
		usuario.value = "";
		passwordRegister.value = "";
	}
	if (idReg.includes(" ")) {
		usuario.value = "";
		passwordRegister.value = "";
		alert("Usuario invalido , no coloque epacios");
	}
});

let currentUser;
///////////////////////////LOGIN//////////////////////////////////////////////////////////
btnlogin.addEventListener("click", function () {
	const id = userLogin.value.toLowerCase();
	const credencial = Number(passLogin.value);
	if (id && credencial) {
		currentUser = arrUser.find((users) => users.user === id);
		console.log(currentUser);

		console.log(id);

		if (currentUser.user === id && currentUser.pass === credencial) {
			main.classList.remove("hide");
			nav.classList.add("hide");
		}
		userLogin.value = "";
		passLogin.value = "";
		//	nextAnswer();
	} else {
		alert(
			` Usuario y/o contraseña invalidos \n \nVerifique si esta registrado en Trivia`
		);
	}
});

/////////////////////////OPEN MODAL REGISTER//////////////////////////////////////////////

register.addEventListener("click", function () {
	if (form.classList.contains("hide")) {
		form.classList.remove("hide");
		overlay.classList.remove("hide");
	} else {
		form.classList.add("hide");
		overlay.classList.add("hide");
	}
	console.log("sirve");
});

///////////////////////////////////////////////CLOSE MODAL/////////////////////////////////////////////////////////////////////
close_registar.addEventListener("click", function () {
	form.classList.add("hide");
	overlay.classList.add("hide");
});

document.addEventListener("keyup", function (e) {
	if (e.key === "Escape") {
		form.classList.add("hide");
		overlay.classList.add("hide");
	}
});

let time;
const contador = function () {
	const tick = function () {
		let min = String(Math.trunc(time / 60)).padStart(2, 0);
		let sec = String(time % 60).padStart(2, 0);

		counterBox.innerHTML = `${min}:${sec}`;
		if (time === -1) {
			clearInterval(timer);
			currentQuestionIndex = 0;
			//	counterBox.classList.add("hide");

			printResults();

			counterBox.classList.add("hide");
			preguntas.classList.add("hide");

			alert("Too Slow");
		} else if (currentQuestionIndex === 19) {
			clearInterval(timer);
		}

		time--;
	};
	if (currentQuestionIndex === 0) {
		time = 300;
	}

	tick();
	const timer = setInterval(tick, 1000);
};

///////////////////////////////////////PRINT  QUESTIONS////////////////////////////////////////////////////////////////

const printQuestions = (i, objQuestions) => {
	setTimeout(() => {
		let answer = objQuestions.results[i].incorrect_answers;
		answer[3] = objQuestions.results[i].correct_answer;

		correctAnswer = answer[3];

		answer = answer.sort((a, b) => Math.floor(Math.random() * 3) - 1);
		const respuestas = answer.map(
			(resp) =>
				`<p class= "box_resp"><span onclick="evaluateAnswer('${resp}' ,this, '${correctAnswer}');printQuestions(currentQuestionIndex, objQuestions)" class = "resp" >${resp}</span></p>`
		);
		preguntas.innerHTML = `<p>${objQuestions.results[i].question}</p>
	<div class="items">
	${respuestas.join("")}


	
	

	</items>`;

		currentQuestionIndex++;

		if (i === 19) {
			printResults();
			modal_results.classList.remove("hide");
			//	alert(	`Respuestas Correctas: ${respuestasCorrectas} \n respuestas incorrectas: ${respuestasIncorrectas}`	);
			counterBox.classList.add("hide");
			preguntas.classList.add("hide");
		}
	}, 500);
};

const evaluateAnswer = (respuesta, obj, correct) => {
	document.querySelectorAll(".resp").forEach((x, i, arr) => {
		x.classList.remove("check");
	});
	//obj.classList.add("check");
	if (
		obj.classList.contains("check") ||
		respuesta == correctAnswer ||
		correctAnswer.includes("&#039")
	) {
		obj.parentNode.classList.add("green");
		respuestasCorrectas++;

		console.log(respuestasCorrectas);
	} else {
		obj.parentNode.classList.add("red");

		respuestasIncorrectas++;
		//alert(`La respues correcta es: ${correct}`);
		console.log(respuestasIncorrectas);
	}
};

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

const options = {
	hour: "numeric",
	minute: "numeric",
	day: "numeric",
	month: "long",
	year: "numeric",
	weekday: "long",
};
const locale = navigator.language;
const fullDay = new Intl.DateTimeFormat(locale, options).format(now);

const printResults = function () {
	function Score(corrects, incorrects) {
		this.category = objQuestions.results[0].category;
		this.corrects = corrects;
		this.incorrects = incorrects;
		this.date = fullDay;
	}

	setTimeout(() => {
		overlay.classList.remove("hide");
		modal_results.classList.remove("hide");
		modal_results.innerHTML = `<div class="close_results" >

		
	<h5>TRIVIA</h5>
</div>
	<div class="modal_resul_container">
		
	<div class="modal_results_user">
		<h2>${currentUser.user} SCORE: </h2>
	</div>
	<div class="modal_results_user-result">
		<p>Tu resultado:</p>
	</div>
	<div class="modal_results_corrects">
		<h3>${respuestasCorrectas} correctas </h3>
	</div>
	<div class="modal_results_incorrects">
		<h3>${respuestasIncorrectas} incorrectas</h3>
	</div>
	<div class="result_date" style="margin-top: 10px;">
${fullDay}
	</div>
	<div class="btn_box_results">
		<input onclick="closeResults()" class ="btn_results" type="button" value="OK">
	</div>

</div>`;
		const newScore = new Score(respuestasCorrectas, respuestasIncorrectas);
		currentUser.scores.push(newScore);

		currentQuestionIndex = 0;
		respuestasIncorrectas = 0;
		respuestasCorrectas = 0;
	}, 1000);
};

const closeResults = function () {
	console.log("Clickkkk");
	overlay.classList.add("hide");
	modal_results.classList.add("hide");
	nav.classList.remove("hide");
};
