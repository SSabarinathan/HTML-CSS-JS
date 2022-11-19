function big(){


    // for(var i=0;i<=100000000;i+=1){
    //     var j=i;
    // }
    // alert("Number of iteration is :"+j+" Iterations"); 

    var worker = new Worker("bigtask.js");
    worker.onmessage= function(event){
                alert("Number of iteration is :"+event.data+" Iterations"); 


    }

}
function small(){
    alert("It is just a small function");
}

function bgButton(){
    
    var worker = new Worker('loop.js');
    worker.onmessage= function(ev){
        document.getElementById('loop').textContent=ev.data
    }
    
}





