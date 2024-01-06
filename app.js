var navLinks = document.getElementsByClassName("nav-link");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("menu-bg");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "white";
      }
    } else {
      navbar.classList.remove("navbar-scrolled");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#777 ";
      }
    }
  });
});

$(".chef-icon1 .fa-brands").hide();
$(".chef-icon2 .fa-brands").hide();
$(".chef-icon3 .fa-brands").hide();
$(".chef-icon4 .fa-brands").hide();

$(".chef-icon1").hover(
  function () {
    $(".chef-icon1 .fa-brands").show();
    $(this).toggleClass("hovered");
  },
  function () {
    $(".chef-icon1 .fa-brands").hide();
    $(this).toggleClass("hovered");
  }
);

$(".chef-icon2").hover(
  function () {
    $(".chef-icon2 .fa-brands").show();
    $(this).toggleClass("hovered");
  },
  function () {
    $(".chef-icon2 .fa-brands").hide();
    $(this).toggleClass("hovered");
  }
);

$(".chef-icon3").hover(
  function () {
    $(".chef-icon3 .fa-brands").show();
    $(this).toggleClass("hovered");
  },
  function () {
    $(".chef-icon3 .fa-brands").hide();
    $(this).toggleClass("hovered");
  }
);

$(".chef-icon4").hover(
  function () {
    $(".chef-icon4 .fa-brands").show();
    $(this).toggleClass("hovered");
  },
  function () {
    $(".chef-icon4 .fa-brands").hide();
    $(this).toggleClass("hovered");
  }
);
//////////////////////////
var photos = [
  "./images/slider1.jpg",
  "./images/burger.png",
  "./images/pizza.jpg",
  "./images/burger-1.png",
];
var img = document.getElementsByClassName("slider-show")[0];
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var count = 0;
function nextImg() {
  count++;
  if (count >= photos.length) {
    count = 0;
    img.src = photos[count];
  } else {
    img.src = photos[count];
  }
}
setInterval(nextImg, 2000);

next.addEventListener("click", function () {
  count++;
  if (count >= photos.length) {
    count = 5;
    img.src = photos[count];
  } else {
    img.src = photos[count];
  }
});

previous.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = 0;
    img.src = photos[count];
  } else {
    img.src = photos[count];
  }
});

//////map
((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({ key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly" });

let map;
let lat;
let log;

function success(obj) {
  lat = obj.coords.latitude;
  log = obj.coords.longitude;
  initMap(lat, log);
}

function error(e) {
  if (e.code === 1) {
    document.getElementById("map").innerText =
      "you need to give me permission to get your location";
  }
}
async function initMap(lat, long) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lng: long, lat: lat },
    zoom: 15,
  });
}

navigator.geolocation.getCurrentPosition(success, error);
