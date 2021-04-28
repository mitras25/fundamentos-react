function mega(qtde){
    const numeros = []

    for(let i= 0; i < qtde; i++){
         const num = parseInt(Math.random() * 60) +1 
         if(numeros.indexOf(num)<0){
            numeros.push(num)
         }else{
             i--
         }
    }
    numeros.sort()
  console.log(numeros)
}

mega(6)