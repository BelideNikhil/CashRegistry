console.log("it's working")

var bill_amount=document.querySelector("#bill")
var paid_amount=document.querySelector("#paid")
var btn=document.querySelector("#btn")
var change=document.querySelector("#change")

var clear=document.querySelector("#clear")

var newRemainder;

var two_thousand=document.querySelector("#twothousand")
var five_hundred=document.querySelector("#fivehundred")
var hundredd=document.querySelector("#hundred")
var tenn=document.querySelector("#ten")
var fivee=document.querySelector("#five")
var onee=document.querySelector("#one")

var Notes=[two_thousand,five_hundred,hundredd,tenn,fivee,onee]
var notes_num= [2000, 500, 100, 10, 5, 1]

btn.addEventListener("click",()=>{
    paid_amount=Number(paid_amount.value)
    bill_amount=Number(bill_amount.value)
    change.innerHTML=paid_amount-bill_amount
    var returnable=change.innerHTML
    if(returnable<0){
        change.innerHTML="Paid amount is less that bill amount"
    }
    else{
        for(let i=0;i<notes_num.length;i++){
            Notes[i].innerHTML=Math.floor(returnable/notes_num[i])
            newRemainder=(returnable%notes_num[i]);
            returnable=newRemainder;
        }
    }  
})

clear.addEventListener("click",()=>{
    window.location.reload()
})