// $(document).ready(function () {
// 	//show/hide animate example
// 	$('p').eq(1).hide();
// 	$('a.more').click(function () {
// 		$('p').eq(1).show('slow');
// 		$(this).hide();
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//fade example
// 	$('p').eq(1).hide();
// 	$('a.more').click(function () {
// 		$('p').eq(1).fadeIn('slow');
// 		$(this).hide();
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//slide example
// 	$('p').eq(1).hide();
// 	$('a.more').click(function () {
// 		$('p').eq(1).slideDown('slow');
// 		$(this).hide();
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//compound example
// 	var $firstPara = $('p').eq(1);
// 	$firstPara.hide();
// 	$('a.more').click(function () {
// 		if ($firstPara.is(':hidden')) {
// 			$firstPara.fadeIn('slow');
// 			$(this).text('read less');
// 		} else {
// 			$firstPara.fadeOut('slow');
// 			$(this).text('read more');
// 		}
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//compount slideToggle
// 	var $firstPara = $('p').eq(1);
// 	$firstPara.hide();
// 	$('a.more').click(function () {
// 		$firstPara.slideToggle('slow');
// 		var $link = $(this);
// 		if ($link.text() == 'read more') {
// 			$link.text('read less');
// 		} else {
// 			$link.text('read more');
// 		}
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//animate example
// 	var $firstPara = $('p').eq(1);
// 	$firstPara.hide();
// 	$('a.more').click(function () {
// 		$firstPara.animate({ height: 'toggle' }, 'fast');
// 		var $link = $(this);
// 		if ($link.text() == 'read more') {
// 			$link.text('read less');
// 		} else {
// 			$link.text('read more');
// 		}
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//modifying multiple props
// 	var $firstPara = $('p').eq(1);
// 	$firstPara.hide();
// 	$('a.more').click(function () {
// 		$firstPara.animate(
// 			{
// 				opacity: 'toggle',
// 				height: 'toggle'
// 			},
// 			'slow'
// 		);
// 		var $link = $(this);
// 		if ($link.text() == 'read more') {
// 			$link.text('read less');
// 		} else {
// 			$link.text('read more');
// 		}
// 		return false;
// 	});
// });

// $(document).ready(function () {
// 	//css animate example
// 	var $speech = $('div.speech');
// 	var defaultSize = $speech.css('fontSize');
// 	$('#switcher button').click(function () {
// 		var num = parseFloat($speech.css('fontSize'));
// 		switch (this.id) {
// 			case 'switcher-large':
// 				num *= 1.4;
// 				break;
// 			case 'switcher-small':
// 				num /= 1.4;
// 				break;
// 			default:
// 				num = parseFloat(defaultSize);
// 		}
// 		$speech.animate({ fontsize: num + 'px' }, 'slow');
// 	});
// });

// $(document).ready(function () {
// 	//width animate example
// 	$('div.label').click(function () {
// 		var paraWidth = $('div.speech p').outerWidth();
// 		var $switcher = $(this).parent();
// 		var switcherWidth = $switcher.outerWidth();
// 		$switcher.animate(
// 			{
// 				borderWidth: '5px',
// 				left: paraWidth - switcherWidth,
// 				height: '+=20px'
// 			},
// 			'slow'
// 		);
// 	});
// });

// $(document).ready(function () {
// 	$('div.label').click(function () {
// 		var paraWidth = $('div.speech p').outerWidth();
// 		var $switcher = $(this).parent();
// 		var switcherWidth = $switcher.outerWidth();
// 		$switcher
// 			.css({
// 				position: 'relative'
// 			})
// 			.animate(
// 				{
// 					borderWidth: '5px',
// 					left: paraWidth - switcherWidth,
// 					height: '+=20px'
// 				},
// 				'slow'
// 			);
// 	});
// });

// $(document).ready(function () {
// 	//chaining example
// 	$('div.label').click(function () {
// 		var paraWidth = $('div.speech p').outerWidth();
// 		var $switcher = $(this).parent();
// 		var switcherWidth = $switcher.outerWidth();
// 		$switcher
// 			.css({ position: 'relative' })
// 			.fadeTo('fast', 0.5)
// 			.animate({ left: paraWidth - switcherWidth }, 'slow')
// 			.fadeTo('slow', 1.0)
// 			.animate({ height: '+=20px' }, 'slow')
// 			.animate({ borderWidth: '5px' }, 'slow')
// 			.slideUp('slow')
// 			.slideDown('slow');
// 	});
// });
