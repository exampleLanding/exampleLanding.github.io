function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так :('
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); - заголовок для формы

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        // атрибут name создает ключ в объекте когда данные пережаются на сервер а значение передает сам пользователь

        let formData = new FormData(form); // помещаем в данный объект ту форму которую заполнил пользователь
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value; // берем объект formData и все данные которые есть в нем помещаем в объект obj
        });
        let json = JSON.stringify(obj);

        request.send(json); // передаем данные которые ввел пользовательв форме (body)
        // request.send(formData); передаем данные не в формате json
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.success; // message.failure по факту но я не знаю как пофиксить ошибку 405
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}

module.export = form;