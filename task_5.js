function show(data){
    console.log(data);
}
    
 var a = 10;
 var b = 22;
var c = 3;
var d;
		   d = (b*b)-(4*a*c);
		   if(d<0) {
			show("Not applicable");
		   }
		   else if(d==0) {
			   show("x ="+(-b)/2*a);
		   }
		   else {
			   show("x1 ="+(((-b)+Math.sqrt(d)))/(2*a));
			   show("x2 ="+(((-b)-Math.sqrt(d)))/(2*a));
		   }
