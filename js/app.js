'use strict'

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

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
ParagraphElement4.textContent=`total: ${total4} cookies`












