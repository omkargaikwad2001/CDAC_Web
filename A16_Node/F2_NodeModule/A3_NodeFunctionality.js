// return only prime from accepted array
function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    let flag = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            flag = false;
        }
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }

}

exports.getPrimes = (n) => {
    let primeArr = [];
    for (let i = 0; i < n.length; i++) {
        if (isPrime(n[i])) {
            primeArr.push(n[i]);
        }
    }

    return primeArr;

}

//longest string
exports.longestString = (strArr) => {

    let maxStr = strArr[0];
    var ind = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > maxStr.length) {
            maxStr = strArr[i];
            ind = i;
        }
    }

    return strArr[ind];

}

//get curdate
exports.getdateAndTime = () => {

    let yrname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", ""]
    let curdate = new Date();

    let ans = "";

    ans+=curdate.getDate();
    let month = curdate.getMonth();
    ans+=" "+yrname[month];
    ans+=" "+curdate.getFullYear();
    ans+=" "+curdate.toLocaleTimeString();

    return ans;

}