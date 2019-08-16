function accum(s) {

var res=s[0].toUpperCase();
for (var i=1;i<s.length;i++)
  res=res+'-'+repeat(s[i],i+1);
  
return res;




	// your code
}

function repeat(char,num){
    var out=char.toUpperCase();
    
for (var i=1;i<num;i++)
   out=out+char.toLowerCase();
   
return out;

}

/*      Practicing recursive way

function acum(str,times){
    if (str.length==1) 
       return repeat(str,times);
       else
      return repeat(str[0],times)+acum(str.substring(1),times+1);
}

*/