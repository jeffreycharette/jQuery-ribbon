/* 
 * jQuery ribbon version 0.1.0 | 20120925
 * by Jeff Charette (wearecharette.com)
 * jeffrey@wearecharette.com
 *
 * Copyright (c) 2012 Jeff Charette (wearecharette.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses. 
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 */
 
(function($) {
	$.fn.ribbon = function(opts) {
		var options = $.extend({}, $.fn.ribbon.defaultOptions, opts);
		return this.each(function() {
			var $this = $(this);
			
			$this.each( function(i) {
				var color = $(this).find(options.color).attr('class'),
						title = options.title;
				if (title == 'alt') {
					title = $(this).find('img:first').attr('alt')
				}
				else {
					title = $(this).find(':first').text();
					$(this).find('img:first').attr('alt',title);
				}
				if (!color) {
					color = "red";
				}
				$(this).find('img:first').before('<hgroup class="'+color+'-wrapper-small"><h1>'+title+'</h1></hgroup>');
			});
			
			// events
			$this.hover(
				function () {
			    $(this).find('hgroup').width('auto').animate({ width:'auto' }, options.speedIn);
					$(this).find('hgroup h1').width('auto').animate({ width:'auto' }, options.speedIn);
			  },
			  function () {
			    $(this).find('hgroup h1').animate({ width:0 }, options.speedOut);
					$(this).find('hgroup').animate({ width:10 }, options.speedOut);
			  }
			);
		});
	};

	$.fn.ribbon.defaultOptions = {
		speedIn : 200,
		speedOut : 200,
		title : 'img:first',
		color : 'img:first'
	};
})(jQuery);
