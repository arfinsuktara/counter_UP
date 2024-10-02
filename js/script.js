

let counterUP = document.querySelectorAll(".counterUP")
let arr = Array.from(counterUP)
//console.log(arr);


arr.map((item)=>{
    let counter = 0
    function count() {
        counter++;
        item.innerHTML = counter;
        if (counter == item.dataset.number){
            clearInterval(stop);
        }


    }

    let stop = setInterval(function(){
        count();

    }, 1000/item.dataset.number);

       
   
})


