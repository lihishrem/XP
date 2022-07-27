window.SITE_KEY_CAPTCHA = "6LfT1mIeAAAAACpPYLmzmhgJmSLJXdsKLHk3tX1h";
window.SITE_KEY_INV_CAPTCHA = "6LfQOTEgAAAAAL07CQVjXTx8ixN1koilgCPRnzd4";
window.DEFAULT_HEADERS = {
  Accept: "*",
  "Content-Type": "application/json",
};
window.NEWS_EMAIL = "";

const customScripts = document.createElement("script");
customScripts.type = "text/javascript";
const customScripts1 = document.createElement("script");
customScripts1.type = "text/javascript";

const emailOptinModal = (link) => `
  <style>
    .optInOverlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.4;
      z-index: 1000;
    }

    .optInModal {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(100%, -100%);
      
    }
  </style>

  <div class="optInOverlay"></div>


  <div class="optInModal">
      <iframe src="${link}"  width="300" height="300"/>
  </div>
`;

customScripts1.innerHTML = `
function onCaptchaEvents(token) {
  console.log("im hereeeee");
  fetch('https://xpnetwork-staging.herokuapp.com/subscriber', {
    method: 'post',
    headers: window.DEFAULT_HEADERS,
    body: JSON.stringify({
      email: window.NEWS_EMAIL,
      token
    })
  }).then(res => {
    $('#newsLetterBtnEvents').siblings('input').remove();
    $('#newsLetterBtnEvents').remove();
  })
}`;

customScripts.innerHTML = `

function onCaptcha(token) {


  fetch('https://xpnetwork-staging.herokuapp.com/subscriber', {
    method: 'post',
    headers: window.DEFAULT_HEADERS,
    body: JSON.stringify({
      email: window.NEWS_EMAIL,
      token
    })
  }).then(async res => {
    $('#newsLetterBtn').siblings('input').remove();
    $('#newsLetterBtn').remove();

    $('.newsLetterWrapper .quick_links h4').text("Thanks for signing up!");
    $('.newsLetterWrapper .quick_links p').text("Stay tuned for future updates.");

    $('#subscribeDiv').remove();
    $('#subscribeSuccess').css("display", "inline-flex");

    const data = await res.json();

    data.link && window.open(
      data.link,
      "newsLetter",
      "width=500,height=500"
    );
  })
}
`;

document.head.appendChild(customScripts);
document.head.appendChild(customScripts1);

const script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.defer = true;
script.src = "https://www.google.com/recaptcha/api.js";

script.innerHTML = `

`;

document.head.appendChild(script);

document.head.querySelector("title").innerText =
  "XP.NETWORK - The world’s most powerful NFT bridge";

const resources = `
<div class="row">
        <div class="col-6">
            <a href='https://docs.xp.network/' target="_blank" rel="noopener noreferrer" class="resLink">
            <div class="resou_menu_box hover_background resLink">
                <img src="/assets/img/icons/Docs.svg" class="menu_icon">
                <h6>Docs</h6>
                <p>API documentation, tutorials, and other resources</p>
            </div>
            </a>
        </div>
        <div class="col-6">
        <a href='https://docs.xp.network/docs/roadmap/'  class="resLink"  target="_blank" rel="noopener noreferrer" >
            <div class="resou_menu_box hover_background resLink">
                <img src="/assets/img/icons/roadmap.svg" class="menu_icon">
                <h6>Roadmap</h6>
                <p>Follow our journey from inception to launch.</p>
            </div>
            </a>
          
        </div>
        <div class="col-6">
        <a href='/whitepaper'>
            <div class="resou_menu_box hover_background resLink">
                <img src="/assets/img/icons/Whitepaper.svg" class="menu_icon">
                <h6>Whitepaper</h6>
                <p>A closer look  at the architecture, bridging algorithm, and security</p>
            </div>
            </a>
        </div>
        <div class="col-6">
        <a href='https://github.com/xp-network/' target="_blank" rel="noopener noreferrer" class="resLink">
            <div class="resou_menu_box hover_background resLink">
                <img src="/assets/img/icons/github_black.svg" class="menu_icon">
                <h6>GitHub <span class="gitLate "> <span class="wave"></span><span class="lastCommitContainer">17 jan 2021</span></span></h6>
                <p>The latest technical updates & code releases </p>
            </div>
        </a>
        </div>
    </div>
`;

const footer = `
<div class="footer_top">
<div class="container">
  <div class="row">
    <div class="col">
      <div class="footer_widget foot_contact">
        <a href="/" class="foot_logo"
          ><img src="/assets/img/logo_2.svg" alt="Logo"
        /></a>
        <ul class="widget_link desktop_only">
        <!--  
        <li>
          <a href="tel:+1 (650) 924-9214">+1 (650) 924-9214</a>
        </li>
        --!>  
          <li>
          <div class="newsLetterWrapper" >
          <div class="quick_links">
          <h4>Stay in the loop</h4>
          <p>Subscribe for our newsletters</p>
              <div class="inputWrapper">
              <div class="g-recaptcha"
              data-sitekey="${window.SITE_KEY_INV_CAPTCHA}"
              data-callback="onCaptcha"
              data-size="invisible">
                </div>
                      <img src="/assets/img/sendEmailBtn.svg" id="newsLetterBtn">
                    <input type="text" placeholder="Your email address" />
              </div>
            </div>
          </li>
          <li>
            <a href="mailto:contact@xp.network">contact@xp.network</a>
          </li>
          <!--  <li>
            <h5>Stay in the loop</h5>
            <h5>Subscribe for our newsleters</h5>
            <input class="newsletersInput" type="email" placeholder="Your email address"><button class="sendNewsBtn"><img src="/assets/img/send.png"></button> </input>
          </li> --!>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="footer_widget">
        <h5>Products</h5>
        <ul class="widget_link">
          <li><a href="https://bridge.xp.network/" target="_blank" rel="noopener noreferrer">Cross-Chain NFT Bridge</a></li>
          <li><a href="https://widget.xp.network/" target="_blank" rel="noopener noreferrer">Bridge Widget</a></li>
          <li><a href="/api">XPJS API</a></li>
          <!-- <li><a href="https://bridge-explorer.xp.network/" target="_blank" >Explorer</a></li> --!>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="footer_widget">
        <h5>Resources</h5>
        <ul class="widget_link">
          <li><a href="/whitepaper" >Whitepaper</a></li>
          <li><a href="https://docs.xp.network/" target="_blank" rel="noopener noreferrer">Docs</a></li>
          <li><a href='https://docs.xp.network/docs/roadmap/'   target="_blank" rel="noopener noreferrer">Roadmap</a></li>
          <li>
            <a href="https://github.com/xp-network/" target="_blank" rel="noopener noreferrer"
              >GitHub
              <span class="gitLate" style="display:none;">
                <span class="wave"></span><span class="lastCommitContainer">Latest Jan 17,2022</span></span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="footer_widget">
        <h5>XP.NETWORK</h5>
        <ul class="widget_link">
          <li><a href="/team">Team</a></li>
          <li><a href="/about-us">About Us</a></li> 
          <li><a href="/events">News & Events</a></li> 
          <li><a href="https://blog.xp.network/" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><a href="/backers">Backers</a></li>
          <li><a href="https://drive.google.com/drive/folders/1i8evWmyH_8APiDDO89depEw_8JnDSACK?usp=sharing" target="_blank" rel="noopener noreferrer">Brand assets</a></li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="footer_widget">
        <h5>Community</h5>
        <ul class="widget_link">
          <li><a href="https://twitter.com/xpnetwork_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://t.me/xp_network" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li><a href="https://www.reddit.com/r/XP_network/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
          <li><a href="https://www.linkedin.com/company/xpnetwork/mycompany/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://www.facebook.com/XPNETWORKOFFICIAL/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://discord.com/invite/g3vkcsmd38" target="_blank" rel="noopener noreferrer">Discord</a></li>
          <li><a href="https://bitclout.com/u/XPnetwork" target="_blank" rel="noopener noreferrer">Bitclout</a></li>
          <li><a href="https://www.instagram.com/xp_network/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UC5KGVEkRzZ2XE4A-4XBceqg" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        </ul>
      </div>
    </div>
    <div class="col mobileOnly footContact">
      <div class="footer_widget foot_contact">
        <ul class="widget_link">
        <!--  <li>
            <a href="tel:+1 (650) 924-9214">+1 (650) 924-9214</a>
          </li> --!> 
         
          <li>

          <div class="newsLetterWrapper" >
          <div class="quick_links">
          <h4>Stay in the loop</h4>
          <p>Subscribe for our newsletters</p>
              <div class="inputWrapper">
              <div class="inputWrapper">
              <div class="g-recaptcha"
              data-sitekey="${window.SITE_KEY_INV_CAPTCHA}"
              data-callback="onCaptcha"
              data-size="invisible">
                </div>
                      <img src="/assets/img/sendEmailBtn.svg" id="newsLetterBtn">
                      <input type="text" placeholder="Your email address" id="newsLetterInput"/>
              </div>
            </div>

          </li>

          <li> 
          <a href="mailto:contact@xp.network">contact@xp.network</a>
        </li>


        </ul>
      </div>
    </div>
  </div>
</div>
</div>
<div class="footer_bottom">
<div class="container">
   <div class="foot_links">
   <!-- <p>A blockchain-agnostic network for building NFT dApps</p>--!>

  </div> 
  <div class="copyRight">
    © 2022 XP.NETWORK Ltd. All Rights Reserved
  </div>
</div>
</div>
`;

const header = `
<div class="container">
<nav class="nare_area">
  <div class="nav_brand">
    <a href="/"
      ><img class="xpLogoMain" src="/assets/img/${
        document.body.classList.contains("scroll-up")
          ? "logo.svg"
          : (window.location.pathname.includes("/team") ||
              window.location.pathname.includes("about-us") ||
              window.location.pathname === "/" ||
              window.location.pathname.includes("backers")) &&
            !document.body.classList.contains("active_menu")
          ? "logo-white.svg"
          : "logo.svg"
      }" alt="XP-NETWORK"
    /></a>
   <!-- <a style="display:none;" href="#" class="xpnet-balance desktop_only"
      ><img src="/assets/img/xpnet-balance.svg" />
      <span>$0.01286</span></a
    >-->
  </div>
  <div class="nav_menu_area">
  <!-- <a href="#" class="xpnet-balance mobileOnly"
      ><img src="/assets/img/xpnet-balance.svg" />
      <span>$0.01286</span></a
    >-->
    <ul class="main_menu">
    <!-- <li class="nav-item">
        <a href="https://bridge.xp.network/" target="_blank" class="nav-link">NFT Bridge</a> --!>
      </li>
      <li class="nav-item mega-menu" id>
        <a href="/community" class="nav-link" id="link-community" onclick='return false;'>Products</a>
        <div class="drop-menu productsNavBox">
        <a class="bridgeImgNav" href="https://bridge.xp.network/"  target="_blank">
        <label class="titlebridgeImgNav">Multi-chain NFT bridge</label>
        <label class="textbridgeImgNav">
          Seamlessly move assets between chains
        </label>
        <label class="aDicoverImgNav">
          Discover bridge ->
        </label>
      </a>
      <div class="linkBoxesNav">
       <a class="linkBoxNav" href="https://widget.xp.network/" target="_blank">
        <label class="linkBoxNavTitleText">
          Bridge widget
        </label>
        <label class="linkBoxNavText">
          Allows visually customizing and embedding the NFT bridge.
        </label>
      </a>
      <a class="linkBoxNav" href="/api/" target="_self">
        <label class="linkBoxNavTitleText"">
          XPNET-JS API 
        </label>
        <label class="linkBoxNavText">
          XPJS API will get your NFT dApp up and running on multiple chains.
        </label>
      </a>
      </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="/casestudies" class="nav-link">Case studies</a>
      </li>
      <li class="nav-item">
        <a href="/events" class="nav-link">News & Events</a>
      </li>
      <li class="nav-item mega-menu">
        <a href="#" class="nav-link" id="link-resources">Resources</a>
        <div class="drop-menu resuouceMega">
          <div class="row">
            <div class="col-6">
              <div class="resou_menu_box hover_background">
                <img
                  src="/assets/img/icons/Docs.svg"
                  class="menu_icon"
                />
                <h6>Docs</h6>
                <p>
                  API documentation, tutorials, and other resources
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="resou_menu_box hover_background">
                <img
                  src="/assets/img/icons/roadmap.svg"
                  class="menu_icon"
                />
                <h6>Roadmap</h6>
                <p>Follow our journey from inception to launch.</p>
              </div>
            </div>
            <div class="col-6">
              <div class="resou_menu_box hover_background">
                <img
                  src="/assets/img/icons/Whitepaper.svg"
                  class="menu_icon"
                />
                <h6>Whitepaper</h6>
                <p>
                  A closer look at the architecture, bridging
                  algorithm, and security
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="resou_menu_box hover_background">
                <img
                  src="/assets/img/icons/roadmap.svg"
                  class="menu_icon"
                />
                <h6>
                  GitHub
                  <span class="gitLate">
                    <span class="wave"></span> Latest Jan
                    17,2022</span
                  >
                </h6>
                <p>The latest technical updates & code releases</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="nav-item mega-menu" id>
        <a href="/community" class="nav-link" id="link-community2" onclick='return false;'>Community</a>
        <div class="drop-menu communityMegamenu">
          <div class="comm_megaIitem" onclick="window.open('/community', '_self')">
            <img src="/assets/img/xp-commu.svg" />
            <div class="menuItemWrapper">
            <h6>XP Community</h6>
            <p class="mobileOnly">Thousands of NFT users and dozens of project teams have already joined us on this exciting journey</p>
            <a href="/community" class="black_text_btn smalBtn desktop_only"
              >Learn more -></a
            >
            </div>
          </div>
          <div class="comm_megaIitem" onclick="window.open('https://blog.xp.network/')">
            <img src="/assets/img/xp-stories.svg" />
            <div class="menuItemWrapper">
            <h6>XP Stories and news</h6>
            <p class="mobileOnly"> A detailed look at XP.NETWORK updates</p>
            <a href="https://blog.xp.network/" class="black_text_btn smalBtn desktop_only" target="_blank" rel="noopener noreferrer"
              >Read blog -></a
            >
            </div>
          </div>
          <div class="mega_black_box">
            <div class="mega_black_img">
              <img src="/assets/img/mega_black_img.svg" />
            </div>
            <div class="mega_black_cont">
              <h4>Become an XP.NETWORK Ambassador</h4>
              <p>
                Lead your local XP.NETWORK community, help us promote the
                Bridge, and earn rewards.
              </p>
              <a href="#" class="grayBtn">Coming soon</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul class="social-links">
      <li>
        <a href="https://t.me/xp_network" target="_blank" rel="noopener noreferrer"><img src="/assets/img/social/telegram.svg" /></a>
      </li>
      <li>
        <a href="https://twitter.com/xpnetwork_" target="_blank rel="noopener noreferrer""><img src="/assets/img/social/twiter.svg" /></a>
      </li>
      <li>
        <a href="https://github.com/xp-network" target="_blank" rel="noopener noreferrer"><img src="/assets/img/social/redit.svg" /></a>
      </li>
    </ul>
  </div>
  <div class="mobile_nav_triger mobileOnly">
    <span class="navTriger"></span>
  </div>
</nav>
</div>    

<script>
      const body = document.body;
      let lastScrool = 0;
      window.addEventListener('scroll', ()=>{
        const currentScroll = window.pageYOffset;

        if(currentScroll === 0){
          body.classList.add("navMobile");
        }

        if(currentScroll > 0){
          body.classList.remove("navMobile");
        }

        if(currentScroll<=0){
          body.classList.remove("scroll-up");
        }

        if(currentScroll>lastScrool && !body.classList.contains("scroll-down")){
          body.classList.remove("navMobile");
          body.classList.add("scroll-down");
          body.classList.remove("scroll-up");
          
          
        }
        if(currentScroll<lastScrool && body.classList.contains("scroll-down")){
          body.classList.remove("navMobile");
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
          
        }


        lastScrool = currentScroll;
      })

    </script>

<script>
$("span.navTriger").click(function () {
  
  $("body").toggleClass("active_menu");
  


  if (window.location.pathname.includes('team') || window.location.pathname.includes("about-us") || window.location.pathname === '/' || window.location.pathname.includes('backers')) {
  $(".nav_brand a img").attr(
    "src",
    !$("body").hasClass("active_menu")
      ? "/assets/img/logo-white.svg"
      : "/assets/img/logo.svg"
  );
  }

  

});
$("#link-community").click(function () {
 
  $("#link-resources").parent().removeClass("activeDrop")
  $("#link-community2").parent().removeClass("activeDrop")
 
  $(this).parent().toggleClass("activeDrop");
});
$("#link-community2").click(function () {
  
   $("#link-resources").parent().removeClass("activeDrop")
   $("#link-community").parent().removeClass("activeDrop")
  
   $(this).parent().toggleClass("activeDrop");
 });
$("#link-resources").click(function () {

   $("#link-community").parent().removeClass("activeDrop")
   $("#link-community2").parent().removeClass("activeDrop")
 
  $(this).parent().toggleClass("activeDrop");
});
</script>
`;

const wrapLinks = (text, openInNewTab) => {
  return text.replace(
    /@(.*)\[@\]/,
    `<a target="${openInNewTab ? "_blank" : "_self"}" href='${text
      .match(/@(.*)\[@\]/)
      ?.at(0)
      ?.replaceAll(/\[?@\]?/gi, "")}'>Learn More</a>`
  ); //${text.match(/@(.*)\[@\]/)?.at(0)?.replaceAll(/\[?@\]?/ig, '')}
};

const stripLink = (text) => text?.replace(/@(.*)\[@\]/, "");

$(document).ready(function () {
  $(document).on("click tap", "#newsLetterBtn", async function (e) {
    e.preventDefault();
    e.stopPropagation();

    const input = $(this).siblings("input");
    console.log(input);
    const email = input.val();
    if (/\S+@\S+\.\S+/.test(email)) {
      window.NEWS_EMAIL = email;

      grecaptcha.execute();
    } else {
      input.addClass("failedEmail");
    }
  });
  $(document).on("click tap", "#newsLetterBtnEvents", async function (e) {
    e.preventDefault();
    e.stopPropagation();

    const input = $(this).siblings("input");
    console.log(input);
    const email = input.val();
    if (/\S+@\S+\.\S+/.test(email)) {
      window.NEWS_EMAIL = email;
      console.log("im in");
      grecaptcha.execute();
    } else {
      input.addClass("failedEmail");
    }
  });

  $("#header").html(header);
  console.log("dfsa");
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      const maxSymbols = 72;

      const getUpdate = (update, i, full) => {
        const string = stripLink(update?.text);
        const link = update?.text
          ?.match(/@(.*)\[@\]/)
          ?.at(0)
          ?.replaceAll(/\[?@\]?/gi, "");

        return `
        <a href="${link}" target="${
          update.openInNewTab ? "_blank" : "_self"
        }" class="topUpdate ${full ? "fullUpdate" : ""}">
        <span class="dateUpdate">${update?.date}</span>
        <!-- <a href="${link}" class="learnMore"  target="${
          update.openInNewTab ? "_blank" : "_self"
        }">Learn More</a> --!>
        ${
          string?.length >= maxSymbols
            ? `<img src="/assets/img/updates/arrow.svg" alt="arrow" class="expandUpdate mobileOnly"/>`
            : ""
        }
        <div class='child-container'>
            <div class="top-line">
              <img class="updateBadge" src="/assets/img/updates/badge.png"/>
              <img src="/assets/img/updates/moreArrow.svg" class="more"/>
              <!-- <span>${update?.date}</span> --!>
            </div>
            ${
              full
                ? `
              <p>${string}</p>
           
            `
                : `
            
            <p class='${
              string.length >= maxSymbols ? `cropped crop-${i}` : ""
            }'>${
                    string.length > maxSymbols
                      ? string.slice(0, maxSymbols) + "..."
                      : string
                  }</p>
          
            
            
            `
            }
          </div>
        
          </a>`;
      };

      const topUpdates = `
    <div class="topUpdates">
       ${data["top-updates"].reduce((string, update, i) => {
         return string + getUpdate(update, i, false);
       }, "")}
    </div>
    `;

      const botUpdates = `
    <div class="botUpdates owl-carousel">
    ${data["bot-updates"].reduce((string, update) => {
      return (
        string +
        `
      <div class="botUpdate" ${
        update.link ? `onclick="window.open('${update.link}', '_blank')"` : ``
      }>
          <div class="topCard" style="border:${
            update.border
          }; border-bottom: none"><img src="${update.url}" alt="cardImg"></div>
              <div class="botCard">
                <span>${update.date}</span>
                <p>${
                  update.text.length <= 30
                    ? update.text
                    : update.text.slice(0, 30) + "..."
                }</p>
                <span class="readMore">Read more ></span>
              </div>
      </div>
      `
      );
    }, "")}
    `;

      $("#topContainer").append(topUpdates);

      window.innerWidth <= 600
        ? $("#botContainer").append(botUpdates)
        : $("#botContainer .container").append(botUpdates);

      if (window.innerWidth <= 600) {
        const $carouse33 = $(".botUpdates.owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: false,
          responsive: {
            0: {
              items: 1.2,
              smartSpeed: 500,
              //autoplay: true,
              //autoplaySpeed: 3500,
              //autoplayTimeout: 3500,
              //smartSpeed: 3500,
              //slideTransition: "linear",
            },
          },
        });

        const visible = $(".botUpdates.owl-carousel .owl-stage-outer")
          .find(".owl-item.active")
          .first();
        visible.prev().css("opacity", ".7");
        visible.next().css("opacity", ".7");

        $carouse33.on("translated.owl.carousel", function (e) {
          $(".botUpdates.owl-carousel .owl-item").each(function () {
            $(this).css("opacity", "1");
          });
          const visible = $(".botUpdates.owl-carousel .owl-stage-outer")
            .find(".owl-item.active")
            .first();
          visible.prev().css("opacity", ".7");
          visible.next().css("opacity", ".7");
        });

        const caruselWidth = parseInt(
          $(".botUpdates.owl-carousel .owl-stage")
            ?.css("width")
            ?.replace("px", "")
        );
        const itemWidth = parseInt(
          $(".botUpdates.owl-carousel .owl-item")
            ?.css("width")
            ?.replace("px", "")
        );
        console.log(caruselWidth, "a");
        console.log(itemWidth, "itemWidth");

        //$('.botUpdates.owl-carousel .owl-stage')?.css('transform', `translate3d(-${String(.815 *(caruselWidth - (itemWidth)))}px, 0px, 0px)`);

        $(".botUpdates.owl-carousel .owl-stage")?.css(
          "padding-left",
          caruselWidth * 0.0135
        );
      }

      $(".topUpdate").mouseenter(function (e) {
        const idx = Number(
          $(this).find(".cropped").attr("class")?.split(/\s+/)[1]?.split("-")[1]
        );

        if (isNaN(idx)) return;

        const a = $(this).append(
          getUpdate(data["top-updates"][idx], idx, true)
        );

        $(".expandUpdate").on("click", function (e) {
          $(".topUpdate.fullUpdate").remove();
        });
      });

      $(".topUpdate").mouseleave(function (e) {
        $(this).find(".fullUpdate").remove();
      });
    })
    .catch((error) => console.log(error));

  if (window.innerWidth <= 600) {
    $("#link-community").click(function (event) {
      event.preventDefault();
      event.stopPropagation();
      return;
    });
  }

  $(".drop-menu.resuouceMega").html(resources);

  $(".box_content").each(function () {
    console.log("ds");

    $(this).on("click", function (event) {
      //event.preventDefault();
      //event.stopPropagation();
    });
  });

  $(".invalidText").each(function () {
    //onst field = $(this).parent().find("label").text();
    $(this).html(
      `<img src="/assets/img/icons/red-info.svg"/><span>This field is required</span>`
    );
  });

  $("#footer").html(footer);
  $(".gitLate").hide();
  fetch("https://xpvitaldata.herokuapp.com/last-commit", {
    headers: window.DEFAULT_HEADERS,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const dateObj = new Date(data);
      const month = dateObj.toLocaleDateString("en-US", {
        month: "short", //month: window.innerWidth > 480 ? "long" : "short",
        day: "numeric",
      });
      const year = dateObj.getFullYear();

      const day = month.replace(/^\D+/g, "");

      let ending = "th";
      if (day === "1") {
        ending = "st";
      }
      if (day === "2") {
        ending = "nd";
      }
      if (day === "3") {
        ending = "rd";
      }
      const tm = month + ", " + year;
      $(".gitLate").show();

      $(".lastCommitContainer").text("Latest " + tm);

      $(".gitLate").css("display", "block");
    });
});
