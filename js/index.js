
/************************************************ SLIDER**********/


var sliderControlOne = document.querySelector(".slider__control_1");
var sliderControlOneActive = document.querySelector(".slider__control_active_1");

var sliderControlTwo = document.querySelector(".slider__control_2");
var sliderControlTwoActive = document.querySelector(".slider__control_active_2");

var sliderControlThree = document.querySelector(".slider__control_3");
var sliderControlThreeActive = document.querySelector(".slider__control_active_3");

var sliderOne = document.querySelector(".slider_1__wrapper");
var sliderTwo = document.querySelector(".slider_2__wrapper");
var sliderThree = document.querySelector(".slider_3__wrapper");


sliderControlOne.addEventListener("click", function(evt) {

	if (sliderTwo.classList.contains("slider_active") || sliderThree.classList.contains("slider_active")) {		
		evt.preventDefault(evt);

		sliderTwo.classList.remove("slider_active");
		sliderControlTwoActive.classList.remove("slider__control_active");

		sliderThree.classList.remove("slider_active");
		sliderControlThreeActive.classList.remove("slider__control_active");

		sliderOne.classList.add("slider_active");
		sliderControlOneActive.classList.add("slider__control_active");
	}
});


sliderControlTwo.addEventListener("click", function(evt) {

	if (sliderOne.classList.contains("slider_active") || sliderThree.classList.contains("slider_active")) {		
		evt.preventDefault(evt);

		sliderOne.classList.remove("slider_active");
		sliderControlOneActive.classList.remove("slider__control_active");

		sliderThree.classList.remove("slider_active");
		sliderControlThreeActive.classList.remove("slider__control_active");

		sliderTwo.classList.add("slider_active");
		sliderControlTwoActive.classList.add("slider__control_active");

	}
});


sliderControlThree.addEventListener("click", function(evt) {

	if (sliderOne.classList.contains("slider_active") || sliderTwo.classList.contains("slider_active")) {		
		evt.preventDefault(evt);

		sliderOne.classList.remove("slider_active");
		sliderControlTwoActive.classList.remove("slider__control_active");

		sliderTwo.classList.remove("slider_active");
		sliderControlOneActive.classList.remove("slider__control_active");

		sliderThree.classList.add("slider_active");
		sliderControlThreeActive.classList.add("slider__control_active");

	}
});


/************************************************ tabs **********/


var tabsDelivery = document.querySelector(".tabs_content_delivery");
var tabsSafe = document.querySelector(".tabs_content_safe");
var tabsCredit = document.querySelector(".tabs_content_credit");

var linkTabsDelivery = document.querySelector(".tabs__button_1");
var linkTabsSafe = document.querySelector(".tabs__button_2");
var linkTabsCredit = document.querySelector(".tabs__button_3");


linkTabsDelivery.addEventListener("click", function (evt) {

	if (linkTabsSafe.classList.contains("tabs_button_active") || linkTabsCredit.classList.contains("tabs_button_active")) {
		evt.preventDefault();

		tabsSafe.classList.remove("tabs_content_active");
		linkTabsSafe.classList.remove("tabs_button_active");

		tabsCredit.classList.remove("tabs_content_active");
		linkTabsCredit.classList.remove("tabs_button_active");

		tabsDelivery.classList.add("tabs_content_active");
		linkTabsDelivery.classList.add("tabs_button_active");
	}
});


linkTabsSafe.addEventListener("click", function (evt) {

	if (linkTabsDelivery.classList.contains("tabs_button_active") || linkTabsCredit.classList.contains("tabs_button_active")) {
		evt.preventDefault();

		tabsDelivery.classList.remove("tabs_content_active");
		linkTabsDelivery.classList.remove("tabs_button_active");

		tabsCredit.classList.remove("tabs_content_active");
		linkTabsCredit.classList.remove("tabs_button_active");

		tabsSafe.classList.add("tabs_content_active");
		linkTabsSafe.classList.add("tabs_button_active");
	}
});

linkTabsCredit.addEventListener("click", function (evt) {

	if (linkTabsDelivery.classList.contains("tabs_button_active") || linkTabsSafe.classList.contains("tabs_button_active")) {
		evt.preventDefault();

		tabsDelivery.classList.remove("tabs_content_active");
		linkTabsDelivery.classList.remove("tabs_button_active");

		tabsSafe.classList.remove("tabs_content_active");
		linkTabsSafe.classList.remove("tabs_button_active");

		tabsCredit.classList.add("tabs_content_active");
		linkTabsCredit.classList.add("tabs_button_active");
	}
});


/************************************************ modal write us **********/


  var modalClose = document.querySelector(".modal__close_write");
  var linkModalWriteUs = document.querySelector(".about_us__write_us");
  var modalWriteUs = document.querySelector(".modal_write");
  var modalName = modalWriteUs.querySelector("[name=modal_write__name]");
  var modalForm = modalWriteUs.querySelector("form");
  var modalEmail = modalWriteUs.querySelector("[name=modal_write__e-mail]");


linkModalWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal_show");
  modalName.focus();
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal_show");
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalEmail.value) {
  evt.preventDefault();
  console.log("The form is empty!!!")
  }
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if (modalWriteUs.classList.contains("modal_show")) {
      modalWriteUs.classList.remove("modal_show");
    }
  }
});


/************************************************ modal map **********/


var linkModalMap = document.querySelector(".contacts__link");
var modalMap = document.querySelector(".modal_map");
var modalCloseMap = document.querySelector(".modal__close_map");

linkModalMap.addEventListener("click", function(evt) {

	evt.preventDefault();
	modalMap.classList.add("modal_map_active");
	modalCloseMap.focus();
});
modalCloseMap.addEventListener("click", function (evt) {
	modalMap.classList.remove("modal_map_active");
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains("modal_map_active")) {
			modalMap.classList.remove("modal_map_active");
		}
	}
});




