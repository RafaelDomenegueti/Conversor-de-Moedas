var request = new XMLHttpRequest()
var dolar = ""
var euro = ""
var m1 = document.getElementById("m1")
var m2 = document.getElementById("m2")

request.open('GET', "https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL")

request.responseType = 'json';
request.send()

request.onload = function() {
    var dolar = request.response;
    dolarpop(dolar);
}

function dolarpop(p) {

    dolar = Number(p["USD"]["high"]).toFixed(2)
    euro = Number(p["EUR"]["high"]).toFixed(2)

}

function converter(){

    if (m1.value == "dolarm1" && m2.value == "realm2"){

        let txt1 = document.getElementById("txt1").value 
        txt1 = (txt1.toString().replace(",", "."));
        
        let res = (txt1*dolar).toFixed(2)
        document.getElementById("txt2").value=("BRL " + res)

    }

    if (m1.value == "eurom1" && m2.value == "realm2"){

        let txt1 = document.getElementById("txt1").value 
        txt1 = (txt1.toString().replace(",", "."));
        
        let res = (txt1*euro).toFixed(2)
        document.getElementById("txt2").value=("BRL " + res)

    }

}