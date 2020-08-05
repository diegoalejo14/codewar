function zeros (n) {
  return trailing(n)
}

function trailing(num){
 let sum=0
 let pot=1
 while(num/Math.pow(5,pot)>=1){
  sum+=Math.floor(num/Math.pow(5,pot))
  pot++
 }

 return sum
}


module.exports=zeros



