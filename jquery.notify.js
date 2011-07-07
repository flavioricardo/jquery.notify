/**
 * jQuery Notify v0.3
 * Provides a simple and easy way to insert notification messages using jQuery
 *
 * Copyright 2011 Flávio Ricardo
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice
 */

jQuery.notify = function(options) {
	(function($) {

		var defaults = {
			type : "shout",
			text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			close : false,
			speed : "slow",
			timeout : 9000
		};

		options = $.extend(defaults, options);

		$("#notify").removeClass($(this).attr("class"));
		$("#notify").addClass(options.type);
		$("#notify").html("").html(options.text);

		if (options.close) {
			$("#notify").append("<span class=\"close\">[x]</span>");
			$("span.close").live("click", function() {
				$("#notify").slideUp(options.speed);
			});
		}

		$("#notify").slideDown(options.speed);

		setTimeout(function() {
			$("#notify").slideUp("slow")
		}, options.timeout);

		return this;

	})(jQuery)
};