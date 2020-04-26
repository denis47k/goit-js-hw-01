const ADMIN_PASSWORD = 'jqueryismyjam';
const userPassword = prompt('Введите пароль!');
let message = 'Доступ запрещен, неверный пароль!';

if (ADMIN_PASSWORD === userPassword) {
  message = 'Добро пожаловать!';
} else if (userPassword === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
