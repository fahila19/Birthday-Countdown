let date=document.querySelector("#date")
let notes=document.querySelector("#notes")
let currentdate = new Date(); 
console.log (dayconvertor(currentdate.getDay()) + ", " + currentdate.getDate() + " " + monthconvertor(currentdate.getMonth()))

let datetime = dayconvertor(currentdate.getDay()) + ", " + currentdate.getDate() + " " + monthconvertor(currentdate.getMonth())
let messages = [{
	day: "Monday, 17 April",
	message: "Hey, superstar! Don't forget to celebrate yourself and all that you've accomplished so far. You are doing amazing!",
	},{
	day: "Tuesday, 18 April",
	message: "Good morning, beautiful! Take a moment to appreciate yourself today. You are worthy of love and respect.",
	},{
	day: "Wednesday, 19 April",
	message: "Hey friend! Treat yourself kindly today. You deserve to be happy and loved just as much as anyone else.",
	},{
	day: "Thursday, 20 April",
	message: "Hey there! Remember, you are unique and amazing just the way you are. Don't let anyone dim your light.",
	},{
	day: "Friday, 21 April",
	message: "Good day, champ! Be proud of yourself for being resilient and strong. You've got this!",
	},{
	day: "Saturday, 22 April",
	message: "Hey there, gorgeous! Take a deep breath and feel your worth. You are deserving of love and happiness.",
	},{
	day: "Sunday, 23 April",
	message: "Hey friend! Remember, you are not alone. There are people who love and appreciate you just the way you are.",
	},{
	day: "Monday, 24 April",
	message: "Hey, warrior! Keep fighting for what you believe in, and don't forget to show yourself some compassion along the way.",
	},{
	day: "Tuesday, 25 April",
	message: "Hey there, sweetie! Take a moment to relax and do something that brings you joy. You deserve to feel good.",
	},{
	day: "Wednesday, 26 April",
	message: "Hii Honey! Your smile is contagious, Smile at yourself in the mirror and notice how it brightens your day!",
	}]

messages.forEach(daymessage => {
	if (daymessage.day==datetime) {
		notes.innerHTML=daymessage.message
	
	}
});
				console.log(datetime)

date.innerHTML=datetime

function dayconvertor(number){ 
	switch (number) {
		case 0:
			return "Sunday"
			break;
	
		case 1:
			return "Monday"
			break;
		
		case 2:
			return "Tuesday"
			break;

		case 3:
			return "Wednesday"
			break;

		case 4:
			return "Thursday"
			break;

		case 5:
			return "Friday"
			break;

		case 6:
			return "Saturday"
			break;

		default:
			break;
	}
}

function monthconvertor(number){ 
	switch (number) {
		case 0:
			return "January"
			break;
	
		case 1:
			return "February"
			break;
		
		case 2:
			return "March"
			break;

		case 3:
			return "April"
			break;

		case 4:
			return "May"
			break;

		case 5:
			return "June"
			break;

		case 6:
			return "July"
			break;

		default:
			break;
	}
}

const slides = document.querySelectorAll('.slide');

let active = 0;

function change(){
  active++;
  active = active % slides.length;
  slides.forEach((slide, index) => {
    if (index === active){
      slide.style.zIndex = 0;
      slide.style.opacity = 1;
    } else if (index === active - 1){
      slide.style.zIndex = -1;
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
      slide.style.zIndex = -2;
    }
  });
}

change();

setInterval(change, 2500);


const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      timeline = document.querySelector('.timeline'),
      soundButton = document.querySelector('.sound-button'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `,
      soundIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
      muteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;

function toggleAudio () {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded () {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);

function toggleSound () {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}

soundButton.addEventListener('click', toggleSound);

function playsound() {
	var mysound = document.getElementById("mysound");
	mysound.autoplay = 'true';
	mysound.load();
  }