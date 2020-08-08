var request = new XMLHttpRequest()
var dolar = ""

request.open('GET', "https://economia.awesomeapi.com.br/all/USD")

request.responseType = 'json';
request.send()

request.onload = function() {
    var dolar = request.response;
    dolarpop(dolar);
}

function dolarpop(p) {

    dolar = Number(p["USD"]["high"]).toFixed(2)
    document.getElementById("resdolar").placeholder= `BRL ${dolar}`

}

function converter(){

    let real = document.getElementById("real").value 
    
    let res = (real*dolar).toFixed(2)
    document.getElementById("resdolar").value=("BRL " + res)

}