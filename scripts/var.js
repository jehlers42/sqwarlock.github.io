



function randomConspiracy() {
	var whoArray = [
	"The government is",
	"Bill Gates and his cohort are",
	"Immigrants are",
	"The Gays are",
	"Doctors are",
	"People are",
	"The Japanese are",
	"Corporations are",
	"Athiests are",
	"NASA is",
	"Liberals are",
	"Facebook is",
	"Lizard People are",
	"Morning news is"
	];

	var howArray = [
	"the TV",
	"abortions",
	"nanotechnology",
	"Satan",
	"video games",
	"feminism",
	"pesticides",
	"the sun's rays",
	"dihydrogen monoxide",
	"lies and propaganda",
	"GMOs",
	"vaccinations",
	"holographic simulations",
	"deep drilling",
	"high-fructose corn syrup",
	"realistic clones"
	];

	var whatArray = [
	"cause cancer",
	"give children autism",
	"erode your brain",
	"turn people gay",
	"make you fat",
	"amass enormous wealth",
	"cause global warming",
	"destroy America",
	"turn you into a sheep",
	"kill bees at an alarming rate",
	"take over the world",
	"hide the aliens",
	"communicate with dolphins",
	"bring back Michael Jackson"
	];
	
	var who = whoArray[Math.floor(Math.random() * whoArray.length)];
	var how = howArray[Math.floor(Math.random() * howArray.length)];
	var what = whatArray[Math.floor(Math.random() * whatArray.length)];

	var randOut = who + " using " + how + " to " + what + ".";
	document.getElementById('text').innerHTML=randOut;
}