document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
     YEAR
     ===================================================== */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =====================================================
     MOBILE MENU
     ===================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainMenu = document.querySelector(".main-nav");

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainMenu.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    mainMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainMenu.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }


  /* =====================================================
     CAROUSEL
     ===================================================== */

  const carousel = document.querySelector(".carousel");

  if (!carousel) {
    return;
  }

  const slides = Array.from(
    carousel.querySelectorAll(".slide")
  );

  const dots = Array.from(
    carousel.querySelectorAll(".dot")
  );

  const status = document.getElementById(
    "carousel-status"
  );

  if (slides.length === 0) {
    return;
  }


  /* =====================================================
     SETTINGS
     ===================================================== */

  let currentIndex = 0;

  let autoPlayTimer = null;

  let isAnimating = false;

  /*
   * This matches the new CSS transition duration.
   *
   * CSS:
   * opacity / transform = 0.7s
   */
  const TRANSITION_DURATION = 700;

  /*
   * Time between automatic slide changes.
   */
  const AUTO_PLAY_DELAY = 5000;


  /* =====================================================
     ACCESSIBILITY
     ===================================================== */

  function updateAccessibility(index) {
    slides.forEach((slide, i) => {
      const isActive = i === index;

      slide.setAttribute(
        "aria-hidden",
        String(!isActive)
      );
    });


    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");

        dot.setAttribute(
          "aria-current",
          "true"
        );
      } else {
        dot.classList.remove("active");

        dot.setAttribute(
          "aria-current",
          "false"
        );
      }
    });


    if (status) {
      status.textContent =
        `Prikazana je fotografija ${index + 1} od ${slides.length}.`;
    }
  }


  /* =====================================================
     CHANGE SLIDE
     ===================================================== */

  function showSlide(
    newIndex,
    direction = "next"
  ) {
    if (isAnimating) {
      return;
    }

    if (newIndex === currentIndex) {
      return;
    }


    if (
      newIndex < 0 ||
      newIndex >= slides.length
    ) {
      return;
    }


    isAnimating = true;


    const oldSlide =
      slides[currentIndex];

    const newSlide =
      slides[newIndex];


    /* -----------------------------------------------
       Remove any previous direction state
       ----------------------------------------------- */

    carousel.classList.remove(
      "next",
      "previous"
    );


    /* -----------------------------------------------
       Set direction
       ----------------------------------------------- */

    carousel.classList.add(direction);


    /* -----------------------------------------------
       Prepare incoming slide
       ----------------------------------------------- */

    /*
     * Make sure the new slide starts from its
     * normal inactive state before becoming active.
     */

    newSlide.classList.remove(
      "previous"
    );


    /* -----------------------------------------------
       Mark outgoing slide
       ----------------------------------------------- */

    oldSlide.classList.remove(
      "active"
    );

    oldSlide.classList.add(
      "previous"
    );


    /* -----------------------------------------------
       Activate incoming slide
       ----------------------------------------------- */

    newSlide.classList.add(
      "active"
    );


    /* -----------------------------------------------
       Update index and accessibility
       ----------------------------------------------- */

    currentIndex = newIndex;

    updateAccessibility(
      currentIndex
    );


    /* -----------------------------------------------
       Finish transition
       ----------------------------------------------- */

    window.setTimeout(() => {
      oldSlide.classList.remove(
        "previous"
      );

      carousel.classList.remove(
        "next",
        "previous"
      );

      isAnimating = false;
    }, TRANSITION_DURATION + 50);
  }


  /* =====================================================
     NEXT SLIDE
     ===================================================== */

  function nextSlide() {
    const nextIndex =
      (currentIndex + 1) %
      slides.length;

    showSlide(
      nextIndex,
      "next"
    );
  }


  /* =====================================================
     PREVIOUS SLIDE
     ===================================================== */

  function previousSlide() {
    const previousIndex =
      (currentIndex - 1 + slides.length) %
      slides.length;

    showSlide(
      previousIndex,
      "previous"
    );
  }


  /* =====================================================
     DOT NAVIGATION
     ===================================================== */

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex =
        Number(
          dot.dataset.slideIndex
        );


      if (
        Number.isNaN(targetIndex) ||
        targetIndex < 0 ||
        targetIndex >= slides.length
      ) {
        return;
      }


      if (
        targetIndex === currentIndex
      ) {
        return;
      }


      /*
       * Determine the direction.
       *
       * This keeps the visual movement intuitive:
       *
       * 1 → 2 = next
       * 2 → 3 = next
       * 3 → 2 = previous
       * 2 → 1 = previous
       */

      const direction =
        targetIndex > currentIndex
          ? "next"
          : "previous";


      showSlide(
        targetIndex,
        direction
      );


      restartAutoPlay();
    });
  });


  /* =====================================================
     AUTO PLAY
     ===================================================== */

  function startAutoPlay() {
    stopAutoPlay();

    /*
     * Don't autoplay if there is only one image.
     */

    if (slides.length <= 1) {
      return;
    }


    autoPlayTimer =
      window.setInterval(
        () => {
          nextSlide();
        },
        AUTO_PLAY_DELAY
      );
  }


  function stopAutoPlay() {
    if (
      autoPlayTimer !== null
    ) {
      window.clearInterval(
        autoPlayTimer
      );

      autoPlayTimer = null;
    }
  }


  function restartAutoPlay() {
    startAutoPlay();
  }


  /* =====================================================
     PAUSE WHILE HOVERING
     ===================================================== */

  carousel.addEventListener(
    "mouseenter",
    () => {
      stopAutoPlay();
    }
  );


  carousel.addEventListener(
    "mouseleave",
    () => {
      startAutoPlay();
    }
  );


  /* =====================================================
     PAUSE WHEN TAB IS HIDDEN
     ===================================================== */

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    }
  );


  /* =====================================================
     KEYBOARD NAVIGATION
     ===================================================== */

  carousel.setAttribute(
    "tabindex",
    "0"
  );


  carousel.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "ArrowRight"
      ) {
        event.preventDefault();

        nextSlide();

        restartAutoPlay();
      }


      if (
        event.key === "ArrowLeft"
      ) {
        event.preventDefault();

        previousSlide();

        restartAutoPlay();
      }
    }
  );


  /* =====================================================
     INITIAL STATE
     ===================================================== */

  slides.forEach((slide, index) => {
    slide.classList.toggle(
      "active",
      index === currentIndex
    );

    slide.classList.remove(
      "previous"
    );

    slide.setAttribute(
      "aria-hidden",
      String(index !== currentIndex)
    );
  });


  updateAccessibility(
    currentIndex
  );


  startAutoPlay();
});