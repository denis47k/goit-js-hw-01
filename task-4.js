const credits = 23580;
const pricePerDroid = 3000;
const order = prompt('Какое количество дроидов Вы хотите купить?');
const totalPrice = pricePerDroid * Number(order);
const balance = credits - totalPrice;
let message = 'Отменено пользователем!';

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice <= credits && order >= 1) {
  message = `Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`;
} else {
  message = 'Отменено пользователем!';
}
console.log(message);
