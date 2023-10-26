let displayTop = document.querySelector(".display-top");
let displayBottom = document.querySelector(".display-bottom");
let buttonsContainer = document.querySelector(".buttons-container");

let operator = "";
let firstNumber = "";
let isPreviousOperator = false;

//Operator islemleri - + / *

function calculate(operator) {
  switch (operator) {
    case "+":
      return Number(firstNumber) + Number(displayBottom.innerHTML);
    case "-":
      return Number(firstNumber) - Number(displayBottom.innerHTML);
    case "%":
      return Number(firstNumber) / Number(displayBottom.innerHTML);
    case "x":
      return Number(firstNumber) * Number(displayBottom.innerHTML);
  }
}

//! classList adından da anlaşılacağı üzerinde üzerine tıkladığımız elementin tüm class'larını bir array şeklinde saklar
//! classList'i kontrol ederek yapılacak işleme/fonksiyona karar veriyoruz

buttonsContainer.addEventListener("click", (event) => {
  //Containera addEventListener ekledigim icin bos alanlara da tiklanabilir. Bunun etkilememesi icin:

  if (!event.target.classList.contains("button")) return;
  let primaryValue = displayBottom.innerHTML;
  let buttonValue = event.target.innerHTML;
  console.log(buttonValue);

  /* -------------------------------------------------------------------------- */
  /*                             AC butonu ile silme                            */
  /* -------------------------------------------------------------------------- */

  if (event.target.classList.contains("ac")) {
    operator = "";
    displayBottom = "0";
    displayTop = "";
    firstNumber = "";
  }

  /* -------------------------------------------------------------------------- */
  /*                              NUMBERa basilinca                             */
  /* -------------------------------------------------------------------------- */

  if (event.target.classList.contains("number")) {
    if (primaryValue.length < 8) {
      if (primaryValue !== "0"){
        displayBottom.innerHTML += buttonValue;
      } else if (buttonValue !== "0") {
        displayBottom.innerHTML = buttonValue;
      }
    }
  }


/* -------------------------------------------------------------------------- */
/*                          PM ekleme cikarma islemi                          */
/* -------------------------------------------------------------------------- */

// ekrana gelen degerin önüne - isareti ekleme yada kaldirma

if (event.target.classList.contains("pm")){
    if (primaryValue[0] == "-"){
        displayBottom.innerHTML=primaryValue.substring(1)
    }
    else if (primaryValue.length<8 && primaryValue !== "0"){
        displayBottom.innerHTML="-" + primaryValue
    }
}


/* -------------------------------------------------------------------------- */
/*                      , tusuna basilinca decimale cevir                     */
/* -------------------------------------------------------------------------- */

if (event.target.classList.contains("decimal")){
    if (!primaryValue.includes(",")){
        displayBottom.innerHTML+=","
    }
}

/* -------------------------------------------------------------------------- */
/*                       HESAPLAMA ISLEMLERI - OPERATORS                      */
/* -------------------------------------------------------------------------- */

function calculate(operator) {
    switch (operator) {
      case "+":
        return Number(firstNumber) + Number(displayBottom.innerHTML);
      case "-":
        return Number(firstNumber) - Number(displayBottom.innerHTML);
      case "%":
        return Number(firstNumber) / Number(displayBottom.innerHTML);
      case "x":
        return Number(firstNumber) * Number(displayBottom.innerHTML);
    }
  }

  if (event.target.classList.contains("operator")){
    if (!isPreviousOperator){
        if (displayTop.innerHTML && operator){
            firstNumber-calculate()
        }
        else{
            firstNumber=primaryValue
        }
    }
  }
  




});
