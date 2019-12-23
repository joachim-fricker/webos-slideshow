var images = ["test0.jpg", "test1.jpg", "test2.jpg", "test3.jpg", "test4.jpg",
	"test5.jpg"];
var current = 0;
var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;

function showImage() {
	var image = document.getElementById('image');
	image.src = "testImages/" + images[current];

	callDirList();
	if (current == 2 || current == 3) {
		$(".text-block").hide();
	
	} else {
		var w = $(".text-block").width();
		console.log("Width of text is", w);
		$(".text-block").css("left", (1740 - w) / 2);
		$(".text-block").show();

	}

}
function doPrevious() {
	if (current == 0) {
		return;
	}
	current--;
	showImage();

}

function doNext() {
	if (current == images.length - 1) {
		return;
	}
	current++;
	showImage();

}

function doFirst() {
	current = 0;
	showImage();
}

function doLast() {
	current = images.length - 1;
	showImage();
}


function callDirList() {
	                                            
	var lunaReq = webOS.service.request("luna://de.jfricker.slideshow.service/", {
		method: "dirList",
		parameters: {},
		onSuccess: function (args) {
			console.log("Got an dirList result", args);
			for (var i=0; i < args.Response.length;i++) {
				console.log ("Entry:",args.Response[i]);
			}
		},
		onFailure: function (args) {
			console.log("Got an error calling faked dir list",args);
		}
	});
}

document.addEventListener("keydown", function (inEvent) {
	switch (inEvent.keyCode) {
		case LEFT:
			doPrevious();
			break;
		case RIGHT:
			doNext();
			break;
		case UP:
			doFirst();
			break;
		case DOWN:
			doLast();
			break;
	}
});

