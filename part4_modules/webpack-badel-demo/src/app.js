import './sass/app.scss';
import message, { API, fibo_async_await } from './utils/core';

console.log(`API KEY : ${API} ...`);
console.log(`Message : ${message()} ...`);

const main = document.getElementById('main');

fibo_async_await(100).then(res => {

    main.innerHTML = `Fibonacci ${1000} : ${res}`;

});