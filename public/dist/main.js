System.register(['esprima', 'escope', 'ace'], function (_export) {
	'use strict';

	var esprima, escope, ace, Editor, Vis, CssR, cssr, geometry, material, mesh, number, editorDiv, editor, object;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_esprima) {
			esprima = _esprima['default'];
		}, function (_escope) {
			escope = _escope;
		}, function (_ace) {
			ace = _ace['default'];
		}],
		execute: function () {
			Editor = function Editor(element) {
				_classCallCheck(this, Editor);

				ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
				this.aceEditor = ace.edit(element);
				this.element = element;

				this.aceEditor.setTheme("ace/theme/monokai");
				this.aceEditor.getSession().setMode("ace/mode/javascript");
				this.aceEditor.setValue('Hello');
			};

			Vis = (function () {
				function Vis(element) {
					_classCallCheck(this, Vis);

					this.element = element;

					var w = element.clientWidth;
					var h = element.clientHeight;

					this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
					this.renderer.setSize(w, h);

					this.element.appendChild(this.renderer.domElement);

					var viewSize = h;
					var aspectRatio = w / h;
					var left = -aspectRatio * viewSize / 2;
					var right = aspectRatio * viewSize / 2;
					var top = viewSize / 2;
					var bottom = -viewSize / 2;
					var near = 1;
					var far = 100;

					this.camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
					this.camera.position.set(0, 0, 50);

					this.scene = new THREE.Scene();
					this.scene.add(this.camera);
				}

				_createClass(Vis, [{
					key: 'add',
					value: function add(obj) {
						this.scene.add(obj);
					}
				}, {
					key: 'draw',
					value: function draw() {
						this.renderer.render(this.scene, this.camera);
					}
				}]);

				return Vis;
			})();

			CssR = (function () {
				function CssR(element) {
					_classCallCheck(this, CssR);

					this.element = element;

					var w = element.clientWidth;
					var h = element.clientHeight;

					this.renderer = new THREE.CSS3DRenderer();
					this.renderer.setSize(w, h);

					this.element.appendChild(this.renderer.domElement);

					var viewSize = h;
					var aspectRatio = w / h;
					var left = -aspectRatio * viewSize / 2;
					var right = aspectRatio * viewSize / 2;
					var top = viewSize / 2;
					var bottom = -viewSize / 2;
					var near = 1;
					var far = 100;

					this.camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
					this.camera.position.set(0, 0, 50);

					this.scene = new THREE.Scene();
					this.scene.add(this.camera);
				}

				_createClass(CssR, [{
					key: 'add',
					value: function add(obj) {
						this.scene.add(obj);
					}
				}, {
					key: 'draw',
					value: function draw() {
						this.renderer.render(this.scene, this.camera);
					}
				}]);

				return CssR;
			})();

			cssr = new CssR(document.getElementById('viewport2'));
			geometry = new THREE.BoxGeometry(20, 20, 20);
			material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
			mesh = new THREE.Mesh(geometry, material);
			number = document.createElement('div');

			number.className = 'number';
			number.textContent = "THREE.JS";

			editorDiv = document.createElement('div');

			editorDiv.className = 'editor';
			editor = new Editor(editorDiv);
			object = new THREE.CSS3DObject(editorDiv);

			object.position.set(cssr.element.clientWidth / 2, cssr.element.clientHeight / 2, 0);

			cssr.add(object);
			cssr.draw();

			console.log(object.rotation);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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QyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUE7O0FBTWhDLFNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsU0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0tBQzlCOztpQkFoQ0ksSUFBSTs7WUFrQ04sYUFBQyxHQUFHLEVBQUU7QUFDUixVQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztNQUN0Qjs7O1lBRUcsZ0JBQUc7QUFDTixVQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztNQUNoRDs7O1dBeENJLElBQUk7OztBQTRDTixPQUFJLEdBQUcsSUFBSSxJQUFJLENBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV0RCxXQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFO0FBQzlDLFdBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQztBQUN4RCxPQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFFLFFBQVEsRUFBRSxRQUFRLENBQUU7QUFLM0MsU0FBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFFOztBQUMzQyxTQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUM1QixTQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7QUFHN0IsWUFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFFOztBQUMvQyxZQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUMzQixTQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDO0FBRTlCLFNBQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUUsU0FBUyxDQUFFOztBQUMvQyxTQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUlqRixPQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pCLE9BQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFWixVQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii4uL3B1YmxpYy9zcmMvIn0=