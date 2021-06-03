function calcul(){
    var poids = document.IMC.poids.value;
    var taille = document.IMC.taille.value;
    var imc = Math.round((poids/(taille/100)**2)*10)/10;
    document.resultat_imc.imc.value = imc;
}

function fichier(){
    var imc = document.resultat_imc.imc.value;
    var poids = document.IMC.poids.value;
    var taille = document.IMC.taille.value;

    if ((!poids.replace(/\s+/, '').length)||(!taille.replace(/\s+/, '').length)) {
        // alert( "erreur" );
        return false;
    }
    if(imc < 18){
        alert("prendre du poids");
        window.location.href = "site3.html";
    }
    else if(imc<25 || imc> 18){
        window.location.href = "site3.html";
        alert("C'est bien");
    }
    else if(imc>25){
        alert("Il faut perdre du poids");
    }
}