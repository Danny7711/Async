setTimeout(() => {
    console.log("Привет, мир!");
}, 2000);

//2

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

