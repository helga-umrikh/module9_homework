//Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URLhttps://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида:https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

const btn = document.querySelector("#button");

const checkNumberRange = (num) => {
    if (num > 10 || num < 1) {
        document.write("число вне диапазона от 1 до 10");
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`);
    };

    xhr.onerror = function () {
        console.log("Ошибка запроса");
    };
    xhr.open("get", "https://picsum.photos/v2/list?limit=10", true);
    xhr.send();
    }
};

button.addEventListener("click", checkNumberRange);
