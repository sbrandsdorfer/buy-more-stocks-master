const companies = [
    {
        name: "JP Morgan Chase",
        price: 117.20,
        amount: 4
    },
    {
        name: "Deutsche Bank",
        price: 8.66,
        amount: 3
    },
    {
        name: "Fidelity",
        price: 36.78,
        amount: 10
    },
    {
        name: "Citi Bank",
        price: 43.38,
        amount: 7
    },
    {
        name: "MasterCard",
        price: 297.77,
        amount: 1
    },
    {
        name: "Goldman Sachs",
        price: 311.65,
        amount: 2
    },
    {
        name: "Bank of America",
        price: 43.30,
        amount: 8
    },
    {
        name: "American Express",
        price: 134.70,
        amount: 6
    }
]


window.onload = function(){
    createTable();
    writeMarketStatus();
};

function createTable() {

    let tableData = "";

    for (let i = 0; i < companies.length; i++) {

        totalPrice = (companies[i].price * companies[i].amount).toFixed(2);

        tableData += `<tr id ="${i}">
        <td>${companies[i].name}</td>
        <td>$${companies[i].price}</td>
        <td>${companies[i].amount}</td>
        <td>$${totalPrice}</td>
        <td><button class = "add" onclick = "buyMore(${i})">buy more</button></td>
        <td><button class ="remove" onclick = "removeRecord(${i})">remove</button></td>
        </tr>`;
    }
    document.getElementById("table-data").innerHTML = tableData;

}

function updateRecord(index) {

    totalPrice = (companies[index].price * companies[index].amount).toFixed(2);

    document.getElementById(index).innerHTML =
        `   <td>${companies[index].name}</td>
        <td>$${companies[index].price}</td>
        <td>${companies[index].amount}</td>
        <td>$${totalPrice}</td>
        <td><button class = "add" onclick = "buyMore(${index})">buy more</button></td>
        <td><button class = "remove" onclick = "removeRecord(${index})">remove</button></td>`;
}

function buyMore(index) {

    amountToBuy = prompt(`How many stocks of ${companies[index].name} do you want to buy?`);

    amountToBuy = Number(amountToBuy);

    if (isNaN(amountToBuy) || amountToBuy <= 0 || amountToBuy > 100) {
        alert("invalid input")
        throw "INVALID_INPUT"
    } else {

        companies[index].amount += amountToBuy;

        updateRecord(index);
    }
}

function removeRecord(x) {
    companies.splice(x, 1);
    createTable();
}

/**
 * @reutrns {Boolean}
 */
function isMarketsOpen() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours += minutes / 60;
    return hours >= 9.5 && hours <= 16;
}


function writeMarketStatus(){
    let marketStatus = isMarketsOpen() ? `Markets are now open.` : `Markets are closed`;
    document.getElementById('market-status').innerHTML = marketStatus;
}




setInterval(function (){
    let now = new Date().toLocaleString();
    document.getElementById('date').innerHTML = now;
}, 1000);

/**
 * 
 * @param {Array} arr 
 * @param {Function} cb 
 */
function for_each(arr, cb){
    for(let element of arr){
        cb(element);
    }
}

var myArr = [1,2,3,4,5];
var cb = (el) => {
    console.log(el);
}

for_each(myArr, cb);