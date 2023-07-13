 subestaciones=require("./subestaciones.json")
const corregidos=[]
var corregido={}
for(let i=0; i<subestaciones.subestaciones.length;i++)

{corregido={}
    corregido.nombre=subestaciones.subestaciones[i].nombre
    corregido.numero=subestaciones.subestaciones[i].numero
    corregido.tension=subestaciones.subestaciones[i].tension
    corregido.direccion=subestaciones.subestaciones[i].direccion
    corregido.posicion={lat:subestaciones.subestaciones[i].latitud, lng:subestaciones.subestaciones[i].longitud}
corregidos.push(corregido)
}
console.log(JSON.stringify(corregidos))


