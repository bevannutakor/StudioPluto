import * as THREE from 'https://cdn.skypack.dev/three@0.138.2'

function starParticlePos(particleCount){
  const arr = new Float32Array(particleCount*3)
  for(let i = 0; i<particleCount; i++){
    arr[i] = (Math.random()-0.5)*5
  }
  return arr;
}

function resize(renderer){
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  
  if (needResize){
    renderer.setSize(width, height, false)
  }
  return needResize; //
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

function main(){
  const canvas = document.getElementById('stars')
  const renderer = new THREE.WebGLRenderer({canvas})
  //field of view
  const fov = 75;

  // default a canvas is 300x150 pixels
  // which makes the aspect 300/150 or 2.
  const aspect = 2
  const near = 0.1
  const far = 5

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  camera.position.z = 2;

  const scene = new THREE.Scene()
  const color = 0xffffff;
  const intensity = 1;

  const light = new THREE.DirectionalLight(color, intensity)
  light.position.set(-1, 2, 4)

  scene.add(light);

  const geometry = new THREE.BufferGeometry()
  const numberOfPoints = 2500;
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starParticlePos(numberOfPoints), 3)
  )
  
  const loader = new THREE.TextureLoader()

  const material = new THREE.PointsMaterial({
    size: 0.005,
    map: loader.load('./src/star.png'),
    transparent: true
    //color: 0x44aa88
  })
  const cube = new THREE.Points(geometry, material)

  scene.add(cube)

  const render = (time) => {
    time *= 0.001;

    if (resize(renderer)){
      const canvas = renderer.domElement
      
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cube.rotation.x = mouseY * 0.005
    cube.rotation.y = mouseX * 0.005


    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

}
main()


function sphereFunc(){
  const scene = new THREE.Scene()
  const canvas = document.getElementById('planet')

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({canvas})

  
  document.body.appendChild(renderer.domElement)

  const sphere = new THREE.SphereGeometry( 80, 50, 50 );
  const loader = new THREE.TextureLoader()
  const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      map: loader.load('./src/pluto.jpg')
    })
  const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)

  scene.add(sphereMesh)
  console.log(window.innerWidth)
  //console.log(window.innerHeight)
  //console.log()
  

  const sphereLight = new THREE.DirectionalLight(0xffffff, 1)

  sphereLight.position.set(1,1,1)
  scene.add(sphereLight)
  
  const render = (time) => {
    time *= 0.001;

    if (resize(renderer)){
      const canvas = renderer.domElement
      
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      
      if(window.innerWidth <= 600){
        camera.position.z = 300
      } else {
        camera.position.z = 200;
      }
    }

    sphereMesh.rotation.x += 0.01
    sphereMesh.rotation.y += 0.01
    renderer.autoClear = false;

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
  
  /*function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    sphereMesh.rotation.x += 0.01
    sphereMesh.rotation.y += 0.01
    renderer.autoClear = false;
    //boxMesh.rotation.x += 0.01
    //boxMesh.rotation.y += 0.01
  }*/
}

sphereFunc()


function grid(){
  const scene = new THREE.Scene()
  const canvas = document.getElementById('3d-grid');

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({canvas})

  
  document.body.appendChild(renderer.domElement)

  


}

grid()