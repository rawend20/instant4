



document.querySelectorAll("button").forEach(function(item){
    item.onclick= function(){
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }
})


document.querySelector("#myform").addEventListener("submit",function(event){
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");

    if(works==""){
        alert("Enter Data");
        event.preventDefault()

    }else{
        var myLi = document.createElement("li");
        myLi.innerHTML = works;
        result.append(myLi);
        document.querySelector("works").value ="";
        event.preventDefault();
    }

})
