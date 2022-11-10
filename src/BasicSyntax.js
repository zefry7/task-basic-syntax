export function romanToInteger(str) {
    let result = 0;

    let lengthStr = (str + '').length;

    while (lengthStr >= 1) {
        if ((str + '').includes('IV') == true) {
            result += 4;
            str = str.replace('IV', '');
        } else if ((str + '').includes('IX') == true) {
            result += 9;
            str = str.replace('IX', '');
        } else if ((str + '').includes('I') == true) {
            result += 1;
            str = str.replace('I', '');
        } else if ((str + '').includes('V') == true) {
            result += 5;
            str = str.replace('V', '');
        } else if ((str + '').includes('XL') == true) {
            result += 40;
            str = str.replace('XL', '');
        } else if ((str + '').includes('XC') == true) {
            result += 90;
            str = str.replace('XC', '');
        } else if ((str + '').includes('X') == true) {
            result += 10;
            str = str.replace('X', '');
        } else if ((str + '').includes('L') == true) {
            result += 50;
            str = str.replace('L', '');
        } else if ((str + '').includes('CD') == true) {
            result += 400;
            str = str.replace('CD', '');
        } else if ((str + '').includes('CM') == true) {
            result += 900;
            str = str.replace('CM', '');
        } else if ((str + '').includes('C') == true) {
            result += 100;
            str = str.replace('C', '');
        } else if ((str + '').includes('D') == true) {
            result += 500;
            str = str.replace('D', '');
        } else if ((str + '').includes('M') == true) {
            result += 1000;
            str = str.replace('M', '');
        }
        --lengthStr;
    }

    return result;
}
