const valores=require("./valores.json")
//const cables=require("./cables.json")

//const misValores=valores.filter(año=>año.numero===2022).map(año=>año.valores)

const estosValores=valores.filter(valor=>valor.tipo==="Con BIP").map(valor=>valor.valores)[0].filter(valor=>valor.año===2023).map(valor=>valor.valores)[0]
console.log(estosValores)
// var misLineas=[]
// var diego
// for(let i=0;i<cables.cables.length;i++){
//    diego=[]
 //   console.log(i)
 //diego=cables.cables[i].subestaciones.map(ssee=>subestaciones.subestaciones.filter(se=>se.nombre===ssee)[0]).map(ssee=>ssee.posicion)
// misLineas.push(diego)}
// console.log(misLineas)   
//const diego=cables.cables.map(linea=>linea.subestaciones.map(ssee=>subestaciones.subestaciones.filter(se=>se.nombre===ssee)[0]).map(ssee=>ssee.posicion))
//const diego=subestaciones.subestaciones.map(ssee=>`${ssee.nombre}:10`)
//console.log(diego)
  

//console.log(diego)

//const diego=cables.cables.map(linea=>linea.subestaciones.map(ssee=>subestaciones.subestaciones.filter(se=>se.nombre===ssee)[0]).map(ssee=>ssee.posicion))