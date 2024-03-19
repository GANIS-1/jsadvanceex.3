
export default function getUserInput() {
    const userInput = prompt("Enter a number:");
    return userInput ? parseInt(userInput) : null;
};


export class Calculator {
    static add = (a, b) => a + b;
    static subtract = (a, b) => a - b;
}


export const convertToJson = (data) => JSON.stringify(data);


export const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);
export const getFromLocalStorage = (key) => localStorage.getItem(key);


export const isPositive = (number) => (number > 0) ? true : false;


export const operateOnNumbers = (a, b, operation) => operation(a, b);


export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};