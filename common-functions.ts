interface User {
    id: number;
    name: string;
    email: string;
}

// Returns a greeting message for the provided name.
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Combines first and last names into one full name string.
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// Checks whether the age is 18 or older.
function isAdult(userAge: number): boolean {
    return userAge >= 18;
}

// Calculates the sum of all provided numbers.
function sumNumbers(...values: number[]): number {
    return values.reduce((total, value) => total + value, 0);
}

// Calculates the average value of provided numbers.
function average(...values: number[]): number {
    if (values.length === 0) {
        return 0;
    }

    return sumNumbers(...values) / values.length;
}

// Returns the first element of an array, if it exists.
function getFirstElement<T>(items: T[]): T | undefined {
    return items[0];
}

// Converts every string in the array to uppercase.
function mapToUpperCase(items: string[]): string[] {
    return items.map((item) => item.toUpperCase());
}

// Joins an array of strings into one string.
function joinStrings(items: string[], separator: string = ' '): string {
    return items.join(separator);
}

// Merges two objects into a single object.
function mergeObjects<T extends object, U extends object>(first: T, second: U): T & U {
    return { ...first, ...second };
}

// Keeps only positive numbers from the input array.
function filterPositiveNumbers(items: number[]): number[] {
    return items.filter((item) => item > 0);
}

// Finds a user by id in the users array.
function findUserById(users: User[], id: number): User | undefined {
    return users.find((user) => user.id === id);
}

// Simulates async fetch and returns a user name.
async function fetchUserName(): Promise<string> {
    return Promise.resolve('John');
}

