var s = "Впрочем, это уже совсем другая история";

var v = '';

var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];


for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
        v = v + s[i];
    } 
}

console.log(v);