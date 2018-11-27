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

function create_monster_list(cr, count, monster_list) {
    for(var i = 0; i < count; i++){
        var li = document.createElement("li");
        // pick monsters
        var cr_list = cr_to_monster[cr];
        var monster_index =  Math.floor(Math.random() * cr_list.length);
        var monster = cr_list[monster_index];
        var monster_name = monster["name"];
        var book = monster["sources"];
        var page = monster["Page"];
        var section = monster["section"];
        var output = "" + monster_name + " (" + book + " pg. " + page;
        //console.log(section);
        //if (section.length !== 0) {
        //    output += " Under " + section;
        //}
        output += ")";
        li.innerText = output;
        monster_list.appendChild(li);
    }
}

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
            var monster_list = document.createElement("ul");
            create_monster_list(key, enemies[key], monster_list);
            li.appendChild(monster_list);
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
        var index = Math.floor(Math.random() * highest);
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


const monsters = [
    {
        "name": "Ape",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 317,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Awakened Shrub",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 317,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Awakened Tree",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 317,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ankylosaurus",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 79,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Banshee",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 23,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Axe Beak",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 317,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Baboon",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 318,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Badger",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 318,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Basilisk",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 24,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Blink Dog",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 318,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bat",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 318,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Black Bear",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 318,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Blood Hawk",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 319,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Boar",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 319,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Brown Bear",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 319,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bugbear",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 33,
        "section": "Bugbears",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Camel",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 320,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cat",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 320,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Centaur",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 38,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Chimera",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 39,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Crocodile",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 320,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Crab",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 320,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Constrictor Snake",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 320,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cockatrice",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 42,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deer",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 321,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Death Dog",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 321,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dire Wolf",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 321,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cyclops",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 45,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Doppelganger",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 82,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Earth Elemental",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 124,
        "section": "Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Draft Horse",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 321,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Eagle",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 322,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Elk",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 322,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fire Elemental",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 125,
        "section": "Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Elephant",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 322,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flameskull",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 134,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fire Giant",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 154,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flesh Golem",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 169,
        "section": "Golems",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flying Sword",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 20,
        "section": "Animated Objects",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flying Snake",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 322,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gargoyle",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 140,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Frost Giant",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 155,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Frog",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 322,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ghost",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 147,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ghoul",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 148,
        "section": "Ghouls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Ape",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 323,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Centipede",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 323,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Badger",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 323,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Bat",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 323,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Boar",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 323,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Constrictor Snake",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 324,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Crab",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 324,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Crocodile",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 324,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Eagle",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 324,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Frog",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 325,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Elk",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 325,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Fire Beetle",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 325,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Goat",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 326,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Lizard",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 326,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Hyena",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 326,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Octopus",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 326,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Owl",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 327,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Poisonous Snake",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 327,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Rat",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 327,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Scorpion",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 327,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Sea Horse",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 328,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Spider",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 328,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Shark",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 328,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Toad",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 329,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Vulture",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 329,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Wasp",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 329,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Weasel",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 329,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Wolf Spider",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 330,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 163,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Goblin",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 166,
        "section": "Goblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grick",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 173,
        "section": "Grick",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Goat",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 330,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Griffon",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 174,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Harpy",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 181,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hawk",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 330,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hobgoblin",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 186,
        "section": "Hobgoblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hill Giant",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 155,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hell Hound",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 182,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hippogriff",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 184,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hydra",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 190,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hunter Shark",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 330,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hyena",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 331,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Jackal",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 331,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kobold",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 195,
        "section": "Kobolds",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Killer Whale",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 331,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lion",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 331,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lizard",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 332,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lizardfolk",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 204,
        "section": "Lizardfolk",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Manticore",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 213,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Merfolk",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 218,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Minotaur",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 223,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mammoth",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 332,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mastiff",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 332,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Medusa",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 214,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mummy",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 228,
        "section": "Mummies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nothic",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 236,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mule",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 333,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 237,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ochre Jelly",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 243,
        "section": "Oozes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Octopus",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 333,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 246,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Owlbear",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 249,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Owl",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 333,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Panther",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 333,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pegasus",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 250,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Phase Spider",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 334,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Poisonous Snake",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 334,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Plesiosaurus",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 80,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Polar Bear",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 334,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pony",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 335,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quipper",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 335,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rat",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 335,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pteranodon",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 80,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Raven",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 335,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rhinoceros",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 336,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Reef Shark",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 336,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Riding Horse",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 336,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Satyr",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 267,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Skeleton",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 272,
        "section": "Skeletons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Saber-Toothed Tiger",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 336,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Scorpion",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 337,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sea Horse",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 337,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stirge",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 284,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spectator",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 30,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spider",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 337,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stone Golem",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 170,
        "section": "Golems",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Insects",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 338,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Bats",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 337,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Rats",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 339,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Poisonous Snakes",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 338,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Quippers",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 338,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Ravens",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 339,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Troll",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 291,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Twig Blight",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 32,
        "section": "Blights",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tiger",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 339,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Triceratops",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 80,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vulture",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 339,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warhorse",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 340,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tyrannosaurus Rex",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 80,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Water Elemental",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 125,
        "section": "Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Werewolf",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 211,
        "section": "Lycanthropes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Weasel",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 340,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wight",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 300,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Winter Wolf",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 340,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wolf",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 341,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wyvern",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 303,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yeti",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 305,
        "section": "Yeti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Worg",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 341,
        "section": "Misc Creatures",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Zombie",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 316,
        "section": "Zombies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Green Dragon",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 94,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Acolyte",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 342,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bandit",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 343,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Berserker",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 344,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Guard",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 347,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Knight",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 347,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Commoner",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 345,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cultist",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 345,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mage",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 347,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Priest",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 348,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Thug",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 350,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Red Dragon",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 98,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Air Elemental",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 124,
        "section": "Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Animated Armor",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 19,
        "section": "Animated Objects",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Allosaurus",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 79,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Guard Drake",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 158,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Helmed Horror",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 183,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gray Ooze",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 243,
        "section": "Oozes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hobgoblin Captain",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 186,
        "section": "Hobgoblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Noble",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 348,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Otyugh",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 248,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Peryton",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 251,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Roper",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 261,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rug of Smothering",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 20,
        "section": "Animated Objects",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shambling Mound",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 270,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Scout",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 349,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Specter",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 279,
        "section": "Specter",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spy",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 349,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stone Giant",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 156,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Troglodyte",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 290,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vampire",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 297,
        "section": "Vampires",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Violet Fungus",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 138,
        "section": "Fungi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vampire Spawn",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 298,
        "section": "Vampires",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Veteran",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 350,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Will-o'-Wisp",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 301,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Winged Kobold",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 195,
        "section": "Kobolds",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Malison",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 309,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Pureblood",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 310,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Blue Dragon",
        "cr": 16,
        "sources": "Monster Manual",
        "Page": 91,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Adult White Dragon",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 101,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Assassin",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 343,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bullywug",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 35,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ettercap",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 131,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient White Dragon",
        "cr": 20,
        "sources": "Monster Manual",
        "Page": 100,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Young White Dragon",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 101,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "White Dragon Wyrmling",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 102,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Brass Dragon",
        "cr": 20,
        "sources": "Monster Manual",
        "Page": 104,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Adult Brass Dragon",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 105,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Young Brass Dragon",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 105,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Brass Dragon Wyrmling",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 106,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Bronze Dragon",
        "cr": 22,
        "sources": "Monster Manual",
        "Page": 107,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Young Bronze Dragon",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 108,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Bronze Dragon",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 108,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Bronze Dragon Wyrmling",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 109,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Copper Dragon",
        "cr": 21,
        "sources": "Monster Manual",
        "Page": 110,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Copper Dragon Wyrmling",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 111,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Copper Dragon",
        "cr": 14,
        "sources": "Monster Manual",
        "Page": 112,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Young Copper Dragon",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 112,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Gold Dragon",
        "cr": 24,
        "sources": "Monster Manual",
        "Page": 113,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Adult Gold Dragon",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 114,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Gold Dragon Wyrmling",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 115,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Gold Dragon",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 115,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Silver Dragon",
        "cr": 23,
        "sources": "Monster Manual",
        "Page": 116,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Adult Silver Dragon",
        "cr": 16,
        "sources": "Monster Manual",
        "Page": 117,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Silver Dragon Wyrmling",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 118,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Silver Dragon",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 118,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dragon Turtle",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 119,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Aarakocra",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 12,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drider",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 120,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dryad",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 121,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 122,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 128,
        "section": "Elves: Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Elite Warrior",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 128,
        "section": "Elves: Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Priestess of Lolth",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 129,
        "section": "Elves: Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Mage",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 129,
        "section": "Elves: Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Aboleth",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 13,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Empyrean",
        "cr": 23,
        "sources": "Monster Manual",
        "Page": 130,
        "section": "",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Ettin",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 132,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (blue)",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (green)",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (indigo)",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (orange)",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (red)",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (violet)",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Faerie Dragon (yellow)",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 133,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flumph",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 135,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fomorian",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 136,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gas Spore",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 138,
        "section": "Fungi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shrieker",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 138,
        "section": "Fungi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Galeb Duhr",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 139,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dao",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 143,
        "section": "Genies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Djinni",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 144,
        "section": "Genies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Efreeti",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 145,
        "section": "Genies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Marid",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 146,
        "section": "Genies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ghast",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 148,
        "section": "Ghouls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cloud Giant",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 154,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Storm Giant",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 156,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gibbering Mouther",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 157,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deva",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 16,
        "section": "Angels",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githyanki Knight",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 160,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githyanki Warrior",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 160,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githzerai Monk",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 161,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githzerai Zerth",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 161,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll Fang of Yeenoghu",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 163,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll Pack Lord",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 163,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deep Gnome (Svirfneblin)",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 164,
        "section": "Gnome, Deep (Svirfneblin)",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Goblin Boss",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 166,
        "section": "Goblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Clay Golem",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 168,
        "section": "Golems",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Planetar",
        "cr": 16,
        "sources": "Monster Manual",
        "Page": 17,
        "section": "Angels",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Iron Golem",
        "cr": 16,
        "sources": "Monster Manual",
        "Page": 170,
        "section": "Golems",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gorgon",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 171,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grell",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 172,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grick Alpha",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 173,
        "section": "Grick",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grimlock",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 175,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Green Hag",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 177,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Green Hag (coven)",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 177,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Night Hag",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 178,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Night Hag (coven)",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 178,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sea Hag (coven)",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 179,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sea Hag",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 179,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Solar",
        "cr": 21,
        "sources": "Monster Manual",
        "Page": 18,
        "section": "Angels",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Half-Red Dragon Veteran",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 180,
        "section": "Half-Dragon",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hobgoblin Warlord",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 187,
        "section": "Hobgoblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Homunculus",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 188,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hook Horror",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 189,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Intellect Devourer",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 191,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Invisible Stalker",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 192,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Jackalwere",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 193,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kenku",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 194,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kraken",
        "cr": 23,
        "sources": "Monster Manual",
        "Page": 197,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Kuo-toa",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 199,
        "section": "Kuo-toa",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kuo-toa Archpriest",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 200,
        "section": "Kuo-toa",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kuo-toa Whip",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 200,
        "section": "Kuo-toa",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lamia",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 201,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lich (in lair)",
        "cr": 22,
        "sources": "Monster Manual",
        "Page": 202,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Lich",
        "cr": 21,
        "sources": "Monster Manual",
        "Page": 202,
        "section": "",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Lizard King/Queen",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 205,
        "section": "Lizardfolk",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lizardfolk Shaman",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 205,
        "section": "Lizardfolk",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Werebear",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 208,
        "section": "Lycanthropes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wererat",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 209,
        "section": "Lycanthropes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wereboar",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 209,
        "section": "Lycanthropes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ankheg",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 21,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Weretiger",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 210,
        "section": "Lycanthropes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Magmin",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 212,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dust Mephit",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 215,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ice Mephit",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 215,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Magma Mephit",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 216,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mud Mephit",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 216,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Smoke Mephit",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 217,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Steam Mephit",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 217,
        "section": "Mephits",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Merrow",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 219,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Azer",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 22,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mimic",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 220,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mind Flayer",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 222,
        "section": "Mind Flayer",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mind Flayer Arcanist",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 222,
        "section": "Mind Flayer",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Monodrone",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 224,
        "section": "Modrons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duodrone",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 225,
        "section": "Modrons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tridrone",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 225,
        "section": "Modrons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pentadrone",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 226,
        "section": "Modrons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quadrone",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 226,
        "section": "Modrons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mummy Lord",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 229,
        "section": "Mummies",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Myconid Sprout",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 230,
        "section": "Myconids",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quaggoth Spore Servant",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 230,
        "section": "Myconids",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Myconid Adult",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 232,
        "section": "Myconids",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Myconid Sovereign",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 232,
        "section": "Myconids",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bone Naga",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 233,
        "section": "Nagas",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Guardian Naga",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 234,
        "section": "Nagas",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spirit Naga",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 234,
        "section": "Nagas",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nightmare",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 235,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Half-Ogre",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 238,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Oni",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 239,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Black Pudding",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 241,
        "section": "Oozes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gelatinous Cube",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 242,
        "section": "Oozes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc War Chief",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 246,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Eye of Gruumsh",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 247,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orog",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 247,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Behir",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 25,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Piercer",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 252,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pixie",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 253,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pseudodragon",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 254,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Purple Worm",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 255,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quaggoth",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 256,
        "section": "Quaggoth",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quaggoth Thonot",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 256,
        "section": "Quaggoth",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rakshasa",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 257,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Remorhaz",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 258,
        "section": "Remorhazes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Remorhaz",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 258,
        "section": "Remorhazes",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Revenant",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 259,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Roc",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 260,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rust Monster",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 262,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sahuagin",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 263,
        "section": "Sahuagin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sahuagin Baron",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 264,
        "section": "Sahuagin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sahuagin Priestess",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 264,
        "section": "Sahuagin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fire Snake",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 265,
        "section": "Salamanders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Salamander",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 266,
        "section": "Salamanders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Scarecrow",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 268,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shadow",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 269,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shield Guardian",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 271,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Minotaur Skeleton",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 273,
        "section": "Skeletons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warhorse Skeleton",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 273,
        "section": "Skeletons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Blue Slaad",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 276,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Red Slaad",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 276,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Slaad Tadpole",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 276,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gray Slaad",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 277,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Green Slaad",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 277,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Death Slaad",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 278,
        "section": "Slaadi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Poltergeist",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 279,
        "section": "Specter",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Beholder",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 28,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Beholder (in lair)",
        "cr": 14,
        "sources": "Monster Manual",
        "Page": 28,
        "section": "Beholders",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Androsphinx",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 281,
        "section": "Sphinxes",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Gynosphinx",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 282,
        "section": "Sphinxes",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Sprite",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 283,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Succubus/Incubus",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 285,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tarrasque",
        "cr": 30,
        "sources": "Monster Manual",
        "Page": 286,
        "section": "",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Thri-kreen",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 288,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Treant",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 289,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Death Tyrant",
        "cr": 14,
        "sources": "Monster Manual",
        "Page": 29,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Death Tyrant (in lair)",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 29,
        "section": "Beholders",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Umber Hulk",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 292,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Unicorn",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 294,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Vampire Spellcaster",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 298,
        "section": "Vampires",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Vampire Warrior",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 298,
        "section": "Vampires",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Water Weird",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 299,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wraith",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 302,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Xorn",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 304,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Abominable Yeti",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 306,
        "section": "Yeti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Abomination",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 308,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Arcanaloth",
        "cr": 12,
        "sources": "Monster Manual",
        "Page": 313,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mezzoloth",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 313,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ultraloth",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 314,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nycaloth",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 314,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Beholder Zombie",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 316,
        "section": "Zombies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre Zombie",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 316,
        "section": "Zombies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Needle Blight",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 32,
        "section": "Blights",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vine Blight",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 32,
        "section": "Blights",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bugbear Chief",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 33,
        "section": "Bugbears",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bulette",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 34,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Archmage",
        "cr": 12,
        "sources": "Monster Manual",
        "Page": 342,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bandit Captain",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 344,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cult Fanatic",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 345,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gladiator",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 346,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Druid",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 346,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tribal Warrior",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 350,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cambion",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 36,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Carrion Crawler",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 37,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Chuul",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 40,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cloaker",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 41,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Couatl",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 43,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Crawling Claw",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 44,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Darkmantle",
        "cr": "1/2",
        "sources": "Monster Manual",
        "Page": 46,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Death Knight",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 47,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Demilich",
        "cr": 18,
        "sources": "Monster Manual",
        "Page": 48,
        "section": "",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Demilich (in lair)",
        "cr": 20,
        "sources": "Monster Manual",
        "Page": 48,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Demilich (Acererak)",
        "cr": 21,
        "sources": "Monster Manual",
        "Page": 49,
        "section": "",
        "lair?": "",
        "legendary?": "legendary",
        "unique?": "unique"
    },
    {
        "name": "Demilich (Acererak in lair)",
        "cr": 23,
        "sources": "Monster Manual",
        "Page": 49,
        "section": "",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": "unique"
    },
    {
        "name": "Balor",
        "cr": 19,
        "sources": "Monster Manual",
        "Page": 55,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Barlgura",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 56,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Chasme",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 57,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dretch",
        "cr": "1/4",
        "sources": "Monster Manual",
        "Page": 57,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Glabrezu",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 58,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Goristro",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 59,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Manes",
        "cr": "1/8",
        "sources": "Monster Manual",
        "Page": 60,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hezrou",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 60,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Marilith",
        "cr": 16,
        "sources": "Monster Manual",
        "Page": 61,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nalfeshnee",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 62,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quasit",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 63,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shadow Demon",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 64,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vrock",
        "cr": 6,
        "sources": "Monster Manual",
        "Page": 64,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yochlol",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 65,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Barbed Devil",
        "cr": 5,
        "sources": "Monster Manual",
        "Page": 70,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bearded Devil",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 70,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bone Devil",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 71,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Chain Devil",
        "cr": 8,
        "sources": "Monster Manual",
        "Page": 72,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Erinyes",
        "cr": 12,
        "sources": "Monster Manual",
        "Page": 73,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Horned Devil",
        "cr": 11,
        "sources": "Monster Manual",
        "Page": 74,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ice Devil",
        "cr": 14,
        "sources": "Monster Manual",
        "Page": 75,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Lemure",
        "cr": 0,
        "sources": "Monster Manual",
        "Page": 76,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Imp",
        "cr": 1,
        "sources": "Monster Manual",
        "Page": 76,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Pit Fiend",
        "cr": 20,
        "sources": "Monster Manual",
        "Page": 77,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spined Devil",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 78,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Displacer Beast",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 81,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Blue Dracolich",
        "cr": 17,
        "sources": "Monster Manual",
        "Page": 84,
        "section": "Dracolich",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Young Red Shadow Dragon",
        "cr": 13,
        "sources": "Monster Manual",
        "Page": 85,
        "section": "Dragon, Shadow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Black Dragon",
        "cr": 21,
        "sources": "Monster Manual",
        "Page": 87,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Black Dragon Wyrmling",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 88,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Black Dragon",
        "cr": 7,
        "sources": "Monster Manual",
        "Page": 88,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Black Dragon",
        "cr": 14,
        "sources": "Monster Manual",
        "Page": 88,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Ancient Blue Dragon",
        "cr": 23,
        "sources": "Monster Manual",
        "Page": 90,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Blue Dragon Wyrmling",
        "cr": 3,
        "sources": "Monster Manual",
        "Page": 91,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Blue Dragon",
        "cr": 9,
        "sources": "Monster Manual",
        "Page": 91,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Green Dragon",
        "cr": 22,
        "sources": "Monster Manual",
        "Page": 93,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Adult Green Dragon",
        "cr": 15,
        "sources": "Monster Manual",
        "Page": 94,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Green Dragon Wyrmling",
        "cr": 2,
        "sources": "Monster Manual",
        "Page": 95,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ancient Red Dragon",
        "cr": 24,
        "sources": "Monster Manual",
        "Page": 97,
        "section": "Dragons",
        "lair?": "lair",
        "legendary?": "legendary",
        "unique?": ""
    },
    {
        "name": "Red Dragon Wyrmling",
        "cr": 4,
        "sources": "Monster Manual",
        "Page": 98,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Red Dragon",
        "cr": 10,
        "sources": "Monster Manual",
        "Page": 98,
        "section": "Dragons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Banderhobb",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 122,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Barghest",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 123,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Death Kiss",
        "cr": 10,
        "sources": "Volo's Guide to Monsters",
        "Page": 124,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gauth",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 125,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gazer",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 126,
        "section": "Beholders",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bodak",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 127,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Boggle",
        "cr": "1/8",
        "sources": "Volo's Guide to Monsters",
        "Page": 128,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Catoblepas",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 129,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cave Fisher",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 130,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Chitine",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 131,
        "section": "Chitines",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Choldrith",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 132,
        "section": "Chitines",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cranium Rat",
        "cr": 0,
        "sources": "Volo's Guide to Monsters",
        "Page": 133,
        "section": "Cranium Rats",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Cranium Rats",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 133,
        "section": "Cranium Rats",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Darkling",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 134,
        "section": "Darklings",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Darkling Elder",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 134,
        "section": "Darklings",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deep Scion",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 135,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Babau",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 136,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Maw Demon",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 137,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shoosuva",
        "cr": 8,
        "sources": "Volo's Guide to Monsters",
        "Page": 137,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Devourer",
        "cr": 13,
        "sources": "Volo's Guide to Monsters",
        "Page": 138,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Brontosaurus",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 139,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deinonychus",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 139,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dimetrodon",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 139,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hadrosaurus",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 140,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quetzalcoatlus",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 140,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stegosaurus",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 140,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Velociraptor",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 140,
        "section": "Dinosaurs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Draegloth",
        "cr": 7,
        "sources": "Volo's Guide to Monsters",
        "Page": 141,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Firenewt Warrior",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 142,
        "section": "Firenewts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Firenewt Warlock of Imix",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 143,
        "section": "Firenewts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giant Strider",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 143,
        "section": "Firenewts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flail Snail",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 144,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Froghemoth",
        "cr": 10,
        "sources": "Volo's Guide to Monsters",
        "Page": 145,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cloud Giant Smiling One",
        "cr": 11,
        "sources": "Volo's Guide to Monsters",
        "Page": 146,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fire Giant Dreadnought",
        "cr": 14,
        "sources": "Volo's Guide to Monsters",
        "Page": 147,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Frost Giant Everlasting One",
        "cr": 12,
        "sources": "Volo's Guide to Monsters",
        "Page": 148,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mouth of Grolantor",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 149,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stone Giant Dreamwalker",
        "cr": 10,
        "sources": "Volo's Guide to Monsters",
        "Page": 150,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Storm Giant Quintessent",
        "cr": 16,
        "sources": "Volo's Guide to Monsters",
        "Page": 151,
        "section": "Giants",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Girallon",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 152,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Flind",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 153,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll Flesh Gnawer",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 154,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll Hunter",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 154,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gnoll Witherling",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 155,
        "section": "Gnolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grung",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 156,
        "section": "Grungs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grung Elite Warrior",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 157,
        "section": "Grungs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Grung Wildling",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 157,
        "section": "Grungs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Annis Hag",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 159,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bheur Hag",
        "cr": 7,
        "sources": "Volo's Guide to Monsters",
        "Page": 160,
        "section": "Hags",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hobgoblin Devastator",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 161,
        "section": "Hobgoblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hobgoblin Iron Shadow",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 162,
        "section": "Hobgoblins",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ki-rin",
        "cr": 12,
        "sources": "Volo's Guide to Monsters",
        "Page": 163,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kobold Dragonshield",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 165,
        "section": "Kobolds",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kobold Inventor",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 166,
        "section": "Kobolds",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kobold Scale Sorcerer",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 167,
        "section": "Kobolds",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Korred",
        "cr": 7,
        "sources": "Volo's Guide to Monsters",
        "Page": 168,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Leucrotta",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 169,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Meenlock",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 170,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Alhoon",
        "cr": 10,
        "sources": "Volo's Guide to Monsters",
        "Page": 172,
        "section": "Mind Flayers",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mind Flayer Lich (Illithilich)",
        "cr": 22,
        "sources": "Volo's Guide to Monsters",
        "Page": 172,
        "section": "Mind Flayers",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Elder Brain",
        "cr": 14,
        "sources": "Volo's Guide to Monsters",
        "Page": 173,
        "section": "Mind Flayers",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ulitharid",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 175,
        "section": "Mind Flayers",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Mindwitness",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 176,
        "section": "Mind Flayers",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Morkoth",
        "cr": 11,
        "sources": "Volo's Guide to Monsters",
        "Page": 177,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Neogi Hatchling",
        "cr": "1/8",
        "sources": "Volo's Guide to Monsters",
        "Page": 179,
        "section": "Neogi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Neogi",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 180,
        "section": "Neogi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Neogi Master",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 180,
        "section": "Neogi",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Neothelid",
        "cr": 13,
        "sources": "Volo's Guide to Monsters",
        "Page": 181,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nilbog",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 182,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Blade of Ilneval",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 183,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Claw of Luthic",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 183,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Hand of Yurtrus",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 184,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Nurtured One of Yurtrus",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 184,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orc Red Fang of Shargaas",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 185,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tanarukk",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 186,
        "section": "Orcs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Quickling",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 187,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Redcap",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 188,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sea Spawn",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 189,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shadow Mastiff",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 190,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shadow Mastiff Alpha",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 190,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Slithering Tracker",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 191,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spawn of Kyuss",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 192,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tlingcalli",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 193,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Trapper",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 194,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vargouille",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 195,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vegepygmy",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 196,
        "section": "Vegepygmies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Thorny",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 197,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vegepygmy Chief",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 197,
        "section": "Vegepygmies",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wood Woad",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 198,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Xvart",
        "cr": "1/8",
        "sources": "Volo's Guide to Monsters",
        "Page": 200,
        "section": "Xvarts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Xvart Speaker",
        "cr": "1/8",
        "sources": "Volo's Guide to Monsters",
        "Page": 200,
        "section": "Xvarts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Xvart Warlock of Raxivort",
        "cr": 1,
        "sources": "Volo's Guide to Monsters",
        "Page": 200,
        "section": "Xvarts",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yeth Hound",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 201,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Anathema",
        "cr": 12,
        "sources": "Volo's Guide to Monsters",
        "Page": 202,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Broodguard",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 203,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Mind Whisperer",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 204,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Nightmare Speaker",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 205,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yuan-ti Pit Master",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 206,
        "section": "Yuan-ti",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Aurochs",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 207,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cow",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 207,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cow (Ox)",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 208,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dolphin",
        "cr": "1/8",
        "sources": "Volo's Guide to Monsters",
        "Page": 208,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rothe",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 208,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stench Kow",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 208,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swarm of Rot Grubs",
        "cr": "1/2",
        "sources": "Volo's Guide to Monsters",
        "Page": 208,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Abjurer",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 209,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Apprentice Wizard",
        "cr": "1/4",
        "sources": "Volo's Guide to Monsters",
        "Page": 209,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Archdruid",
        "cr": 12,
        "sources": "Volo's Guide to Monsters",
        "Page": 210,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Archer",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 210,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bard",
        "cr": 2,
        "sources": "Volo's Guide to Monsters",
        "Page": 211,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Blackguard",
        "cr": 8,
        "sources": "Volo's Guide to Monsters",
        "Page": 211,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Champion",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 212,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Conjurer",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 212,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Diviner",
        "cr": 8,
        "sources": "Volo's Guide to Monsters",
        "Page": 213,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Enchanter",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 213,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Evoker",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 214,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Illusionist",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 214,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kraken Priest",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 215,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Master Thief",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 216,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Martial Arts Adept",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 216,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Swashbuckler",
        "cr": 3,
        "sources": "Volo's Guide to Monsters",
        "Page": 217,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Necromancer",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 217,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "War Priest",
        "cr": 9,
        "sources": "Volo's Guide to Monsters",
        "Page": 218,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Transmuter",
        "cr": 5,
        "sources": "Volo's Guide to Monsters",
        "Page": 218,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warlock of the Archfey",
        "cr": 4,
        "sources": "Volo's Guide to Monsters",
        "Page": 219,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warlock of the Fiend",
        "cr": 7,
        "sources": "Volo's Guide to Monsters",
        "Page": 219,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warlock of the Great Old One",
        "cr": 6,
        "sources": "Volo's Guide to Monsters",
        "Page": 220,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Warlord",
        "cr": 12,
        "sources": "Volo's Guide to Monsters",
        "Page": 220,
        "section": "NPCs",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Allip",
        "cr": 5,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 116,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Astral Dreadnought",
        "cr": 21,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 117,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Balhannoth",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 119,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Berbalang",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 120,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Boneclaw",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 121,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Cadaver Collector",
        "cr": 14,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 122,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Choker",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 123,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bronze Scout",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 125,
        "section": "Clockworks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Iron Cobra",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 125,
        "section": "Clockworks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Oaken Bolter",
        "cr": 5,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 126,
        "section": "Clockworks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stone Defender",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 126,
        "section": "Clockworks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Corpse Flower",
        "cr": 8,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 127,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deathlock",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 128,
        "section": "Deathlock",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deathlock Mastermind",
        "cr": 8,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 129,
        "section": "Deathlock",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Deathlock Wight",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 129,
        "section": "Deathlock",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Alkilith",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 130,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Armanite",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 131,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bulezau",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 131,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dybbuk",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 132,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Maurezhi",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 133,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Molydeus",
        "cr": 21,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 134,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nabassu",
        "cr": 15,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 135,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rutterkin",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 136,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sibriex",
        "cr": 18,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 137,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Wastrilith",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 139,
        "section": "Demons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Baphomet",
        "cr": 23,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 143,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Demogorgon",
        "cr": 26,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 144,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fraz-Urb'luu",
        "cr": 23,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 145,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Graz'zt",
        "cr": 24,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 149,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Juiblex",
        "cr": 23,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 151,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orcus",
        "cr": 26,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 153,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yeenoghu",
        "cr": 24,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 155,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Zuggtmoy",
        "cr": 23,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 157,
        "section": "Demons: Demon Lords",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Derro",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 158,
        "section": "Derro",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Derro Savant",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 159,
        "section": "Derro",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Black Abishai",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 160,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Blue Abishai",
        "cr": 17,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 161,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Green Abishai",
        "cr": 15,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 162,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Red Abishai",
        "cr": 19,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 162,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "White Abishai",
        "cr": 6,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 163,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Amnizu",
        "cr": 18,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 164,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hellfire Engine",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 165,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Merregon",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 166,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Narzugon",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 167,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nupperibo",
        "cr": "1/2",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 168,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Orthon",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 169,
        "section": "Devils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Bael",
        "cr": 19,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 171,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Geryon",
        "cr": 22,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 173,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hutijin",
        "cr": 21,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 175,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Moloch",
        "cr": 21,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 177,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Titivilus",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 179,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Zariel",
        "cr": 26,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 181,
        "section": "Devils: Archdevils",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Arachnomancer",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 182,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Favored Consort",
        "cr": 18,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 183,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow House Captain",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 184,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Inquisitor",
        "cr": 14,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 184,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Matron Mother",
        "cr": 20,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 186,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Drow Shadowblade",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 187,
        "section": "Drow",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Despot",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 188,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Hammer",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 188,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Kavalrachni",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 189,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Mind Master",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 189,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Screamer",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 190,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Soulblade",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 190,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Stone Guard",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 191,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Warlord",
        "cr": 6,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 192,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Duergar Xarron",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 193,
        "section": "Duergar",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Eidolon",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 194,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Autumn Eladrin",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 195,
        "section": "Eladrin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spring Eladrin",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 196,
        "section": "Eladrin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Summer Eladrin",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 196,
        "section": "Eladrin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Winter Eladrin",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 197,
        "section": "Eladrin",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Leviathan",
        "cr": 20,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 198,
        "section": "Elder Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Phoenix",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 199,
        "section": "Elder Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Elder Tempest",
        "cr": 23,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 200,
        "section": "Elder Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Zaratan",
        "cr": 22,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 201,
        "section": "Elder Elementals",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Air Elemental Myrmidon",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 202,
        "section": "Elemental Myrmidons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Earth Elemental Myrmidon",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 202,
        "section": "Elemental Myrmidons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Fire Elemental Myrmidon",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 203,
        "section": "Elemental Myrmidons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Water Elemental Myrmidon",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 203,
        "section": "Elemental Myrmidons",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Giff",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 204,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githyanki Gish",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 205,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githyanki Kith'rak",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 205,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githyank Supreme Commander",
        "cr": 14,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 206,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githzerai Anarch",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 207,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Githzerai Enlightened",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 208,
        "section": "Gith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gray Render",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 209,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Howler",
        "cr": 8,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 210,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Young Kruthik",
        "cr": "1/8",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 211,
        "section": "Kruthiks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Kruthik",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 212,
        "section": "Kruthiks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Kruthik Hive Lord",
        "cr": 5,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 212,
        "section": "Kruthiks",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Marut",
        "cr": 25,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 213,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Meazel",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 214,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nagpa",
        "cr": 17,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 215,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Nightwalker",
        "cr": 20,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 216,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Oblex Spawn",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 217,
        "section": "Oblex",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Adult Oblex",
        "cr": 5,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 218,
        "section": "Oblex",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Elder Oblex",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 219,
        "section": "Oblex",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre Battering Ram",
        "cr": 4,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 220,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre Bolt Launcher",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 220,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre Chain Brute",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 221,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Ogre Howdah",
        "cr": 2,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 221,
        "section": "Ogres",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Retriever",
        "cr": 14,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 222,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Frost Salamander",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 223,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Gloom Weaver",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 224,
        "section": "Shadar-Kai",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Shadow Dancer",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 225,
        "section": "Shadar-Kai",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Soul Monger",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 226,
        "section": "Shadar-Kai",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Skulk",
        "cr": "1/2",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 227,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Skull Lord",
        "cr": 15,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 230,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "The Angry",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 231,
        "section": "Sorrowsworn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "The Hungry",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 232,
        "section": "Sorrowsworn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "The Lonely",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 232,
        "section": "Sorrowsworn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "The Lost",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 233,
        "section": "Sorrowsworn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "The Wretched",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 233,
        "section": "Sorrowsworn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Star Spawn Grue",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 234,
        "section": "Star Spawn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Star Spawn Hulk",
        "cr": 10,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 234,
        "section": "Star Spawn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Star Spawn Larva Mage",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 235,
        "section": "Star Spawn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Star Spawn Mangler",
        "cr": 5,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 236,
        "section": "Star Spawn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Star Spawn Seer",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 236,
        "section": "Star Spawn",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Female Steeder",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 238,
        "section": "Steeder",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Male Steeder",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 238,
        "section": "Steeder",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Steel Predator",
        "cr": 16,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 139,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Stone Cursed",
        "cr": 1,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 240,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sword Wraith Commander",
        "cr": 8,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 241,
        "section": "Sword Wraith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Sword Wraith Warrior",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 241,
        "section": "Sword Wraith",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Tortles",
        "cr": "1/4",
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 242,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dire Troll",
        "cr": 13,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 243,
        "section": "Trolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Rot Troll",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 244,
        "section": "Trolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Spirit Troll",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 244,
        "section": "Trolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Venom Troll",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 245,
        "section": "Trolls",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Vampiric Mist",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 246,
        "section": "",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Canoloth",
        "cr": 8,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 247,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Dhergoloth",
        "cr": 7,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 248,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Hydroloth",
        "cr": 9,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 249,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Merrenoloth",
        "cr": 3,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 250,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Oinoloth",
        "cr": 12,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 251,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    },
    {
        "name": "Yagnoloth",
        "cr": 11,
        "sources": "Mordenkainen's Tome of Foes",
        "Page": 252,
        "section": "Yugoloths",
        "lair?": "",
        "legendary?": "",
        "unique?": ""
    }
];

var cr_to_monster = {};

for (var i = 0; i < monsters.length; i++){
    //console.log("adding monsters: " + i.toString());
    var monster = monsters[i];
    var cr = monster["cr"].toString().trim();
    if (!(cr in cr_to_monster)){
        cr_to_monster[cr] = [];
    }
    console.log(monster["name"]);
    cr_to_monster[cr].push(monster);

}