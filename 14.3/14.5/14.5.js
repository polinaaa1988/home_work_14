function pageLoaded() {
    const inputA = document.querySelector('.inp_one').value;
    const inputB = document.querySelector('.inp_two').value;
    const output = document.querySelector(".jresult");

    let url = "https://picsum.photos/v2/list";
    sendRequest(url, inputA, inputB);
}

    function sendRequest(url, inputA, inputB) {
      console.log(inputA, inputB );

      if(isIncorrect(inputA) && isIncorrect(inputB)){
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
      } else if (isIncorrect(inputA)){
        alert("Номер страницы вне диапазона от 1 до 10");
      }  else if (isIncorrect(inputB)){
        alert("Лимит вне диапазона от 1 до 10");
      } else  {
        fetch(`https://picsum.photos/v2/list?page=${inputA}&limit=${inputB}`)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data=> {
          console.log(data);
          (formatOutput(data, inputB)); 
        })
        .catch(error => {
          console.log(error);
        });
      } 
    }
    
    function isIncorrect(input){
      if (input >= 1 && input <= 10 || !isNaN(+input.value)){
        return false;
      } else {
        return true;
        };
    }

    function formatOutput(data, inputB) {
     
    // const userJSON = localStorage.getItem('metka');
    let cards = '';
    
      
    for(i=0; i<inputB; i++){
       const cardBlock = `
        <div class="card">
          <img
            src="${data[i].download_url}"
            class="card-image"
          />
         
        </div>
      `;
      cards = cards + cardBlock;
      localStorage.setItem('metka', JSON.stringify(cards));
    
  }
  // } else {
  //   cards = userJSON;
  // }
    resultNode.innerHTML = cards;
    
    }



  const resultNode = document.querySelector('.j-result');     
  const btnNode = document.querySelector('.j-btn-request');
  btnNode.addEventListener('click', () => {
    
    pageLoaded()});
  
  
// ____________________________________________________________



// function readUser() {
//   const userJSON = localStorage.getItem('metka')

//   if (userJSON === null) {
//     return undefined
//   }

//   // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
//   try {
//     return JSON.parse(userJSON)
//   } catch (e) {
//     localStorage.removeItem('metka')
//     return undefined
//   }
// }

// console.log(readUser());


// ____________________________________________________________