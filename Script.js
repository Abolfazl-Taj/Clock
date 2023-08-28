document.addEventListener("DOMContentLoaded", () => {
  let small = document.querySelector(".small");
  let meduim = document.querySelector(".meduim");
  let big = document.querySelector(".big");
  setInterval(rotate, 1000);
  function rotate() {
    let d = new Date();
    let s = d.getSeconds() * 6;
    let m = d.getMinutes() * 6;
    let h = d.getHours() * 30;
    big.style.transform = `rotateZ(${s}deg)`;
    meduim.style.transform = `rotateZ(${m}deg)`;
    small.style.transform = `rotateZ(${h + m / 12}deg)`;
  }
});
