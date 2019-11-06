/**
 * 
 */
var Service = require('webos-service');

var service = new Service("de.jfricker.slideshow.service");

console.log ("In services.js");

service.register("helloWorld", function(message) {
	
	console.log ("In helloWorl");
    message.respond({
                Response: "Hello, World !"
       });
});


service.register("dirList", function(message) {
	
	console.log ("In dirList");
    message.respond({
                Response: "Here we have to do a alot of work!"
       });
});