chrome.runtime.sendMessage({
	todo: "showPageAction"
});

setTimeout(() => {
	document.querySelector("body").classList.add("hidden");


	var titelBox = document.createElement("div");
	titelBox.setAttribute("id", "title-box");
	titelBox.innerHTML = '<h1>Live <span style="color: #e01e37 !important;" class="slideText">ODI</span>  Score</h1>';
	document.body.appendChild(titelBox);
	
	
	$(".slideText").slideTextLeft({
		words: ["ODI", "Test", "T20"], // multiple words to tranistion through in a loop
		delay: 1000 // the time to wait before the transistion
	});
})

function startTime() {

	var clockBox = document.createElement('div');
	clockBox.setAttribute("id", "clock-box");
	clockBox.innerHTML = '<div id="clock"></div>';
	document.body.appendChild(clockBox);

	let currentDate = new Date();
	let cDay = currentDate.getDate()
	let cMonth = currentDate.getMonth() + 1
	let cYear = currentDate.getFullYear()

	var today = new Date();
  	var h = today.getHours();
  	var m = today.getMinutes();
  	var s = today.getSeconds();
  	m = checkTime(m);
  	s = checkTime(s);

	document.getElementById('clock').innerHTML ='&#128197;&nbsp;&nbsp;'+ cDay+'/'+cMonth+'/'+cYear+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128343;&nbsp;'+h + ":" + m + ":" + s+ '<span class="pulse green circle"></span>';
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}; // add zero in front of numbers < 10
	return i;
}

startTime();

function playAudio() {

	var musicURL = chrome.runtime.getURL('music.mp3');

	var player = document.createElement('div');
	player.setAttribute("id", "player");
	player.innerHTML = '<audio id="playMusic" loop><source src="' + musicURL + '"></source></audio>';
	document.body.appendChild(player);
}

playAudio();



chrome.runtime.onMessage.addListener(function (request, sender, response) {
	if (request.todo == "playMusic") {
		document.getElementById("playMusic").play();
	}
})

chrome.runtime.onMessage.addListener(function (request, sender, response) {
	if (request.todo == "pauseMusic") {
		document.getElementById("playMusic").pause();
	}
})

