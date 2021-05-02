
function gumarel() {
    var tiv1, tiv2, patasxan, g;
    tiv1 = document.getElementById("tiv1").value
    tiv1 = Number(tiv1);

    tiv2 = document.getElementById("tiv2").value;
    tiv2 = Number(tiv2);
    
    g = "Գումարը հավասար է = "
    patasxan = tiv1 + tiv2
    document.getElementById("patasxan").innerHTML = g + patasxan;
}

function hanel(){
    var tiv1, tiv2, patasxan, g;
    tiv1 = document.getElementById("tiv1").value
    tiv1 = Number(tiv1);

    tiv2 = document.getElementById("tiv2").value;
    tiv2 = Number(tiv2);
    
    g = "Տարբերությունը հավասար է = "
    patasxan = tiv1 - tiv2
    document.getElementById("patasxan").innerHTML = g + patasxan;
}

function bazmapatkel(){
    var tiv1, tiv2, patasxan, g;
    tiv1 = document.getElementById("tiv1").value
    tiv1 = Number(tiv1);

    tiv2 = document.getElementById("tiv2").value;
    tiv2 = Number(tiv2);
    
    g = "Արտադրյալը հավասար է = "
    patasxan = tiv1 * tiv2
    document.getElementById("patasxan").innerHTML = g + patasxan;
}

function bajanel(){
    var tiv1, tiv2, patasxan, g;
    tiv1 = document.getElementById("tiv1").value
    tiv1 = Number(tiv1);

    tiv2 = document.getElementById("tiv2").value;
    tiv2 = Number(tiv2);
    
    g = "Քանորդը հավասար է = "
    patasxan = tiv1 / tiv2
    document.getElementById("patasxan").innerHTML = g + patasxan;
}