//CUSTOM SCROLL
var windowWidth = $(window).width();
if(windowWidth > 768){
	$(".scroll-content").mCustomScrollbar({
		theme:"dark"
	});
}

// CIRCLE PROGRESS BAR: DRAW GREEN LINE
$(".circle-progress-bar").each(function(){
	var val = parseInt($('#number').text());
	var $circle = $('#svg #bar');
	if (isNaN(val)) {
		val = 100;
	}
	else{
		var r = $circle.attr('r');
		var c = Math.PI*(r*2);

		if (val < 0) { val = 0;}
		if (val > 100) { val = 100;}

		var pct = ((100-val)/100)*c;

		$circle.css({ strokeDashoffset: pct});

		$('#cont').attr('data-pct',val);
	}
});


// FIX FOOTER TO BOTTOM: ADD PADDING ON .MAIN-CONTENT
$(window).resize(function() {
	var footerHeight = $('footer').outerHeight();
	$('.main-content').css({'padding-bottom' : footerHeight});
});
