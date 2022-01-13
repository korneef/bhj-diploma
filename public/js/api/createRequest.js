/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

//  createRequest({
//     url: 'https://example.com', // адрес
//     data: { // произвольные данные, могут отсутствовать
//       email: 'ivan@poselok.ru',
//       password: 'odinodin'
//     },
//     method: 'GET', // метод запроса
//     /*
//       Функция, которая сработает после запроса.
//       Если в процессе запроса произойдёт ошибка, её объект
//       должен быть в параметре err.
//       Если в запросе есть данные, они должны быть переданы в response.
//     */
//     callback: (err, response) => {
//       console.log( 'Ошибка, если есть', err );
//       console.log( 'Данные, если нет ошибки', response );
//     }
//   });

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open(options.method, options.url);


};

asdf