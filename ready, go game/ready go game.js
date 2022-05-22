      function circle1(){
      var text = document.getElementsByClassName('txt')[0].textContent;
      document.getElementsByClassName('txt')[0].textContent = "Ready";
      var html = document.getElementById("cir1").src="red.png";
      setTimeout(function (){
        document.getElementById("cir1").src="gray.png";
      },1000)
      }
      
      function circle2(){
      var text = document.getElementsByClassName('txt')[0].textContent;
      document.getElementsByClassName('txt')[0].textContent = "Steady";
      var html2 = document.getElementById("cir2").src="orange.png";
      setTimeout(function (){
        document.getElementById("cir2").src="gray.png";
      },1000)
      }
   
      function circle3(){
      var text = document.getElementsByClassName('txt')[0].textContent;
      document.getElementsByClassName('txt')[0].textContent = "Go";
      var htmlx = document.getElementById("cir3").src="green.png";
      setTimeout(function (){
        document.getElementById("cir3").src="gray.png";
      },1000)
      }

      function last(){
    setTimeout(circle1, 1000);
    setTimeout(circle2, 2000);
    setTimeout(circle3, 3000);
      }
      setInterval(last, 3000);