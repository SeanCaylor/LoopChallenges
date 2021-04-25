//Loop Challenge 1
function printOdds1to20 (){
    for (var i = 1; i <= 20; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

//Loop Challenge 2
function printSequence() {
    var sequenceArr = [4, 2.5, 1, -0.5, -2, -3.5]
    for (let i = 0; i < sequenceArr.length; i++) {
        console.log(sequenceArr[i])
    }
}

function printSequenceAlt() {
    var sequenceArr = [4, 2.5, 1, -0.5, -2, -3.5];
    var printingArr = [];
    
    for (let i = 0; i < sequenceArr.length; i++) {
        printingArr[i] = sequenceArr[i];
    }
    console.log(printingArr)
}

//Loop Challenge 3

function sigma(){
    var i = 1;
    var sum = 0
    
    while (i <= 100) {
        if (i != 100) {
            console.log(i + " +");
        }
        else {
            console.log(i + " =")
        }
        sum += i;
        i++;
    }
    console.log(sum);
}

//Loop Challenge 4

function factorial(){
    var product = 1;
    var n = 0;

    while (product <= 1e8){
        n++;
        product *= n;    
    }
    console.log(n);
}