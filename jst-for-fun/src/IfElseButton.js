import React from "react";

function ifElseTests() {
    main: while (true) {
        var ex = prompt("На выбор 1-11 задачи, для выхода 0", "0");
        switch (ex) {
            // EX1
            case "1":
                var ex1 = prompt("Какое «официальное» название JavaScript?");
                if (ex1 === "ECMAScript") {
                    alert("Верно!");
                } else alert("Не знаете? ECMAScript!");
                break;
            // EX2
            case "2":
                var ex2 = prompt("Напишите число больше, меньше, либо равное 0", "0");
                if (ex2[0] === "-" && ex2 < 0) alert(`Число ${ex2} меньше чем 0`);
                else if (+ex2 > 0) alert(`Число ${+ex2} больше чем 0`);
                else if (+ex2 === 0) alert("Число ваше число 0");
                else alert(`${ex2} это не число`);
                break;
            // EX3
            case "3":
                var ex3a = prompt("a + b < 100 - Задайте a и b | a =", "0");
                var ex3b = prompt("a + b < 100 - Задайте a и b | b =", "0");
                var result =
                    (ex3a && ex3b) === Number
                        ? ex3a + ex3b >= 100
                        ? ex3a + ex3b === 100
                            ? "Не верно"
                            : "Не верно"
                        : "Верно"
                        : "Введи только положительные числа";
                alert(result);
                break;
            // EX4
            case "4":
                var ex4 = prompt("Введите логин: Сотрудник или Директор");
                var message =
                    ex4 === "Сотрудник"
                        ? "Привет"
                        : ex4 === "Директор"
                        ? "Здравствуйте"
                        : ex4 === ""
                            ? "Нет Логина"
                            : "Не верно, вы директор, или Сотрудник?";
                alert(message);
                break;
            // EX5
            case "5":
                var ex5 = prompt(
                    "Введите возраст и узнайте в каком вы диапазоне между 22 и 90"
                );
                if (ex5 <= 90 && ex5 >= 22)
                    alert("Ты находишься в диапазоне от 22 до 90");
                else if (ex5 < 22) alert("Ты находишься в диапазоне меньше 22");
                else if (ex5 > 90) alert("Ты находишься в диапазоне больше 90");
                else alert("Нужно число");
                break;
            // EX6
            case "6":
                var ex6 = prompt("Введите имя пользователя (подсказка: Админ)");
                if (ex6 === "Админ") {
                    var ex6one = prompt("Пароль Админа (подсказка: 123)");
                    if (ex6one === "123") alert("Здравствуйте");
                    else if (!ex6one) alert("Отменено");
                    else alert("Неверный пароль");
                } else if (!ex6) alert("Отменено");
                else alert("Неверное имя пользователя");
                break;
            // EX7
            case "7":
                for (; ;) {
                    var ex7 = prompt("Введите число больше 100");
                    if (+ex7 > 100) {
                        alert("Наканецто!");
                        break;
                    } else if (!ex7) {
                        alert("Ок пока");
                        break;
                    }
                }
                break;
            case "8":
                let ex8 = prompt("Вам больше или меньше 18? (Больше - Меньше)");
                // let x = ex8 === "Больше" ? "Ок" : ex8 === "Меньше" ? "Не ок" : "Ввод не верен";
                if (ex8 === "Больше") alert("Ок");
                else if (ex8 === "Меньше") alert("Не Ок");
                else alert("Ввод не верен");
                // alert(x);
                break;
            // EX9
            case "9":
                let ex9 = (question, yes, no) => {
                    return window.confirm(question) ? yes() : no();
                };
                ex9(
                    "Вы согласны?",
                    () => alert("Вы согласились"),
                    () => alert("Вы отменили выполнение.")
                );
                break;
            // EX10
            case "10":
                let ex10a = +prompt("Введите первое число", "0");
                let ex10b = +prompt("Введите второе чило", "0");
                alert(ex10a + ex10b);
                break;
            // EX11
            case "11":
                let ex11;
                do {
                    ex11 = prompt("Вводеите только цифры бесконечно", "0");
                } while (isFinite(ex11));
                break;
            // EXIT
            case "0":
                break main;
            // ELSE
            default:
                ex = prompt("Сделай выбор 1-11 для выхода 0", "0");
        }
    }
}

function IfElseButton() {
    return (
        <div className="IfElseButton">
            <button className="btn" onClick={() => ifElseTests()}>
                Train If Else
            </button>
        </div>
    );
}

export default IfElseButton;
