for(var display=document.getElementById("cal-display"),btn=document.getElementsByClassName("button"),op1=0,op2=null,operator=null,sg=!1,i=0;i<btn.length;i++)btn[i].addEventListener("click",(function(){var value=this.getAttribute("data-value");if("/"==value||"*"==value||"-"==value||"+"==value||"%"==value)op1=parseFloat(display.innerText),isNaN(op1)?display.innerText="Error":(display.innerText="%"!=value?value:"mod",operator=value,sg=!0);else if("bksp"==value){var s=display.innerText;display.innerText="Error"==s?null:s.slice(0,s.length-1)}else if("="==value){op2=parseFloat(display.innerText);var result=eval(op1+" "+operator+" "+op2);result==1/0||isNaN(result)||result==-1/0?display.innerText="Error":(sg=!0,display.innerText=result)}else if("inverse"==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var v=parseFloat(display.innerText);display.innerText=1/v,sg=!0}else if("square"==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var v=parseFloat(display.innerText);display.innerText=v*v,sg=!0}else if("sqroot"==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var v=parseFloat(display.innerText);display.innerText=Math.pow(v,.5),sg=!0}else if("AC"==value)display.innerText=null;else if("sign"==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var v1=parseFloat(display.innerText);display.innerText=-v1,sg=!0}else if("percent"==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var v1=parseFloat(display.innerText)/100;display.innerText=v1,sg=!0}else 1!=sg&&"Error"!=display.innerText||(display.innerText=null,sg=!1),display.innerText+=value}));document.addEventListener("keydown",(function(event){var value=event.keyCode;if(49==value||97==value||50==value||98==value||51==value||99==value||52==value||100==value||53==value||101==value||54==value||102==value||55==value||103==value||56==value||104==value||57==value||105==value||48==value||96==value||190==value||110==value||35==value||40==value||34==value||37==value||12==value||39==value||36==value||38==value||33==value||45==value||46==value)1!=sg&&"Error"!=display.innerText||(display.innerText=null,sg=!1),49==value||97==value||35==value?display.innerText+=1:50==value||98==value||40==value?display.innerText+=2:51==value||99==value||34==value?display.innerText+=3:52==value||100==value||37==value?display.innerText+=4:53==value||101==value||12==value?display.innerText+=5:54==value||102==value||39==value?display.innerText+=6:55==value||103==value||36==value?display.innerText+=7:56==value||104==value||38==value?display.innerText+=8:57==value||105==value||33==value?display.innerText+=9:48==value||96==value||45==value?display.innerText+=0:190!=value&&110!=value&&46!=value||(display.innerText+=".");else if(111==value||191==value||106==value||189==value||109==value||107==value||187==value)op1=parseFloat(display.innerText),isNaN(op1)?display.innerText="Error":(111==value||191==value?(display.innerText="/",operator="/"):106==value?(display.innerText="*",operator="*"):189==value||109==value?(display.innerText="-",operator="-"):187!=value&&107!=value||(display.innerText="+",operator="+"),sg=!0);else if(120==value)if(op1=parseFloat(display.innerText),isNaN(op1))display.innerText="Error";else{var s=parseFloat(display.innerText);display.innerText=-s,sg=!0}else if(27==value||46==value||8==value)if(27==value||"Error"==display.innerText||46==value)display.innerText=null;else{var s=display.innerText;display.innerText=s.slice(0,s.length-1)}else if(13==value)if(op2=parseFloat(display.innerText),isNaN(op2))display.innerText="Error";else{var result=eval(op1+" "+operator+" "+op2);display.innerText=result==1/0||result==-1/0?"Error":result,sg=!0}}));