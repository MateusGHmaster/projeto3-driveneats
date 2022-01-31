let plateSelected;
let drinkSelected;
let dessertSelected;


//plate-selection-border

function itemPlate1() {
    document.getElementById("plate1").style.borderColor="green";
    document.getElementById("plate2").style.borderColor="white";
    document.getElementById("plate3").style.borderColor="white";
    document.getElementById("plate4").style.borderColor="white";
    plateSelected = "Bisteca de Suína Frita";
}

function itemPlate2() {
    document.getElementById("plate2").style.borderColor="green";
    document.getElementById("plate1").style.borderColor="white";
    document.getElementById("plate3").style.borderColor="white";
    document.getElementById("plate4").style.borderColor="white";
    plateSelected = "Bist.Suína Grelhada";
}

function itemPlate3() {
    document.getElementById("plate3").style.borderColor="green";
    document.getElementById("plate1").style.borderColor="white";
    document.getElementById("plate2").style.borderColor="white";
    document.getElementById("plate4").style.borderColor="white";
    plateSelected = "Bife Brasileiro";
}

function itemPlate4() {
    document.getElementById("plate4").style.borderColor="green";
    document.getElementById("plate1").style.borderColor="white";
    document.getElementById("plate2").style.borderColor="white";
    document.getElementById("plate3").style.borderColor="white";
    plateSelected = "Bifa a Cavalo";
}



//drink-selection-border

function itemDrink1() {
    document.getElementById("drink1").style.borderColor="green";
    document.getElementById("drink2").style.borderColor="white";
    document.getElementById("drink3").style.borderColor="white";
    document.getElementById("drink4").style.borderColor="white";
    drinkSelected = "Coca-Cola";
}

function itemDrink2() {
    document.getElementById("drink2").style.borderColor="green";
    document.getElementById("drink1").style.borderColor="white";
    document.getElementById("drink3").style.borderColor="white";
    document.getElementById("drink4").style.borderColor="white";
    drinkSelected = "Fanta Laranja";
}

function itemDrink3() {
    document.getElementById("drink3").style.borderColor="green";
    document.getElementById("drink1").style.borderColor="white";
    document.getElementById("drink2").style.borderColor="white";
    document.getElementById("drink4").style.borderColor="white";
    drinkSelected = "Pepsi";
}

function itemDrink4() {
    document.getElementById("drink4").style.borderColor="green";
    document.getElementById("drink1").style.borderColor="white";
    document.getElementById("drink2").style.borderColor="white";
    document.getElementById("drink3").style.borderColor="white";
    drinkSelected = "Água com gás";
}

//dessert-selection-border

function itemDessert1() {
    document.getElementById("dessert1").style.borderColor="green";
    document.getElementById("dessert2").style.borderColor="white";
    document.getElementById("dessert3").style.borderColor="white";
    document.getElementById("dessert4").style.borderColor="white";
    dessertSelected = "Bolo de chocolate";
}

function itemDessert2() {
    document.getElementById("dessert2").style.borderColor="green";
    document.getElementById("dessert").style.borderColor="white";
    document.getElementById("dessert").style.borderColor="white";
    document.getElementById("dessert").style.borderColor="white";
    dessertSelected = "Bolo de frutas";
}

function itemDessert3() {
    document.getElementById("dessert3").style.borderColor="green";
    document.getElementById("dessert1").style.borderColor="white";
    document.getElementById("dessert2").style.borderColor="white";
    document.getElementById("dessert4").style.borderColor="white";
    dessertSelected = "Picolé de fruta";
}

function itemDessert4() {
    document.getElementById("dessert4").style.borderColor="green";
    document.getElementById("dessert1").style.borderColor="white";
    document.getElementById("dessert2").style.borderColor="white";
    document.getElementById("dessert3").style.borderColor="white";
    dessertSelected = "Sorvete 1 bola";
}

//turn-button-available

function closeOrder() {
    if ((plateSelected != null) && (drinkSelected != null) && (dessertSelected != null)) {
        document.getElementById("Button").disabled = false;
        document.getElementById("Button").style.backgroundColor = "green";
        document.getElementById("Button").textContent = "Fechar Pedido";
    }
}