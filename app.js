/*
2.APLICACION DE TRIVIAS

Al ingresar a la app pedira ingresar algunos datos.

Poder elegir categoria de preguntas

Mostrar de manera aleatoria preguntas que se encuantran en un banco de preguntas con 5 posibilidades de respuesta pero solo 1 es la correcta

Pedir responder 20 preguntas, al reponder la ultima debe mostrar un mensaje que diga Felicitaciones

Agregar al ranking de usuarios que han terminado el juego de trivia

Mostrar el tiempo que tomo terminar el juego
*/
const culturaG = {
	response_code: 0,
	results: [
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"Where is the train station &quot;Llanfair&shy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch&quot;?",
			correct_answer: "Wales",
			incorrect_answers: ["Moldova", "Czech Republic", "Denmark"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What alcoholic drink is made from molasses?",
			correct_answer: "Rum",
			incorrect_answers: ["Gin", "Vodka", "Whisky"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
			correct_answer: "Gorilla",
			incorrect_answers: ["Tiger", "Panda", "Crocodile"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which American-owned brewery led the country in sales by volume in 2015?",
			correct_answer: "D. G. Yuengling and Son, Inc",
			incorrect_answers: [
				"Anheuser Busch",
				"Boston Beer Company",
				"Miller Coors",
			],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "Which restaurant&#039;s mascot is a clown?",
			correct_answer: "McDonalds",
			incorrect_answers: ["Whataburger", "Burger King", "Sonic"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What was the first ever London Underground line to be built?",
			correct_answer: "Metropolitan Line",
			incorrect_answers: ["Circle Line", "Bakerloo Line", "Victoria Line"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which of the following card games revolves around numbers and basic math?",
			correct_answer: "Uno",
			incorrect_answers: ["Go Fish", "Twister", "Munchkin"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What is Tasmania?",
			correct_answer: "An Australian State",
			incorrect_answers: [
				"A flavor of Ben and Jerrys ice-cream",
				"A Psychological Disorder",
				"The Name of a Warner Brothers Cartoon Character",
			],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What company developed the vocaloid Hatsune Miku?",
			correct_answer: "Crypton Future Media",
			incorrect_answers: ["Sega", "Sony", "Yamaha Corporation"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which country, not including Japan, has the most people of japanese decent?",
			correct_answer: "Brazil",
			incorrect_answers: ["China", "South Korea", "United States of America"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "In which fast food chain can you order a Jamocha Shake?",
			correct_answer: "Arbys",
			incorrect_answers: ["McDonalds", "Burger King", "Wendys"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What zodiac sign is represented by a pair of scales?",
			correct_answer: "Libra",
			incorrect_answers: ["Aries", "Capricorn", "Sagittarius"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What nuts are used in the production of marzipan?",
			correct_answer: "Almonds",
			incorrect_answers: ["Peanuts", "Walnuts", "Pistachios"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"The likeness of which president is featured on the rare $2 bill of USA currency?",
			correct_answer: "Thomas Jefferson",
			incorrect_answers: [
				"Martin Van Buren",
				"Ulysses Grant",
				"John Quincy Adams",
			],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"Terry Gilliam was an animator that worked with which British comedy group?",
			correct_answer: "Monty Python",
			incorrect_answers: [
				"The Goodies&lrm;",
				"The League of Gentlemen&lrm;",
				"The Penny Dreadfuls",
			],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "Earth is located in which galaxy?",
			correct_answer: "The Milky Way Galaxy",
			incorrect_answers: [
				"The Mars Galaxy",
				"The Galaxy Note",
				"The Black Hole",
			],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "Who is the author of Jurrasic Park?",
			correct_answer: "Michael Crichton",
			incorrect_answers: ["Peter Benchley", "Chuck Paluhniuk", "Irvine Welsh"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question: "What is the profession of Elon Musk&#039;s mom, Maye Musk?",
			correct_answer: "Model",
			incorrect_answers: ["Professor", "Biologist", "Musician"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
			correct_answer: "Swiss Air",
			incorrect_answers: ["Air France", "British Airways", "TWA"],
		},
		{
			category: "General Knowledge",
			type: "multiple",
			difficulty: "easy",
			question:
				"What kind of aircraft was developed by Igor Sikorsky in the United States in 1942?",
			correct_answer: "Helicopter",
			incorrect_answers: ["Stealth Blimp", "Jet", "Space Capsule"],
		},
	],
};
const sports = {
	response_code: 0,
	results: [
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question:
				"Which Formula One driver was nicknamed &#039;The Professor&#039;?",
			correct_answer: "Alain Prost",
			incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question:
				"How many scoring zones are there on a conventional dart board?",
			correct_answer: "82",
			incorrect_answers: ["62", "42", "102"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question: "Which country has hosted the 2018 FIFA World Cup?",
			correct_answer: "Russia",
			incorrect_answers: ["Germany", "United States", "Saudi Arabia"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "Which country is hosting the 2022 FIFA World Cup?",
			correct_answer: "Qatar",
			incorrect_answers: ["Uganda", "Vietnam", "Bolivia"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "Which team was the 2015-2016 NBA Champions?",
			correct_answer: "Cleveland Cavaliers",
			incorrect_answers: [
				"Golden State Warriors",
				"Toronto Raptors",
				"Oklahoma City Thunders",
			],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question:
				"In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
			correct_answer: "4",
			incorrect_answers: ["1", "2", "3"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "What is the oldest team in the NFL?",
			correct_answer: "Arizona Cardinals",
			incorrect_answers: [
				"Chicago Bears",
				"Green Bay Packers",
				"New York Giants",
			],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question:
				"In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
			correct_answer: "Jules Bianchi",
			incorrect_answers: [
				"Ayrton Senna",
				"Ronald Ratzenberger",
				"Gilles Villeneuve",
			],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question:
				"This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
			correct_answer: "Don Cherry",
			incorrect_answers: ["Don McKellar", "Don Taylor ", "Donald Sutherland"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question: "Which team has won the most Stanley Cups in the NHL?",
			correct_answer: "Montreal Canadians",
			incorrect_answers: [
				"Chicago Blackhawks",
				"Toronto Maple Leafs",
				"Detroit Red Wings",
			],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question:
				"Which portuguese island is soccer player Cristiano Ronaldo from?",
			correct_answer: "Madeira",
			incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "hard",
			question: "Which year was the third Super Bowl held?",
			correct_answer: "1969",
			incorrect_answers: ["1968", "1971", "1970"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "How many French Open&#039;s did Bj&ouml;rn Borg win?",
			correct_answer: "6",
			incorrect_answers: ["4", "9", "2"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question:
				"Who won the premier league title in the 2015-2016 season following a fairy tale run?",
			correct_answer: "Leicester City",
			incorrect_answers: ["Tottenham Hotspur", "Watford", "Stoke City"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question: "Who did Steven Gerrard win the Champions League with?",
			correct_answer: "Liverpool",
			incorrect_answers: ["Real Madrid", "Chelsea", "Man City"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "What is Tiger Woods&#039; all-time best career golf-score?",
			correct_answer: "61",
			incorrect_answers: ["65", "63", "67"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "easy",
			question:
				"In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
			correct_answer: "1-7",
			incorrect_answers: ["1-5", "1-6", "2-6"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "Who won the 2011 Stanley Cup?",
			correct_answer: "Boston Bruins",
			incorrect_answers: [
				"Montreal Canadiens",
				"New York Rangers",
				"Toronto Maple Leafs",
			],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question: "What country hosted the 2014 Winter Olympics?",
			correct_answer: "Russia",
			incorrect_answers: ["Canada", "United States", "Germany"],
		},
		{
			category: "Sports",
			type: "multiple",
			difficulty: "medium",
			question:
				"Which of these countries&#039; national teams qualified for the 2018 FIFA World Cup in Russia?",
			correct_answer: "Tunisia",
			incorrect_answers: ["United States of America", "Italy", "Netherlands"],
		},
	],
};
const geografy = {
	response_code: 0,
	results: [
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question: "What is the capital of Indonesia?",
			correct_answer: "Jakarta",
			incorrect_answers: ["Bandung", "Medan", "Palembang"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
			correct_answer: "Yugoslavia",
			incorrect_answers: ["Czechoslovakia", "Abkhazia", "South Ossetia"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question: "What are the four corner states of the US?",
			correct_answer: "Utah, Colorado, Arizona, New Mexico",
			incorrect_answers: [
				"Oregon, Idaho, Nevada, Utah",
				"Kansas, Oklahoma, Arkansas, Louisiana",
				"South Dakota, Minnesota, Nebraska, Iowa",
			],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question:
				"All of the following are classified as Finno-Ugric languages EXCEPT:",
			correct_answer: "Samoyedic",
			incorrect_answers: ["Hungarian", "Finnish", "Estonian"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"Which of the following countries is within the Eurozone but outside of the Schengen Area?",
			correct_answer: "Cyprus",
			incorrect_answers: ["Malta", "Greece", "Portugal"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"Which of the following countries banned the use of personal genetic ancestry tests?",
			correct_answer: "Germany",
			incorrect_answers: ["Austria", "Canada", "Sweden"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"All of the following countries have official claims to territory in Antartica EXCEPT:",
			correct_answer: "United States",
			incorrect_answers: ["Australia", "Chile", "Norway"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which of the following languages does NOT use the Latin alphabet?",
			correct_answer: "Georgian",
			incorrect_answers: ["Turkish", "Swahili", "Vietnamese"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question: "How many countries are larger than Australia?",
			correct_answer: "5",
			incorrect_answers: ["4", "3", "6"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question: "What country has a horizontal bicolor red and white flag?",
			correct_answer: "Monaco",
			incorrect_answers: ["Bahrain", "Malta", "Liechenstein"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question:
				"Which of these is the name of the largest city in the US state Tennessee?",
			correct_answer: "Memphis",
			incorrect_answers: ["Thebes", "Alexandria", "Luxor"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question: "What tiny principality lies between Spain and France?",
			correct_answer: "Andorra",
			incorrect_answers: ["Liechtenstein", "Monaco", "San Marino"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "hard",
			question: "What is the name of the Canadian national anthem?",
			correct_answer: "O Canada",
			incorrect_answers: [
				"O Red Maple",
				"Leaf-Spangled Banner",
				"March of the Puck Drop",
			],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"What&#039;s the first National Park designated in the United States?",
			correct_answer: "Yellowstone",
			incorrect_answers: ["Sequoia ", "Yosemite", "Rocky Mountain"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question: "Which ocean borders the west coast of the United States?",
			correct_answer: "Pacific",
			incorrect_answers: ["Atlantic", "Indian", "Arctic"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "hard",
			question: "What national museum will you find in Cooperstown, New York?",
			correct_answer: "National Baseball Hall of Fame",
			incorrect_answers: [
				"Metropolitan Museum of Art",
				"National Toy Hall of Fame",
				"Museum of Modern Art",
			],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question:
				"What mountain range lines the border between Spain and France?",
			correct_answer: "Pyrenees",
			incorrect_answers: ["Alps", "Carpathians", "Urals"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question: "What city is the Terracotta Army located in?",
			correct_answer: "Xi&#039;an",
			incorrect_answers: ["Beijing", "Shanghai", "Hong Kong"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "medium",
			question: "Which country claims ownership of the disputed state Kosovo?",
			correct_answer: "Serbia",
			incorrect_answers: ["Croatia", "Albania", "Macedonia"],
		},
		{
			category: "Geography",
			type: "multiple",
			difficulty: "easy",
			question: "What is Laos?",
			correct_answer: "Country",
			incorrect_answers: ["Region", "River", "City"],
		},
	],
};
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
//Li
let li = [...document.getElementsByTagName("li")];
//const li = document.querySelectorAll("li");
//////////////SELECTORES DE TIPO DE TRIVIA/////////////
const questions = document.querySelectorAll(".question");
const cultura = document.getElementById("cultura");
const deporte = document.getElementById("deporte");
const geografia = document.getElementById("geografia");

let arrUser = [];
let quest = [...questions];

let count = 0;
let currentQuestionIndex = 0;
let correctAnswer;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

let objQuestions;
/////////////////////////////////////CONSUMIR API//////////////////////////////////////////////////

/////////////////////////////////////CREAR USUARIO///////////////////////////////////////////////
registrar.addEventListener("click", function (e) {
	e.preventDefault();
	const idReg = usuario.value.toLowerCase();
	const credencialReg = Number(passwordRegister.value);

	console.log("sirve");
	function User(name, password) {
		this.user = name;
		this.pass = password;
	}
	if (
		idReg !== "" &&
		credencialReg !== "" &&
		idReg !== " " &&
		credencialReg !== " "
	) {
		const newUser = new User(idReg, credencialReg);
		arrUser.push(newUser);
		console.log(newUser);
		usuario.value = "";
		passwordRegister.value = "";

		form.classList.add("hide");
		overlay.classList.add("hide");
	} else {
		alert("Agregue un usuario y/o contraseña validos");
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

///////////////////////////////////////PRINT  QUESTIONS////////////////////////////////////////////////////////////////

const printQuestions = (i, objQuestions) => {
	let answer = objQuestions.results[i].incorrect_answers;
	answer.push(objQuestions.results[i].correct_answer);
	correctAnswer = answer[3];

	answer = answer.sort((a, b) => Math.floor(Math.random() * 3) - 1);
	const respuestas = answer.map(
		(resp) =>
			`<p class= "box_resp"><span onclick="evaluateAnswer('${resp}',this);printQuestions(currentQuestionIndex, objQuestions)" class = "resp" >${resp}</span></p>`
	);
	preguntas.innerHTML = `<p>${objQuestions.results[i].question}</p>
	<div class="items">
	${respuestas.join("")}

	
	

	</items>`;

	currentQuestionIndex++;

	if (i == 19) {
		alert(
			`Respuestas Correctas: ${respuestasCorrectas} \n respuestas incorrectas: ${respuestasIncorrectas}`
		);
		preguntas.classList.add("hide");
		nav.classList.remove("hide");
		currentQuestionIndex = 0;
		respuestasIncorrectas = 0;
		respuestasCorrectas = 0;
	}
};

const evaluateAnswer = (respuesta, obj) => {
	document.querySelectorAll(".resp").forEach((x, i) => {
		x.classList.remove("check");
	});
	obj.classList.add("check");
	if (obj.classList.contains("check") && respuesta == correctAnswer) {
		respuestasCorrectas++;

		setTimeout(() => alert("Respuesta correcta"), 100);

		console.log(respuestasCorrectas);
	} else {
		respuestasIncorrectas++;
		alert("Respuesta Incorrecta");
		console.log(respuestasIncorrectas);
	}
};

quest.forEach((q, i) => {
	q.addEventListener("click", function () {
		if (i === 0) {
			preguntas.classList.remove("hide");
			objQuestions = culturaG;
			printQuestions(currentQuestionIndex, objQuestions);
			main.classList.add("hide");
		} else if (i === 1) {
			preguntas.classList.remove("hide");
			objQuestions = sports;
			printQuestions(currentQuestionIndex, objQuestions);
			main.classList.add("hide");
		} else if (i === 2) {
			preguntas.classList.remove("hide");
			objQuestions = geografy;
			printQuestions(currentQuestionIndex, objQuestions);
			main.classList.add("hide");
		}
	});
});

const contador = function () {
	let time = 10;

	const timer = setInterval(() => {
		let min = String(Math.trunc(time / 60)).padStart(2, 0);
		let sec = String(time % 60).padStart(2, 0);
		time--;

		if (time === 0) {
			clearInterval(timer);
			alert("You loose");
		}
	}, 1000);
};
console.log(culturaG);
console.log(sports);
console.log(geografy);
