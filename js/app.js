function hydrateContent() {
  // Event listener for links.
  document.querySelectorAll("a, a img").forEach((a) => {
    let staticLink = false;
    a.classList.forEach((c) => {
      if (c == "static-link") {
        staticLink = true;
      }
    });
    if (!staticLink) {
      a.addEventListener("click", clickHandler);
    }
  });
}

function programmaticNavigation(link) {
  document.body.style.opacity = 0.5;
  document.body.style.transform = "scale(0.97)";
  document.body.style.pointerEvents = "none";
  // Fetch the link.
  fetch(link)
    .then((res) => res.text())
    .then((res) => {
      function reRender() {
        const pageDom = new DOMParser().parseFromString(res, "text/html");
        document.body.innerHTML = pageDom.body.innerHTML;
        document.body.style.opacity = 1;
        document.body.style.transform = "none";
        document.body.style.pointerEvents = "auto";
        document.title = pageDom.title;
        hydrateContent();
        history.pushState({}, pageDom.title, link);
        history.replaceState({}, pageDom.title, link);
        window.scrollTo({ top: 0, behavior: "smooth" });
        loadImages();
        window.changeMeme && window.changeMeme();
        if (window.location.pathname === "/memes") {
          loadScript("/js/memes.js");
        }
      }
      setTimeout(() => {
        reRender();
      }, 200);
    })
    .catch((error) => {
      console.log(error);
      alert(
        "Sorry unable to navigate, please reload the page and check your internet connection!"
      );
    });
}

function clickHandler(e) {
  let a = e.target;
  if (!e.target.href) {
    a = e.target.parentElement;
  }
  if (
    (a.hostname === "localhost" || a.hostname === "rakibtg.com") &&
    !window.location.pathname.includes("/post/")
  ) {
    e.preventDefault();
    programmaticNavigation(a.href);
  }
}

// Function to dynamically load JavaScript file
function loadScript(url) {
  const existingScript = document.querySelector(`script[src="${url}"]`);

  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement("script");
  script.src = url;
  script.async = true;

  document.head.appendChild(script);
}

function loadImages() {
  var _img = document.querySelectorAll("img");
  _img.forEach((i) => {
    const newImg = new Image();
    newImg.onload = function () {
      i.src = this.src;
    };
    newImg.src = i.src;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if the page contains <code> or <pre> elements
  function hasCodeOrPreBlocks() {
    const codeElements = document.getElementsByTagName("code");
    const preElements = document.getElementsByTagName("pre");
    return codeElements.length > 0 || preElements.length > 0;
  }

  // Check if there are code or pre blocks in the page
  if (hasCodeOrPreBlocks()) {
    // Include "code.js" in the header
    loadScript("/js/code.js");
  }
});

window.onpopstate = function (event) {
  programmaticNavigation(window.location.href);
};

hydrateContent();
