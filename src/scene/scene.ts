import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  PointLight,
  LineBasicMaterial,
  Mesh,
  //SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  BoxGeometry,
  //PolyhedronGeometry,
} from "three"

import { updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"
export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})


const light = new PointLight( "#ffff", 50, 100 );
light.position.set( 10, 10, 10 );
scene.add(light);


const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

//scene.add(directionalLight)

const PARAMS = {
  predio_1: "#ABABAB",
  comercio_1: "#008E89",
  comercio_2: "#0F9700",
  torso: "#0E0E0E",
  solo_2: "#00340",
  perna_esq: "#0E0E0E",
  perna_dir: "#0E0E0E",
  head: "#CB946F",
  pescoco: "#CB946F",
  braco_esq: "#CB946F",
  braco_dir: "#CB946F",
  manga_dir: "#0E0E0E",
  manga_esq: "#0E0E0E",
  torso_pernas: "#0E0E0E",
  masc: "#0E0E0E",
  pe_esq: "#373737",
  pe_dir: "#373737",
}


const head = new Mesh(
  new BoxGeometry(1, 1.15, 1),
  new LineBasicMaterial( {
    color: "#CB946F",
    linewidth: 1,
    linecap: 'round', 
    linejoin:  'round' 
  } )
)

head.position.set(0, 4.9, 0)
head.castShadow = true



const masc = new Mesh(
  new BoxGeometry(1.1, 0.6, 1.1),
  new LineBasicMaterial( {
    color: "#0E0E0E",
    linewidth: 1,
    linecap: 'round', 
    linejoin:  'round' 
  } )
)

masc.position.set(0, 4.55, 0)
masc.castShadow = true


const pescoco = new Mesh(
  new BoxGeometry(0.5, 0.5, 0.5),
  new LineBasicMaterial( {
    color: "#CB946F",
    linewidth: 1,
    linecap: 'round', 
    linejoin:  'round' 
  } )
)

pescoco.position.set(0, 4.2, 0)
pescoco.castShadow = true




const predio_1 = new Mesh(
  new BoxGeometry(15, 23, 15,),
  new MeshToonMaterial({
    color: new Color(PARAMS.predio_1),
    wireframe: false,
  })
)

predio_1.position.set(-18, 10, -15)
predio_1.castShadow = true



const comercio_1 = new Mesh(
  new BoxGeometry(15, 11, 15,),
  new MeshToonMaterial({
    color: new Color(PARAMS.comercio_1),
    wireframe: false,
  })
)

comercio_1.position.set(-20, 4.7, 5)
comercio_1.castShadow = true




const comercio_2 = new Mesh(
  new BoxGeometry(20, 0.8, 60,),
  new MeshToonMaterial({
    color: new Color(PARAMS.comercio_2),
    wireframe: false,
  })
)

comercio_2.position.set(20, -0.5, 0)
comercio_2.castShadow = true




const torso = new Mesh(
  new BoxGeometry(1.27, 2, 1.27),
  new MeshToonMaterial({
    color: new Color(PARAMS.torso),  
    wireframe: false,
  })
)

torso.position.set(0, 3, 0)
torso.castShadow = true


const torso_pernas = new Mesh(
  new BoxGeometry(1.18, 1, 1.18),
  new MeshToonMaterial({
    color: new Color(PARAMS.torso_pernas),  
    wireframe: false,
  })
)

torso_pernas.position.set(0, 1.7, 0)
torso_pernas.castShadow = true



const perna_esq = new Mesh(
  new BoxGeometry(0.48, 2, 0.7),
  new MeshToonMaterial({
    color: new Color(PARAMS.perna_esq),  
    wireframe: false,
  })
)

perna_esq.position.set(-0.35, 0.2, 0)
perna_esq.castShadow = true




const pe_esq = new Mesh(
  new BoxGeometry(0.51, 0.4, 0.75),
  new MeshToonMaterial({
    color: new Color(PARAMS.pe_esq),  
    wireframe: false,
  })
)

pe_esq.position.set(-0.35, -0.6, 0.25)
pe_esq.castShadow = true


const pe_dir = new Mesh(
  new BoxGeometry(0.51, 0.4, 0.75),
  new MeshToonMaterial({
    color: new Color(PARAMS.pe_dir),  
    wireframe: false,
  })
)

pe_dir.position.set(0.35, -0.6, 0.25,)
pe_dir.castShadow = true

const perna_dir = new Mesh(
  new BoxGeometry(0.48, 2, 0.7),
  new MeshToonMaterial({
    color: new Color(PARAMS.perna_dir),  
    wireframe: false,
  })
)

perna_dir.position.set(0.35, 0.2, 0)
perna_dir.castShadow = true




const braco_esq = new Mesh(
  
  new BoxGeometry(0.5, 1.7, 0.5),
  new LineBasicMaterial( {
    color: "#CB946F",
    linewidth: 1,
    linecap: 'round', 
    linejoin:  'round' 
  } )
  
)
braco_esq.rotation.set(-Math.PI / 1, 0, 0.17)
braco_esq.position.set(-0.97, 2.85, 0)
braco_esq.castShadow = true




const braco_dir = new Mesh(
  
  new BoxGeometry(0.5, 1.7, 0.5),
  new LineBasicMaterial( {
    color: "#CB946F",
    linewidth: 1,
    linecap: 'round', 
    linejoin:  'round' 
  } )
  
)
braco_dir.rotation.set(-Math.PI / 1, 0, -0.17)
braco_dir.position.set(0.97, 2.85, 0)
braco_dir.castShadow = true


const manga_dir = new Mesh(
  
  new BoxGeometry(0.6, 0.6, 0.6),
  new MeshToonMaterial({
    color: new Color(PARAMS.manga_dir),  
    wireframe: false,
    
  })
  
)
manga_dir.rotation.set(-Math.PI / 1, 0, -0.17)
manga_dir.position.set(0.88, 3.74, 0)
manga_dir.castShadow = true


const manga_esq = new Mesh(
  
  new BoxGeometry(0.6, 0.6, 0.6),
  new MeshToonMaterial({
    color: new Color(PARAMS.manga_esq),  
    wireframe: false,
    
  })
  
)
manga_esq.rotation.set(-Math.PI / 1, 0, 0.17)
manga_esq.position.set(-0.88, 3.74, 0)
manga_esq.castShadow = true



const LightControl = gui.addFolder({
  title: "Luz Pontual",
})

LightControl.addInput(light.position, "x", {
  label: "pos x",
  min: -6,
  max: 6,
  step: 0.1,
})
LightControl.addInput(light.position, "y", {
  label: "pos y",
  min: -6,
  max: 6,
  step: 0.1,
})
LightControl.addInput(light.position, "z", {
  label: "pos z",
  min: -6,
  max: 6,
  step: 0.1,
})



scene.add(predio_1)
scene.add(comercio_1)
scene.add(comercio_2)
scene.add(torso)
scene.add(perna_esq)
scene.add(perna_dir)
scene.add(head)
scene.add(pescoco)
scene.add(braco_esq)
scene.add(braco_dir)
scene.add(manga_dir)
scene.add(manga_esq)
scene.add(torso_pernas)
scene.add(masc)
scene.add(pe_esq)
scene.add(pe_dir)


const plane = new Mesh(
  new PlaneGeometry(60, 60, 60, 60),
  new MeshToonMaterial({
    color: new Color("#0D0D0D"),
  })
)
plane.position.set(0, -0.79, 0)
plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)


const rua = new Mesh(
  new PlaneGeometry(15, 50, 30, ),
  new MeshToonMaterial({
    color: new Color("#4A4A4A"),
  })
)
rua.position.set(0, -0.78, -5)
rua.receiveShadow = true
rua.rotation.set(-Math.PI / 2, 0, 0)
scene.add(rua)


const listra_1 = new Mesh(
  new PlaneGeometry(2, 6, 30, ),
  new MeshToonMaterial({
    color: new Color("#D8CA00"),
  })
)
listra_1.position.set(0, -0.77, -12)
listra_1.receiveShadow = true
listra_1.rotation.set(-Math.PI / 2, 0, 0)
scene.add(listra_1)



const listra_2 = new Mesh(
  new PlaneGeometry(2, 6, 30, ),
  new MeshToonMaterial({
    color: new Color("#D8CA00"),
  })
)
listra_2.position.set(0, -0.77, 0)
listra_2.receiveShadow = true
listra_2.rotation.set(-Math.PI / 2, 0, 0)
scene.add(listra_2)



const listra_3 = new Mesh(
  new PlaneGeometry(2, 6, 30, ),
  new MeshToonMaterial({
    color: new Color("#D8CA00"),
  })
)
listra_3.position.set(0, -0.77, 12)
listra_3.receiveShadow = true
listra_3.rotation.set(-Math.PI / 2, 0, 0)
scene.add(listra_3)



const listra_4 = new Mesh(
  new PlaneGeometry(2, 6, 30, ),
  new MeshToonMaterial({
    color: new Color("#D8CA00"),
  })
)
listra_4.position.set(0, -0.77, -24)
listra_4.receiveShadow = true
listra_4.rotation.set(-Math.PI / 2, 0, 0)
scene.add(listra_4)

export function updateScene() {
  updateRenderer()
}