// plan アコーディオン
jQuery(function ($) {
  // アコーディオン動作
  $('.c-plan__head').click(function () {
    $(this).next().slideToggle();
    $(this).children('.c-plan__ttl').toggleClass('is-open');
  });

  // 「クマ取り・目の下のたるみ(クマ治療)」だけ初期表示
  const firstPlan = $('.js-plan').first(); // 最初の.js-planを取得
  firstPlan.find('.c-plan__body').show(); // 中身を表示
  firstPlan.find('.c-plan__ttl').addClass('is-open'); // 開いた状態のクラス付与
});


// faq アコーディオン
jQuery('.c-faq__head').click(function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.c-faq__question').toggleClass('is-open');
});

// tab
/* jQuery(function() {
  jQuery('.p-tab__item').on('click', function() {
    jQuery('.p-tab__item, .p-tab__contents').removeClass('is-active');
 
    jQuery(this).addClass('is-active');
    
    var index = jQuery('.p-tab__item').index(this);
    jQuery('.p-tab__contents').eq(index).addClass('is-active');
  });
});
*/


// 追尾CTA
// ページがスクロールされたときに実行する関数を定義
function toggleFixedClass() {
  // 現在のスクロール位置を取得
  const scrollY = window.scrollY || window.pageYOffset;
  // 対象の要素を取得
  const footerCta = document.querySelector('.p-footer__btn');

  if (footerCta) {
    // スクロール位置が200px以上の場合にvisibleクラスを追加
    if (scrollY >= 200) {
      footerCta.classList.add('visible');
    } else {
      // それ以外の場合にはvisibleクラスを削除
      footerCta.classList.remove('visible');
    }
  }
}

// スクロールイベントリスナーを追加
window.addEventListener('scroll', toggleFixedClass);

// 初期状態でチェック
toggleFixedClass();

// スライダー
const breakPoint = 768; // ブレークポイントを設定
let swiperWorks, swiperVoices, swiperReviews;
let swiperWorksBool, swiperVoicesBool, swiperReviewsBool; 

window.addEventListener(
  "load",
  () => {
    if (breakPoint < window.innerWidth) {
      swiperWorksBool = false;
      swiperVoicesBool = false;
    } else {
      createSwiperWorks();
      createSwiperVoices();
      createSwiperReviews();
      swiperWorksBool = true;
      swiperVoicesBool = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (breakPoint < window.innerWidth) {
      if (swiperWorksBool) {
        swiperWorks.destroy(false, true);
        swiperWorksBool = false;
      }
      if (swiperVoicesBool) {
        swiperVoices.destroy(false, true);
        swiperVoicesBool = false;
      }
      if (swiperReviewsBool) {
        swiperReviews.destroy(false, true);
        swiperReviewsBool = false;
      }
    } else {
      if (!swiperWorksBool) {
        createSwiperWorks();
        swiperWorksBool = true;
      }
      if (!swiperVoicesBool) {
        createSwiperVoices();
        swiperVoicesBool = true;
      }
      if (!swiperReviewsBool) {
        createSwiperReviews();
        swiperReviewsBool = true;
      }
    }    
  },
  false
);
/*
const createSwiperWorks = () => {
  swiperWorks = new Swiper(".ba1-slider", {
    loop: true,
    speed: 1400,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

const createSwiperVoices = () => {
  swiperVoices = new Swiper(".ba2-slider", {
    loop: true,
    speed: 1400,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

const createSwiperReviews = () => {
  swiperReviews = new Swiper(".ba3-slider", { 
    loop: true,
    speed: 1400,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
*/
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("exitPopup");
  const closeButton = document.getElementById("closePopup");
  let hasShownPopup = false;

  function showPopup() {
    if (!hasShownPopup) {
      popup.classList.add("show");
      hasShownPopup = true;
    }
  }

  function hidePopup() {
    popup.classList.remove("show");
  }

  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (isMobile()) {
    // スクロールを上方向に大きく戻した時に発火（離脱っぽい動き）
    let lastScroll = 0;
    window.addEventListener("scroll", function () {
      let currentScroll = window.scrollY;
      if (currentScroll < lastScroll - 150) { // 150px以上上方向にスクロール
        showPopup();
      }
      lastScroll = currentScroll;
    });

    // ブラウザバック操作時
    window.addEventListener("popstate", function () {
      showPopup();
    });
  }

  // 閉じるボタン
  closeButton.addEventListener("click", hidePopup);

  // 背景クリックで閉じる
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      hidePopup();
    }
  });
});


// drawer
jQuery(document).ready(function () {
  jQuery('.drawer').drawer();
});
$(function() {
  $('.drawer-nav a[href^="#"]').on('click', function() {
    $('.drawer').drawer('close');
  });
});

// 症例詳細の開閉
$(function () {
  // 初期化：トリガーの「次以降のdl」を非表示
  $('.p-ba__detail .js-detail-toggle').each(function () {
    const $trigger = $(this);
    const $more = $trigger.parent().nextAll('dl'); // 「詳細+」の後ろのdlを全部
    $more.hide().addClass('is-detail-hidden');     // マーカー付けておく（任意）

    // クリックで開閉
    $trigger.on('click', function (e) {
      e.preventDefault();
      const expanded = $trigger.attr('aria-expanded') === 'true';
      $more.slideToggle(200);
      $trigger.attr('aria-expanded', !expanded);

      // 表示テキストの + / − を切り替え
      const $p = $trigger.find('p');
      if (!expanded) {
        $p.text('詳細 −');
      } else {
        $p.text('詳細 +');
      }
    });
  });
});

// === 症例画像ライトボックス ===
$(function () {
  const $lightbox = $('#lightbox');
  const $img      = $('#lightbox img');
  const $caption  = $('#lightbox .p-lightbox__caption');

  function openLightbox(src, alt) {
    $img.attr('src', src);
    $img.attr('alt', alt || '');
    $caption.text(alt || '');
    $caption.prop('hidden', !(alt && alt.length));
    $('body').addClass('no-scroll');
    $lightbox.addClass('show').attr('aria-hidden', 'false');
  }

  function closeLightbox() {
    $lightbox.removeClass('show').attr('aria-hidden', 'true');
    $('body').removeClass('no-scroll');
    // 読み込みを解放
    $img.attr('src', '');
  }

  // 症例画像クリック（ba1/ba3 共通）
  $(document).on('click', '.p-ba__image img', function (e) {
    e.preventDefault();
    // data-full があれば高解像度を優先、なければそのまま
    const src = this.getAttribute('data-full') || this.getAttribute('src');
    const alt = this.getAttribute('alt') || '';
    openLightbox(src, alt);
  });

  // 背景クリック & 閉じるボタン
  $lightbox.on('click', '.p-lightbox__backdrop, .p-lightbox__close', closeLightbox);

  // ダイアログクリックは閉じない
  $lightbox.on('click', '.p-lightbox__dialog', function (e) { e.stopPropagation(); });

  // ESCで閉じる
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $lightbox.hasClass('show')) closeLightbox();
  });
});
