$( document ).ready(function() {

  $("#tryAgain").hide();
  $("#middle").hide();
  $("#wrong").hide();
  $("#nextDiv").hide();
  $("#rules").hide();

    $("#cubismGame").click(function(){
    $("#cubismGame").hide();
    $("#rules").show();
  });


  var intervalID;
  var intervalLookTimerId;

  var nextTurn = function(){
    var counter = 0;
    this.turn = setInterval(function(){
      counter += 1;
      if(counter === 400){
        arrayOfNumbers = [];
        fillArray();
        fillArrayByPic();
        $(".leftPortr").show();

        game();
      }
    },10);
  };

  var game = function(){
    $("#rightBack").css({'background-image':'none'});
    $("#rightShape").css({'background-image':'none'});
    $("#rightEyes").css({'background-image':'none'});
    $("#rightBrows").css({'background-image':'none'});
    $("#rightNose").css({'background-image':'none'});
    $("#rightMouth").css({'background-image':'none'});
    $("#rightEars").css({'background-image':'none'});
    $("#middle").hide();
    lookTimer();
  };



    $(".leftPortr").hide();



    $("#resetButton").click(function(){
    $("#tryAgain").hide();
    $("#startScreen").show();
    $(".leftPortr").show();

  });



  $("#rules").click(function(){
    $("#startScreen").hide();
  });



  $("#newGame").click(function(){
    clearInterval(intervalLookTimerId);
    $(".leftPortr").show("slow","linear");
    game();
    arrayOfNumbers = [];
    fillArray();
    fillArrayByPic();
    $("#check").show();
      // $("#timeBar").css("background-color","green")
    if (intervalID !== undefined) {
      clearInterval(intervalID);
    }


  });

  var backArray = [];

  var shapeArray = [];

  var eyesArray = [];

  var browsArray = [];

  var noseArray = [];

  var mouthArray = [];

  var earsArray = [];

  var arrayOfNumbers = [];

  var userArray = [];

  function gameTimer(){
    var counter = 0;
    intervalID = setInterval(function () {
      counter += 1;
      $("#timeBar").css("width",counter);
      if(counter == 500){
        $("#timeBar").css("background-color","rgb(213, 224, 80)");
      } else if(counter == 1000){
        $("#timeBar").css("background-color","red");
      }else if (counter == 1450) {
        clearInterval(intervalID);
        $("#tryAgain").show();
        $("#check").hide();
      }
    }, 40);
  }



  function lookTimer(){
    var counter = 0;
    intervalLookTimerId = setInterval(function () {
      counter += 1;
      $("#timeBar").css("width",counter);
      if(counter == 500){
        $("#timeBar").css("background-color","yellow");
      } else if(counter == 1000){
          $("#timeBar").css("background-color","red");
      }else if (counter == 1450) {
        $(".leftPortr").hide();
        $("#middle").show();
        clearInterval(intervalLookTimerId);
        gameTimer();
      }
    }, 15);
  }


  var arrayToFill = function(arr,path){            //-function filling arrays from folder
    for (var i = 1; i < 8; i += 1) {
      arr.push("images/" + path + i + ".png");
    }
    return arr;
  };

  var randomArr = function(min, max) {                    ///-gets random number
    return Math.floor(Math.random() * (max - min) + min);
  };

  arrayToFill(backArray,"back/");
  arrayToFill(shapeArray,"shape/");
  arrayToFill(eyesArray,"eyes/");
  arrayToFill(browsArray,"brows/");
  arrayToFill(noseArray,"nose/");
  arrayToFill(mouthArray,"mouth/");
  arrayToFill(earsArray,"ears/");
  var fillArray = function(){
    arrayOfNumbers.push(
      randomArr(0,backArray.length),
      randomArr(0,shapeArray.length),
      randomArr(0,eyesArray.length),
      randomArr(0,browsArray.length),
      randomArr(0,noseArray.length),
      randomArr(0,mouthArray.length),
      randomArr(0,earsArray.length)
    );
  };

  fillArray();

  var fillArrayByPic = function(){
  $("#leftBack").css({'background-image':'url('+backArray[arrayOfNumbers[0]]+')'});
  $("#leftShape").css({'background-image':'url('+shapeArray[arrayOfNumbers[1]]+')'});
  $("#leftEyes").css({'background-image':'url('+eyesArray[arrayOfNumbers[2]]+')'});
  $("#leftBrows").css({'background-image':'url('+browsArray[arrayOfNumbers[3]]+')'});
  $("#leftNose").css({'background-image':'url('+noseArray[arrayOfNumbers[4]]+')'});
  $("#leftMouth").css({'background-image':'url('+mouthArray[arrayOfNumbers[5]]+')'});
  $("#leftEars").css({'background-image':'url('+earsArray[arrayOfNumbers[6]]+')'});
  };

  fillArrayByPic();

  var backValue = 0;

  $("#back").click(function() {
      backValue += 1;
        if(backValue >= backArray.length){
            backValue = 0;
    }
    $("#rightBack").css({'background-image':'url('+backArray[backValue]+')'});
  console.log(backValue);
    return backValue;
  });


  var shapeValue = 0;

  $("#shape").click(function() {
      shapeValue += 1;
        if(shapeValue >= shapeArray.length){
            shapeValue = 0;
    }
    $("#rightShape").css({'background-image':'url('+shapeArray[shapeValue]+')'});
  console.log(shapeValue);
    return shapeValue;
  });

  var eyesValue = 0;

  $("#eyes").click(function() {
      eyesValue += 1;
        if(eyesValue >= eyesArray.length){
            eyesValue = 0;
    }
    $("#rightEyes").css({'background-image':'url('+eyesArray[eyesValue]+')'});
  console.log(eyesValue);
    return eyesValue;
  });

  var browsValue = 0;

  $("#brows").click(function() {
      browsValue += 1;
        if(browsValue >= browsArray.length){
            browsValue = 0;
    }
    $("#rightBrows").css({'background-image':'url('+browsArray[browsValue]+')'});
  console.log(browsValue);
    return browsValue;
  });



  var noseValue = 0;

  $("#nose").click(function() {
      noseValue += 1;
        if(noseValue >= noseArray.length){
            noseValue = 0;
    }
    $("#rightNose").css({'background-image':'url('+noseArray[noseValue]+')'});
  console.log(noseValue);
    return noseValue;
  });

  var mouthValue = 0;

  $("#mouth").click(function() {
      mouthValue += 1;
        if(mouthValue >= mouthArray.length){
            mouthValue = 0;
    }
    $("#rightMouth").css({'background-image':'url('+mouthArray[mouthValue]+')'});
  console.log(mouthValue);
    return mouthValue;
  });

  var earsValue = 0;

  $("#ears").click(function() {
      earsValue += 1;
        if(earsValue >= earsArray.length){
            earsValue = 0;
    }
    $("#rightEars").css({'background-image':'url('+earsArray[earsValue]+')'});
  console.log(earsValue);
    return earsValue;
  });

  $('#check').click(function () {
    userArray[0]=backValue;
      userArray[1]=shapeValue;
        userArray[2]=eyesValue;
          userArray[3]=browsValue;
            userArray[4]=noseValue;
              userArray[5]=mouthValue;
                userArray[6]=earsValue;

    if(arrayOfNumbers[0]===userArray[0]&&
        arrayOfNumbers[1]===userArray[1]&&
          arrayOfNumbers[2]===userArray[2]&&
            arrayOfNumbers[3]===userArray[3]&&
              arrayOfNumbers[4]===userArray[4]&&
                arrayOfNumbers[5]===userArray[5]&&
                  arrayOfNumbers[6]===userArray[6])


          {
            clearInterval(intervalID);

            var $span = $('#score');
            $(".leftPortr").show();
            $("#nextDiv").fadeIn(100).delay(700).fadeOut(100);
            $span.text(Number($span.text()) + 1);
            nextTurn();



          }else{
            $("#wrong").fadeIn(100).delay(90).fadeOut(100);



          }









  });

});
