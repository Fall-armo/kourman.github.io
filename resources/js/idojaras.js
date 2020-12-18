var homersekletek = [7.8, -16.5, 0.1, 8.1, 17.3, 23.5, 28.9];
var homersekletFelsoHatarok = [0, 10, 18, 27, 50];
var ajanlatok = ["A hidegben való felmelegedésed érdekében egy forró csokival várunk.",
    "Jólesik, ha melegen tartja a kezed egy pohár forralt bor. Mi segítünk ebben.",
    "A napfény halovány melege tökéletesen párosul a roppanós zöldségtállal. Már csak rajtad a sor.",
    "Mi lehetne jobb ebben a melegben a rendelt hamburger mellé, mint egy korsó frissen csapolt sör? Tökéletes párosítás!",
    "Szükség van egy kis támogatásra ebben a forróságban? Jégkrém választékunkban nem fogsz csalódni!"];

function idojarasWidget() {
    const nap = document.querySelector("#nap").value;
    const homersekletDiv = document.querySelector("#homerseklet");
    const ajanlatDiv = document.querySelector("#ajanlat");
    const minDiv = document.querySelector("#minHom");
    const maxDiv = document.querySelector("#maxHom");
    const atlagDiv = document.querySelector("#atlagHom");

    homersekletDiv.innerHTML = homersekletek[nap] + ' &deg;C';

    for ( let i = 0; i < homersekletFelsoHatarok.length; i++ ) {
        if ( homersekletek[nap] <= homersekletFelsoHatarok[i] ) {
            ajanlatDiv.innerHTML = "";
            ajanlatDiv.innerHTML += ajanlatok[i];
            break;
        }
    }

    minDiv.innerHTML = minimumHomerseklet().toFixed(1) + " &deg;C";
    maxDiv.innerHTML = maximumHomerseklet().toFixed(1) + " &deg;C";
    atlagDiv.innerHTML = "⟨ " + atlagHomerseklet().toFixed(1) + " &deg;C" + " ⟩";
}

function minimumHomerseklet() {
    let min = homersekletek.length != 0 ? homersekletek[0] : 0;

    for ( let i = 0; i < homersekletek.length; i++ ) {
        if ( homersekletek[i] < min ) {
            min = homersekletek[i];
        }
    }
    return min;
}

function maximumHomerseklet() {
    let max = homersekletek.length != 0 ? homersekletek[0] : 0;

    for ( let i = 0; i < homersekletek.length; i++ ) {
        if ( homersekletek[i] > max ) {
            max = homersekletek[i];
        }
    }
    return max;
}

function atlagHomerseklet() {
    let atlag = 0;

    for ( let i = 0; i < homersekletek.length; i++ ) {
        atlag += homersekletek[i];
    }
    return homersekletek.length != 0 ? atlag / homersekletek.length : 0;
}
