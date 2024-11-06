//print the numbers from -1 to -10
num=+prompt("Enter a Number:")
for(i=-1;!(i<=num);i--){
    console.log(i)
}

//print the numbers from -10 to -1
num=+prompt("Enter a Number:")
for(i=num;!(i>-1);i++){
    console.log(i)
}

//wap to print sum of even digits in a number
num=prompt("Enter a Number:")
sum=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        sum=sum+(+num[i])
    }
}
console.log(sum)


//wap to print sum of odd digits in a number
num=prompt("Enter a Number:")
sum=0
for(i=0;i<num.length;i++){
    if(num[i]%2==1){
        sum=sum+(+num[i])
    }
}
console.log(sum)



