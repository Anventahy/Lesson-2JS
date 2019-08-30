'use strict';

let money, time, appData;
money = +prompt('Ваш бюджет на месяц? ', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    
    // проверка на введенный тип
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && !isNaN(b) && (typeof(b)) != '' && a != '' &&  b != '' && a.length < 50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

// let z = 0;
// while(z < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' &&  b != '' && a.length < 50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
    // z--;
//     }
//     z++;
// };

// let x = 0;
// do {
//     x++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = +prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && a != '' &&  b != '' && a.length < 50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
    // x--;
//     }
// }while(x < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ваш бюджет на день составляет: ' + appData.moneyPerDay + ' рублей');
console.log('appData: ', appData);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}