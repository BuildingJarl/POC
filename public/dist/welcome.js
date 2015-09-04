System.register(['gooy/aurelia-compiler'], function (_export) {
	'use strict';

	var Compiler, Welcome;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_gooyAureliaCompiler) {
			Compiler = _gooyAureliaCompiler.Compiler;
		}],
		execute: function () {
			Welcome = (function () {
				_createClass(Welcome, null, [{
					key: 'inject',
					value: [Element, Compiler],
					enumerable: true
				}]);

				function Welcome(element, compiler) {
					_classCallCheck(this, Welcome);

					this.element = element;
					this.compiler = compiler;
				}

				_createClass(Welcome, [{
					key: 'attached',
					value: function attached() {

						var el = document.createElement('code-editor');
						el.setAttribute('class', 'globalExecutionContext');

						var halfWidth = 150;
						var halfHeight = 150;

						el.style.top = window.innerHeight / 2 - halfWidth + 'px';
						el.style.left = window.innerWidth / 2 - halfHeight + 'px';

						document.getElementById('blablabla').appendChild(el);
						this.compiler.compile(el);
					}
				}]);

				return Welcome;
			})();

			_export('Welcome', Welcome);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBRWEsT0FBTzs7Ozs7Ozs7bUNBRlosUUFBUTs7O0FBRUgsVUFBTztpQkFBUCxPQUFPOztZQUNILENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7OztBQUV4QixhQUhDLE9BQU8sQ0FHUCxPQUFPLEVBQUUsUUFBUSxFQUFFOzJCQUhuQixPQUFPOztBQUlsQixTQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixTQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUN6Qjs7aUJBTlcsT0FBTzs7WUFRWCxvQkFBRzs7QUFFVixVQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9DLFFBQUUsQ0FBQyxZQUFZLENBQUcsT0FBTyxFQUFFLHdCQUF3QixDQUFFLENBQUM7O0FBRXRELFVBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUNwQixVQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7O0FBR3JCLFFBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEFBQUMsQUFBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBSSxTQUFTLEdBQUssSUFBSSxDQUFDO0FBQzlELFFBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEFBQUMsQUFBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBSSxVQUFVLEdBQUssSUFBSSxDQUFDOztBQUcvRCxjQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyRCxVQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtNQUN6Qjs7O1dBdkJXLE9BQU8iLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9wdWJsaWMvc3JjLyJ9