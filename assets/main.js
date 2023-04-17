let date=document.querySelector("#date")
let notes=document.querySelector("#notes")
let currentdate = new Date(); 
console.log (dayconvertor(currentdate.getDay()) + ", " + currentdate.getDate() + " " + monthconvertor(currentdate.getMonth()))

let datetime = dayconvertor(currentdate.getDay()) + ", " + currentdate.getDate() + " " + monthconvertor(currentdate.getMonth())
let messages = [{
	day: "Monday, 17 April",
	message: "Hey, superstar! Don't forget to celebrate yourself and all that you've accomplished so far. You are doing amazing!",
	},{
	day: "Tuesday, 18th April",
	message: "Good morning, beautiful! Take a moment to appreciate yourself today. You are worthy of love and respect.",
	},{
	day: "Wednesday, 19th April",
	message: "Hey friend! Treat yourself kindly today. You deserve to be happy and loved just as much as anyone else.",
	},{
	day: "Thursday, 20th April",
	message: "Hey there! Remember, you are unique and amazing just the way you are. Don't let anyone dim your light.",
	},{
	day: "Friday, 21st April",
	message: "Good day, champ! Be proud of yourself for being resilient and strong. You've got this!",
	},{
	day: "Saturday, 22nd April",
	message: "Hey there, gorgeous! Take a deep breath and feel your worth. You are deserving of love and happiness.",
	},{
	day: "Sunday, 23rd April",
	message: "Hey friend! Remember, you are not alone. There are people who love and appreciate you just the way you are.",
	},{
	day: "Monday, 24th April",
	message: "Hey, warrior! Keep fighting for what you believe in, and don't forget to show yourself some compassion along the way.",
	},{
	day: "Tuesday, 25th April",
	message: "Hey there, sweetie! Take a moment to relax and do something that brings you joy. You deserve to feel good.",
	},{
	day: "Wednesday, 26th April",
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