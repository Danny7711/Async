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
// 6 задание

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        }, 3000);
    });
}

async function fetchDataAsync() {
    const result = await fetchData();
    return result;
}

fetchDataAsync().then((result) => {
    console.log(result);
});
// 7 задание

function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ошибка загрузки!");
        }, 2000);
    });
}

async function fetchDataWithErrorAsync() {
    try {
        const result = await fetchDataWithError();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchDataWithErrorAsync();
// 8 задание

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Первая задача выполнена!");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Вторая задача выполнена!");
        }, 2000);
    });
}

async function runTasks() {
    const result1 = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);
}

runTasks();

//` 9 задание

function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача A выполнена!");
        }, 2000);
    });
}

function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача B выполнена!");
        }, 3000);
    });
}

async function runTasks() {
    const results = await Promise.all([taskA(), taskB()]);

    console.log(results[0]);
    console.log(results[1]);
}

runTasks();
