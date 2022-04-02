export function hi() {
    console.log(`Привет`);
}

export function bye() {
    console.log(`Пока`);
}

export default function() {
    console.log("Модуль загружен (экспорт по умолчанию)!");
}

export function loader(){
    console.log('loader');
    let promise = loadScript("https://www.gstatic.com/charts/loader.js");

    promise.then(
        script => console.log(`${script.src} загружен!`),
        error => console.log(`Ошибка: ${error.message}`)
    );

    promise.then(script => console.log('Ещё один обработчик...'));


    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

            document.head.append(script);
        });
    }


}
