import esprima from 'esprima';
import * as escope from 'escope';
//import THREE from 'three.js';
//import 'three.js/examples/js/renderers/CSS3DRenderer';
import ace from 'ace';

//Editor CLASS Object
class Editor {
	constructor(element) {
		ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
		this.aceEditor = ace.edit(element)
		this.element = element;

		this.aceEditor.setTheme("ace/theme/monokai");
		this.aceEditor.getSession().setMode("ace/mode/javascript");
		this.aceEditor.setValue('Hello');
	}
}

class Vis {
	constructor(element) {
		this.element = element;
		
		let w = element.clientWidth;
		let h = element.clientHeight;

		//setup WebGl Renderer
		this.renderer = new THREE.WebGLRenderer( { antialias:true, alpha:true } );
		this.renderer.setSize( w, h );

		this.element.appendChild( this.renderer.domElement );

		//camera
		let viewSize = h;
		let aspectRatio = w/h; //1 unit should be one pixel
		let left = (-aspectRatio * viewSize) / 2;
		let right = (aspectRatio * viewSize) / 2;
		let top = viewSize / 2;
		let bottom = -viewSize / 2;
		let near = 1;
		let far = 100;

		this.camera = new THREE.OrthographicCamera( left, right, top, bottom, near, far );
		this.camera.position.set(0,0,50)
		//scene
		this.scene = new THREE.Scene();
		this.scene.add( this.camera );
	}

	add(obj) {
		this.scene.add( obj );
	}

	draw() {
		this.renderer.render( this.scene, this.camera );
	}
}

class CssR {
	constructor(element) {
		this.element = element;

		let w = element.clientWidth;
		let h = element.clientHeight;

		this.renderer = new THREE.CSS3DRenderer();
		this.renderer.setSize( w, h );

		this.element.appendChild( this.renderer.domElement );

		//camera
		
		let viewSize = h;
		let aspectRatio = w/h; //1 unit should be one pixel
		let left = (-aspectRatio * viewSize) / 2;
		let right = (aspectRatio * viewSize) / 2;
		let top = viewSize / 2;
		let bottom = -viewSize / 2;
		let near = 1;
		let far = 100;

		this.camera = new THREE.OrthographicCamera( left, right, top, bottom, near, far );
		this.camera.position.set(0,0,50)
		

		//this.camera = new THREE.PerspectiveCamera(50, w / h, 1, 10000);
		//this.camera.position.z = 900;
		
		this.scene = new THREE.Scene();
		this.scene.add( this.camera );
	}

	add(obj) {
		this.scene.add( obj );
	}

	draw() {
		this.renderer.render( this.scene, this.camera );
	}
}

//var vis = new Vis( document.getElementById('viewport1') );
var cssr = new CssR( document.getElementById('viewport2'));

var geometry = new THREE.BoxGeometry( 20, 20, 20 );
var material = new THREE.MeshBasicMaterial({color:0xffff00});
var mesh = new THREE.Mesh( geometry, material );

//vis.add( mesh );
//vis.draw();

var number = document.createElement( 'div' );
	number.className = 'number';
	number.textContent = "THREE.JS";


var editorDiv = document.createElement( 'div' );
editorDiv.className = 'editor';
var editor = new Editor(editorDiv);

var object = new THREE.CSS3DObject( editorDiv );
object.position.set( cssr.element.clientWidth/2, cssr.element.clientHeight/2, 0);
//object.position.set( cssr.element.clientWidth/2, cssr.element.clientHeight/2, 0);
//object.rotation.set(mesh.rotation.x,mesh.rotation.y,0)

cssr.add(object);
cssr.draw();

console.log(object.rotation)
