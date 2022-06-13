$(document).ready(function () {
  jQuery(document).on("blur", "#Connectform input", function () {
    if (jQuery(this).val() == "") {
      jQuery(this).next().show();
      jQuery(this).addClass("invali_inp");
    } else {
      jQuery(this).next().hide();
      jQuery(this).removeClass("invali_inp");
    }
  });

  jQuery(".have_drop_menu").click(function () {
    jQuery(this).toggleClass("active").siblings().removeClass("active");
  });

  jQuery(".languageSelect> a").click(function () {
    jQuery(this).addClass("active").siblings().removeClass("active");
  });

  jQuery(".menu_triger").click(function () {
    jQuery(this).toggleClass("active");
  });

  jQuery(".haveDrop> a").click(function () {
    jQuery(this).toggleClass("active");
  });

  // jQuery("ul.whitePagMenuList> li").click(function(){
  // 	jQuery(this).toggleClass("active");
  // });

  jQuery(".menu_triger").click(function () {
    jQuery(".menu_boxes").toggleClass("active");
  });

  // jQuery(".filterTriger").click(function(){
  // 	jQuery(".search_side").addClass("active");
  // });

  //var sticky = new Sticky("[data-sticky]", {});
});

$(document).ready(function () {
  $(document).on("click", ".contactUsBtn", function () {
    $(document).on("click", ".btnClose", function () {
      form.hide();
      form.css("opacity", 0);
    });
    const form = $("#NotifyModal");
    form.show();
    form.css("opacity", 1);
  });
});

$(document).ready(function () {
  jQuery(".notifyForm #form input[required]").each(function () {
    let input = $(this);
    $(this).on("blur", function () {
      if (input.val() === "") {
        jQuery(this).addClass("invali_inp");
      }
    });
    $(this).on("keydown", function () {
      jQuery(this).removeClass("invali_inp");
    });
  });

  $(document).on("click", ".notifyForm .submit_job .submitBtn", function () {
    console.log("dsds");
    var first_name = jQuery(".notifyForm #first_name").val();
    var last_name = jQuery(".notifyForm #last_name").val();
    var yourEmail = jQuery(".notifyForm #yourEmail").val();
    var message = jQuery(".notifyForm #company_name").val();

    if (first_name != "" && last_name != "" && yourEmail != "") {
      if (!isValidEmail(yourEmail)) {
        jQuery(".notifyForm #yourEmail")
          .next()
          .next()
          .css("visibility", "visible");
        jQuery(".notifyForm #yourEmail").next().next().css("opacity", 1);
        jQuery(".notifyForm #yourEmail").addClass("invali_inp_email");
        jQuery(".notifyForm #yourEmail").next().hide();
        //jQuery("#yourEmail").removeClass("invali_inp");
      } else {
        jQuery(".notifyForm #yourEmail")
          .next()
          .next()
          .css("visibility", "visible");
        jQuery(".notifyForm #yourEmail").next().next().css("opacity", 0);
        jQuery(".notifyForm #yourEmail").removeClass("invali_inp_email");
        jQuery(".notifyForm #yourEmail").removeClass("invali_inp");

        $("#form > div > div.col-12 > div.submit_job > button").hide();

        grecaptcha.render("example6", {
          sitekey: "6LfGhUgeAAAAAL4cgCK9wzwMObfoqQnM2NkfnWSQ",
          callback: async (token) => {
            $.ajax({
              url: "https://xpnetworkapi.herokuapp.com/contact",
              type: "post",
              data: {
                firstName: first_name,
                lastName: last_name,
                email: yourEmail,
                message: message,
                token,
              },
              error: function (err) {
                console.log(err);
              },
              success: function (response) {
                if (response.ok === true) {
                  jQuery(".notifyForm .submit_job .submitBtn").attr(
                    "disabled",
                    "disabled"
                  );
                  document.querySelector(".application_container p").remove();
                  //document.getElementById(".notifyForm #form").remove();

                  document.querySelector(".application_container").innerHTML = `
                           <div class="tnx-container">
                            <span class="thanksImage"></span>
                            <div class="tnx-h1">Thank You!</div>
                               <div style="text-align:center;">Thank you for your interest!<br>We'll be in touch soon</div>
                           </div>`;
                }
              },
            });
          },
        });
      }
    } else {
      jQuery(".notifyForm #form input[required]").each(function () {
        if (jQuery(this).val() == "") {
          jQuery(this).next().show();
          jQuery(this).addClass("invali_inp");
        } else {
          jQuery(this).next().hide();
          jQuery(this).removeClass("invali_inp");
        }
      });
    }
  });
  jQuery(document).on("click", "#connectModal .submitBtn", function () {
    console.log("ello");
    var firstame = jQuery("#connectModal #first_name").val();
    var last_name = jQuery("#connectModal #last_name").val();
    var yourEmail = jQuery("#connectModal #yourEmail").val();
    var message = jQuery("#connectModal #company_name").val();
    /*var firstame = jQuery("#connectModal #first_name").val();*/

    if (firstame != "" && last_name != "" && yourEmail != "") {
      $("#Connectform .submit_job  button").hide();
      grecaptcha.render("example6", {
        sitekey: "6LfGhUgeAAAAAL4cgCK9wzwMObfoqQnM2NkfnWSQ",
        callback: async (token) => {
          $.ajax({
            url: "https://xpnetworkapi.herokuapp.com/contact",
            type: "post",
            data: {
              firstName: firstame,
              lastName: last_name,
              email: yourEmail,
              message: message,
              token,
            },
            success: function (response) {
              console.log(response);
              if (response.ok === true) {
                // jQuery(".notifyForm .submit_job .submitBtn").attr("disabled","disabled");
                document.querySelector(".application_container").remove();
                // document.getElementById("Connectform").remove();

                document.querySelector(".application_container").innerHTML = `
                <div class="tnx-container">
                 <span class="thanksImage"></span>
                 <div class="tnx-h1">Thank You!</div>
                    <div style="text-align:center;">Thank you for your interest!<br>We'll be in touch soon</div>
                </div>`;
              }
            },
          });
        },
      });
    } else {
      if (!isValidEmail(yourEmail)) {
        jQuery("#connectModal #yourEmail")
          .next()
          .next()
          .css("visibility", "visible");
        jQuery("#connectModal #yourEmail").next().next().css("opacity", 1);
        jQuery("#connectModal #yourEmail").addClass("invali_inp_email");
        jQuery("#connectModal #yourEmail").next().hide();
        //jQuery("#yourEmail").removeClass("invali_inp");
      }
      jQuery("#connectModal input").each(function () {
        if (jQuery(this).val() == "") {
          jQuery(this).next().show();
          jQuery(this).addClass("invali_inp");
        } else {
          jQuery(this).next().hide();
          jQuery(this).removeClass("invali_inp");
        }
      });
    }
  });
  function isValidEmail(emailText) {
    var pattern = new RegExp(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    );
    return pattern.test(emailText);
  }
});
