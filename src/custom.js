// custom.js

import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';

const CustomScripts = () => {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      let navbarlinks = select('#navbar .scrollto', true);
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    const headerScrolled = () => {
      let selectHeader = select('#header');
      let selectTopbar = select('#topbar');
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled');
        }
      } else {
        selectHeader.classList.remove('header-scrolled');
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled');
        }
      }
    };

    const toggleBacktotop = () => {
      let backtotop = select('.back-to-top');
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    const scrollto = (el) => {
      let header = select('#header');
      let offset = header.offsetHeight;
      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth',
      });
    };

    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);

    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);

    on('click', '.mobile-nav-toggle', function (e) {
      select('#navbar').classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

    on('click', '.navbar .dropdown > a', function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    }, true);

    on('click', '.scrollto', function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        let navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    }, true);

    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    let heroCarouselIndicators = select("#hero-carousel-indicators");
    let heroCarouselItems = select('#heroCarousel .carousel-item', true);

    heroCarouselItems.forEach((item, index) => {
      heroCarouselIndicators.innerHTML += `<li data-bs-target='#heroCarousel' data-bs-slide-to='${index}' class='${index === 0 ? 'active' : ''}'></li>`;
    });

    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows',
      });

      let menuFilters = select('#menu-flters li', true);
      on('click', '#menu-flters li', function (e) {
        e.preventDefault();
        menuFilters.forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');
        menuIsotope.arrange({ filter: this.getAttribute('data-filter') });
      }, true);
    }

    new Swiper('.events-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }, []);

  return null;
};

export default CustomScripts;
