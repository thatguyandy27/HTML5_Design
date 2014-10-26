var camera, scene, renderer;
var geometry, material, mesh;

function init(){

    scene = new THREE.Scene();

    var verticesOfCube = [

        -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
        -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1
    ];

    var indicesOfFaces = [
        2,1,0,    0,3,2,
        0,4,7,    7,3,0,
        0,1,5,    5,4,0,
        1,2,6,    6,5,1,
        2,3,7,    7,6,2,
        4,5,6,    6,7,4
    ];

    geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
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