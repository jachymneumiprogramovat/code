var ans = []
let obj = {}

//calculating the gues of the outcome
let dices = 5;
let values = [1,2,3,4,5,6]
let avg = values.reduce((sum, curr)=>{return sum+curr})/values.length
let exp = avg*dices
console.log(exp, avg)

//trying every posible combination
for(let i5=0;i5<=values.length-1;i5++){
    for(let iiii=0;iiii<=values.length-1;iiii++){
        for(let iii=0;iii<=values.length-1;iii++){
            for(let i=0;i<=values.length-1;i++){
                for(let ii=0;ii<=values.length-1;ii++){
                    let sum = values[i]+values[ii]+values[iii]+values[iiii]+values[i5]
                    if(!ans.includes(sum)){
                        obj[sum]=0

                    }
                    else if(ans.includes(sum)){
                        sum = sum.toString()
                        obj[sum]+=1
                    }
                    sum = parseInt(sum)
                    ans.push(sum)
                }
            }
        }
    }
}
console.log(obj)
