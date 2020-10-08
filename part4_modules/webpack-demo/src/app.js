import 
    message, 
    { API, fibo_async_await } 
from './lib/utils';

import './style.scss';

console.log(API)

console.log(message());

fibo_async_await(100).then( res => console.log(res));

console.log("hello world!");

console.log("hello !!!!")