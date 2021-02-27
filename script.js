// メニューボタン・アンダーレイ切り替え
document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('MenuButton').addEventListener("click", function () {

		this.classList.toggle("active");

		document.getElementById("Spmenu").classList.toggle("active");

		document.getElementById("Spmenu-container").classList.toggle("active");
	})

	document.getElementById("Spmenu-container").addEventListener("click", function() {

  		this.classList.toggle("active");

  		document.getElementById("Spmenu").classList.toggle("active");

  		document.getElementById("MenuButton").classList.toggle("active");

	})
	
	// スクロールした時フワッと出す

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
});

$(function() {

	// アコーディオン
	$('.FAQ-list').click(function () {
		const $answer = $(this).find('.answer');

		if($answer.hasClass('open')) {

			$answer.removeClass('open');

	      	$answer.slideUp(300);

	      	$(this).find('span').text('+');

	    } else {

	      	$answer.addClass('open');

	      	$answer.slideDown(300);

	      	$(this).find('span').text('-');
	    }

	});

	// 予約モーダル
	$('.Reservation-show').click(function () {
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

	// ナビゲーションクリック時にスクロール移動
	$(function() {

		$('.Home-scroll').click(function() {
			$("html,body").animate({scrollTop:0
			},'1000');
		});
	
		$('.Profile-scroll').click(function() {
			$("html,body").animate({scrollTop:$('#Profile').offset().top -70
			},'1000');
		});
	
		$('.Step-scroll').click(function() {
			$("html,body").animate({scrollTop:$('#Step').offset().top -20
			},'1000');
		});
	
		$('.FAQ-scroll').click(function() {
			$("html,body").animate({scrollTop:$('#FAQ').offset().top -100
			},'1000');
		});
	});
});
