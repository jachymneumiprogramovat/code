var ans = []
let obj = {}
for(let i5=1;i5<=6;i5++){
    for(let iiii=1;iiii<=6;iiii++){
        for(let iii=1;iii<=6;iii++){
            for(let i=1;i<=6;i++){
                for(let ii=1;ii<=6;ii++){
                    let sum = i+ii+iii+iiii+i5
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
//if you are not dumb as i am you can just multiply the number of dices by 3,5 and you will get the result. If it is in the middle of two numberes then it is both of them.
