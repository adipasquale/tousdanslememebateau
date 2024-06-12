document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".js-menu-toggle").forEach((elt) => {
    elt.addEventListener("click", function () {
      const navElt = document.querySelector("nav")
      if (navElt.hasAttribute("data-open")) {
        navElt.removeAttribute("data-open");
      } else {
        navElt.setAttribute("data-open", "true");
      }
    })
  })
});
