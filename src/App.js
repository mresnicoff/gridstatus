import {
  Box,
  Flex,
  SkeletonText,
  Text,
  Select,
} from '@chakra-ui/react'
import red from "./red.jpeg"
import verde from "./verde.jpeg"
import yellow from "./yellow.jpeg"
import SSEE from "./SSEE.png"
import subestaciones from"./subestaciones.json"
import valores from"./valores.json"
import cables from "./cables.json"
import {
  useJsApiLoader,
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline
} from '@react-google-maps/api'
import {  useState } from 'react'

const center = { lat: -34.603851, lng: -58.381775}

export default function App() {
  const [isOpen, setIsOpen]=useState(null)
  const [BIP, setBIP]=useState("Con BIP")
  const [miAño, setMiAño]=useState(2023)

  const handleChange=(e)=>{
    var añoElegido=parseInt(e.target.value)
    console.log(añoElegido)
 var  otrosValores=valores.filter(valor=>valor.tipo===BIP).map(valor=>valor.valores)[0].filter(valor=>valor.año===añoElegido).map(valor=>valor.valores)[0]
 setMiAño(parseInt(e.target.value))
 console.log(otrosValores)
 setMisValores(otrosValores)
}
const handleChange2=(e)=>{
  console.log("tipo:",e.target.value, "Año:", miAño )
  var  otrosValores=valores.filter(valor=>valor.tipo===e.target.value).map(valor=>valor.valores)[0].filter(valor=>valor.año===miAño).map(valor=>valor.valores)[0]
  setBIP(e.target.value)
  console.log(otrosValores)
  setMisValores(otrosValores)
 }

  const cagamos=()=>{
    setMisValores({"9 DE JULIO":10,
    ABASTO:10,
    ALBERDI:10,
    BROWN:10,
    AUTODROMO:10,
    AZCUENAGA:10,
    AZOPARDO:10,
    BALCARCE:10,
    BANFIELD:10,
    BARRACAS:10,
    BLANCO:10,
    BURZACO:10,
    PELLEGRINI:10,
    CABALLITO:10,
    CALCHAQUI:10,
    CALZADA:10,
    CAÑUELAS:10,
    CENTENARIO:10,
    CHARCAS:10,
    CONSTITUCION:10,
    CORINA:10,
    COSTANERA:10,
    DEVOTO:10,
    EZEIZA:10,
    HERNANDARIAS:10,
    LURO:10,
    PARANA:10,
    POMPEYA:10,
    QUIROGA:10,
    RIVADAVIA:10,
    RIGOLLEAU:10,
    ALSINA:10,
    VARELA:10,
    SARANDI:10,
    TEMPERLEY:10,
    GLEW:10,
    SHELL:10,
    ECHEVERRIA:10,
    EZPELETA:10,
    GERLI:10,
    INDEPENDENCIA:10,
    LINIERS:10,
    CHINGOLO:10,
    NOVAK:10,
    POZOS:10,
    RECONQUISTA:10,
    SOBRAL:10,
    TRANSRADIO:10,
    HUDSON:10,
    ANGELETTI:10,
    MATANZA:10,
    ESCALADA:10,
    FALCON:10,
    GUTIERREZ:10,
    LUGANO:10,
    ONCE:10,
    PATRICIOS:10,
    PIÑEYRO:10,
    QUILMES:10,
    IGOLLEAU:10,
    SPEGAZZINI:10,
    WILDE:10,
    TUCUMAN:10,
    BOSQUES:10,
    AGRONOMIA:10,
    ROCA:10
    }
    
    )
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const estosValores=valores.filter(valor=>valor.tipo==="Con BIP").map(valor=>valor.valores)[0].filter(valor=>valor.año===2023).map(valor=>valor.valores)[0]
  console.log(estosValores)
const [misValores,setMisValores]=useState(estosValores)




  if (!isLoaded) {
    return <SkeletonText />
  }

  let iconMarker = new window.google.maps.MarkerImage(
    "./SSEE.png",
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(32, 32)
);

const ezeCan={key:1, path: [
  {lat: -34.9099178046, lng: -58.7233948298},
  {lat: -35.0525872709, lng: -58.7478654953}
]};

  return (
    <>
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={7}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: [{  featureType: "poi", stylers: [{ visibility: "off", }]},{featureType: 'transit',stylers: [{visibility: 'off'}] },
                 {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]

          }}
          onLoad={map => setMap(map)}
        >

 
{cables.cables.map(linea=>         ( <Polyline  onClick={(e)=>{var position={lat:e.latLng.lat(), lng:e.latLng.lng()}
var se={}
se.nombre=linea.codigo
se.posicion=position
setIsOpen(se)
}}       path={linea.subestaciones.map(ssee=>subestaciones.subestaciones.filter(se=>se.nombre===ssee)[0]).map(ssee=>ssee.posicion)}/>))}

          {subestaciones.subestaciones.map((se)=>(
     
     misValores[se.nombre]&&     <Marker position={se.posicion}
          icon={!misValores[se.nombre]?SSEE:misValores[se.nombre]>80?red:misValores[se.nombre]>60?yellow:verde}
          title={se.nombre}  onClick={()=>{
            se.misValores=misValores[se.nombre]
            setIsOpen(se)}} >
          
       </Marker>  

            ))
            
            }

{isOpen &&(	 <InfoWindow 
  position={isOpen.posicion}
  onCloseClick={() => {
    setIsOpen(null);
 }}>
			       <Box            p={4}
        borderRadius='lg'
        m={4}
        bgColor="blue.800"
        color="yellow"
        shadow='base'
        zIndex='1'><h1>{`Elemento: ${isOpen.nombre}`}</h1>
     { isOpen.misValores &&  <h2> {`Estado= ${isOpen.misValores} %`}</h2>}</Box>
		 </InfoWindow>)}

        </GoogleMap>
      </Box>
      <Box           w="20%" p={4}
        borderRadius='lg'
        m={4}
        bgColor="blue.800"
        color="yellow"
        shadow='base'
        minW='container.md'
        zIndex='1'>
  <Text fontSize='3xl'  p="10px"> HV-HV condicion N</Text>
      
      <Select w="20%" placeholder='año' onChange={(e)=>handleChange(e)}>
  <option value='2023'>2023</option>
  <option value='2024'>2024</option>
  <option value='2025'>2025</option>
  <option value='2026'>2026</option>
  <option value='2027'>2027</option>
</Select>
<Select w="20%" placeholder='BIP' onChange={(e)=>handleChange2(e)}>
  <option value='Con BIP' >Con BIP</option>
  <option value='Sin BIP'>Sin BIP</option>

</Select>
      </Box>

    </Flex>
    </>)
}
