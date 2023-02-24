// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URLhttps://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, то запрос будет видаhttps://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.

function useRequest(url, callback) {
    if (validateInput()) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
        console.log("Статус ответа: ", xhr.status);
        } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
            callback(result);
        }
        }
    };

    xhr.onerror = function () {
        console.log("Ошибка! Статус ответа: ", xhr.status);
    };

    xhr.send();
    }
}

function validateInput() {
    let validated = true;
    if (
    (input.value === "" || isNaN(+input.value)) &&
    (secondInput.value === "" || isNaN(+secondInput.value))
    ) {
    validated = false;
    console.log("One of the values are not a number");
    }

    if (
    (input.value > 300 || input.value < 100) &&
    (secondInput.value > 300 || secondInput.value < 100)
    ) {
    validated = false;
    //доделать вывод строки на страницу
    resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
    return validated;
}

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector(".j-result");
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector(".j-btn-request");

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */

function displayResult(apiData) {
    let cards = "";
  // console.log('start cards', cards);

    apiData.forEach((item) => {
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

  // console.log('end cards', cards);

    resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener("click", () => {
    useRequest("https://picsum.photos/v2/list/?limit=5", displayResult);
});
