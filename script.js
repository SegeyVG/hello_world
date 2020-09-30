var startTime = new Date().getTime();

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var makeShapeVisible = function(){
	var shape = document.getElementById("shape");
	var top = Math.random() * 400;
	var left = Math.random() * 700;
	var width = Math.random() * 200 + 50;		
	shape.style.top = top + "px";
	shape.style.left = left + "px";	
	shape.style.width= width + "px";
	if (Math.random()<0.5) {
		shape.style.borderRadius = "50%";
		shape.style.backgroundColor = getRandomColor();

	}  else{
		shape.style.borderRadius = "0%";
		shape.style.backgroundColor = getRandomColor();
	}
	shape.style.display = "block";
	startTime = new Date().getTime();
}

setTimeout(makeShapeVisible, Math.random() * 2000);

document.getElementById("shape").onclick = function(){
	var finishTime = new Date().getTime();
	var shape = document.getElementById("shape");
	
	shape.style.display = "none";
	

	var reactTime = (finishTime - startTime) / 1000;
	document.getElementById("reactionTime").innerHTML = reactTime + "seconds";
	setTimeout(makeShapeVisible, Math.random() * 2000);
	
}

