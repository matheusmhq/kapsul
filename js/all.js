$(document).ready(function () {
  new WOW().init();

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

  console.log("nav");
  console.log(nav);
  console.log("  header_height " + header_height);

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        var id = $(this).attr("id");
        nav.find("a").removeClass("menu-active");
        sections.removeClass("menu-active");
        nav.find('a[href="#' + id + '"]').addClass("menu-active");

        if (id.includes("carpets")) {
          nav.find(".btn-carpets").addClass("menu-active");
        }
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

  // Painted
  var html = "";
  for (var i = 1; i <= 3; i++) {
    html += `
      <div class="col-6 col-md-4 mb-5 wow fadeInUp">
          <div>
            <a
              href="./img/carpets/painted/item-${i}.jpg"
              data-lightbox="image-1"
              data-title="tapete ${i}"
              ><img
                class="img-fluid"
                src="./img/carpets/painted/item-${i}.jpg"
                alt="tapete ${i}"
                title="tapete ${i}"
            /></a>
          </div>
      </div>
    `;
  }
  $(".container-carpets").append(html);

  // Vulcanized
  var html_vulcanized = "";
  for (var i = 1; i <= 5; i++) {
    html_vulcanized += `
      <div class="col-6 col-md-4 mb-5 wow fadeInUp">
          <div>
            <a
              href="img/carpets/vulcanized/item-${i}.jpg"
              data-lightbox="image-2"
              data-title="tapete ${i}"
              ><img
                class="img-fluid"
                src="img/carpets/vulcanized/item-${i}.jpg"
                alt="tapete ${i}"
                title="tapete ${i}"
            /></a>
          </div>
      </div>
    `;
  }
  $(".container-carpets-vulcanized").append(html_vulcanized);

  // Sign
  var html_sign = "";
  for (var i = 1; i <= 4; i++) {
    html_sign += `
        <div class="col-6 col-md-4 mb-5 wow fadeInUp">
            <div>
              <a
                href="img/carpets/sign/item-${i}.jpg"
                data-lightbox="image-3"
                data-title="tapete ${i}"
                ><img
                  class="img-fluid"
                  src="img/carpets/sign/item-${i}.jpg"
                  alt="tapete ${i}"
                  title="tapete ${i}"
              /></a>
            </div>
        </div>
      `;
  }
  $(".container-carpets-sign").append(html_sign);

  // High traffic
  var html_high_traffic = "";
  for (var i = 1; i <= 4; i++) {
    html_high_traffic += `
         <div class="col-6 col-md-4 mb-5 wow fadeInUp">
             <div>
               <a
                 href="img/carpets/high-traffic/item-${i}.jpg"
                 data-lightbox="image-4"
                 data-title="tapete ${i}"
                 ><img
                   class="img-fluid"
                   src="img/carpets/high-traffic/item-${i}.jpg"
                   alt="tapete ${i}"
                   title="tapete ${i}"
               /></a>
             </div>
         </div>
       `;
  }
  $(".container-carpets-high-traffic").append(html_high_traffic);

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
