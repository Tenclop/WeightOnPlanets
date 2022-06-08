var select = document.querySelector("select");
var img = document.querySelector(".img-holder");
let input = document.querySelector(".input").value;
var e = document.getElementById("planets");
let btn = document.querySelector(".btn");

img.style.backgroundRepeat = "no-repeat";
img.style.margin = "0, auto";
select.addEventListener("change", background);

function background() {
  var choice = select.value;

  if (choice === "mercury") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/mercury-nasa.png)";
  } else if (choice === "venus") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/venus-png-6855.png)";
  } else if (choice === "mars") {
    img.style.display = "block";

    img.style.backgroundImage = "url(img/mars-nasa.png)";
  } else if (choice === "jupiter") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/jupiter-nasa.png)";
  } else if (choice === "saturn") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/saturn-nasa.png)";
  } else if (choice === "uranus") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/uranus-nasa.png)";
  } else if (choice === "neptune") {
    img.style.display = "block";
    img.style.backgroundImage = "url(img/neptune-nasa.png)";
  }
}

const ob = [
  { planet: "mercury", value: 0.38 },
  { planet: "venus", value: 0.91 },
  { planet: "mars", value: 0.38 },
  { planet: "jupiter", value: 2.34 },
  { planet: "saturn", value: 0.93 },
  { planet: "uranus", value: 0.92 },
  { planet: "neptune", value: 1.12 },
];

let first = () => {
  let input = document.querySelector(".input").value;
  let getPlanetName = ob.map((prop) => {
    return Object.values(prop)[0];
  });

  let numberCalc = ob.map((prop) => {
    let calc2 = Object.values(prop)[1] * input;
    return calc2.toFixed(1);
  });

  var newList = document.createElement("li");

  if (e.value == "mercury") {
    newList.textContent =
      getPlanetName[0] + " " + "  --  " + numberCalc[0] + "kg";
  } else if (e.value == "venus") {
    newList.textContent =
      getPlanetName[1] + " " + "  --  " + numberCalc[1] + "kg";
  } else if (e.value == "mars") {
    newList.textContent =
      getPlanetName[2] + " " + "  --  " + numberCalc[2] + "kg";
  } else if (e.value == "jupiter") {
    newList.textContent =
      getPlanetName[3] + " " + "  --  " + numberCalc[3] + "kg";
  } else if (e.value == "saturn") {
    newList.textContent =
      getPlanetName[4] + " " + "  --  " + numberCalc[4] + "kg";
  } else if (e.value == "uranus") {
    newList.textContent =
      getPlanetName[5] + " " + "  --  " + numberCalc[5] + "kg";
  } else if (e.value == "neptune") {
    newList.textContent =
      getPlanetName[6] + " " + "  --  " + numberCalc[6] + "kg";
  }

  myList.appendChild(newList);
};

let second = () => {
  myList.innerHTML = " ";
  let input = document.querySelector(".input").value;
  let getPlanetName = ob.map((prop) => {
    return Object.values(prop)[0];
  });

  let numberCalc = ob.map((prop) => {
    let calc2 = Object.values(prop)[1] * input;
    return calc2.toFixed(1);
  });

  var newList = document.createElement("li");

  if (e.value == "mercury") {
    newList.textContent =
      getPlanetName[0] + " " + "  --  " + " " + numberCalc[0] + "kg";
  } else if (e.value == "venus") {
    newList.textContent =
      getPlanetName[1] + " " + "  --  " + numberCalc[1] + "kg";
  } else if (e.value == "mars") {
    newList.textContent =
      getPlanetName[2] + " " + "  --  " + numberCalc[2] + "kg";
  } else if (e.value == "jupiter") {
    newList.textContent =
      getPlanetName[3] + " " + "  --  " + numberCalc[3] + "kg";
  } else if (e.value == "saturn") {
    newList.textContent =
      getPlanetName[4] + " " + "  --  " + numberCalc[4] + "kg";
  } else if (e.value == "uranus") {
    newList.textContent =
      getPlanetName[5] + " " + "  --  " + numberCalc[5] + "kg";
  } else if (e.value == "neptune") {
    newList.textContent =
      getPlanetName[6] + " " + "  --  " + numberCalc[6] + "kg";
  }

  myList.appendChild(newList);
};

var timesClicked = 0;
btn.addEventListener("click", () => {
  timesClicked++;
  if (timesClicked > 1) {
    second();
  } else {
    first();
  }
});
