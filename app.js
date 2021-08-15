console.log("it's working")
const calculate=document.querySelector("#calculate")
const clear=document.querySelector("#clear")

let two_thousand=document.querySelector("#twothousand")
let five_hundred=document.querySelector("#fivehundred")
let hundredd=document.querySelector("#hundred")
let twenty=document.querySelector("#twenty")
let tenn=document.querySelector("#ten")
let fivee=document.querySelector("#five")
let onee=document.querySelector("#one")

const whole_data=document.querySelector(".whole_data")
const output_div=document.querySelector(".output")

const Notes=[two_thousand,five_hundred,hundredd,twenty,tenn,fivee,onee]
const notes_num= [2000, 500, 100,20, 10, 5, 1]


calculate.addEventListener("click",()=>{
    output_div.style.display="block";
    calculate.innerHTML=`Next <i class="fas fa-angle-double-right"></i>`;
    let bill_amount=document.querySelector("#bill")
    let customer_paid_amount=document.querySelector("#paid")

    customer_paid_amount.style.display="none";
    
    const change=document.querySelector("#change")
    bill_amount=Number(bill_amount.value)
    if(bill_amount<=0){
        errorhandler();
    }
    else{
        customer_paid_amount.style.display="block";
        customer_paid_amount=Number(customer_paid_amount.value)
        calculate.innerHTML=`Calculate <i class="fas fa-angle-double-right"></i>`;
        if( customer_paid_amount>0){
            let returnable=customer_paid_amount-bill_amount;
            if(returnable<0){
                whole_data.style.display="none";
                change.innerHTML=`Please take <i class="fas fa-rupee-sign"></i>  ${Math.abs(customer_paid_amount-bill_amount)} more from  the customer.`
                change.style.color='pink';
            }
            else if(returnable===0){
                whole_data.style.display="none";
                change.innerHTML=`Thank the customer and give him the Bill.`
                change.style.color='wheat';
            }
            else{
                handler(returnable);
                change.innerHTML=`Please return <i class="fas fa-rupee-sign"></i>  ${Math.ceil((customer_paid_amount-bill_amount)* 100)/100} to the customer.`
                change.style.color='#50cf50';
            }
        }else if(customer_paid_amount===0){
            change.innerHTML="Please enter the amount given by customer to print the Bill."
            change.style.color="#50cf50"
        }else{
            errorhandler()
        }
    }  
})
function handler(returnable){
    whole_data.style.display="block";
    let x;
    for(let i=0;i<notes_num.length;i++){
        // below two are independent of one another
        x=Math.floor(returnable/notes_num[i])
        if(x===0){
            Notes[i].innerHTML=''
        }else{
            Notes[i].innerHTML=x
        }
        returnable=(returnable%notes_num[i]);
    }
}
function errorhandler(){
    change.innerHTML="Please enter valid data to proceed.";
    change.style.color="pink";
    whole_data.style.display="none";
    output_div.style.display="block";
}
clear.addEventListener("click",()=>{
    window.location.reload()
})