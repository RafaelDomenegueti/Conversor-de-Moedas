var request = new XMLHttpRequest()

request.open('GET', "https://economia.awesomeapi.com.br/all/USD")

request.responseType = 'json';
request.send()

request.onload = function() {
    var dolar = request.response;
    dolarpop(dolar);
}

function dolarpop(p) {

    var dolar = Number(p["USD"]["high"]).toFixed(2)
    document.getElementById("dolar").placeholder= `BRL ${dolar}`

}