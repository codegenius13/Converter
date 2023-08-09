(function () {
    "use strict"
    var convertType = "mmHg" ;
    var heading = document.querySelector('.convert-type');
    var headingTwo = document.querySelector('.convert-type-two');
    var headingThree = document.querySelector('.convert-type-three');
    var intro = document.querySelector('#comments');
    var introTwo = document.querySelector('#comments-two');
    var introThree = document.querySelector('#comments-three');
    var answer = document.getElementById('answer');
    var answerTwo = document.getElementById('answer-two');
    var answerThree = document.getElementById('answer-three');
    var form = document.getElementById('convert');
    var formTwo = document.getElementById('convert-two');
    var formThree = document.getElementById('convert-three');
    document.addEventListener('keydown', function (event) {
        var key = event.code;
        if (key == 'KeyT') {
         convertType = "mmHg";
         heading.innerHTML = "Torr to ATM Converter";
         intro.innerHTML = "Type the value of torr and click the button to convert to atm.";
        }
        else if(key == 'KeyM'){
         convertType = "Torr";
         heading.innerHTML = "MMHG Converter to ATM";
         intro.innerHTML = "Type the value of mmHg and click the button to convert to atm.";
        }
        else if(key == 'KeyP'){
            convertType = "Pascal";
            heading.innerHTML = "PASCAL Converter to ATM";
            intro.innerHTML = "Type the value of pascal and click the button to convert to atm.";
        }
        else if(key == 'KeyN'){
            convertType = "Newton";
            heading.innerHTML = "N/m2 Converter to ATM";
            intro.innerHTML = "Type the value of N/m2 and click the button to convert to atm.";
        }
        else if(key == 'KeyC'){
            convertType = "Centi";
            headingTwo.innerHTML = "cm3 Converter to dm3";
            introTwo.innerHTML = "Type the value of cm3 and click the button to convert to dm3.";
        }
        else if(key == 'KeyL'){
            convertType = "Litre";
            headingTwo.innerHTML = "mL Converter to L";
            introTwo.innerHTML = "Type the value of mL and click the button to convert to L.";
        }
        else if(key == 'KeyK'){
            convertType = "Kelvin";
            headingThree.innerHTML = "celcius Converter to kelvin";
            introThree.innerHTML = "Type the value of celcius and click the button to convert to kelvin.";
        }
        else if(key == 'KeyD'){
            convertType = "Celcius";
            headingThree.innerHTML = "kelvin Converter to celcius";
            introThree.innerHTML = "Type the value of kelvin and click the button to convert to celcius.";
        }
       });
       form.addEventListener('submit', function (event) {
        event.preventDefault();
        var pressure = parseFloat(document.getElementById('pressure').value);
        if (pressure) {
            if (convertType == 'Torr') {
              var converted = (pressure / 760).toFixed(5); 
              answer.innerHTML = `${pressure} mmHg converted to ${converted}atm`;  
            }
            else if(convertType == 'mmHg'){
              var converted = (pressure / 760).toFixed(5);
              answer.innerHTML = `${pressure} torr converted to ${converted}atm`;
            }
            else if(convertType == 'Pascal'){
                var converted = (pressure / 101325).toFixed(8);
                answer.innerHTML = `${pressure} pascal converted to ${converted}atm`;
            }
            else if(convertType == 'Newton'){
                var converted = (pressure / 101325).toFixed(8);
                answer.innerHTML = `${pressure} N/m2 converted to ${converted}atm`;
            }
            else if(convertType == 'Litre'){
                var converted = (pressure / 1000).toFixed(5);
                answerTwo.innerHTML = `${pressure} mL converted to ${converted}L`;
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
                  var convertedTwo = (pressureTwo / 1000).toFixed(5);
                  answerTwo.innerHTML = `${pressureTwo} cm3 converted to ${convertedTwo}dm3`;
                }
                if(convertType == 'Litre'){
                    var convertedTwo = (pressureTwo / 1000).toFixed(5);
                    answerTwo.innerHTML = `${pressureTwo} mL converted to ${convertedTwo}L`;
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
          var convertedThree = (pressureThree + 273).toFixed(3);
          answerThree.innerHTML = `${pressureThree} celcius converted to ${convertedThree}kelvin`;
        }
        if(convertType == 'Celcius'){
            var convertedThree = (pressureThree - 273).toFixed(3);
            answerThree.innerHTML = `${pressureThree} kelvin converted to ${convertedThree}celcius`;
          }
    }
    else {
        answerThree.innerHTML= '<h2> Please provide a number </h2>'
    }
});
})();