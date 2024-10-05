import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: Document.querySelector("[data-scroll-container]"),
  smooth: true,
});
