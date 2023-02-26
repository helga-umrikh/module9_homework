function get_random_image(){

    url = `https://picsum.photos/${input.value}/${secondInput.value}`;
    
    if(validateInput()){
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
          let imageElement = document.getElementById('image');
          imageElement.src = URL.createObjectURL(blob);
        })
        .catch(function(error){
          console.log("Error: " + error);
        });
  
    } 
  }
  
  
  function validateInput() {
      let validated = true;
      if ((input.value === '' || isNaN(+input.value)) && 
          (secondInput.value === '' || isNaN(+secondInput.value))) {
        document.getElementById('error').innerHTML = "Вводимые значения не являются числами";
        validated = false;
      }
      
      else if ((input.value > 300 || input.value < 100) &&
          (secondInput.value > 300 || secondInput.value < 100)) {
        document.getElementById('error').innerHTML = "одно из чисел вне диапазона от 100 до 300";
        validated = false;
      }
      return validated;
    }