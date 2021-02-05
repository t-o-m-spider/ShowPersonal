// セレクタを取り込む
const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight)
// スクロールした時、常にtargetElementの高さを取得する
document.addEventListener("scroll", function() {
     for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        // liの全体の高さの0.6の高さまでスクロールしたらshowクラスをつける
        getBoundingClientRect().top +targetElement[i].clientHeight * .6
        // 現在のブラウザの高さを取得する
        if(window.innerHeight > getElementDistance) {
            // i番目のliが見えた時点でshowというクラスをつける
            targetElement[i].classList.add("show");
        }
    }
})

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
