//1 задание
setTimeout(() => {
    console.log("Привет, мир!");
}, 2000);

//2 и 3 задание

let count = 0;

const interval = setInterval(() => {
    const time = new Date().toLocaleTimeString("ru-RU", {
        hour12: false
    });

    console.log(time);
    count++;

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

// 4 задание 
function fetchData() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Данные получены");

    },3000);

    });
}
fetchData().then((result) => {
    console.log(result);
});

// 5 задание    

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ошибка загрузки!");
        }, 2000);
    });
}

fetchDataWithError()
    .catch((error) => {
        console.log(error);
    });
