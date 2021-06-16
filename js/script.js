let movies = new Swiper('.movies__slider', {
  simulateTouch: true,
  touchRatio: 2,
  touchAngle: 45,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerView: 6,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 6
    }
  },
});

let lastmovies = new Swiper('.latestmovies__slider', {
  simulateTouch: true,
  touchRatio: 2,
	touchAngle: 45,
	grabCursor: true,
  keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
  slidesPerView: 6,
  spaceBetween: 15,
  freeMode: true,
  breakpoints: {
		320: {
			slidesPerView: 2,
		},
		1280: {
			slidesPerView: 4,
		},
    1600: {
      slidesPerView: 6
    }

	},
});


