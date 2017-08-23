console.log('javascript');

function clickFeeling(){
	var feel1 = document.getElementById("feel1");
	return feel1.onclick(console.log('clicked on feel1'));
	return console.log('inside of clickFeeling');

}

clickFeeling();


//init function for plain old js?
//