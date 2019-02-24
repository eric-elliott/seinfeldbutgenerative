require('rita');

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stripComma(string) {
    string.replace("!,", "! ");
    string.replace("?,", "? ");
    string.replace(".,", ". ");
    string.replace(".... ", "... ");
    string.replace("..... ", "... ");
    string.replace(". . ", "... ");
    string.replace(". .", "... ");
    string.replace(". .", "... ");
    string.replace(". . .", "... ");
    string.replace("\"!", "!");
    return string;
}

setting = document.getElementById("setting");
var set_num = getRandomInt(0, 1);
if(set_num == 0) {
    setting.innerHTML = "INT. MONK'S CAFE - DAY"
}
else {
    setting.innerHTML = "INT. JERRY'S APARTMENT - DAY"
}

const num_lines = getRandomInt(20, 35);

var mark = getRandomInt(2, 4);

jerry_gen = new RiMarkov(mark);
jerry_gen.loadText(jerry_data);
george_gen = new RiMarkov(mark);
george_gen.loadText(george_data);
elaine_gen = new RiMarkov(mark);
elaine_gen.loadText(elaine_data);
kramer_gen = new RiMarkov(mark);
kramer_gen.loadText(kramer_data);

var prev_speaker = null;
for(i = 0; i < num_lines; i++) {
    var speaker = getRandomInt(0, 3);
    var sen_num = getRandomInt(1, 3);
    if(speaker === prev_speaker) {
        continue;
    }
    var line = null;
    var head = null;
    switch(speaker) {
        // jerry
        case 0:
            head = "JERRY";
            line = jerry_gen.generateSentences(sen_num);
            line = line.join(' ');
            line = stripComma(line);
            break;
        // george
        case 1:
            head = "GEORGE";
            line = george_gen.generateSentences(sen_num);
            line = line.join(' ');
            line = stripComma(line);
            break;
        // elaine
        case 2:
            head = "ELAINE";
            line = elaine_gen.generateSentences(sen_num);
            line = line.join(' ');
            line = stripComma(line);
            break;
        // kramer
        case 3:
            head = "KRAMER";
            line = kramer_gen.generateSentences(sen_num);
            line = line.join(' ');
            line = stripComma(line);
            break;
        default:
            break;
    }
    prev_speaker = speaker;
    var h = document.createElement("p");
    h.setAttribute("class", "speaker");
    h.innerHTML = head;
    document.body.appendChild(h);
    var par = document.createElement("p");
    par.innerHTML = line;
    document.body.appendChild(par);
}