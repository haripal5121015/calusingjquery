var value1,value2,flag,calresul,opflag,resultantflag,recursiveflag;
	value1=0;
	value2=0;
	recursiveflag=0;
	
	opflag=0;
	resultantflag=0;

		flag=0;
		calresult=0;
	
	
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
	if(recursiveflag%2===0&&recursiveflag!==0)
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

}