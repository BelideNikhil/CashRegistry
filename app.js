console.log("it's working")
const clear=document.querySelector("#clear")

let two_thousand=document.querySelector("#twothousand")
let five_hundred=document.querySelector("#fivehundred")
let hundredd=document.querySelector("#hundred")
let tenn=document.querySelector("#ten")
let fivee=document.querySelector("#five")
let onee=document.querySelector("#one")

const whole_data=document.querySelector(".whole_data")
const output_div=document.querySelector(".output")

const Notes=[two_thousand,five_hundred,hundredd,tenn,fivee,onee]
const notes_num= [2000, 500, 100, 10, 5, 1]


calculate.addEventListener("click",()=>{
    output_div.style.display="block";
    let bill_amount=document.querySelector("#bill")
    let paid_amount=document.querySelector("#paid")
    const calculate=document.querySelector("#calculate")
    const return_amount=document.querySelector("#change")

    paid_amount=Number(paid_amount.value)
    bill_amount=Number(bill_amount.value)
    change.innerHTML=`Please return <i class="fas fa-rupee-sign"></i>  ${paid_amount-bill_amount} to the customer.`
    change.style.color='green';
    returnable=paid_amount-bill_amount
    if( bill_amount===0 || paid_amount===0 || returnable<0 ){
        errorhandler();
    }
    else{
        handler();
    }  
})

function handler(){
    whole_data.style.display="block";
    for(let i=0;i<notes_num.length;i++){
        Notes[i].innerHTML=Math.floor(returnable/notes_num[i])
        newRemainder=(returnable%notes_num[i]);
        returnable=newRemainder;
    }
}
function errorhandler(){
    change.innerHTML="Please enter valid data";
    change.style.color="pink";
    whole_data.style.display="none";
    output_div.style.display="block";

    setTimeout(()=>{
        change.innerHTML=""
        change.style.color="white";
        output_div.style.display="none";
    },2500)
}
clear.addEventListener("click",()=>{
    window.location.reload()
})