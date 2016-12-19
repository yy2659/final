jQuery(document).ready(function () {

	// init wow.js for sliding effect
	new WOW().init();

	// init flexslider for slide show
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: false,
		prevText: "",
		nextText: ""
	});

	// init masonry for filtering
	$('.examples-masonry').masonry({
		columnWidth: '.example-box',
		itemSelector: '.example-box',
		transitionDuration: '0.5s'
	});

	// video examples filtering - downloaded and modified code
	$('.example-filters a').on('click', function (e) {
		e.preventDefault();
		if (!$(this).hasClass('active')) {
			$('.example-filters a').removeClass('active');
			var clicked_filter = $(this).attr('class').replace('filter-', '');
			$(this).addClass('active');
			if (clicked_filter != 'all') {
				$('.example-box:not(.' + clicked_filter + ')').css('display', 'none');
				$('.example-box:not(.' + clicked_filter + ')').removeClass('example-box');
				$('.' + clicked_filter).addClass('example-box');
				$('.' + clicked_filter).css('display', 'block');
				$('.examples-masonry').masonry();
			}
			else {
				$('.examples-masonry > div').addClass('example-box');
				$('.examples-masonry > div').css('display', 'block');
				$('.examples-masonry').masonry();
			}
		}
	});

	$(window).on('resize', function () {
		$('.examples-masonry').masonry();
	});

	// video popup - downloaded and modified code 
	$('.example-box h3').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'The image could not be loaded.',
			titleSrc: function (item) {
				return item.el.text();
			}
		},
		callbacks: {
			elementParse: function (item) {
				var box_container = item.el.parents('.example-box-container');
				if (box_container.hasClass('example-video')) {
					item.type = 'iframe';
					item.src = box_container.data('example-big');
				}
				else {
					item.type = 'image';
					item.src = box_container.find('img').attr('src');
				}
			}
		}
	});

	// images popup - downloaded and modified code
	$('.view-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'The image could not be loaded.',
			titleSrc: function (item) {
				return item.el.parent('.work-bottom').siblings('img').attr('alt');
			}
		},
		callbacks: {
			elementParse: function (item) {
				item.src = item.el.attr('href');
			}
		}
	});

	// swap footer text
	$('#all').click(function () {
		$('#content-text').text("Our Founding Fathers have high expectations for each one of the 538 YOUs. I understand 306 of you currently are supposedly in Mr. Trump’s column, but can just 38 of you from red states please vote with your conscience for Hillary Clinton or some other qualified Republican? Please click each sub-content for details.");
		$('#content-text2').html("");
	});

	$('#one').click(function () {
		$('#content-text').text("Let’s learn what happened before Nov 8 the general election day. Here is a list of videos of a key campaign promise made by Mr. Trump in imprisoning Hillary Clinton for her mishandling of the private email server as former Secretary of State.");
		$('#content-text2').html("<p align=left class='panel-body'>This brief history will help you recognize how Mr. Trump has reeled in his supporters in battleground/swing states <a href='https://www.washingtonpost.com/news/the-fix/wp/2016/11/22/a-brief-history-of-the-lock-her-up-chant-as-it-looks-like-trump-might-not-even-try/?utm_term=.3e3e7f6808bf'>over a period of time</a>. Why not hunker down and pay attention to how Mr. Trump delivered one of his most important campaign promises and think hard <a href='functionality.html#q1'>whether you think he meant it or not</a>.</p>");
	});

	$('#two').click(function () {
		$('#content-text').text("Let’s learn what happened after Nov 8 the general election day. Here is a list of videos in which Mr. Trump and his trusted advisors have now said the President Elect has changed his mind regarding locking Hillary Clinton up.");
		$('#content-text2').html("<p align=left class='panel-body'>This timeline will help you recognize how Mr. Trump has done a complete 180 and duped his supporters. <a href='functionality.html#q2'>Please let me know what you think</a>. </p>");
	});

	$('#three').click(function () {
		$('#content-text').text("Let’s learn what happened before Nov 8 the general election day again in a different promise. Here is a list of videos in which Mr. Trump had attacked Wall Street financiers and hedge fund managers and later said he would “drain the swamp” of political establishment in the country’s capital because the system is rigged against him.");
		$('#content-text2').html("<p align=left class='panel-body'>This timeline will help you recognize how Mr. Trump had established his image as a populist, the Republican alternative to Bernie Sanders from the Democratic Party who had appealed to the working class. Who else don’t believe Mr. Trump will fight for average working class on the Main Street and fight against Wall Street and the political establishment? But look at his picks for <a href='functionality.html#q3'>cabinet members</a>! Three Goldman Sachs alumni, one “king of bankruptcy”, and one “head alligator.”</p><p align=left class='panel-body'>He also proposed term limits for <a href='functionality.html#q4'>members of Congress</a>. But look at the political establishment. Anyone signing up soon?</p>");
	});

	$('#four').click(function () {
		$('#content-text').text("");
		$('#content-text2').html("<p align=left class='panel-body'>Finally, the boring yet necessary legal stuff. <a href='functionality.html#q4'>Please head to this map under the Functionality tap</a> for the contiguous U.S. map showing 29 states plus the District of Columbia that legally bind you to vote on Dec 19 for the winner in the respective states according to results from Nov 8. Laws from official state legislatures websites would enable you to understand the legal requirement for yourselves and your fellow electors from other states, should you want to see if your own revolt could have significance. The rest of the states don’t have specific laws, but may have party pledges.</p>");
	});
	// disable send button
	$('.contact-form form').submit(function (e) {
		e.preventDefault();
	});

	// disable subscription button
	$('.footer-box-text-subscribe form').submit(function (e) {
		e.preventDefault();
	});

	// Questions
	$('#q3-ans').hide();
	$('#q4-ans').hide();

	$('#q3-btn').click(function () {
		$('#q3-ans').show();
	});
	$('#q4-btn').click(function () {
		$('#q4-ans').show();
	});
});

