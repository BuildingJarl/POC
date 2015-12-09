System.register(['esprima', 'escope', './textCode.txt!text', 'ace'], function (_export) {
	'use strict';

	var esprima, escope, myText, ace, Editor, File, viewPort, fileOne;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_esprima) {
			esprima = _esprima['default'];
		}, function (_escope) {
			escope = _escope;
		}, function (_textCodeTxtText) {
			myText = _textCodeTxtText['default'];
		}, function (_ace) {
			ace = _ace['default'];
		}],
		execute: function () {
			Editor = (function () {
				function Editor(element) {
					_classCallCheck(this, Editor);

					ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
					this.aceEditor = ace.edit(element);
					this.element = element;

					this.aceEditor.setTheme("ace/theme/monokai");
					this.aceEditor.getSession().setMode("ace/mode/javascript");
					this.aceEditor.setValue(myText);
				}

				_createClass(Editor, [{
					key: 'resize',
					value: function resize() {
						this.aceEditor.resize();
					}
				}]);

				return Editor;
			})();

			File = (function () {
				function File(el) {
					_classCallCheck(this, File);

					this.frame = document.createElement('iframe');
					this.frame.setAttribute('class', 'frameContainer');
					el.appendChild(this.frame);

					var container = document.createElement('div');
					container.setAttribute('class', 'container');

					console.log(this.frame);
					this.frame.document.open();
					this.frame.document.write(container);
					this.frame.document.close();
				}

				_createClass(File, [{
					key: 'resize',
					value: function resize() {
						this.editor.resize();
					}
				}]);

				return File;
			})();

			viewPort = document.getElementById('viewport');
			fileOne = new File(viewport);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21DQU1NLE1BQU0sRUFnQk4sSUFBSSxFQXNCTixRQUFRLEVBQ1IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q0wsU0FBTTtBQUNBLGFBRE4sTUFBTSxDQUNDLE9BQU8sRUFBRTsyQkFEaEIsTUFBTTs7QUFFVixRQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaURBQWlELENBQUMsQ0FBQztBQUM5RSxTQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbEMsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLFNBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0MsU0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMzRCxTQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQzs7aUJBVEksTUFBTTs7WUFXTCxrQkFBRztBQUNSLFVBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUE7TUFDdkI7OztXQWJJLE1BQU07OztBQWdCTixPQUFJO0FBQ0UsYUFETixJQUFJLENBQ0csRUFBRSxFQUFFOzJCQURYLElBQUk7O0FBRVIsU0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLFNBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25ELE9BQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUUzQixTQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlDLGNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztBQUU3QyxZQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2QixTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsU0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7S0FFNUI7O2lCQWRJLElBQUk7O1lBZ0JILGtCQUFHO0FBQ1IsVUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztNQUNyQjs7O1dBbEJJLElBQUk7OztBQXNCTixXQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7QUFDOUMsVUFBTyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii4uL3B1YmxpYy9zcmMvIn0=