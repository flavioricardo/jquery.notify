/**
 * jQuery Notify v0.4
 * Provides a simple and easy way to insert notification messages using jQuery
 *
 * Copyright 2011 Flávio Ricardo
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice
 */

jQuery.notify = function( options, content ) {

	(function( $ ) {

		var defaults = {
			type : "shout",
			text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			close : false,
			speed : "slow",
			timeout : 9000
		};

		$("body").prepend($("<div></div>").attr("id", "notify"));

		if ( typeof (options) === "object" )
			options = $.extend(defaults, options);

		var methods = {
			shout : function( content ) {
				$("#notify").removeClass($(this).attr("class")).addClass("shout");
				$("#notify").html("").html(content);
				$("#notify").slideDown(defaults.speed).delay(defaults.timeout).slideUp("slow");
			},
			error : function ( content ) {
				$("#notify").removeClass($(this).attr("class")).addClass("error");
				$("#notify").html("").html(content);
				$("#notify").slideDown(defaults.speed).delay(defaults.timeout).slideUp("slow");
			},
			success : function ( content ) {
				$("#notify").removeClass($(this).attr("class")).addClass("success");
				$("#notify").html("").html(content);
				$("#notify").slideDown(defaults.speed).delay(defaults.timeout).slideUp("slow");
			}
		};

		if ( methods[options] ) {
			return methods[options].call( this, content );
		} else {
			$("#notify").removeClass($(this).attr("class")).addClass(options.type);
			$("#notify").html("").html(options.text);

			if ( options.close ) {
				$("#notify").append("<span class=\"close\">[x]</span>");
				$("span.close").on("click", function() {
					$("#notify").dequeue();
				});
			}

			$("#notify").slideDown(options.speed).delay(options.timeout).slideUp("slow");
		}

		return this;

	})( jQuery );
};