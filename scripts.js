var friends = ["Erdrick", "Arthur", "Mardeck", "Efrain", "Cloud"];
var locations = ["Ennar", "Tantegel", "Piatta", "Bedoe", "Verity", "Ardan", "Nanuk", "Shrenwold", "Horrenham", "Midgard"];
var weapons = ["sword", "axe", "staff", "wand", "dagger", "abacus", "orb", "glove", "bomb", "bow", "crossbow", "gun", "whip", "mace", "flail", "blowpipe", "shield", "shuriken", "dart", "knife"];

for (var i = 1; i <= 100; i++) {
    var $h3 = $("<h3>Accusation " + i + "</h3>");
    $($h3).appendTo("main");
    var accusation = getAlert(i);
    $($h3).click(accusation);
}

function getAlert(i) {
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];
    function accuAlert() {
        alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
    }
    return accuAlert;
}