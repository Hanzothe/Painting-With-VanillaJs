window.onload = function () {
  const setRandomColors = () => {
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);

    document.getElementById("color2").style.backgroundColor =
      "#" + randomColor1;
    document.getElementById("color3").style.backgroundColor =
      "#" + randomColor2;
    document.getElementById("color4").style.backgroundColor =
      "#" + randomColor3;
  };

  const button = document.getElementById("button-random-color");

  button.addEventListener("click", setRandomColors);
};
