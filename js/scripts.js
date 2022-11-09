/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var camelize = function camelize(str) {
        var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
            return c ? c.toUpperCase() : '';
        });
        return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
    };

    var getData = function getData(el, data) {
        try {
            return JSON.parse(el.dataset[camelize(data)]);
        } catch (e) {
            return el.dataset[camelize(data)];
        }
    };

    var swipers = document.querySelectorAll('[data-swiper]');
    var navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
    swipers.forEach(function (swiper) {
        var options = getData(swiper, 'swiper');
        var thumbsOptions = options.thumb;
        var thumbsInit;

        if (thumbsOptions) {
            var thumbImages = swiper.querySelectorAll('img');
            var slides = '';
            thumbImages.forEach(function (img) {
                slides += "\n          <div class='swiper-slide '>\n            <img class='img-fluid rounded mt-1' src=".concat(img.src, " alt=''/>\n          </div>\n        ");
            });
            var thumbs = document.createElement('div');
            thumbs.setAttribute('class', 'swiper-container thumb');
            thumbs.innerHTML = "<div class='swiper-wrapper'>".concat(slides, "</div>");

            if (thumbsOptions.parent) {
                var parent = document.querySelector(thumbsOptions.parent);
                parent.parentNode.appendChild(thumbs);
            } else {
                swiper.parentNode.appendChild(thumbs);
            }

            thumbsInit = new window.Swiper(thumbs, thumbsOptions);
        }

        var swiperNav = swiper.querySelector('.swiper-nav');
        var newSwiper = new window.Swiper(swiper, _objectSpread(_objectSpread({}, options), {}, {
            navigation: {
                nextEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-next'),
                prevEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-prev')
            },
            thumbs: {
                swiper: thumbsInit
            }
        }));

        if (navbarVerticalToggle) {
            navbarVerticalToggle.addEventListener('navbar.vertical.toggle', function () {
                newSwiper.update();
            });
        }
    });
});
