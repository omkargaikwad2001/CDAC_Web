exports.isPrime=(n)=>{

    let flag = true;

    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=false;
        }
    }

    if(flag){
        return true;
    }
    else{
        return false;
    }

}

exports.calFact=(n)=>{

    let ans = 1;

    for(let i=1;i<=n;i++){
        ans*=i;
    }

    return ans;

}

exports.isPerfect=(n)=>{

    let sum = 0;

    for(let i=1;i<=n/2;i++){
        if(n%i==0){
            sum+=i;
        }
    }

    if(sum==n){
        return true;
    }
    else{
        return false;
    }

}