function pageLoaded() {
    const input = document.querySelector('#input').value;
    const btn = document.querySelector(".btn");
    const output = document.querySelector(".jresult");
    sendRequest(input);
  }
  function sendRequest(input) {
    console.log(input);
    console.log(validateInput(input));
      if (validateInput(input)) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://picsum.photos/v2/list?limit={input.value}`);
        xhr.send();
        
        xhr.onerror = function() {
          writeOutput('При отправке запроса произошла ошибка');
        }
        
        xhr.onload = function() {
          console.log(xhr.status);
          if (xhr.status == 200) {
            let data = JSON.parse(xhr.response);
            // console.log(data);
            writeOutput(data, input);
          }
        }
      } 
       else {
        alert("число вне диапазона от 1 до 10");
    }
    }
  
     function writeOutput(data, input) {
       // console.log("test")
    let cards = '';
    // console.log(data[input]);
       
    for(i=0; i<input; i++){
       const cardBlock = `
        <div class="card">
          <img
            src="${data[i].download_url}"
            class="card-image"
          />
          <p>${data[i].author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    }
       
  
      
    resultNode.innerHTML = cards;
  }
    
  
        function validateInput(input) {
            console.log(input);
            console.log("start validation")
      let validated = true;
          
      if (input > 10 || input < 1) {
      validated = false;
      }
      return validated;
    }
  
   
  const resultNode = document.querySelector('.j-result');     
  const btnNode = document.querySelector('.j-btn-request');
  btnNode.addEventListener('click', () => pageLoaded());
  