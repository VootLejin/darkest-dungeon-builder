let level_xp = [
    0,
    300,
    900,
    2700,
    6500,
    14000,
    23000,
    34000,
    48000,
    64000,
    85000,
    100000,
    120000,
    140000,
    165000,
    195000,
    225000,
    265000,
    305000,
    355000
];
let crs = [
    "1/8",
    "1/4",
    "1/2",
    1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30
];
function output_enemies(enemies) {
    // make UL in output
    var div = document.getElementById("output");
    // remove it if it already exists
    var temp = document.getElementById("output_list");
    if (temp != null){
        temp.remove();
    }

    // create list
    var ul = document.createElement("ul");
    ul.setAttribute("id", "output_list");
    for(var key in enemies){
        if(enemies.hasOwnProperty(key)){
            var li = document.createElement("li");
            li.innerText = "CR " + key + ": " + enemies[key];
            ul.appendChild(li);
        }
    }
    div.appendChild(ul);

}

let xpval = [
    25,50,100,200,
    450,700,1100,1800,2300,
    2900,3900,5000,5900,7200,8400,
    10000,11500,13000,15000,18000,20000,
    22000,25000,33000,41000,50000,62000,75000,
    90000,105000,120000,135000,155000
];

function find_highest(current_exp, xpval) {
    var index = 0;

    for (var i = 0; i < xpval.length; i++){
        if(xpval[i] > current_exp){
            break;
        }
        index = i;
    }


    return index;
}

function calcdungeon(){
    var playercount = document.getElementById("playercount").value;
    var level = document.getElementById("level").value;

    let exp_per_person= level_xp[level] - level_xp[level-1];
    let total_exp_to_spend = exp_per_person * playercount;

    var current_exp = total_exp_to_spend;
    var working = true;
    var enemies = {};

    while (working){
        // find highest cr
        var highest = find_highest(current_exp, xpval);
        // get the cr and xp value
        var index = Math.floor(Math.random() * highest+1);
        // check that the cr already exists, if not make it
        if (enemies[crs[index].toString()]  == null){
            enemies[crs[index].toString()] = 0;
        }
        // one more of given enemy
        enemies[crs[index].toString()] += 1;
        // lower our current xp
        current_exp += -xpval[index];
        // lower by correct amount
        if (current_exp <= 5){
            working = false;
        }
    }

    output_enemies(enemies);


}