 let radius = 6
function printPattern(radius)  
{ 
        var dist = parseFloat(0); 
  
        // for horizontal movement 
        for (var i = 0; i <= 2 * radius; i++)  
        {   
          // for vertical movement 
          for (var j = 0; j <= 2 * radius; j++)  
          { 
            dist = Math.sqrt( 
              (i - radius) * (i - radius) +  
              (j - radius) * (j - radius) 
            ); 
  
            // dist should be in the range (radius - 0.5) 
            // and (radius + 0.5) to print stars(*) 
            if (dist > radius - 0.5 && dist < radius + 0.5)  
            console.log("*"); 
            else 
            console.log("  "); 
          } 
  
          console.log("<br>"); 
        } 
      } 
  
      // Driver Code 
        
      
   
      console.log(printPattern); 