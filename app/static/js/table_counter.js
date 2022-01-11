//Set row count
let rowCount = 1;

// Array of weekdays
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", 
"Fri", "Sat"];
// Capture today
const today = new Date();
//Function to add days to a date object (like today)
function addDays(date, days){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().substring(0,10);
}

// Select the btns
const new_row_btn = document.getElementById("newRow");
const remove_row_btn = document.getElementById("removeRow");

// Select the table
const table = document.getElementById("weekdayTable");

function addRow(table) {
    // Add new empty tr element
    const row = table.insertRow(rowCount);
    // Insert new cells
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    //Create inputs for cells
    const weekDay = document.createElement("p");
    let addDay = today.getDay()
    if (rowCount%7 > 0){
        addDay += rowCount%7
    }
    const newDay = document.createTextNode(weekdays[addDay]);
    weekDay.appendChild(newDay);
    
    addDate = addDays(today, rowCount)

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("class", "date");
    inputDate.setAttribute("value", addDate);
    inputDate.setAttribute("id", "date_" + (rowCount + 1));
    
    const inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("class", "dish");
    inputDate.setAttribute("id", "dish_" + (rowCount + 1));

    // Add inputs to the cells
    cell1.appendChild(weekDay);
    cell2.appendChild(inputDate);
    cell3.appendChild(inputText);

    // increase row count
    rowCount += 1;
}

function removeRow(table) {
    if (rowCount > 1) {
        rowCount -= 1
        const row = table.deleteRow(rowCount)
    }
}

new_row_btn.addEventListener("click", function(){
    addRow(table)
})


remove_row_btn.addEventListener("click", function(){
    removeRow(table)
})