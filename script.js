window.onload = function () {
  const setRandomColors = () => {
    const randomColor1 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    const toStorage = [randomColor1, randomColor2, randomColor3];

    localStorage.setItem("colorPalette", JSON.stringify(toStorage));

    document.getElementById("color2").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[0];
    document.getElementById("color3").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[1];
    document.getElementById("color4").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[2];
  };

  const button = document.getElementById("button-random-color");

  if (localStorage.getItem("colorPalette") !== null) {
    document.getElementById("color2").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[0];
    document.getElementById("color3").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[1];
    document.getElementById("color4").style.backgroundColor = JSON.parse(
      localStorage.getItem("colorPalette")
    )[2];
  } else {
    setRandomColors();
  }

  const color1 = document.getElementById("color1");
  const color2 = document.getElementById("color2");
  const color3 = document.getElementById("color3");
  const color4 = document.getElementById("color4");

  const setSelectedColor = () => {
    const cssObj = window.getComputedStyle(color1, null);
    const bgColor = cssObj.getPropertyValue("background-color");
    console.log(bgColor);
    localStorage.setItem("selectedColor", bgColor);
    color1.classList.add("selected");
    color2.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
  };
  const setSelectedColor2 = () => {
    const cssObj = window.getComputedStyle(color2, null);
    const bgColor = cssObj.getPropertyValue("background-color");
    console.log(bgColor);
    localStorage.setItem("selectedColor", bgColor);
    color1.classList.remove("selected");
    color2.classList.add("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
  };
  const setSelectedColor3 = () => {
    const cssObj = window.getComputedStyle(color3, null);
    const bgColor = cssObj.getPropertyValue("background-color");
    console.log(bgColor);
    localStorage.setItem("selectedColor", bgColor);
    color1.classList.remove("selected");
    color2.classList.remove("selected");
    color3.classList.add("selected");
    color4.classList.remove("selected");
  };
  const setSelectedColor4 = () => {
    const cssObj = window.getComputedStyle(color4, null);
    const bgColor = cssObj.getPropertyValue("background-color");
    console.log(bgColor);
    localStorage.setItem("selectedColor", bgColor);
    color1.classList.remove("selected");
    color2.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.add("selected");
  };

  document.querySelectorAll(".pixel").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.style.backgroundColor = localStorage.getItem("selectedColor");
      const CssStyle = window.getComputedStyle(item, null);
      localStorage.setItem("pixelBoard", CssStyle.background);
    });
  });

  document.querySelectorAll(".pixel").forEach((item) => {
    document
      .querySelector("#clear-board")
      .addEventListener("click", (event) => {
        item.style.backgroundColor = "white";
      });
  });

  const HandlingButtonBug = () => {
    if (color1.className == "color selected") {
      setSelectedColor();
    }
    if (color2.className == "color selected") {
      setSelectedColor2();
    }
    if (color3.className == "color selected") {
      setSelectedColor3();
    }
    if (color4.className == "color selected") {
      setSelectedColor4();
    }
  };

  color1.addEventListener("click", setSelectedColor);

  color2.addEventListener("click", setSelectedColor2);

  color3.addEventListener("click", setSelectedColor3);

  color4.addEventListener("click", setSelectedColor4);

  button.addEventListener("click", () => {
    setRandomColors();
    HandlingButtonBug();
  });

  setSelectedColor();
};
