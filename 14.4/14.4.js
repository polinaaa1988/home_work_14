function pageLoaded() {
    const inputA = document.querySelector('.inp_one').value;
    const inputB = document.querySelector('.inp_two').value;
    let url = "https://picsum.photos";
    sendRequest(url, inputA, inputB);
}

    function sendRequest(url, inputA, inputB) {
      console.log(inputA, inputB );
      if (checkInput (inputA, inputB) ) {
        fetch(url+"/" + inputA + "/" + inputB)
        .then(response => {
          (formatOutput(response.url, inputA, inputB)); 
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        alert("число вне диапазона от 100 до 300");
      }
    }
    
    function checkInput(inputA, inputB){
      if (inputA >= 100 && inputA <= 300){
        if (inputB >= 100 && inputB <= 300){
          return true;
        }
      } return false;
    }

    function formatOutput(result, inputA, inputB) {
      console.log("te");
      const output = `
      <div class="card">
        <img
          src="${result}"
          class="card-image" width="${inputA.value}" height="${inputB.value}"
        />
      </div>
    `;
    resultNode.innerHTML = output;
    }

  const resultNode = document.querySelector('.j-result');     
  const btnNode = document.querySelector('.j-btn-request');
  btnNode.addEventListener('click', () => pageLoaded());
  