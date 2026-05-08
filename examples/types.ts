let username: string = 'John';
let age: number = 25;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b', 'c'];

interface User {
    id: number;
    name: string;
    email: string;
}

let point: [number, number, number, string] = [10, 20, 30, 'origin'];

enum OrderStatus {
    Pending,
    Shipped,
    Delivered
}

type Id = string | number;