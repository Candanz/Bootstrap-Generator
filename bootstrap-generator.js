/**
 * Bootstrap Generator
 * Generates the HTML neccessary for various bootstrap elements
 * So you can use them in JS render functions without having to template them.
 *
 * Created by: Stefan Candan
 * Created at: 6-10-2016 (DD-MM-YYYY)
 *
 * Last Modified by: Stefan Candan
 * Last Modified at: 6-10-2016 (DD-MM-YYYY)
 */
var BootstrapGenerator = function() {}

// Generate a glyph-icon with optional classes and an optional id
BootstrapGenerator.prototype.glyphicon = function(options) {
	options = options || {};
	options.icon = options.icon || "asterisk";
	options.classes = options.classes || [];
	options.id = options.id || "";

	//Gives the user the option to enter classes as a string or as an array.
	if (typeof(options.classes) == "string") {
		options.classes = options.classes.split(" ");
	}

	var span = document.createElement('span');
	span.className += "glyphicon";
	span.className += " glyphicon-" + options.icon;

	if (options.classes.length > 0) {
		span.className += " " + options.classes.join(" ");
	}

	if (options.id.length > 0) {
		span.id = options.id;
	}

	return span;
}

var bootstrapGenerator = new BootstrapGenerator();