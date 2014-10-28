var camera, scene, renderer;
var geometry, material, mesh;
var controls, clock;

function init(){
    document.body.style.backgroundColor = '#d7f0f7';

    //scene with fog
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x9db3b5,.002); //color, density

    //camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;
    camera.position.y = 400;
    camera.rotation.x = -45 * Math.PI / 180;

    //renderer and creating the canvas
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#d7f0f7");
    renderer.shadowMapEnabled = true;
    document.body.appendChild(renderer.domElement);


    //floor of the game
    var floor = new THREE.Mesh(new THREE.PlaneGeometry( 2000, 2000, 40, 40), 
            new THREE.MeshPhongMaterial( {color:0x9db3b5, overdraw:true} ));

    floor.rotation.x = -0.5 * Math.PI;
    floor.receiveShadow = true;
    scene.add(floor);

    ///creating the buildings
    geometry = new THREE.CubeGeometry( 1,1,1 );
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, .5, 0));
//    material = new THREE.MeshDepthMaterial({overdraw:true});
    material = new THREE.MeshPhongMaterial( {overdraw:true, color:0xcccccc} );
    var cityGeometry = new THREE.Geometry();

    for(var index = 0; index < 200; index++){
        var building = new THREE.Mesh(geometry.clone());

        building.position.x = Math.floor(Math.random() * 200 - 100) * 4;
        building.position.z = Math.floor(Math.random() * 200 - 100) * 4;

        building.scale.x = Math.random() * 50 + 10;
        building.scale.z = Math.random() * 50 + 10;
        building.scale.y = Math.random() * 300 + 8;


        THREE.GeometryUtils.merge(cityGeometry, building);
    }
    var city = new THREE.Mesh( cityGeometry, material);
    city.castShadow = true;
    city.receiveShadow = true;
                
    scene.add(city);

    //adding light and shadows
    var light = new THREE.DirectionalLight( 0xf9f1c2, 1);
    light.position.set(500, 1500, 1000);
    light.castShadow = true;
    light.shadowMapWidth = 2048;
    light.shadowMapHeight = 2048;
    var d = 1000;
    light.shadowCameraLeft = d;
    light.shadowCameraRight = -d;
    light.shadowCameraTop = d;
    light.shadowCameraBottom = -d;
    light.shadowCameraFar = 2500;
    scene.add(light);

    renderer.render(scene, camera);


    //creating clock
    clock = new THREE.Clock(  );

    //creating controls
    controls = new THREE.FirstPersonControls(camera);
    controls.movementSpeed = 100;
    controls.lookSpeed = .1;


    animate();
}
function animate(){
    
    renderer.render(scene, camera);
    controls.update(clock.getDelta());

    requestAnimationFrame(animate);
}


init();