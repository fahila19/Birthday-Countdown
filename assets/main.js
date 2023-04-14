let date=document.querySelector("#date")
let notes=document.querySelector("#notes")
let currentdate = new Date(); 
let datetime =  currentdate.getDate() + "/" + (currentdate.getMonth()+1)
let messages=[{
	day: "7/4",
	message: "Self-love is important because it allows us to value ourselves and take care of our well-being. By opening this 365 days of happiness jar and receiving a new compliment every day",
	},
	{
	day: "8/4",
	message: "love",
	},{
	day: "13/4",
	message: "love",
	},{
	day: "14/4",
	message: "love",
	}
]
messages.forEach(daymessage => {
	if (daymessage.day==datetime) {
		notes.innerHTML=daymessage.message
	
	}
});
				console.log(datetime)

date.innerHTML=datetime