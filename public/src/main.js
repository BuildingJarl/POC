import esprima from 'esprima';
import * as escope from 'escope';
import THREE from 'three.js';
import ace from 'ace';

//Editor CLASS Object
class Editor {
	constructor(element) {
		ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
		this.aceEditor = ace.edit(element)
		this.element = element;

		this.aceEditor.setTheme("ace/theme/monokai");
		this.aceEditor.getSession().setMode("ace/mode/javascript");
		this.aceEditor.setValue('');
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

class ScopeObjectFactory {
	createCircle(r, color) {
		var material = new THREE.MeshBasicMaterial({
			color: color
		});

		var radius = r;
		var segments = 64;

		var circleGeometry = new THREE.CircleGeometry( radius, segments );				
		var circle = new THREE.Mesh( circleGeometry, material );
		
		return circle;
	}
}


class ScopeNode extends THREE.Mesh {
	constructor( r, color ) {

		var material = new THREE.MeshBasicMaterial({
			color: color
		});

		var radius = r;
		var segments = 64;

		var circleGeometry = new THREE.CircleGeometry( radius, segments );				

		super(circleGeometry, material)
	}
}

class ScopeTree {
	constructor(){
		this.root = new ScopeNode( 400, 0x000000 );
	}
}

var editor = new Editor( document.getElementById('editorPanel') );
var vis = new Vis( document.getElementById('visPanel') );

var scopeTree = new ScopeTree();

vis.add( scopeTree.root );
vis.draw();


/*
var esprimaOptions = {
			loc: true,
			range: true,
			tolerant: true
		};

		var content = this.editor.getSession().getValue();
		var ast;
		var error;

		try {
			ast = esprima.parse( content , esprimaOptions );
		}
		catch(err) {
			error = err;
		}
*/