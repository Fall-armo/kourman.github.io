// Ár kiszámítása 

function kiszamit () {
    let alapAr = 1600; 
    let mennyisegInput = document.querySelector("#mennyiseg");
    let mennyiseg = parseInt(mennyisegInput.value);
    let feltet = parseInt(document.querySelector("input[name='gridRadios']:checked").value);
    let szosz = parseInt(document.querySelector("#szosz").value);
    let osszeg = document.querySelector("span.osszeg");

    if (isNaN(mennyiseg)) {
        mennyiseg = 0;
    }

    if ( mennyiseg > 20 ) {
        alert("A maximálisan rendelhető mennyiség 20 darab!");
    } else if ( mennyiseg < 1 ) {
        alert("A legkisebb rendelhető mennyiség 1 darab!");
    } else {
        let vegosszeg = ( alapAr + feltet + szosz ) * mennyiseg;
        if ( vegosszeg < 5000 ) {
            vegosszeg += 500;
        }
        osszeg.innerHTML = vegosszeg;
    }
}


// Rendelés leadása 

function rendelesLeadas () {
    const vezetekNev = document.querySelector("#validationVezeteknev").value.trim();
    const keresztNev = document.querySelector("#validationKeresztnev").value.trim();
    const email = document.querySelector("#emailInput").value.trim();
    const varos = document.querySelector("#validationVaros").value.trim();
    const utca = document.querySelector("#validationUtca").value.trim();
    const iranyitoszam = document.querySelector("#validationIranyitoszam").value.trim();
    const megjegyzes = document.querySelector("#megjegyzes").value.trim();

    const alapAr = 1600;
    const feltet = parseInt(document.querySelector("input[name='gridRadios']:checked").value);
    const szosz = parseInt(document.querySelector("#szosz").value);
    const mennyiseg = parseInt(document.querySelector("#mennyiseg").value);

    if (isNaN(mennyiseg)) {
        mennyiseg = 0;
    }

    if ( !vezetekNev ) {
        alert("A vezetéknév megadása kötelező!");
        document.querySelector("#validationVezeteknev").style.borderColor = "rgb(230, 0, 0)";
    } else if ( !keresztNev ) {
        alert("A keresztnév megadása kötelező!");
        document.querySelector("#validationKeresztnev").style.borderColor = "rgb(230, 0, 0)";
    } else if ( !email || !( email.indexOf("@") > 0 ) || !(email.indexOf(".") > 0 ) ) {
        alert("Érvényes e-mail cím megadása kötelező!");
        document.querySelector("#emailInput").style.borderColor = "rgb(230, 0, 0)";
    } else if ( !varos ) {
        alert("Település megadása kötelező!");
        document.querySelector("#validationVaros").style.borderColor = "rgb(230, 0, 0)";
    } else if ( !utca ) {
        alert("Utca-házszám megadása kötelező!");
        document.querySelector("#validationUtca").style.borderColor = "rgb(230, 0, 0)";
    } else if ( !iranyitoszam || iranyitoszam.length > 4 ) {
        alert("Érvényes irányítószám megadása kötelező!")
        document.querySelector("#validationIranyitoszam").style.borderColor = "rgb(230, 0, 0)";
    } else if ( megjegyzes.indexOf("<") > 0 && megjegyzes.indexOf(">" > 0) ) {
        alert("A megjegyzésben nem megengedett HTML kód használata!");
        document.querySelector("#megjegyzes").style.borderColor = "rgb(230, 0, 0)";
    } else if ( mennyiseg > 20 ) {
        alert("A maximálisan rendelhető mennyiség 20 darab!");
        document.querySelector("#mennyiseg").style.borderColor = "rgb(230, 0, 0)";
    } else if ( mennyiseg < 1 ) {
        alert("A legkisebb rendelhető mennyiség 1 darab!");
        document.querySelector("#mennyiseg").style.borderColor = "rgb(230, 0, 0)";
    } else {
        const vegosszeg = ( alapAr + feltet + szosz ) * mennyiseg;
        if ( vegosszeg < 5000 ) {
            vegosszeg += 500;
        }
        alert(vegosszeg + " értkékben a rendelés leadva.");
    }
}

