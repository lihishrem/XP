// var urls=document.location.origin;var footer='<div class="footer_top"> <div class="container"> <div class="row"> <div class="col"> <div class="quick_links"> <h4>Discover</h4> <ul> <li><a target="_blank" href="https://bridge.xp.network" target="_blank">Cross Chain Bridge</a></li><li><a href="/stake/">Staking</a></li><li><a href="/roadmap/" >Roadmap</a></li></ul> </div></div><div class="col"> <div class="quick_links mb36"> <h4>Resources</h4> <ul> <li><a href="/whitepaper/">Whitepaper</a></li><li><a target="_blank" href="https://github.com/xp-network/">GitHub</a></li><li><a target="_blank" href="https://wiki.xp.network/">Wiki</a></li><li><a target="_blank" href="http://blog.xp.network/">Blog</a></li></ul> </div></div><div class="col"> <div class="quick_links mb36"> <h4>XP.NETWORK</h4> <ul> <li><a href="/team/">Team</a></li></ul> </div></div><div class="col"> <div class="quick_links"> <h4>Community</h4> <ul> <li><a href="/ambassadorship/">Ambassadorship</a></li><li><a href="/community/">Global channels</a></li></ul> </div></div><div class="col"> <div class="quick_links"> <h4>Follow</h4> <ul> <li><a target="_blank" href="https://t.me/xp_network">Telegram</a></li><li><a target="_blank" href="https://twitter.com/xpnetwork_">Twitter</a></li><li><a target="_blank" href="https://www.reddit.com/r/XP_network/ ">Reddit</a></li><li><a target="_blank" href="https://www.linkedin.com/company/xp-network/">Linkedin</a></li><li><a target="_blank" href="https://www.facebook.com/XPnetworkOfficial">Facebook</a></li><li><a target="_blank" href="https://discord.gg/g3vkcsmd38">Discord</a></li><li><a target="_blank" href="https://bitclout.com/u/XP_Network">Bitclout</a></li><li><a target="_blank" style="display: none" href="https://www.youtube.com/channel/UC5KGVEkRzZ2XE4A-4XBceqg" >YouTube</a></li></ul> </div></div><div class="col"> <div class="quick_links"> <h4>Contact</h4> <ul class="contactInf"> <li><a href="mailto:contact@xp.network"><i class="fas fa-envelope"></i> contact@xp.network</a></li><li><a href="https://t.me/xp_network" target="_blank"><i class="fab fa-telegram-plane"></i> @xp_network</a></li></ul> </div></div></div></div><div class="container"> <div class="languageSelect"> <div class="langSelecDrop" style="display:none;"> <div class="selecttedlang enlan"><img src="assets/img/Eng.svg"> English</div><ul class="selectDrop"> <li><a href="javescript:void(0)" class="enlan"><img src="assets/img/Eng.svg"> English</a></li><li><a href="../cn/" class="cnLan"><img src="assets/img/Chi.svg"> Chinese</a></li></ul> </div></div></div></div><div class="footer_bottom"> <div class="container"> <div class="footBootmLinks"> <ul> <li style="display:none;"><a href="https://xp.network/privacy-policy/" target="_blank">Privacy Policy</a></li><li style="display:none;"><a href="#">Terms of use</a></li></ul> <p>A blockchain-agnostic network for building <span>NFT dApps</span></p></div><div class="copyRight"> © 2021 XP.NETWORK Ltd. All Rights Reserved </div></div></div>';$(document).ready(function(){jQuery("#siteFooter").html(footer);});
var urls = document.location.origin;
var alex = {
  email: "",
  input: "",
};
var script2 = document.createElement("script");
script2.type = "text/javascript";
script2.innerHTML = `
const onSubmit = function(token,email)  {

  $.ajax({
    url: "https://xpnetworkapi.herokuapp.com/subscriber",
    type: "post",
    data: {
      email: alex.email,
      token,
    },
    success: function (response) {
      if (response.ok === true) {
        console.log(response);
        alex.input.parent().remove();
        document.querySelector(
          ".newsLetterWrapper .quick_links p"
        ).innerHTML = "Stay tuned for future updates.";
      }
    },
  });
}

window.onSubmit = onSubmit

`;

document.head.appendChild(script2);

var script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.defer = true;
script.src = "https://www.google.com/recaptcha/api.js";
document.head.appendChild(script);

var footer = /*html*/ `<div class="footer_top">
    <div class="container">
      <div class="row">
        <div class="col-md-3 desktop_var" style="width: 27%;flex: 0 0 27%;max-width: 27%;">
          <div class="row">
            <div class="col" > 
              <div class="newsLetterWrapper" >
                  <div class="quick_links">
                  <h4>Stay in the loop</h4>
                  <p>Subscribe for your newsletters</p>
                  <div class="inputWrapper">
                        <img src="/assets/img/sendEmailBtn.svg" id="newsLetterBtn">
                      <input type="text" placeholder="Your email address" id="newsLetterInput"/>
                  </div>
                </div>
          </div>
          <div class="quick_links">
          <h4>Contact</h4>
          <ul class="contactInf">
            <li>
              <a href="mailto:contact@xp.network"
                ><i class="fas fa-envelope"></i> contact@xp.network</a
              >
            </li>
            <li>
              <a href="https://t.me/xp_network" target="_blank"
                ><i class="fab fa-telegram-plane"></i> @xp_network</a
              >
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
        <div class="col-md-2">
          <div class="quick_links">
            <h4>Discover</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://bridge.xp.network"
                  target="_blank"
                  >Cross-Chain Bridge</a
                >
              </li>
              <li><a href="/stake/">Staking</a></li>
              <li><a href="/roadmap/">Roadmap</a></li>
              <li><a target="_blank" href="/api/">XPJS API</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="quick_links mb36">
            <h4>Resources</h4>
            <ul>
              <li><a href="/whitepaper/">Whitepaper</a></li>
           
              <li>
                <a target="_blank" href="https://wiki.xp.network/">Wiki</a>
              </li>
              <li>
                <a target="_blank" href="http://blog.xp.network/">Blog</a>
              </li>
              <li style="position:relative;">
              <a target="_blank" href="https://github.com/xp-network/"
                >GitHub</a
              >
              <div class="lastCommitWrapper">
                  <div class="greenCircle" ></div>
                  <span id="lastCommit"></span>
              </div>
            </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="quick_links mb36">
            <h4>XP.NETWORK</h4>
            <ul>
              <li style="display:none;"><a href="/team/">Team</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="quick_links">
            <h4>Community</h4>
            <ul>
              <li><a href="/ambassadorship/">Ambassadorship</a></li>
              <li><a href="/community/">Global Channels</a></li>
            </ul>
          </div>
        </div>
       
        <div class="col desktop_var">
          <div class="quick_links">
            <h4>Follow</h4>
            <ul>
              <li>
                <a target="_blank" href="https://t.me/xp_network">Telegram</a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/xpnetwork_"
                  >Twitter</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.reddit.com/r/XP_network/"
                  >Reddit</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/xp-network/"
                  >Linkedin</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/XPnetworkOfficial"
                  >Facebook</a
                >
              </li>
              <li>
                <a target="_blank" href="https://discord.gg/g3vkcsmd38"
                  >Discord</a
                >
              </li>
              <li>
                <a target="_blank" href="https://bitclout.com/u/XPnetwork"
                  >Bitclout</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC5KGVEkRzZ2XE4A-4XBceqg"
                  >YouTube</a
                >
              </li>
              <li>
              <a
                target="_blank"
                href="https://www.instagram.com/xp_network/"
                >Instagram</a
              >
            </li>
            </ul>
          </div>
        </div>
       
        <div class="col mobile_var">
          <div class="quick_links">
            <h4>Follow</h4>
            <ul>
              <li>
                <a target="_blank" href="https://t.me/xp_network">Telegram</a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/xpnetwork_"
                  >Twitter</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.reddit.com/r/XP_network/"
                  >Reddit</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/xp-network/"
                  >Linkedin</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/XPnetworkOfficial"
                  >Facebook</a
                >
              </li>
              <li>
                <a target="_blank" href="https://discord.gg/g3vkcsmd38"
                  >Discord</a
                >
              </li>
              <li>
                <a target="_blank" href="https://bitclout.com/u/XPnetwork"
                  >Bitclout</a
                >
              </li>
              <li>
                <a
                  target="_blank"
               
                  href="https://www.youtube.com/channel/UC5KGVEkRzZ2XE4A-4XBceqg"
                  >YouTube</a
                >
              </li>
              <li>
              <a
                target="_blank"
                href="https://www.instagram.com/xp_network/"
                >Instagram</a
              >
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col mobile_var">
      <div class="row">
      <div class="col"> 
        <div class="newsLetterWrapper">
            <div class="quick_links">
            <h4>Stay in the loop</h4>
            <p>Subscribe for your newsletters</p>
            <div class="inputWrapper">
            <div id='recaptcha' class="g-recaptcha"
            data-sitekey="6LdH90geAAAAABjwXJKOlmJLISslKuAl-Bdsgy0O"
            data-callback="onSubmit"
            data-size="invisible"></div>
                  <img src="/assets/img/sendEmailBtn.svg" id="newsLetterBtn"  >
                <input type='text' placeholder="Your email address" id="newsLetterInput"  />
            </div>
          
          </div>
    </div>
    <div class="quick_links">
    <h4>Contact</h4>
    <ul class="contactInf">
      <li>
        <a href="mailto:contact@xp.network"
          ><i class="fas fa-envelope"></i> contact@xp.network</a
        >
      </li>
      <li>
        <a href="https://t.me/xp_network" target="_blank"
          ><i class="fab fa-telegram-plane"></i> @xp_network</a
        >
      </li>
    </ul>
  </div>
  </div>
</div>
      </div>
      </div>
    </div>
    <div class="container">
      <div class="languageSelect">
        <div class="langSelecDrop" style="display:none;">
          <div class="selecttedlang enlan">
            <img src="assets/img/Eng.svg" /> English
          </div>
          <ul class="selectDrop">
            <li>
              <a href="javescript:void(0)" class="enlan"
                ><img src="assets/img/Eng.svg" /> English</a
              >
            </li>
            <li>
              <a href="../cn/" class="cnLan cnDisable"
                ><img src="assets/img/Chi.svg" /> Chinese</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_bottom">
    <div class="container">
      <div class="footBootmLinks">
        <ul>
          <li style="display:none;">
            <a href="https://xp.network/privacy-policy/" target="_blank"
              >Privacy Policy</a
            >
          </li>
          <li style="display: none"><a href="#">Terms of use</a></li>
        </ul>
        <p>A blockchain-agnostic network for building <span>NFT dApps</span></p>
      </div>
      <div class="copyRight">© 2021 XP.NETWORK Ltd. All Rights Reserved</div>
    </div>
  </div>`;

$(document).ready(function () {
  fetch("https://xpvitaldata.herokuapp.com/last-commit").then(async (res) => {
    const date = await res.json();
    const dateObj = new Date(date);

    const month = dateObj.toLocaleDateString("en-US", {
      month: window.innerWidth > 480 ? "long" : "short",
      day: "numeric",
    });
    const year = dateObj.getFullYear();
    const time = dateObj.getHours() + ":" + dateObj.getMinutes();

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
    const tm = month + ending + " " + year + " "; //+ time;

    $("#lastCommit").text("Latest " + tm);
  });

  jQuery("#siteFooter").html(footer);

  $(document).on("click tap", "#newsLetterBtn", async function (e) {
    e.preventDefault();
    e.stopPropagation();

    const input = $(this).siblings("input");
    console.log(input);
    const email = input.val();
    if (/\S+@\S+\.\S+/.test(email)) {
      alex.email = email;
      alex.input = input;
      grecaptcha.execute();

      return;
    } else {
      input.addClass("failedEmail");
    }
  });
});
