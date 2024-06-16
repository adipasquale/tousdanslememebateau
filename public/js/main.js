document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".js-menu-toggle").forEach((elt) => {
    elt.addEventListener("click", function (event) {
      event.preventDefault();
      const navElt = document.querySelector("body > nav")
      if (navElt.hasAttribute("data-open")) {
        navElt.removeAttribute("data-open");
      } else {
        navElt.setAttribute("data-open", "true");
      }
    })
  })
});
