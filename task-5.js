const message = prompt('В какую страну оформить доставку?').toLowerCase();
const priceList = [100, 250, 170, 80, 120];

switch (message) {
  case 'китай':
    console.log(`Доставка в Китай будет стоить ${priceList[0]} кредитов`);
    break;
  case 'чили':
    console.log(`Доставка в Чили будет стоить ${priceList[1]} кредитов`);
    break;
  case 'австралия':
    console.log(`Доставка в Австралию будет стоить ${priceList[2]} кредитов`);
    break;
  case 'индия':
    console.log(`Доставка в Индию будет стоить ${priceList[3]} кредитов`);
    break;
  case 'ямайка':
    console.log(`Доставка в Австралию будет стоить ${priceList[4]} кредитов`);
    break;
  default:
    console.log('В вашей стране доставка не доступна');
}
