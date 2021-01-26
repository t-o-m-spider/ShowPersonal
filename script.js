$(function() {

	// アコーディオン
	$('.FAQ-list').click(function () {
		const $answer = $(this).find('.answer');

		if($answer.hasClass('open')) {

			$answer.removeClass('open');

	      	$answer.slideUp();

	      	$(this).find('span').text('+');

	    } else {

	      	$answer.addClass('open');

	      	$answer.slideDown();

	      	$(this).find('span').text('-');
	    }

	});

	// 予約モーダル
	$('#Reservation-show').click(function () {
		$('#Reservation-modal').fadeIn("slow");
	});

	$('#Close-modal').click(function () {
		$('#Reservation-modal').fadeOut();
	})

	// お客様の声　スライド
	$('.index-btn').click(function () {
		$('.Active').removeClass('Active');

		const clickedIndex = $('.index-btn').index($(this));

		$('.Slide').eq(clickedIndex).addClass('Active');

		$('.Circle-active').removeClass('Circle-active');

		$(this).addClass('Circle-active');
	});

});
