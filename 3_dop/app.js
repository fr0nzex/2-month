const a = prompt("Напишите первое слово!")
const b = prompt("Напишите второе слово!")

function calcSam(a, b, less, more, equals){
    let first = a;
    let second = b;

    if(first.length > second.length){
        more()
    } else if(first.length < second.length){
        less();
    } else {
        equals();
    }
}

function more(){
    console.log(a + " > " + b + "Первое слово больше чем второй");
}

function less(){
    console.log( a + "<" + b + "Первое слово меньше второй" );
}

function equals(){
    console.log(a + "=" + b + "Они равны");
}

calcSam(a, b, less, more, equals);