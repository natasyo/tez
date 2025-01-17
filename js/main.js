$(document).ready(function() { //ползунок
	$('.slider__range').slider({
      range:true,
      min: 5,
      max: 600000,
      step: 5, 
      width:323,
      values: [150000, 450000], //задаем начальные значения
      slide: function( event, ui ) {
        jQuery('#value'+ui.handleIndex).attr({
          value:  ui.value 
        });
      },
       create: function( event, ui ){
         jQuery('#value0').attr({ value:  150000 });  //задаем начальные значения
         jQuery('#value1').attr({ value:  450000 });

         }
    });
$('.tuor-slider').slick({ //слайдер
  slidesToShow: 4,
  slidesToScroll: 3,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         variableWidth: true,
      }
    },
    {
      breakpoint: 566,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
         variableWidth: true,
        
      }
    }
    ]
  
});
if($(window).width() <= '1200'){
  $('.top-tour__items, .tourist-guide__items_main, .actual-offer__wrap_sl').slick({ //слайдер
  slidesToShow: 4, 
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      width:200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      }
    }

    ]
});
}

 $('.reviews-sect__video').slick({ //слайдер
  slidesToShow: 4, 
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      width:200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
      }
    }

    ]
});

$(".contact-modal").dialog({ 
  autoOpen: false,
  title: 'Обратный звонок',
  modal:true,
  width:378,
  dialogClass: "form-modal"
   });

$('.consultation').on('click', function(event) { //открытие диалогового окна
  event.preventDefault();
  /* Act on the event */
  $(".contact-modal").dialog('open');
});

var toggles = document.querySelectorAll(".c-hamburger");//гамбургер
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

$(window).scroll(function(){ //фиксируем меню
  var docscroll=$(document).scrollTop();
  if(docscroll>$('.header-main').height()){
    $('.header-main').css({'height': $('.header-main').height(),'width': $('.header-main').width()}).addClass('nav-fixed');
  }else{
    $('.header-main').removeClass('nav-fixed');
  }
});

$('.mobile-icon').click(function(event) {
  /* Act on the event */
  event.preventDefault();
  $('.mobile-menu').toggleClass('mobile-menu_active');
});

$('.footer__column-name').click(function(event) {//тображение пунктов меню в футере
  /* Act on the event */
  $(this).siblings('.footer__menu').toggleClass('footer__menu_show');
});

$width=$(window).width();
$(window).resize(function() { //обновление страницы при ширины окна
  if($width!=$(window).width()){
    
        window.setTimeout('location.reload()', 200);
  }
    });


// Выпадающий список
$('.search-form__dropdown').click(function(event) {
  /* Act on the event */
  $(this).children('.search-form__dropdown-list').removeClass('d-none');
});

$('.search-form__dropdown-list').on('click', 'li', function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).parent('.search-form__dropdown-list').siblings('.search-form__input').attr({'value':$(this).text()});
  console.log();
  $(this).parent('.search-form__dropdown-list').addClass('d-none');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".search-form__dropdown-list"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.addClass('d-none'); // скрываем его
    }
  });

// русификаця календаря
$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Предыдущий',
  nextText: 'Следующий',
  currentText: 'Сегодня',
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
  dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
  dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

// календарь
$('.calendar').datepicker();

$('.reviews-sect__reviews').slick({
  responsive: [
    {
      breakpoint: 568,
      settings: {
        swipe:false
      }
    }
    ]
});

var countSlides= jQuery('.reviews-sect__reviews').slick("getSlick").slideCount; //определение количества слайдов
jQuery('.review__count').text(countSlides);

jQuery('.reviews-sect__reviews').on('afterChange', function(event, slick, currentSlide){
          jQuery('.review__current-num').text(currentSlide+1);
        
      });

var countSlides= jQuery('.reviews-sect__video').slick("getSlick").slideCount; //определение количества слайдов
jQuery('.review__count-video').text(countSlides);

jQuery('.reviews-sect__video').on('afterChange', function(event, slick, currentSlide){
          jQuery('.review__current-num-video').text(currentSlide+1);
        
      });
    if($(window).width()<'568'){
      $('.review__photos-hotel-wrap').slick({
         slidesToShow:2,
         slidesToScroll: 1,
         variableWidth: true,
         arrows:false
      });
      $('.reviews-sect__reviews').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        event.stopPropagation();
      });
    }


    // Корпоративным клента слайдер
    $('.actual-offer__wrap_corporation').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      variableWidth: true,
    });


// Tab

 $('.tabs').tabs();

});
