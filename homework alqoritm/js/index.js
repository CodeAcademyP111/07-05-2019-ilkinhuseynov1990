// mertebenin tapilmasi

var mertebe = Number(prompt("Zehmet olmasa eded daxil edin"));
var deyer;
var count=0;

if(!isNaN(mertebe)){
  while(mertebe>0){
    deyer = mertebe%10;
    mertebe = (mertebe-deyer)/10;
    count++;   
  }
}
else{
  alert("doqru eded daxil edin");
}

document.write(count+ " vahidlidir");



