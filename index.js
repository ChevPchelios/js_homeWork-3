
// Задание к 19.10.2024

// Задача 0. Сделайте функцию, которая принимает параметром номер месяца, и 
// возвращает название этого месяца (Добавить обработку варинта если такого месяца нет)

function backNameOfMonthFromNumber(num) {
    if (!Number(num)) return 'Недопустимый ввод. Введите число';

    switch (Math.round(num)) {
        case 1:
        return 'Январь';
        case 2:
        return 'Февраль';
        case 3:
        return 'Март';
        case 4:
        return 'Апрель';
        case 5:
        return 'Май';
        case 6:
        return 'Июнь';
        case 7:
        return 'Июль';
        case 8:
        return 'Август';
        case 9:
        return 'Сентябрь';
        case 10:
        return 'Октябрь';
        case 11:
        return 'Ноябрь';
        case 12:
        return 'Декабрь';
        default:
        return 'Нет такого месяца. Введите число от 1 до 12';
    }
}
backNameOfMonthFromNumber(2);

//Задача 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function backNameDayOfWeekFromNumber(num) {
    if (!Number(num)) return 'Недопустимый ввод. Введите число';

    switch (Math.round(num)) {
        case 1:
        return 'Понедельник';
        case 2:
        return 'Вторник';
        case 3:
        return 'Среда';
        case 4:
        return 'Четверг';
        case 5:
        return 'Пятница! Йу-хууу!';
        case 6:
        return 'Суббоооота))))';
        case 7:
        return 'Воскресенье(С привкусом грусти, т.к завтра на работу =( )';
    }
}   
backNameDayOfWeekFromNumber (5);

// Задача 2. Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

function backEachFirstWordFromText(text) {
    let initialArray = text.toLowerCase().split('.'), bufferArray = [], resultArray = [];
    
    for (let i = 0; i < initialArray.length - 1; i++) {
        bufferArray = initialArray[i].split(' ');

        if (i === 0) {
            resultArray.push(bufferArray[0]);
        } else if (i > 0) {
            bufferArray.shift();
            resultArray.push(bufferArray[0]);
        }
    }
    return resultArray.join(',');
}

backEachFirstWordFromText('Это текст для данного задания. Задание содержит элементы материала, который мы ещё не прошли. Сделано оно всё равно будет.');



//Задача 3. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

function sayHiToUserDependingOnTime(user) {
    let time = new Date().getHours();
    
    if (time > 6 && time < 12) { 
        return `Сейчас ${time} ч. Доброе утро, ${user}!`;

    } else if (time > 12 && time < 18) {
        return `Сейчас ${time} ч. Добрый день, ${user}!`;

    } else if (time > 18 && time < 23) {
        return `Сейчас ${time} ч. Добрый вечер, ${user}!`;

    } else {
        return `Сейчас ${time} ч. Доброй ночи, ${user}!`;
    }
}

sayHiToUserDependingOnTime('Александр');


// Задача 4. Вывести числа от 1 до 100 в столбец. 
// К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый.

function backColumnOfAge(age) {
    
    for(let i = 1; i <= 100; i++) {
        
        if (i <= 17) {
            console.log(i + '-' + 'ребенок');

        } else if (i >= 18 && i <= 30) {
            console.log(i + '-' + 'молодой');

        } else if (i >= 31 && i <= 55) {
            console.log(i + '-' + 'зрелый');

        } else {
            console.log(i + '-' + 'старый');
        }
    }
}

backColumnOfAge();

// Задача 5. Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый).

function backUserAgeClassification(user, age) {
    if (!Number(age)) {
        return 'Недопустимый ввод. Введите число';
    }
    if (age <= 17) return `${user} имеет возраст ${age} лет и он ребенок`;
    if (age >= 18 && age <= 30) return `${user} имеет возраст ${age} лет и он молодой`;
    if (age >= 31 && age <= 55) return `${user} имеет возраст ${age} лет и он зрелый`;
    if (age >= 56 && age <= 122) return `${user} имеет возраст ${age} лет и он старый`;
    if (age > 123) return `${user} имеет возраст ${age} лет и он, вероятно, мертв`;
}
backUserAgeClassification('Александр', '150');

// Задача 6. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
// которое функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function getFizzBuzzNumbers(num) {
    num = Number(num);
    if (num <= 1) return 'Ошибка ввода'

    for(let i = 1; i <= num; i++) {
        
        if (i % 3 === 0) {
            console.log('fizz');
            continue;

        } else if (i % 5 === 0) {
            console.log('buzz');
            continue;

        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
            continue;
        }
        console.log (i);
    }
}
getFizzBuzzNumbers('21');