// $(".usecaseTop").owlCarousel({
//     items:1,
//     loop:true,
//     mouseDrag:true,
//     navText:false,
//     autoplay:true,
//     autoplaySpeed: 3500,
//     autoplayTimeout: 3500,
//     smartSpeed:3500,
//     slideTransition: 'linear',
//     dots:false,
//     margin:20,
//     center:true,
//     autoWidth:true,
// });

// $(".usecaseBottom").owlCarousel({
//     items:1,
//     loop:true,
//     mouseDrag:true,
//     navText:false,
//     autoplay:true,
//     autoplaySpeed: 3500,
//     autoplayTimeout: 3500,
//     smartSpeed:3500,
//     slideTransition: 'linear',
//     dots:false,
//     margin:20,
//     center:true,
//     autoWidth:true,
//     rtl:true,
// });

const truncate = function (fullStr, strLen, separator) {
  if (!fullStr) return;
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || "...";

  var sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
};

const success = (invert) => `
<div class="successWrapper ${invert ? "invert" : ""}"> 
${
  invert
    ? "<img width={148} src='/assets/img/success illustration.png' alt='success'/> "
    : "<img width={148} src='/assets/img/success illustration (1).png' alt='success'/>"
}

<h3>${invert ? "Thank you for your request!" : "Request sent!"}</h3>
<p>${
  invert
    ? "We will reach you shortly"
    : "Confirmation and further details are on the way."
}</p>
<a href="/casestudies" class="${
  invert ? "invert" : ""
}">Discover latest case studies -></a>
</div>`;

$(document).ready(function () {
  document.body.style.display = "block";

  if (window.innerWidth <= 600) {
    $("#link-community").click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      return;
    });
  }

  $(".testimonia_slide").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: false,
    stagePadding: 20, //padding in pixels
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".testimonia_slide_box .owl-stage").css(
    "transform",
    "translate3d(-1022px, 0px, 0px)"
  );

  $(".power_feature_slider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 3500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
      575: {
        items: 5,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 3500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
      768: {
        items: 5,
        mouseDrag: false,
        autoplay: false,
      },
    },
  });

  $(".power_feature_slider .owl-stage").css(
    "transform",
    "translate3d(-1092px, 0px, 0px)"
  );




  


  const $carousel2 = $(".chainSlider_mob_top").owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
      575: {
        items: 5,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
    },
  });


  setTimeout(() => {
    $carousel2.data("owl.carousel").options.responsive[
      "0"
    ].autoplayTimeout = 3500;
    $carousel2.data("owl.carousel").options.responsive[
      "575"
    ].autoplayTimeout = 3500;
    $carousel2.trigger("refresh.owl.carousel");
  }, 600);

  const $carousel1 = $(".chainSlider_mob").owlCarousel({
    loop: true,
    margin: 8,
    responsiveClass: true,
    dots: false,
    nav: false,
    rtl: true,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
      575: {
        items: 5,
        autoplay: true,
        autoplaySpeed: 3500,
        autoplayTimeout: 500,
        smartSpeed: 3500,
        slideTransition: "linear",
      },
    },
  });

  setTimeout(() => {
    $carousel1.data("owl.carousel").options.responsive[
      "0"
    ].autoplayTimeout = 3500;
    $carousel1.data("owl.carousel").options.responsive[
      "575"
    ].autoplayTimeout = 3500;
    $carousel1.trigger("refresh.owl.carousel");
  }, 600);

  const $carousel = $(".chain_slide_desk").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: false,
    nav: false,
    items: 1,
    autoplay: true,
    autoplaySpeed: 18500,
    autoplayTimeout: 500,
    smartSpeed: 18500,
    slideTransition: "linear",
  });

  setTimeout(() => {
    $carousel.data("owl.carousel").options.autoplayTimeout = 18800;
    $carousel.trigger("refresh.owl.carousel");
  }, 600);

  let fileSize = 0;
  $(document).on("change", "#attatchResume", function () {
    const name = $(this)[0].files[0].name;
    fileSize = $(this)[0].files[0].size;
    console.log(name);
    
      document.getElementById("JobApply").style.display = "block";
      document.getElementById("fileSizeError").style.display = "none";
 
    //$(".fileDropWrapper").append('<div class="control rotated"></div>');
    $(".attahResu label").text(`${truncate(name, 27)}`);
    $(".control").addClass("rotated");

    $(".control.rotated").on("touchstart click", function (e) {
      $(".control").removeClass("rotated");
      $(".attahResu label").text("Attach Resume / CV");
      $("#attatchResume")[0].files = null;
      document.querySelector(".cv-instractions.fileSizeError").style.display = "none";
    });
  });

  $(".JoinTeam").click(function (e) {
    e.preventDefault();
    $(".sidebar_form").addClass("active_side");
  });

  $("#JobApply").click(function (e) {
    e.preventDefault();
    
    if (fileSize <= 500000) {
   
      let error;

      $("#sideContact input").each(function () {
        if ($(this).val() === "") {
          $(this).parent().addClass("invalidField");
          error = true;
        }
      });

      const file = $("#attatchResume")[0].files[0];
      const fileName = file.name;
      document.getElementById("fileSizeError").style.display = "none";
      document.getElementById("JobApply").style.display = "block";

      if (!file) {
        error = true;
        $("#attatchResume").parent().addClass("emptyFile");
      }

      if (error) return;

      const FirstName = $("#sideContact #FirstName").val();
      const LastName = $("#sideContact #LastName").val();
      const ContactAddress = $("#sideContact #teleg_email_disc").val();
      const linkedIn = $("#sideContact #linkedin").val();
      const Message = $("#sideContact #Message").val();

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onerror = function () {
        console.log(reader);
      };

      reader.onload = async function () {
        const fileBase = reader.result;
        //$(this).hide();
        $('#JobApply').hide();
        grecaptcha.render("captchaJobApply", {
          sitekey: window.SITE_KEY_CAPTCHA,
          callback: async (token) => {
            $("#captchaJobApply").hide();
            $("#sideContact .form_btn").append('<div class="spinner-3"></div>');

            const res = await fetch(
              "https://xpnetwork-staging.herokuapp.com/application",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  FirstName,
                  LastName,
                  ContactAddress,
                  linkedIn,
                  fileBase,
                  fileName,
                  Message,
                  token,
                }),
              }
            );
            console.log(res);

            $(".sidebar_form").html(success());
          },
        });
      };
    } else {
      // document.getElementById("JobApply").style.display = "block"

      document.querySelector(".cv-instractions.fileSizeError").style.display = "block";
    }
  });

  $(".NFTdApp").click(function (e) {
    e.preventDefault();
    $(".sidebar_form").addClass("active_side");

    if ($(this).hasClass("withPlan")) {
      window.FORM_PLAN = $(this).parent().parent().find("h2").text();
      console.log(window.FORM_PLAN);
    }
    //if (window.location.pathname === "/") {
    $(".welcome_cont > p").text(
      "Integrate the multi-chain NFT bridge into your dApp"
    );
    $(".emailPlanField").show();
    $(".emailSlice").hide();
    $("#sideContact .inpCol:nth-child(1) label").text("Project name");
    $("#sideContact .inpCol:nth-child(2) label").text("Project website");
    $("#sideContact .inpCol:nth-child(1) input").attr("id", "Projectname");
    $("#sideContact .inpCol:nth-child(2) input").attr("id", "Projectwebsite");
    // }
  });

  $(".IntegrateBtn").click(function (e) {
    e.preventDefault();
    $(".welcome_cont > p").text("Integrate your chain to NFT bridge");
    $(".sidebar_form").addClass("active_side");
    $(".emailPlanField").hide();
    $(".emailSlice").show();
    $("#sideContact .inpCol:nth-child(1) label").text("Chain name");
    $("#sideContact .inpCol:nth-child(2) label").text("Chain website");
    $("#sideContact .inpCol:nth-child(1) input").attr("id", "ChainName");
    $("#sideContact .inpCol:nth-child(2) input").attr("id", "ChainWebsite");
  });

  $(".close_form").click(function () {
    $(".sidebar_form").removeClass("active_side");
  });

  $("span.navTriger").click(function () {
    $("body").toggleClass("active_menu");
  });

  $("a.nav-link").click(function () {
    $(this).parent().toggleClass("activeDrop");
  });

  $("#contactForm input, #sideContact input").blur(function (e) {
    e.preventDefault();
    if (!$(this).val()) $(this).parent().addClass("invalidField");
  });

  $("#contactForm input, #sideContact input").on("input", function (e) {
    //e.preventDefault();
    $(this).parent().removeClass("invalidField");
  });

  $(".navTriger").click(function () {});

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  $('#contactForm button[type="submit"]').click(function (e) {
    e.preventDefault();

    let error = false;

    $("#contactForm input").each(function () {
      if ($(this).val() === "") {
        $(this).parent().addClass("invalidField");
        error = true;
      }
    });

    if (error) return;

    const ProjectName = $("#contactForm #Projectname").val();
    const ContactName = $("#contactForm #Contactname").val();
    const ContactAddress = $("#contactForm #teleg_email_disc").val();
    const Message = $("#contactForm #Message").val();

    $(this).hide();

    grecaptcha.render("captcha1", {
      sitekey: window.SITE_KEY_CAPTCHA,
      callback: async (token) => {
        $("#captcha1").hide();
        $("#contactForm .form_btn").append('<div class="spinner-3"></div>');

        const res = await fetch(
          "https://xpnetwork-staging.herokuapp.com/contact",
          {
            method: "POST",
            headers: window.DEFAULT_HEADERS,
            body: JSON.stringify({
              ProjectName,
              ContactName,
              ContactAddress,
              Message,
              token,
            }),
          }
        );

        $(".form_container").html(success("invert"));
        //console.log(res);
      },
    });
  });
  ///////////////////////////////////////////////////////////////////////////////////////////

  $('#sideContact:not(.teamContact) button[type="submit"]').click(function (e) {
    console.log(window.location.pathname);
    e.preventDefault();

    let error = false;

    $("#sideContact input").each(function () {
      if (!$(this).val() && $(this).is(":visible")) {
        console.log($(this));
        $(this).parent().addClass("invalidField");
        error = true;
      }
    });

    if (error) return;

    const ProjectName = $("#sideContact #Projectname").val();
    const ProjectWebsite = $("#sideContact #Projectwebsite").val();
    const ChainName = $("#sideContact #ChainName").val();
    const ChainWebsite = $("#sideContact #ChainWebsite").val();
    const ContactName = $("#sideContact #Contactname").val();
    const ContactAddress = $("#sideContact #teleg_email_disc").val();
    const Message = $("#sideContact #Message").val();
    const Email = $('#sideContact #plan_email').val();

    $(this).hide();

    grecaptcha.render("captcha2", {
      sitekey: window.SITE_KEY_CAPTCHA,
      callback: async (token) => {
        $("#captcha2").hide();

        $("#sideContact .form_btn").append('<div class="spinner-3"></div>');
        try {
          const res = await fetch(
            `https://xpnetwork-staging.herokuapp.com/${
              window.FORM_PLAN ? "plan" : ChainName ? "connect" : "allusecase"
            }`,
            {
              method: "POST",
              headers: window.DEFAULT_HEADERS,
              body: JSON.stringify({
                ProjectName,
                ProjectWebsite,
                ChainName,
                ChainWebsite,
                ContactName,
                ContactAddress,
                Message,
                ...Email? {Email} : {},
                typePlan: window.FORM_PLAN ? window.FORM_PLAN : null,
                token,
              }),
            }
          );

          console.log(res);
          window.FORM_PLAN = null;
          $(".sideForm_container").html(success());
        } catch (e) {
          console.log(e);
          window.FORM_PLAN = null;
        }
      },
    });
  });

  $('#sideContact1 button[type="submit"]').click(function (e) {
    console.log(window.location.pathname);
    e.preventDefault();

    let error = false;

    $("#sideContact1 input").each(function () {
      if (!$(this).val()) {
        console.log($(this));
        $(this).parent().addClass("invalidField");
        error = true;
      }
    });

    if (error) return;

    const ProjectName = $("#sideContact1 #Projectname").val();
    const ProjectWebsite = $("#sideContact1 #Projectwebsite").val();
    const ContactName = $("#sideContact1 #Contactname").val();
    const ContactAddress = $("#sideContact1 #teleg_email_disc").val();
    const Message = $("#sideContact1 #Message").val();

    $(this).hide();

    grecaptcha.render("captcha3", {
      sitekey: window.SITE_KEY_CAPTCHA,
      callback: async (token) => {
        $("#captcha3").hide();

        $("#sideContact1 .form_btn").append('<div class="spinner-3"></div>');

        const res = await fetch(
          "https://xpnetwork-staging.herokuapp.com/allusecase",
          {
            method: "POST",
            headers: window.DEFAULT_HEADERS,
            body: JSON.stringify({
              ProjectName,
              ProjectWebsite,
              ContactName,
              ContactAddress,
              Message,
              token,
            }),
          }
        );

        console.log(res);

        $(".sideForm_container").html(success());
      },
    });
  });
});
