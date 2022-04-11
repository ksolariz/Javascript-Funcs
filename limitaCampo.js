
 document.getElementById("apolice").onkeypress = function(e) {
       var chr = String.fromCharCode(e.which);
       if ("1234567890".indexOf(chr) < 0)
         return false;
     };
