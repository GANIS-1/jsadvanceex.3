import getUserInput from "./mdules.js";
import { Calculator, convertToJson, saveToLocalStorage, getFromLocalStorage, isPositive, operateOnNumbers, fetchData } from "./mdules.js"


document.addEventListener("DOMContentLoaded", async () => {
    const tableHeader = document.getElementById('apiDataTable').querySelector('thead');
    tableHeader.style.display = 'none';

    
  
    const number = getUserInput();
    
   
    const isPositiveNumber = isPositive(number);

   
    const resultAddition = Calculator.add(5, 3);
    const resultSubtraction = Calculator.subtract(10, 7);

   
    const jsonData = { key: "value" };
    const jsonString = convertToJson(jsonData);


    saveToLocalStorage("savedData", jsonString);
    const retrievedData = getFromLocalStorage("savedData");

   
    const sum = operateOnNumbers(4, 6, (a, b) => a + b);
    const difference = operateOnNumbers(8, 3, (a, b) => a - b);

  
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    const fetchedData = await fetchData(apiUrl);

    
    console.log("User Input:", number);
    console.log("Is Positive Number:", isPositiveNumber);
    console.log("Result Addition:", resultAddition);
    console.log("Result Subtraction:", resultSubtraction);
    console.log("JSON String:", jsonString);
    console.log("Retrieved Data from Local Storage:", retrievedData);
    console.log("Sum:", sum);
    console.log("Difference:", difference);
    
    

    document.getElementById('btnLoad').addEventListener('click', async () => {
        tableHeader.style.display = '';
        
        const fetchedData = await fetchData(apiUrl);
        displayData(fetchedData);
    });

    document.getElementById('btnClear').addEventListener('click', () => {
        clearData();
    });

    function displayData(data) {
        const container = document.getElementById('apiDataContainer');
        container.innerHTML = ""; 
        data.forEach(item => {
            const row = document.createElement('tr');
            
            
        const table = document.createElement("table");

       
        const headerRow = table.insertRow();
        headerRow.innerHTML = `
            <th>User ID</th>
            <th>Task ID</th>
            <th>Title</th>
            <th>Status</th>
            `;

            
            const color = item.completed ? 'green' : 'red';
            row.innerHTML = `
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td style="color: ${color};">${item.completed ? 'Completed'  : 'Not yet Completed'}</td>
        `;
        container.appendChild(row);
        });
    }

    function clearData() {
        const container = document.getElementById('apiDataContainer');
        container.innerHTML = ""; 

        tableHeader.style.display = 'none';
    }
});