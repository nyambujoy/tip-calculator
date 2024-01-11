const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const numOfPeople = document.getElementById("numOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");
const plusSign = document.querySelector(".plus");
const minusSign = document.querySelector(".minus");


function calculateBill(){
    let bill = billInput.value ;
    let tip = tipInput.value;
   // console.log(tip);
   // console.log(bill);
   
    let cost = Number(bill)+(Number(bill)*Number(tip/100));
    //console.log(cost)
    //let total = cost/numOfPeople.textContent;
    //perPersonTotal.textContent = total;
    //console.log(total)
    return cost
}

calculateBill()

//onclick="increaseBill()"

function increaseBill(){
   // numOfPeople.textContent=plusSign;
   plusSign.addEventListener("click",()=>{
     let value = +numOfPeople.textContent++ ;
     
     if(numOfPeople.textContent > 20){
        numOfPeople.textContent = 1;
     }

     console.log(value)
    // return value;

    if (value === 1){
        let total = calculateBill() /1
        perPersonTotal.textContent = total
    }else{
        total = calculateBill()/value
        perPersonTotal.textContent = total.toFixed(2)
        console.log(total)

    }
    
   })

   //let numero = +numOfPeople.textContent;  

}

increaseBill()

//onclick="decreaseBill()"

function decreaseBill(){
    // numOfPeople.textContent=plusSign;
    minusSign.addEventListener("click",()=>{
     let value = +numOfPeople.textContent --;
     
     if(numOfPeople.textContent <= 1){
        numOfPeople.textContent = 1
        
     }
     console.log(value)
    // return value;

    let total = calculateBill()/value
    perPersonTotal.textContent = total.toFixed(2)
    console.log(total)

     
    })
    
 }
 decreaseBill()
