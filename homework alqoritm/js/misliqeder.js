var deyer = prompt("Zehmet olmasa sozu daxil edin");
var deyer1 = prompt("Nece defe daxil olunsun");



function misliqeder(text,sayi){
    var misli = parseInt(sayi);

    for(var i = 1; i<misli; i++){
        document.write(text +' '+ i);
    }
}


misliqeder(deyer,deyer1);

