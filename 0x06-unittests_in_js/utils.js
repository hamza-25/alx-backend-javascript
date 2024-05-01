class Utils{
    static calculateNumber = (type, a, b) => {
        let num1 = Math.round(a);
        let num2 = Math.round(b);
        if (type == 'SUM'){
            return (num1 + num2);
        }
        if (type == 'SUBTRACT'){
            return (num1 - num2);
        }
        if (type == 'DIVIDE' && num2 != 0){
            return (num1 / num2);
        }
        return 'Error';
    };
}

module.exports = Utils;