
//scene, Mesh camera renderer

//scene
const scene = new THREE.Scene();

//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 1;
cube.position.y = 1;
cube.position.z = 1;

scene.add(cube);

//camera
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio);
scene.add(camera);


//renderer
const canvas = document.getElementById('myCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5
camera.position.y = 1
camera.position.x = 1;
renderer.render(scene, camera);

const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();
    cube.rotation.x = elapsedTime;
    cube.rotation.y = elapsedTime;  
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

