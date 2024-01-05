let res = document.getElementById("display");

let calculate=(num)=>{
    res.value += num; 
}

let result=()=>{
    try{
        res.value = eval(res.value);
    }
    catch(err){
        alert("Enter the valid input")
    }
}

let clrDisplay=()=>{
    res.value = "0";
}

let back=()=>{
    res.value = res.value.slice(0,-1);
}