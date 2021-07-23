console.log("it's working")
const calculate=document.querySelector("#calculate")
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
    calculate.innerHTML=`Next <i class="fas fa-angle-double-right"></i>`;
    let bill_amount=document.querySelector("#bill")
    let paid_amount=document.querySelector("#paid")

    paid_amount.style.display="none";
    
    const change=document.querySelector("#change")
    bill_amount=Number(bill_amount.value)
    if( bill_amount===0 ){
        errorhandler();
    }
    else{
        paid_amount.style.display="block";
        paid_amount=Number(paid_amount.value)
        calculate.innerHTML=`Calculate <i class="fas fa-angle-double-right"></i>`;
        if( paid_amount!=0){
            returnable=paid_amount-bill_amount;
            if(returnable<0){
                whole_data.style.display="none";
                change.innerHTML=`Please take <i class="fas fa-rupee-sign"></i>  ${Math.abs(paid_amount-bill_amount)} more from  the customer.`
                change.style.color='pink';
            }
            else if(returnable===0){
                whole_data.style.display="none";
                change.innerHTML=`Thank the customer and give him the Bill.`
                change.style.color='wheat';
            }
            else{
                handler();
                change.innerHTML=`Please return <i class="fas fa-rupee-sign"></i>  ${paid_amount-bill_amount} to the customer.`
                change.style.color='#50cf50';
            }
        }else{
            change.innerHTML="Please enter the amount given by customer to print the Bill."
            change.style.color="#50cf50"
        }
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
        output_div.style.display="none";
    },3000)
}
clear.addEventListener("click",()=>{
    window.location.reload()
})