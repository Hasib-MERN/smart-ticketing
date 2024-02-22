
document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    section1.addEventListener('click', function () {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
});

const allSeat = document.getElementsByClassName("seatSelect");
for (const btns of allSeat) {
     btns.addEventListener("click", function(event) { 
        
        const seatName = event.target.innerText;

        event.target.setAttribute("disabled", false)

        const totalPrice = document.getElementById("total-price")

        const li = document.createElement("li")

        const p = document.createElement("p");
        p.innerText = seatName;
        const p1 = document.createElement("p");
        p1.innerText = "Economy";
        const p2 = document.createElement("p");
        p2.innerText = 550;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);

        totalPrice.appendChild(li);
   
        updateGrandTotalCost(convertsTicketPrice);
        updateTotalCost(convertTicketPrice);
     })

    }

    const ticketprice = document.getElementById("ticket-price").innerText
    const convertTicketPrice = parseInt(ticketprice);

    function updateTotalCost(value){
        const totalCost =  getConvertValue("total-pri");
        const sum1 = totalCost + parseInt(value);
        const sum = parseInt(sum1);
        document.getElementById("total-pri").innerText = sum ;

    }

    const ticketsprice = document.getElementById("ticket-price").innerText
    const convertsTicketPrice = parseInt(ticketsprice );

    function updateGrandTotalCost(value){
        console.log(value)

        if(value == undefined){
            const totalCost =  getConvertValue("total-pri");
            const sum1 = totalCost + parseInt(value);
            const sum = parseInt(sum1);
            document.getElementById("grand-total").innerText = sum ;
            console.log(sum);          
        }
        else{
            const cuponCode = document.getElementById("cupon-code").value;
            console.log(cuponCode)
            if(cuponCode == "NEW25"){
            const totalCost =  getConvertValue("total-pri");
            const sum1 = totalCost + parseInt(value);
            const sum = parseInt(sum1);
            document.getElementById("grand-total").innerText = sum ;
            const discount1 = totalCost*0.15;
            const discount = parseFloat(discount1)
            document.getElementById("grand-total").innerText = totalCost - discount ;
            }

           if(cuponCode == "Couple20"){
                const totalCost =  getConvertValue("total-pri");
                const sum1 = totalCost + parseInt(value);
                const sum = parseInt(sum1);
                document.getElementById("grand-total").innerText = sum ;
                const discount1 = totalCost*0.2;
                const discount = parseFloat(discount1)
                document.getElementById("grand-total").innerText = totalCost - discount ;
            }

        }
    }

    let count = 0;
for (const btn of allSeat) {
    btn.addEventListener("click", function (e) {    
        count = count + 1;
        const totalsSeat = document.getElementById("seat-count").innerText = count;
        if(totalsSeat + 1 > 8){
          alert("limit");
            return 0;
        }
               
        const totalSeat = document.getElementById("all-seat").innerText;
        const convertTotalSeat = parseInt(totalSeat);
        console.log(convertTotalSeat)
       const emptySeat = convertTotalSeat - 1;

       document.getElementById("all-seat").innerText = emptySeat;
        setInnerText("seat-count", count)
    })
}




function getConvertValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}





























// const allSeat = document.getElementsByClassName("seatSelect");

// let count = 0;
// for (const btn of allSeat) {
//     btn.addEventListener("click", function (e) {
//         count = count + 1;
        
//         const totalSeat = document.getElementById("all-seat").innerText;
//         const convertTotalSeat = parseInt(totalSeat);
//        const emptySeat = convertTotalSeat - 1;

//        document.getElementById("all-seat").innerText = emptySeat;
        
//         const seatName = e.target.innerText;

//         const totalPrice = document.getElementById("total-price")

//         const li = document.createElement("li")

//         const p = document.createElement("p");
//         p.innerText = seatName;

//         const p1 = document.createElement("p");
//         p1.innerText = "Economy";

//         const p2 = document.createElement("p");
//         p2.innerText = 550;

//         li.appendChild(p);
//         li.appendChild(p1);
//         li.appendChild(p2);

//         totalPrice.appendChild(li);
 
//         const t1 = document.getElementById("ticket-price").innerText;
//         const t = parseInt(t1);

//         const totalCost = document.getElementById("total-pri").innerText;
//         const totalCostConvert = parseInt(totalCost);
//         console.log(typeof totalCostConvert);
//         const sum = totalCostConvert + parseInt(t);
//         document.getElementById("total-pri").innerText = sum;
       

//         const grandTotal = document.getElementById("grand-total").innerText;
//         const converGrandTotal = parseInt(grandTotal);
//         const sum2 = converGrandTotal + parseInt(t);

//         setInnerText("seat-count", sum);
//         setInnerText("grand-total", sum2);
//         setInnerText("seat-count", count)
//     })
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }

// console.log(sum2);



