function countLetter(str) {
    let lowerStr = str.toLowerCase();
    // console.log(lowerStr)

    let count = 0

    for (let i = 0; i < lowerStr.length; i ++) {
        if( lowerStr[i] === 'a') {
            count += 1;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vezes na string.`)
    } else {
        console.log("A letra 'a' não ocorre na string.");
    }
}

countLetter('A minha casa')