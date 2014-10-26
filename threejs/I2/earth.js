var camera, scene, renderer;
var geometry, material, mesh;

function init(){

    scene = new THREE.Scene();

    THREE.ImageUtils.loadTexture('land_ocean_ice_cloud_2048.jpg', undefined, function success(texture){

        geometry = new THREE.SphereGeometry( 30, 30, 30);
        material = new THREE.MeshBasicMaterial({map: texture, overdraw:true, wireframe: false, skinning: true});
        mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);
        
        animate();   
    });

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(125, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    renderer.render(scene, camera);


 
}
function animate(){
    requestAnimationFrame(animate);
  //  mesh.rotation.x = Date.now() * .0005;
    mesh.rotation.y = Date.now() * .0005
    renderer.render(scene, camera);
}


init();