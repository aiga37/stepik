/**
 * Примеры классов в TypeScript:
 * модификаторы доступа, наследование, абстрактные классы, интерфейсы.
 * Запуск: из корня проекта `node examples/classes.ts` (если настроен TS в Node)
 * или через компиляцию в JS.
 */

// --- Банковский счёт: public / private / protected ---

class BankAccount {
    /** Виден снаружи: account.owner */
    owner: string;
    /** Только внутри этого класса */
    private balance: number;
    /** Внутри класса и в наследниках (снаружи — нет) */
    protected accountNumber: string;

    constructor(owner: string, balance: number, accountNumber: string) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    /** Снаружи баланс читают через метод, а не через поле */
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount('Иван', 5000, 'ACC123');
console.log(account.getBalance());

// --- Транспорт: простое наследование (extends) ---

class Vehicle {
    drive() {
        return console.log('Транспорт движется');
    }
}

/** Car наследует методы и поля Vehicle, может добавлять свои */
class Car extends Vehicle {
    honk() {
        return console.log('Сигнал!');
    }
}

const car = new Car();
car.drive();
car.honk();

// --- Фигуры: абстрактный класс и обязательная реализация ---

/** Нельзя сделать `new Shape()` — только наследники с конкретной логикой */
abstract class Shape {
    /** Каждый наследник обязан реализовать этот метод */
    abstract calculateArea(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super(); // вызов конструктора родителя (обязателен в наследнике до `this`)
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea());

// --- Интерфейс: контракт «умеет летать» (implements) ---

/** Описывает только форму: какие методы должны быть, без реализации */
interface Flyable {
    fly(): void;
}

/** Класс обещает TypeScript соблюдать контракт Flyable */
class Airplane implements Flyable {
    fly(): void {
        console.log('Самолёт летит');
    }
}

const plane = new Airplane();
plane.fly();

/** Файл как ES-модуль: имена не пересекаются с другими .ts в корне без import/export */
export {};
