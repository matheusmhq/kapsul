$(document).ready(function () {
  $(".year").text(new Date().getFullYear());

  $(".navbar-nav li a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(function () {
    var nav = $("header");
    var btn = $(".button-back-top");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 75) {
        nav.addClass("header-fixed");
        btn.removeClass("d-none");
      } else {
        nav.removeClass("header-fixed");
        btn.addClass("d-none");
      }
    });
  });

  //Scrolling menu
  var sections = $("section"),
    nav = $("nav"),
    header_height = $("header").height();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("menu-active");
        sections.removeClass("menu-active");
        nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .addClass("menu-active");
      }
    });
  });

  $("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - header_height,
      },
      500
    );
    return false;
  });

  //Verify scroll after reload
  var scrollTop = $("html, body").scrollTop();
  if (scrollTop > 75) {
    $("header").addClass("header-fixed");
    $(".button-back-top").removeClass("d-none");
  }

  //Button back to top
  $(".button-back-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  var html = "";
  for (var i = 1; i <= 16; i++) {
    html += `
      <div class="col-6 col-md-4 mb-5">
          <div>
            <a
              href="img/carpets/item-${i}.webp"
              data-lightbox="image-1"
              data-title="tapete ${i}"
              ><img
                class="img-fluid"
                src="img/carpets/item-${i}.webp"
                alt="tapete ${i}"
                title="tapete ${i}"
            /></a>
          </div>
      </div>
    `;
  }
  $(".container-carpets").append(html);

  //Add bg black in menu mobile
  $(".navbar-toggler").click(function () {
    setTimeout(() => {
      var has = $(".navbar-collapse").hasClass("show");
      if (has) {
        $(".navbar").addClass("navbar-bg");
      } else {
        $(".navbar").removeClass("navbar-bg");
      }
    }, 360);
  });
});
