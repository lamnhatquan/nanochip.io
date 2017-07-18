/*
	Interphase by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: 'css/style.css',
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				href: 'css/style-xlarge.css',
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				href: 'css/style-large.css',
				containers: 960,
				grid: { gutters: ['1.5em', 0] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				href: 'css/style-medium.css',
				containers: '90%'
			},
			small: {
				media: '(max-width: 736px)',
				href: 'css/style-small.css',
				containers: '90%',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: 'css/style-xsmall.css',
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				}
			}
		}
	});

	$(function() {
	});

})(jQuery);

count = 1;
function showInfo(e) {
	p = e.parentElement;
  $(e).animate({opacity: 1}, 400);
	$(":first-child", p).css("visibility", "hidden");
	dataLayer.push({
		'event': 'showInfo',
		'label': p.id,
		'value': 100./count++,
	});
}

vision_count = 1;
function showVision(e) {
	p = e.parentElement;
  $(e).animate({opacity: 1}, 400);
	$(":first-child", p).css("visibility", "hidden");
	dataLayer.push({
		'event': 'showVision',
		'label': p.id,
		'value': 100./vision_count++,
	});
}
