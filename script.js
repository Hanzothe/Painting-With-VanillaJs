window.onload = function () {
  let setRandomColors = () => {
    const randomColor1 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    const toStorage = [randomColor1, randomColor2, randomColor3];

    localStorage.setItem("colorPalette", JSON.stringify(toStorage));

    console.log(JSON.parse(localStorage.getItem("colorPalette"))[1]);

    if (localStorage.getItem("colorPalette") !== null) {
      console.log("teste");
    }

    document.getElementById("color2").style.backgroundColor = toStorage[0];
    document.getElementById("color3").style.backgroundColor = toStorage[0];
    document.getElementById("color4").style.backgroundColor = toStorage[0];
  };

  const button = document.getElementById("button-random-color");

  button.addEventListener("click", setRandomColors);
};
