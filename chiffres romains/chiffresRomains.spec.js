const toRoman = require('./chiffresRomains')

describe('toRoman', function() {

    it('should return I for one', function() {
        expect(toRoman(1)).toEqual('I')
    })

    it('should return V for five', function() {
        expect(toRoman(5)).toEqual('V')
    }) 

    it('should return X for ten', function() {
        expect(toRoman(10)).toEqual('X')
    })

    it('should return L for fifty', function() {
        expect(toRoman(50)).toEqual('L')
    })

    it('should return C for one hundred', function() {
        expect(toRoman(100)).toEqual('C')
    })

    it('should return D for five hundred', function() {
        expect(toRoman(500)).toEqual('D')
    })

    it('should return M for one thousand', function() {
        expect(toRoman(1000)).toEqual('M')
    })
    
    it('should return II for two', function() {
        expect(toRoman(2)).toEqual('II')
    })

    it('should return III for three', function() {
        expect(toRoman(3)).toEqual('III')
    })

    it('should return IV for four', function() {
        expect(toRoman(4)).toEqual('IV')
    })

    it('should return VI for six', function() {
        expect(toRoman(6)).toEqual('VI')
    })

    it('should return VII for seven', function() {
        expect(toRoman(7)).toEqual('VII')
    })

    it('should return VIII for eight', function() {
        expect(toRoman(8)).toEqual('VIII')
    })

    it('should return IX for nine', function() {
        expect(toRoman(9)).toEqual('IX')
    })

    it('should return XIV for fourteen', function() {
        expect(toRoman(14)).toEqual('XIV')
    })

    it('should return XXII for twenty-two', function() {
        expect(toRoman(22)).toEqual('XXII')
    })

    it('should return XXXVII for thirty-seven', function() {
        expect(toRoman(37)).toEqual('XXXVII')
    })

    it('should return XXX for thirty', function() {
        expect(toRoman(30)).toEqual('XXX')
    })

    it('should return XL for fourty', function() {
        expect(toRoman(40)).toEqual('XL')
    })

    it('should return XLIV for fourty-four', function() {
        expect(toRoman(44)).toEqual('XLIV')
    })

    it('should return XLIX for fourty-nine', function() {
        expect(toRoman(49)).toEqual('XLIX')
    })

    it('should return LXXVII for fourty-four', function() {
        expect(toRoman(77)).toEqual('LXXVII')
    })

    it('should return XC for ninety', function() {
        expect(toRoman(90)).toEqual('XC')
    })

    it('should return XCIV for 94', function() {
        expect(toRoman(94)).toEqual('XCIV')
    })

    it('should return XCV for 95', function() {
        expect(toRoman(95)).toEqual('XCV')
    })

    it('should return XCIX for 99', function() {
        expect(toRoman(99)).toEqual('XCIX')
    })

    it('should return CCXCIV for 294', function() {
        expect(toRoman(294)).toEqual('CCXCIV')
    })

    it('should return CDXL for 440', function() {
        expect(toRoman(440)).toEqual('CDXL')
    })

    it('should return CCXCIV for 294', function() {
        expect(toRoman(294)).toEqual('CCXCIV')
    })

    it('should return DCCXCII for 792', function() {
        expect(toRoman(792)).toEqual('DCCXCII')
    })

    it('should return CM for 900', function() {
        expect(toRoman(900)).toEqual('CM')
    })

    it('should return MMMM for 4000', function() {
        expect(toRoman(4000)).toEqual('MMMM')
    })

    it('should return MMMMDCCXCIV for 4794', function() {
        expect(toRoman(4794)).toEqual('MMMMDCCXCIV')
    })

    it('should return MMMMI for 4001', function() {
        expect(toRoman(4001)).toEqual('MMMMI')
    })

    it('should return MMMMCMXCIX for 4999', function() {
        expect(toRoman(4999)).toEqual('MMMMCMXCIX')
    })    
})