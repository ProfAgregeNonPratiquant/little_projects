const toRoman = function(n) {

    const regular = [1, 5, 10, 50, 100, 500, 1000]
    const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let result = ''
    
    if (n === 0) return ''


    //////////////////////////////////
    // Traite tous les cas triviaux //
    //////////////////////////////////

    for (let i = 0; i < 7; i++) {
        if (n === regular[i]) return roman[i]  
    }


    ///////////////////////////////////////////////////
    // Traite tous les cas non triviaux jusqu'à 1000 //
    ///////////////////////////////////////////////////  

    for (let i = 2; i < 7; i += 2) {
        if (n < regular[i-1]) {
            if (n < regular[i-1] - regular[i-2]) {
                while (n > regular[i-2]) {
                    result += roman[i-2]
                    n -= regular[i-2]
                }
                return result + toRoman(n) 
            }
            else {
                return roman[i-2] + roman[i-1]  + toRoman(n - regular[i-1] + regular[i-2])
            }
        }
        
        if (n < regular[i]) {
            if ( n < regular[i] - regular[i-2]) return roman[i-1] + toRoman(n - regular[i-1])
            else return roman[i-2] + roman[i] + toRoman(n - regular[i] + regular[i-2] )
        }
    }


    ////////////////////////////////////////
    // Traite tous les cas au dela de 1000//
    ////////////////////////////////////////

    while (n >= 1000) {
        result += 'M'
        n -= 1000 
    }
    return result + toRoman(n)   
}

module.exports = toRoman