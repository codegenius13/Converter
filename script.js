(function () {
    "use strict"
    var convertType = "mmHg" ;
    var heading = document.querySelector('.convert-type');
    var headingTwo = document.querySelector('.convert-type-two');
    var headingThree = document.querySelector('.convert-type-three');
    var headingFour = document.querySelector('.convert-type-four');
    var intro = document.querySelector('#comments');
    var introTwo = document.querySelector('#comments-two');
    var introThree = document.querySelector('#comments-three');
    var introFour = document.querySelector('#comments-four');
    var answer = document.getElementById('answer');
    var answerTwo = document.getElementById('answer-two');
    var answerThree = document.getElementById('answer-three');
    var answerFour = document.getElementById('answer-four');
    var form = document.getElementById('convert');
    var formTwo = document.getElementById('convert-two');
    var formThree = document.getElementById('convert-three');
    var formFour = document.getElementById('convert-four');

    var torr = document.querySelector(".torr");
    torr.addEventListener("click", ()=>{
        convertType = "mmHg";
        heading.innerHTML = "Torr to ATM Converter";
        intro.innerHTML = "Type the value of torr and click the button to convert to atm.";
    });
    var mmHg = document.querySelector(".mmHg");
    mmHg.addEventListener("click", ()=>{
        convertType = "Torr";
         heading.innerHTML = "MMHG Converter to ATM";
         intro.innerHTML = "Type the value of mmHg and click the button to convert to atm.";
    });
    var pascal = document.querySelector(".pascal");
    pascal.addEventListener("click", ()=>{
        convertType = "Pascal";
        heading.innerHTML = "PASCAL Converter to ATM";
        intro.innerHTML = "Type the value of pascal and click the button to convert to atm.";
    });
    var newton = document.querySelector(".Nm");
    newton.addEventListener("click", ()=>{
        convertType = "Newton";
        heading.innerHTML = "N/m2 Converter to ATM";
        intro.innerHTML = "Type the value of N/m2 and click the button to convert to atm.";
    });
    var dm = document.querySelector(".dm3");
    dm.addEventListener("click", ()=>{
        convertType = "Centi";
        headingTwo.innerHTML = "cm3 Converter to dm3";
        introTwo.innerHTML = "Type the value of cm3 and click the button to convert to dm3.";
    });
    var litre = document.querySelector(".litre");
    litre.addEventListener("click", ()=>{
        convertType = "Litre";
        headingTwo.innerHTML = "mL Converter to L";
        introTwo.innerHTML = "Type the value of mL and click the button to convert to L.";
    });
    var celcius = document.querySelector(".celcius");
    celcius.addEventListener("click", ()=>{
        convertType = "Celcius";
        headingThree.innerHTML = "kelvin Converter to celcius";
        introThree.innerHTML = "Type the value of kelvin and click the button to convert to celcius.";
    });
    var kelvin = document.querySelector(".kelvin");
    kelvin.addEventListener("click", ()=>{
        convertType = "Kelvin";
        headingThree.innerHTML = "celcius Converter to kelvin";
        introThree.innerHTML = "Type the value of celcius and click the button to convert to kelvin.";
    });
    var gram = document.querySelector(".gram");
    gram.addEventListener("click", ()=>{
        convertType = "Gram";
        headingFour.innerHTML = "gram Converter to kilogram";
        introFour.innerHTML = "Type the value of gram and click the button to convert to kilogram.";
    });
    var kilogram = document.querySelector(".kilo");
    kilogram.addEventListener("click", ()=>{
        convertType = "Kilogram";
        headingFour.innerHTML = "kilogram Converter to gram";
        introFour.innerHTML = "Type the value of kilogram and click the button to convert to gram.";
    });
       form.addEventListener('submit', function (event) {
        event.preventDefault();
        var pressure = parseFloat(document.getElementById('pressure').value);
        if (pressure) {
            if (convertType == 'Torr') {
              var converted = (pressure / 760).toFixed(8); 
              answer.innerHTML = `${pressure}mmHg converted to <strong>${converted}atm</strong>`;  
            }
            else if(convertType == 'mmHg'){
              var converted = (pressure / 760).toFixed(8);
              answer.innerHTML = `${pressure}torr converted to <strong>${converted}atm</strong>`;
            }
            else if(convertType == 'Pascal'){
                var converted = (pressure / 101325).toFixed(8);
                answer.innerHTML = `${pressure}pascal converted to <strong>${converted}atm</strong>`;
            }
            else if(convertType == 'Newton'){
                var converted = (pressure / 101325).toFixed(8);
                answer.innerHTML = `${pressure}N/m2 converted to <strong>${converted}atm</strong>`;
            }
        }
        else {
            answer.innerHTML= '<h2> Please provide a number </h2>'
        }
    });
        formTwo.addEventListener('submit', function (event) {
            event.preventDefault();
            var pressureTwo = parseFloat(document.getElementById('pressure-two').value);
            if (pressureTwo) {
                if(convertType == 'Centi'){
                  var convertedTwo = (pressureTwo / 1000).toFixed(8);
                  answerTwo.innerHTML = `${pressureTwo}cm3 converted to <strong>${convertedTwo}dm3</strong>`;
                }
                if(convertType == 'Litre'){
                    var convertedTwo = (pressureTwo / 1000).toFixed(8);
                    answerTwo.innerHTML = `${pressureTwo}mL converted to <strong>${convertedTwo}L</strong>`;
                  }
            }
            else {
                answerTwo.innerHTML= '<h2> Please provide a number </h2>'
            }
   });
   formThree.addEventListener('submit', function (event) {
    event.preventDefault();
    var pressureThree = parseFloat(document.getElementById('pressure-three').value);
    if (pressureThree) {
        if(convertType == 'Kelvin'){
          var convertedThree = (pressureThree + 273).toFixed(8);
          answerThree.innerHTML = `${pressureThree}celcius converted to <strong>${convertedThree}K</strong>`;
        }
        if(convertType == 'Celcius'){
            var convertedThree = (pressureThree - 273).toFixed(8);
            answerThree.innerHTML = `${pressureThree}K converted to <strong> ${convertedThree}celcius</strong>`;
          }
    }
    else {
        answerThree.innerHTML= '<h2> Please provide a number </h2>'
    }
    });
    formFour.addEventListener('submit', function (event) {
        event.preventDefault();
        var pressureFour = parseFloat(document.getElementById('pressure-four').value);
        if (pressureFour) {
            if(convertType == 'Gram'){
              var convertedFour = (pressureFour / 1000).toFixed(8);
              answerFour.innerHTML = `${pressureFour}g converted to <strong>${convertedFour}kg</strong>`;
            }
            if(convertType == 'Kilogram'){
                var convertedFour = (pressureFour * 1000).toFixed(8);
                answerFour.innerHTML = `${pressureFour}kg converted to <strong> ${convertedFour}g</strong>`;
              }
        }
        else {
            answerFour.innerHTML= '<h2> Please provide a number </h2>'
        }
    });
})();