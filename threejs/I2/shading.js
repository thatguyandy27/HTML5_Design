var camera, scene, renderer;
var geometry, material, mesh;

function init(){

    scene = new THREE.Scene();
    geometry = new THREE.IcosahedronGeometry( 200,2);
    material = getMaterial();//new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true, wireframeLinewidth:2});
    mesh = new THREE.Mesh(geometry, material);


    scene.add(mesh);
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.insertBefore(renderer.domElement, document.body.childNodes[0]);


    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    renderer.render(scene, camera);


    animate();
    document.getElementById('shading').addEventListener('change', function(){
        mesh.material = getMaterial();
    });
}
function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x = Date.now() * .0005;
    mesh.rotation.y = Date.now() * .001
   // mesh.material = getMaterial();
    renderer.render(scene, camera);
}


function getMaterial(){
    var shading = document.getElementById('shading');
    switch(shading.value){
       case "MeshBasicMaterial":
            return new THREE.MeshBasicMaterial({color:"blue"});
       case "MeshNormalMaterial":
            return new THREE.MeshNormalMaterial({color:"blue"});
       case "MeshDepthMaterial":
            return new THREE.MeshDepthMaterial(  );
       case "MeshLambertMaterial":
            return new THREE.MeshLambertMaterial({color:"blue"});
       case "MeshPhongMaterial":
       default:
            return new THREE.MeshPhongMaterial({color:"blue"});
       // case "MeshFaceMaterial":
       //      return THREE.MeshBasicMaterial({color:0xFFFFFF});
       // case "ShaderMaterial":
       // default:
       //      return THREE.MeshBasicMaterial({color:0xFFFFFF});
    }
}

init();