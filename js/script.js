// Swiper

var swiper = new Swiper(".gallery", {
  slidesPerView: 6,
  spaceBetween: 17,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

//Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

/* Попапы */
const popups = document.querySelectorAll(".popup");
function openPopup(pointer, target) {
  const popup = document.querySelector(`.popup#${pointer}`);
  popup.classList.add("popup_opened");
  if (pointer === "photo") {
    popup.querySelector(".popup__image").src = target.src;
    
  }

  document.addEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
}

function handleOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

function closePopup() {
  popups.forEach((el) => {
    el.classList.remove("popup_opened");
  });

  document.removeEventListener("keydown", handleEscClose);
}

if (popups.length > 0) {
  popups.forEach((popup) => {
    const id = popup.id;
    const closeBtn = popup.querySelector(".close-btn");
    const popupContainer = popup.querySelector(".popup__container");

    const links = document.querySelectorAll(`[data-pointer="${id}"]`);
    links.forEach((link) => {
      link.addEventListener("click", ({ target }) => {
        openPopup(link.dataset.pointer, target);
      });
    });

    closeBtn.addEventListener("click", () => closePopup());
    popupContainer.addEventListener("click", (evt) => handleOverlayClick(evt));
  });
}