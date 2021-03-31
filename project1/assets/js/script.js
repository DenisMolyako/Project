// const con = 10;
// let a = "hello";
// a = "adidas";
// let b = 10;
// let c = 1.5;
// let n = true;
// let k = "a";
// let mass = [1,"name", 2["hello",2]];
// let human = {
//     name: "Offnik",
//     age: 14,
//     hobby: ["Бокс", "Забив"]
// }


// && - И в приоритете над ИЛИ (||)


// if (10==10 && 10<11 && 10>9){
//     console.log("Истина");
// }

// let a =prompt("Введите своё имя" ,)

// let b = confirm("Вам есть 18?");

// alert("dsadasdad");


// let a = confirm("Вам есть 18?");

// switch(a){
//     case true:
//         alert("Всё супер, вам 18!");
//         break;
//     case false:
//         alert("Сори, вам нет 18...");
//         break;
//     default:
//         alert("Что за суета?!");
//         break;

// }
// let score = 10;
// while(score<11){
//     console.log("Putin");
//     score++;
// }

// for (let i = 0; i<10;i++){
//     console.log("Privet")
// }






//                  ИГРА НА ИФ ЭЛС



const secretNum = Math.round(Math.random(0,1)*100);


 let score = 0;
  while(score<5){
    let a = +prompt("Введите загаданное число",);
  
    if (a > 100 || a <0 || typeof (a) == "string" || !a){
        alert("Введите число от 0 до 100");
        continue;
        
    }
    score++;
    
    if (a == secretNum){
        alert("Поздравляю, вы угадали!");
        alert("Номер попытки "+score);
    }
     else if(a < secretNum) {
         alert("Загаданное число больше!");
         alert("Номер попытки "+score);
    }
     else if(a > secretNum) {
       alert("Загаданное число меньше!");
       alert("Номер попытки "+score);
    }

}
alert("тыпраиграл");



//                  ИГРА НА ИФ СВИЧ
