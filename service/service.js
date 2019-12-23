/**
 * 
 */
var Service = require('webos-service');
var fs = require('fs');


var service = new Service("de.jfricker.slideshow.service");

console.log("In services.js");


var walk = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

var dirList = function (dir, result, level) {
	
	
	
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = "" + dir + file;
        var stat = fs.statSync(file);
        
      /*
        if (stat && stat.isDirectory() && level ==0) {
        
            dirList(file, result, level + 1);
        } else {
        
            result.push(file);
        }
      	*/
        result.push(file);
    
	
	
    });
    //	result.push ("a faked resuklt");
}




service.register("dirList", function (message) {

    console.log("In dirList");

    var ret = [];
    dirList("/", ret, 0);
    


    message.respond({
        Response: ret,
        foo: "Bar"
    });
});