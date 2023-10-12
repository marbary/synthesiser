"use strict"; 
//czy tu nie brakuje require i jquery?
let synth; 

  

$(function() { 

    $(".key").on("mouseover", function() { 

  

        let index = $(this).index('.key'); 

        synth.play(index); 

    }); 

    $(".key").on("mouseout", function() { 

        synth.stop(); 

    }); 

  

    $("h3>span").on("click",function(){ 

       synth = apiReader("http://localhost:3000", "buzzFunk");   // JSON loading function 

       $(this).text("Synth enabled! Hover over keys to hear sound"); 

    }); 

}); 

 
