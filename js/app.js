'use strict'

/*let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

let seatle= {
    name:'seatle',
    minCust:23,
    maxCust:65,
    avgCookies:6.3,
    randomCustomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer: function(){ for (let i=0;i<hours.length;i++){
        this.randomCustomerPerHour.push(RandomNumber(this.minCust,this.maxCust)) 
    }
     
    
    },
    avgCookiesNumber: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.randomCustomerPerHour[i]))
        }
    }

}

seatle.randomCustomer();

//console.log(seatle.randomCustomerPerHour)

seatle.avgCookiesNumber();

//console.log(seatle.avgCookiesPerHour)

function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) ) + minCust;}


    let total=0
    for(let i=0;i<hours.length;i++){

        total=total+seatle.avgCookiesPerHour[i]
    }
//console.log(total)

let parentSeatle= document.getElementById('seatle')
let h2Eelemnt= document.createElement('h2')
parentSeatle.appendChild(h2Eelemnt)
h2Eelemnt.textContent=seatle.name

let ulElement=document.createElement('ul')
parentSeatle.appendChild(ulElement)

for(let i=0;i<hours.length;i++){
    let liElement=document.createElement('li')
    parentSeatle.appendChild(liElement)
    liElement.textContent=`${hours[i]}: ${seatle.avgCookiesPerHour[i]} cookies`
}

let ParagraphElement=document.createElement('li')
parentSeatle.appendChild(ParagraphElement)
ParagraphElement.textContent=`total: ${total} cookies`










let Tokyo= {
    name:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookies:1.2,
    randomCustomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer: function(){ for (let i=0;i<hours.length;i++){
        this.randomCustomerPerHour.push(RandomNumber(this.minCust,this.maxCust)) 
    }
     
    
    },
    avgCookiesNumber: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.randomCustomerPerHour[i]))
        }
    }

}

Tokyo.randomCustomer();

//console.log(seatle.randomCustomerPerHour)

Tokyo.avgCookiesNumber();

//console.log(seatle.avgCookiesPerHour)

function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) ) + minCust;}


    let total1=0
    for(let i=0;i<hours.length;i++){

        total1=total1+Tokyo.avgCookiesPerHour[i]
    }
//console.log(total)

let parentTokyo= document.getElementById('seatle')
let h2Eelemnt1= document.createElement('h2')
parentTokyo.appendChild(h2Eelemnt1)
h2Eelemnt1.textContent=Tokyo.name

let ulElement1=document.createElement('ul')
parentTokyo.appendChild(ulElement1)

for(let i=0;i<hours.length;i++){
    let liElement1=document.createElement('li')
    parentTokyo.appendChild(liElement1)
    liElement1.textContent=`${hours[i]}: ${Tokyo.avgCookiesPerHour[i]} cookies`
}

let ParagraphElement1=document.createElement('li')
parentTokyo.appendChild(ParagraphElement1)
ParagraphElement1.textContent=`total: ${total1} cookies`








let Dubai= {
    name:'dubai',
    minCust:11,
    maxCust:38,
    avgCookies:3.7,
    randomCustomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer: function(){ for (let i=0;i<hours.length;i++){
        this.randomCustomerPerHour.push(RandomNumber(this.minCust,this.maxCust)) 
    }
     
    
    },
    avgCookiesNumber: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.randomCustomerPerHour[i]))
        }
    }

}

Dubai.randomCustomer();

//console.log(seatle.randomCustomerPerHour)

Dubai.avgCookiesNumber();

//console.log(seatle.avgCookiesPerHour)

function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) ) + minCust;}


    let total2=0
    for(let i=0;i<hours.length;i++){

        total2=total2+Dubai.avgCookiesPerHour[i]
    }
//console.log(total)

let parentDubai= document.getElementById('seatle')
let h2Eelemnt2= document.createElement('h2')
parentDubai.appendChild(h2Eelemnt2)
h2Eelemnt2.textContent=Dubai.name

let ulElement2=document.createElement('ul')
parentDubai.appendChild(ulElement2)

for(let i=0;i<hours.length;i++){
    let liElement2=document.createElement('li')
    parentDubai.appendChild(liElement2)
    liElement2.textContent=`${hours[i]}: ${Dubai.avgCookiesPerHour[i]} cookies`
}

let ParagraphElement2=document.createElement('li')
parentDubai.appendChild(ParagraphElement2)
ParagraphElement2.textContent=`total: ${total2} cookies`






let Paris= {
    name:'paris',
    minCust:20,
    maxCust:38,
    avgCookies:2.3,
    randomCustomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer: function(){ for (let i=0;i<hours.length;i++){
        this.randomCustomerPerHour.push(RandomNumber(this.minCust,this.maxCust)) 
    }
     
    
    },
    avgCookiesNumber: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.randomCustomerPerHour[i]))
        }
    }

}

Paris.randomCustomer();

//console.log(seatle.randomCustomerPerHour)

Paris.avgCookiesNumber();

//console.log(seatle.avgCookiesPerHour)

function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) ) + minCust;}


    let total3=0
    for(let i=0;i<hours.length;i++){

        total3=total3+Paris.avgCookiesPerHour[i]
    }
//console.log(total)

let parentParis= document.getElementById('seatle')
let h2Eelemnt3= document.createElement('h2')
parentParis.appendChild(h2Eelemnt3)
h2Eelemnt3.textContent=Paris.name

let ulElement3=document.createElement('ul')
parentParis.appendChild(ulElement3)

for(let i=0;i<hours.length;i++){
    let liElement3=document.createElement('li')
    parentParis.appendChild(liElement3)
    liElement3.textContent=`${hours[i]}: ${Paris.avgCookiesPerHour[i]} cookies`
}

let ParagraphElement3=document.createElement('li')
parentParis.appendChild(ParagraphElement3)
ParagraphElement3.textContent=`total: ${total3} cookies`












let Lima= {
    name:'Lima',
    minCust:2,
    maxCust:16,
    avgCookies:4.6,
    randomCustomerPerHour:[],
    avgCookiesPerHour:[],
    randomCustomer: function(){ for (let i=0;i<hours.length;i++){
        this.randomCustomerPerHour.push(RandomNumber(this.minCust,this.maxCust)) 
    }
     
    
    },
    avgCookiesNumber: function(){
        for(let i=0;i<hours.length;i++){
            this.avgCookiesPerHour.push(Math.floor(this.avgCookies*this.randomCustomerPerHour[i]))
        }
    }

}

Lima.randomCustomer();

//console.log(seatle.randomCustomerPerHour)

Lima.avgCookiesNumber();

//console.log(seatle.avgCookiesPerHour)

function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) ) + minCust;}


    let total4=0
    for(let i=0;i<hours.length;i++){

        total4=total4+Lima.avgCookiesPerHour[i]
    }
//console.log(total)

let parentLima= document.getElementById('seatle')
let h2Eelemnt4= document.createElement('h2')
parentLima.appendChild(h2Eelemnt4)
h2Eelemnt4.textContent=Lima.name

let ulElement4=document.createElement('ul')
parentLima.appendChild(ulElement4)

for(let i=0;i<hours.length;i++){
    let liElement4=document.createElement('li')
    parentLima.appendChild(liElement4)
    liElement4.textContent=`${hours[i]}: ${Lima.avgCookiesPerHour[i]} cookies`
}

let ParagraphElement4=document.createElement('li')
parentLima.appendChild(ParagraphElement4)
ParagraphElement4.textContent=`total: ${total4} cookies` */







let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
let cityBranch = []
function CityBranch(name, minCust, maxCust, avgCookies,) {
    this.name = name
    this.minCust = minCust
    this.maxCust = maxCust
    this.avgCookies = avgCookies
    this.randomCustomerPerhour = []
    this.avgCookiesPerHour = []
    this.totalCookiesPerhour = []
    this.total1 = 0
    this.grandTotal = 0

    cityBranch.push(this)
}

let Seattle = new CityBranch('Seattle', 23, 65, 6.3)
let Tokyo = new CityBranch('Tokyo', 3, 24, 1.2)
let Dubai = new CityBranch('Dubai', 11, 38, 3.7)
let Paris = new CityBranch('Paris', 20, 38, 2.3)
let Lima = new CityBranch('Lima', 2, 16, 4.6)





function RandomNumber(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}


CityBranch.prototype.getRandomCustomerPerhour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.randomCustomerPerhour.push(RandomNumber(this.minCust, this.maxCust))

    }


}

Seattle.getRandomCustomerPerhour()
Tokyo.getRandomCustomerPerhour()
Dubai.getRandomCustomerPerhour()
Paris.getRandomCustomerPerhour()
Lima.getRandomCustomerPerhour()





CityBranch.prototype.getAvgCookiesPerhour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerHour.push(Math.floor(this.randomCustomerPerhour[i] * this.avgCookies))
    }

}
Seattle.getAvgCookiesPerhour()
Tokyo.getAvgCookiesPerhour()
Dubai.getAvgCookiesPerhour()
Paris.getAvgCookiesPerhour()
Lima.getAvgCookiesPerhour()


CityBranch.prototype.CalculateTotal1 = function () {
    for (let i = 0; i < hours.length; i++) {

        this.total1 = this.total1 + this.avgCookiesPerHour[i]
    }

}

Seattle.CalculateTotal1()
Tokyo.CalculateTotal1()
Dubai.CalculateTotal1()
Paris.CalculateTotal1()
Lima.CalculateTotal1()


CityBranch.prototype.GettotalCookiesPerhour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.totalCookiesPerhour.push(Seattle.avgCookiesPerHour[i] + Tokyo.avgCookiesPerHour[i] + Dubai.avgCookiesPerHour[i] + Paris.avgCookiesPerHour[i] + Lima.avgCookiesPerHour[i])
    }
}

Seattle.GettotalCookiesPerhour()
//Tokyo.GettotalCookiesPerhour()



CityBranch.prototype.GetGrandtotal = function () {
    for (let i = 0; i < hours.length; i++) {
        this.grandTotal = this.grandTotal + this.totalCookiesPerhour[i]
    }
}

Seattle.GetGrandtotal()
//Tokyo.GetGrandtotal()


let parent = document.getElementById('seatle')

let table = document.createElement('table')

parent.appendChild(table)

let headingRow = document.createElement('tr')

table.appendChild(headingRow)

let thElement = document.createElement('th');


headingRow.appendChild(thElement);

thElement.textContent = 'Name';


for (let i = 0; i < hours.length; i++) {


    let thElement1 = document.createElement('th');


    headingRow.appendChild(thElement1);


    thElement1.textContent = hours[i];

}
let thElement2 = document.createElement('th');


headingRow.appendChild(thElement2);

thElement2.textContent = 'Daily Location Total';


CityBranch.prototype.render = function () {

    let headingRow2 = document.createElement('tr')

    table.appendChild(headingRow2)

    let thElement2 = document.createElement('th');


    headingRow2.appendChild(thElement2);

    thElement2.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let thElement3 = document.createElement('td');


        headingRow2.appendChild(thElement3);

        thElement3.textContent = this.avgCookiesPerHour[i];

    }

    let thElement3 = document.createElement('th');


    headingRow2.appendChild(thElement3);

    thElement3.textContent = this.total1;





}

Seattle.render()
Tokyo.render()
Dubai.render()
Paris.render()
Lima.render()



let headingRow3 = document.createElement('tr')

table.appendChild(headingRow3)

let thElement4 = document.createElement('th');


headingRow3.appendChild(thElement4);

thElement4.textContent = 'Totals';


console.log(Seattle.grandTotal)
console.log(Tokyo.grandTotal)

for (let i = 0; i < hours.length; i++) {


    let thElement5 = document.createElement('th');


    headingRow3.appendChild(thElement5);


    thElement5.textContent = Seattle.totalCookiesPerhour[i];

}
let thElement6 = document.createElement('th');


headingRow3.appendChild(thElement6);

thElement6.textContent = Seattle.grandTotal;




















