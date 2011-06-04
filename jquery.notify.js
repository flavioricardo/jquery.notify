/**
 * jQuery Notify v0.1
 * Released under the MIT, BSD, and GPL Licenses.
 */

jQuery.notify = function(options) {
	(function($) {

		if (!options)
			options = {}

		if (options.type) {
			$("#notify").addClass(options.type);
		} else {
			$("#notify").addClass("notify-shout");
		}

		if (options.text) {
			$("#notify").prepend(options.text);
		} else {
			$("#notify").prepend("Lorem Ipsum is simply dummy text of the printing and typesetting industry");
		}

		if (options.close) {
			$("#notify").append("<a class=\"notify-close\" href=\"#\">[x]</a>");
			$("a.notify-close").live("click", function() {
				$("#notify").slideUp((options.velocity) ? options.velocity : "slow");
			});
		}

		if (options.velocity) {
			$("#notify").slideDown(options.velocity);
		} else {
			$("#notify").slideDown("slow");
		}

		if (options.timeout) {
			$("#notify").delay(options.timeout).slideUp("slow");
		}

		return this;

	})(jQuery)
};