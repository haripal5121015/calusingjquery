var value1,value2,flag,calresul,opflag,plus;
	value1="";
	value2="";
	plus="";
	
	
	opflag="";


		flag=0;
		calresult=0;
		/***********/

		$(document).ready(function(){
			//alert("hripal");


			$(".btn").click(function(){
				if(flag===0)
				{
			value1+=(this).value;
			$("#resultbox").val(value1);
             }
            else
                {

			value2+=(this).value;
			
			$("#resultbox").val(plus+value2);
				
                }


		     });

			$(".btn1").click(function(){
				
                flag=1;
				opflag=(this).value;
				$("#resultbox").val($("#resultbox").val()+opflag);
				plus=$("#resultbox").val();
				

			});
			$("#clr").click(function(){
			$("#resultbox").val(" ");
			value2="";
			value1="";
			opflag="";
			plus="";
			flag=0;

			});


			$("#equal").click(function(){
			 if(opflag==='+')
		     calresult=Number(value1)+Number(value2);
	         if(opflag==='-')
		     calresult=Number(value1)-Number(value2);
	         if(opflag==='*')
		     calresult=Number(value1)*Number(value2);
        		$("#resultbox").val(calresult);
	       if(opflag==='/')
	      {
		     if(value2==0)
	        	{
			  $("#resultbox").val("infinity");
		       }
		      else
		       {
		        calresult=Number(value1)/Number(value2);
		        $("#resultbox").val(calresult);
	            }
	        }

			});
		
			


	/*$("button").click(function() {
		var selected = $(this).val();
	    
	    alert("haripal");
	    if(selected===1||selected===2||selected===3||selected===4||selected===5||selected===6|| selected===7||selected===8||selected===9||selected===0)
		{
			insert(selected);
		}
		else if(selected==='c')
		{
			clear6();
		}
		else if(selected==='=')
		{
			resultsum();
		}
		else
		{
			if(selected==='+')
				operator(1);
			if(selected==='-')
				operator(2);
			if(selected==='*')
				operator(3);
			if(selected==='/')
				operator(4);


		}

});*/
});
	
	/*
	function insert(arg)
	{
		
		

if(resultantflag===1&&flag===0)
{
	document.getElementById("resultbox").value=" ";
	document.getElementById("resultbox").value=arg;
	value1=0;
	resultantflag=0;

}
	

		
		if (flag===0) 
			{
				value1=Number(value1)*10+ Number(arg);
				document.getElementById("resultbox").value=value1;
			}
			else
			{
				value2=Number(value2)*10+Number(arg);
				document.getElementById("resultbox").value=document.getElementById("resultbox").value+arg;
			}
			//alert(arg);


	}
	
	
	function resultsum()
	{
		resultantflag=1;

		

		if(opflag===1)
		calresult=Number(value1)+Number(value2);
	if(opflag===2)
		calresult=Number(value1)-Number(value2);
	if(opflag===3)
		calresult=Number(value1)*Number(value2);
	document.getElementById("resultbox").value=calresult;
	if(opflag===4)
	{
		if(value2==0)
		{
			document.getElementById("resultbox").value="infinity";
		}
		else
		{
		calresult=Number(value1)/Number(value2);
		document.getElementById("resultbox").value=calresult;
	    }
	}
	recursiveflag=0;
	

		
		
	value1=calresult;
	value2=0;
	flag=0;
	
   }
	function operator(op)
	{
	
	recursiveflag+=1;
	if(recursiveflag===2)
		{
			if(op===1)
			{
				opflag=1;
				resultsum();

			}
			if(op===2)
			{
				opflag=2;
				resultsum();

			}
			if(op===2)
			{
				opflag=3;
				resultsum();

			}
			if(op===4)
			{
				opflag=4;
				resultsum();

			}
		}
		opflag=op;
		flag=1;
		if(op===1)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"+";
		if(op===2)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"-";
		if(op===3)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"*";
		if(op===4)
			document.getElementById("resultbox").value=document.getElementById("resultbox").value+"/";
		
		//calresult=Number(value2)-Number(value1);
	
		//value2=0;
	}
	
	function clear6()
	{
		document.getElementById("resultbox").value=" ";
		value1=0;
		value2=0;
		flag=0;
		calresult=0;
		resultantflag=0;
		//alert("jsghas");
	}
var top;
var stack=[];
top=-1;
function saveresult()
{

stack[++top]=document.getElementById("resultbox").value;
}
function backbuttonresult()
{
	if(top>=0)
	document.getElementById("resultbox").value=stack[top--];

}*/