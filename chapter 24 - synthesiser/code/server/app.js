import http from 'http'; 

let patches = { 

    "buzzFunk": [{           // this is a patch  

        "type": "sawtooth", 

        "frequency": 65.25, 

  

    }, { 

        "type": "triangle", 

        "frequency": 65.25, 

     

    }, { 

  

        "type": "sawtooth", 

        "frequency": 67.25, 

    }], 

    "gameSound": [{        // this is a patch  

        "type": "square", 

        "frequency": 100.25, 

      

  

    }, { 

        "type": "triangle", 

        "frequency": 65.25, 

    }, { 

  

        "type": "sawtooth", 

        "frequency": 67.25, 

    }], 

    "zapper": [{               // this is a patch  

        "type": "square", 

        "frequency": 80.25, 

    

  

    }, { 

        "type": "triangle", 

        "frequency": 300.25, 

    }, { 

  

        "type": "sawtooth", 

        "frequency": 40.25, 

     

    },{ 

  

        "type": "sine", 

        "frequency": 30.25, 

    }, 

    { 

  

        "type": "sine", 

        "frequency": 100.25, 

       

    }] 

} 


http.createServer(function (req, res) { 


   res.setHeader('Access-Control-Allow-Origin', '*'); 

    res.setHeader('Content-Type', 'application/json'); 

    res.end(JSON.stringify(patches)); 

  }).listen(3000);  

 

console.log("Server listening on port 3000"); 