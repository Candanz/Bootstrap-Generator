/**
 * Bootstrap Generator
 * Generates the HTML neccessary for various bootstrap elements
 * So you can use them in JS render functions without having to template them.
 *
 * Github: https://github.com/Candanz/Bootstrap-Generator
 * Created By: Stefan Candan
 */
var BootstrapGenerator = function() {}

// *** CSS ***

// http://getbootstrap.com/css/#buttons
BootstrapGenerator.prototype.button = function(options) {
	options = options || {};
	options.type = options.type || "button";
	options.text = options.text || "Button";
	options.style = options.style || "default";
	options.size = options.size || "default";
	options.block = options.block || false;
	options.active = options.active || false;
	options.disabled = options.disabled || false;
	options.id = options.id || null;
	options.classes = options.classes || [];

	if (typeof(options.classes) == "string") {
		options.classes = options.classes.split(" ");
	}

	var elem = document.createElement(options.type);
	switch(options.type) {
		case "button":
		case "a":
			elem.innerHTML = options.text;
			elem.role = "button";
			break;
		case "input":
			elem.value = options.text;
			elem.type = "button";
			break;
	}

	elem.className += "btn";
	elem.className += " btn-" + options.style;

	switch(options.size) {
		case "large":
		case "lg":
			elem.className += " btn-lg";
			break;
		case "small":
		case "sm":
			elem.className += " btn-sm";
			break;
		case "extrasmall":
		case "xs":
			elem.className += " btn-xs";
	}

	if(options.block) {
		elem.className += " btn-block";
	}

	if(options.active) {
		elem.className += " active";
	}

	if(options.disabled) {
		switch(options.type) {
			case "a": 
				elem.className += " disabled";
				break;
			case "input":
			case "button":
				elem.disabled = "disabled";
				break;
		}
	}

	if (options.classes.length > 0) {
		elem.className += " " + options.classes.join(" ");
	}

	if (options.id) {
		elem.id = options.id;
	}

	elem.className += " btn-" + options.style;

	return elem;
}

// *** Components ***

// Generate a glyph-icon with optional classes and an optional id
// http://getbootstrap.com/components/#glyphicons
BootstrapGenerator.prototype.glyphicon = function(options) {
	options = options || {};
	options.icon = options.icon || "asterisk";
	options.classes = options.classes || [];
	options.id = options.id || null;

	//Gives the user the option to enter classes as a string or as an array.
	if (typeof(options.classes) == "string") {
		options.classes = options.classes.split(" ");
	}

	var elem = document.createElement('span');
	elem.className += "glyphicon";
	elem.className += " glyphicon-" + options.icon;

	if (options.classes.length > 0) {
		elem.className += " " + options.classes.join(" ");
	}

	if (options.id) {
		elem.id = options.id;
	}

	return elem;
}

var bootstrapGenerator = new BootstrapGenerator();