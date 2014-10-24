var camera, scene, renderer;
var geometry, material, mesh;

function init(){

    scene = new THREE.Scene();
    geometry = new THREE.IcosahedronGeometry( 200,2);
    material = new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true, wireframeLinewidth:2});
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    renderer.render(scene, camera);


    animate();
}
function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x = Date.now() * .0005;
    mesh.rotation.y = Date.now() * .001
    renderer.render(scene, camera);
}


init();