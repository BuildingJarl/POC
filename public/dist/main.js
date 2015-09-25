System.register(['esprima', 'escope', 'three.js', 'ace'], function (_export) {
	'use strict';

	var esprima, escope, THREE, ace, Editor, Vis, ScopeObjectFactory, ScopeNode, ScopeTree, editor, vis, scopeTree;

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_esprima) {
			esprima = _esprima['default'];
		}, function (_escope) {
			escope = _escope;
		}, function (_threeJs) {
			THREE = _threeJs['default'];
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
				this.aceEditor.setValue('');
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

			ScopeObjectFactory = (function () {
				function ScopeObjectFactory() {
					_classCallCheck(this, ScopeObjectFactory);
				}

				_createClass(ScopeObjectFactory, [{
					key: 'createCircle',
					value: function createCircle(r, color) {
						var material = new THREE.MeshBasicMaterial({
							color: color
						});

						var radius = r;
						var segments = 64;

						var circleGeometry = new THREE.CircleGeometry(radius, segments);
						var circle = new THREE.Mesh(circleGeometry, material);

						return circle;
					}
				}]);

				return ScopeObjectFactory;
			})();

			ScopeNode = (function (_THREE$Mesh) {
				_inherits(ScopeNode, _THREE$Mesh);

				function ScopeNode(r, color) {
					_classCallCheck(this, ScopeNode);

					var material = new THREE.MeshBasicMaterial({
						color: color
					});

					var radius = r;
					var segments = 64;

					var circleGeometry = new THREE.CircleGeometry(radius, segments);

					_get(Object.getPrototypeOf(ScopeNode.prototype), 'constructor', this).call(this, circleGeometry, material);
				}

				return ScopeNode;
			})(THREE.Mesh);

			ScopeTree = function ScopeTree() {
				_classCallCheck(this, ScopeTree);

				this.root = new ScopeNode(400, 0x000000);
			};

			editor = new Editor(document.getElementById('editorPanel'));
			vis = new Vis(document.getElementById('visPanel'));
			scopeTree = new ScopeTree();

			vis.add(scopeTree.root);
			vis.draw();
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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QyxNQUFNLENBQUUsQ0FBQztNQUNoRDs7O1dBcENJLEdBQUc7OztBQXVDSCxxQkFBa0I7YUFBbEIsa0JBQWtCOzJCQUFsQixrQkFBa0I7OztpQkFBbEIsa0JBQWtCOztZQUNYLHNCQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDdEIsVUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUM7QUFDMUMsWUFBSyxFQUFFLEtBQUs7T0FDWixDQUFDLENBQUM7O0FBRUgsVUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsVUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVsQixVQUFJLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBRSxDQUFDO0FBQ2xFLFVBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBRSxjQUFjLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBRXhELGFBQU8sTUFBTSxDQUFDO01BQ2Q7OztXQWJJLGtCQUFrQjs7O0FBaUJsQixZQUFTO2NBQVQsU0FBUzs7QUFDSCxhQUROLFNBQVMsQ0FDRCxDQUFDLEVBQUUsS0FBSyxFQUFHOzJCQURuQixTQUFTOztBQUdiLFNBQUksUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQzFDLFdBQUssRUFBRSxLQUFLO01BQ1osQ0FBQyxDQUFDOztBQUVILFNBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNmLFNBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsU0FBSSxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFFLE1BQU0sRUFBRSxRQUFRLENBQUUsQ0FBQzs7QUFFbEUsZ0NBWkksU0FBUyw2Q0FZUCxjQUFjLEVBQUUsUUFBUSxFQUFDO0tBQy9COztXQWJJLFNBQVM7TUFBUyxLQUFLLENBQUMsSUFBSTs7QUFnQjVCLFlBQVMsR0FDSCxTQUROLFNBQVMsR0FDRDswQkFEUixTQUFTOztBQUViLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQzNDOztBQUdFLFNBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFFO0FBQzdELE1BQUcsR0FBRyxJQUFJLEdBQUcsQ0FBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFFO0FBRXBELFlBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRTs7QUFFL0IsTUFBRyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUM7QUFDMUIsTUFBRyxDQUFDLElBQUksRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiLi4vcHVibGljL3NyYy8ifQ==