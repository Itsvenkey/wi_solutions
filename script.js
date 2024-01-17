document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('.fade-out');

    function handleFade() {
        sections.forEach(function (section) {
            var bounding = section.getBoundingClientRect();
            var fadeStart = window.innerHeight * 0.5; // Adjust this value to control when the fade-out starts
            var fadeEnd = window.innerHeight * 0.8;   // Adjust this value to control when the fade-out completes

            var opacity;

            if (bounding.bottom < fadeStart || bounding.top > fadeEnd) {
                // Section is out of the viewport
                opacity = 0;
                section.style.mixBlendMode = 'normal'; // Reset blend mode when section is out of view
            } else {
                // Section is partially in the viewport, calculate opacity
                opacity = 1 - (Math.min(Math.max(bounding.top, -fadeStart), fadeEnd) / fadeEnd);
                section.style.mixBlendMode = 'multiply'; // Apply blend mode when section is in view
            }

            section.style.opacity = opacity;
        });
    }

    window.addEventListener('scroll', handleFade);
    window.addEventListener('resize', handleFade);

    // Initial fade handling
    handleFade();
});


document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.getElementById("team-container");
    const headingContainer = document.getElementById("heading-container");
  
    window.addEventListener("scroll", function () {
      const teamContainerRect = teamContainer.getBoundingClientRect();
      const headingContainerRect = headingContainer.getBoundingClientRect();
  
      const scrollOffset = window.scrollY || window.pageYOffset;
  
      const headingPosition = scrollOffset - teamContainerRect.top;
      const maxPosition = teamContainerRect.height - headingContainerRect.height;
  
      if (headingPosition > 0 && headingPosition < maxPosition) {
        headingContainer.style.transform = `translateY(${headingPosition}px)`;
      } else if (headingPosition <= 0) {
        headingContainer.style.transform = "translateY(0)";
      } else {
        headingContainer.style.transform = `translateY(${maxPosition}px)`;
      }
    });
  });
  // const teamList = document.querySelector('.team-list');
  // const imageWidth = 450; // Adjust this value based on your image width
  // const scrollAmount = imageWidth;
  
  // function scrollToNextImage() {
  //     teamList.scrollTo({
  //         left: teamList.scrollLeft + scrollAmount,
  //         behavior: 'smooth'
  //     });
  // }

  // function scrollToPreviousImage(){
  //   teamList.scrollTo({
  //     left:teamList.scrollLeft-scrollAmount,
  //     behavior:'smooth'
  //   });
  // }

  function scrollToNextImage(containerSelector, scrollAmount) {
    const container = document.querySelector(containerSelector);
  
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  function scrollToPreviousImage(containerSelector, scrollAmount) {
    const container = document.querySelector(containerSelector);
  
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  function zoomIn(elementId) {
    document.getElementById(elementId).style.transform = 'scale(1.2)';
  }
  
  function zoomOut(elementId) {
    document.getElementById(elementId).style.transform = 'scale(1)';
  }
  
