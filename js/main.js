
let elBody = document.querySelector("body");
let elContainer = document.createElement("div")
let elForm = document.createElement("form")
let elLabel = document.createElement("label")
let elInput = document.createElement("input")
let elBtn = document.createElement("button")
let elInfo = document.createElement("p")
let elSpanMax = document.createElement("span")
let elHr = document.createElement("hr")
let elSpanMin = document.createElement("span")


elBody.appendChild(elContainer);
elContainer.appendChild(elForm);
elForm.appendChild(elLabel);
elForm.appendChild(elInput);
elForm.appendChild(elBtn);
elContainer.appendChild(elInfo);
elContainer.appendChild(elSpanMax);
elContainer.appendChild(elHr);
elContainer.appendChild(elSpanMin);


elContainer.classList = "container"
elContainer.style.maxWidth = "270px"
elContainer.style.width = "100%"
elContainer.style.margin = "50px auto"
elContainer.style.display = "flex"
elContainer.style.flexDirection = "column"
elContainer.style.alignItems = "center"
elContainer.style.backgroundColor = "orange"
elContainer.style.color = "white";
elContainer.style.padding = "15px";
elContainer.style.borderRadius = "10px";


elForm.style.display = "flex"
elForm.style.flexDirection = "column"
elForm.style.alignItems = "center"
elForm.style.gap = "30px"
elForm.setAttribute("action", "https://echo.htmlacademy.ru/")

elLabel.textContent = "Massivga nechta element joylamoqchisiz?"
elLabel.style.fontSize = "22px";
elLabel.style.textAlign = "center";
elLabel.style.display = "block";
elLabel.style.fontStyle = "italic";
elLabel.style.textShadow = "0 0 10px black";



elInput.style.fontSize = "16px";
elInput.style.width = "180px";
elInput.style.padding = "15px";
elInput.style.textAlign = "center";
elInput.style.margin = "0 auto";
elInput.style.borderRadius = "5px";
elInput.style.border = "none";

elBtn.textContent = "Yuborish"
elBtn.style.padding = "5px 20px"
elBtn.style.boxShadow = "0 0 3px 3px white"
elBtn.style.border = "1px solid black"
elBtn.style.borderRadius = "7px"


elForm.addEventListener("submit", function(evt){
  evt.preventDefault()


  totalNum(elInput)

  function totalNum(num){
    num = elInput.value.trim()
    let arr = []
    let elValue;
    if(num.length > 0){
      num = Number(num);

      if(!isNaN(num)){
        for(let i = 0; i < num; i++){
          elValue = prompt((i + 1) + " - raqamni kiriting")
          if(elValue.length != 0){
            elValue = Number(elValue)
            if(!isNaN(elValue)){
              arr.push(elValue)
            }
            else{
              alert("Raqamli ma'lumot kiritilmadi! Iltimos, raqamli ma'lumot kiriting"); break;
            }
          }
          else{
            if(i > 0){
              alert("Ma'lumotlar to'liq kiritilmadi! Iltimos, ma'lumotlarni to'liq kiriting");break;
            }
            alert("Ma'lumot kiritilmadi! Iltimos, ma'lumot kiriting");
            break;
          }
        }
        elInfo.style.fontSize = "19px";
        elInfo.style.textAlign = "center";
        elInfo.style.color = "black";
        elInfo.textContent = "Kiritilgan sonlar: " + arr
        let elMax = arr[0];
        let elMin = arr[0];

        elHr.style.width = "90%";

        for(let j = 0; j < arr.length; j++){
          if(arr[j] >= elMax){
            elMax = arr[j];
            let elMaxIndex = arr.indexOf(arr[j]);
            elSpanMax.style.fontSize = "18px";
            elSpanMax.style.padding = "5px";
            elSpanMax.style.textAlign = "center";
            elSpanMax.textContent = "Maksimal son: " + elMax + " / " + "(index: " + elMaxIndex + ")";
          }

          if(arr[j] <= elMin){
            elMin = arr[j];
            let elMinIndex = arr.indexOf(arr[j]);
            elSpanMin.style.fontSize = "18px";
            elSpanMin.style.padding = "5px";
            elSpanMin.style.textAlign = "center";
            elSpanMin.textContent = "Minimal son: " + elMin + " / " + "(index: " + elMinIndex + ")";
          }
        }

      }
      else{
        elInfo.style.textShadow = "0 0 5px blue"
        elInfo.innerHTML = "Iltimos, raqamli ma'lumot kiriting"
      }

      // alert(typeof num)


    }
    else{
      elInfo.style.textShadow = "0 0 5px blue"
      elInfo.innerHTML = "Iltimos, ma'lumot kiriting"
    }
  }
})





// if(elInput.length != 0){
//   elInput = Number(elInput);
//   for(let i = 0; i < elInput; i++){
//     let elValue = Number(prompt((i+1) + " - raqamni kiriting"));
//     empty.push(elValue);
//   }
//   elMax = empty[0]
//   elMin = empty[0]
//   for(j = 0; j < empty.length; j++){
//     if(empty[j] >= elMax){
//       elMax = empty[j]
//     }
//     // 7 3 9 44 1 3 65
//     if(empty[j] <= elMin){
//       elMin = empty[j]
//     }

//   }
//   elParagraph.textContent = "Kiritilgan raqamlar:  " + empty;
//   elHeadingOne.innerHTML = "Max number = " + elMax;
//   elHeadingTwo.innerHTML = "Min number = " + elMin;
// }

// else{
//   alert("Iltimos, ma'lumot kiriting")
// }
