$(document).ready(function () {
    $('.services__items').click(function (event) {
        if ($('.services__cards').hasClass('one')) {
            $('.services__item').not($(this)).removeClass('services__des-active');
            $('.services__des').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('services__des-active').next().slideToggle(300);
    });
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('_anim-active');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('._anim-item');
  for (let elm of elements) {
    observer.observe(elm);
  }