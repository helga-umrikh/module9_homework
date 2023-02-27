// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».

// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URLhttps://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет видаhttps://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

function get_random_image(){
  
    const jsonString = localStorage.getItem('JSON');
    
    // if(jsonString) {
    //   //выводит старые данные на экран
    //   //ДОДЕЛАЙ ВЫВОД 
    // }
  
  //запрос
      url = ` https://picsum.photos/v2/list?page=${input.value}&limit=${secondInput.value}`;
      
    
    //чекает импуты
      if (validateInput()) {
        //все ок делаем запрос
          fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((json) => { 
           localStorage.setItem('JSON', JSON.stringify(json));
           return json; })
        
          .then(function displayResult(apiData) {
                  let cards = '';
                  apiData.forEach(item => {
                    const cardBlock = `
                      <div class="card">
                        <img
                          src="${item.download_url}"
                          class="card-image"
                        />
                        <p>${item.author}</p>
                      </div>
                    `;
                    cards = cards + cardBlock;
                  });
          const resultNode = document.querySelector(".j-result");
          resultNode.innerHTML = cards;
               })
        
          .catch(function(error){
            console.log("Error: " + error);
          })
      }
    }
  
  
  const resultNode = document.querySelector('.j-result');
  
    function validateInput() {
        let validated = true;
        if ((input.value === '' || isNaN(+input.value)) && 
            (secondInput.value === '' || isNaN(+secondInput.value))) {
          document.getElementById('error').innerHTML = "Вводимые значения не являются числами";
          validated = false;
        }
        
        else if (input.value > 10 || input.value < 1) {
          document.getElementById('error').innerHTML = "Номер страницы вне диапазона от 1 до 10"
          validated = false;
          }
      
        else if (secondInput.value > 10 || secondInput.value < 1) {
          document.getElementById('error').innerHTML = "Лимит вне диапазона от 1 до 10"
          validated = false;
        }
        
        else if ((input.value > 10 || input.value < 1) &&
            (secondInput.value > 10 || secondInput.value < 1)) {
          document.getElementById('error').innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
          validated = false;
        }
        return validated;
      }
  
  
  