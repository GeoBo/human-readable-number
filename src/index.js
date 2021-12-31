module.exports = function toReadable (number) {
    let n = number.toString();
    let phrase ='';

    if (n[n.length-4] > 0) phrase += " " + thousands (n[n.length-4]);
    if (n[n.length-3] > 0) phrase += " " + hundreds (n[n.length-3]);
    if (n[n.length-2] > 0) phrase += " " + tens (n.slice (n.length-2));
    if (n.length == 1 || n.length > 1 && n[n.length-1] != 0 && n[n.length-2] == 0) phrase += " " + units (n[n.length-1]);

    return phrase.trim();
}

function units (n){
    return ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][n];
};

function tens (n){
    if (n >= 10 && n <= 19)
        return ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][n-10];
    else {
        let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][Math.floor(n/10 - 2)];
        if (n[1] == 0)
            return tens;
        else 
            return tens + ' ' + units(n[1]);
     }
};

function hundreds (n){
    return units (n) + ' hundred';
}

function thousands (n){
    return units (n) + ' thousand';
}