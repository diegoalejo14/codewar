function sumStrings(a,b) { 
  let max=a.length>b.length?a.length:b.length
  a=a.padStart(max,'0')
  b=b.padStart(max,'0')
  let acum=0
  let res=[]
  for(let i=max-1;i>=0;i--){
   let val=parseInt(a.charAt(i))+parseInt(b.charAt(i))+acum
   if(val<10){
	acum=0
   }else{
	acum=1
	val=val-10
	
   } 
   res.push(val)
 }
 if(acum>0){
	res.push(acum)
 }
 return res.reverse().join('').replace(/^0+/, "")
}



function reverseString(str){
 return str.split('').reverse().join('')
}


module.exports=sumStrings
