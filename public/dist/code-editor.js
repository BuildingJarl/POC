System.register(['ace', 'esprima', 'aurelia-event-aggregator', 'aurelia-framework'], function (_export) {
	'use strict';

	var ace, esprima, EventAggregator, noView, CodeEditorCustomElement;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_ace) {
			ace = _ace['default'];
		}, function (_esprima) {
			esprima = _esprima['default'];
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_aureliaFramework) {
			noView = _aureliaFramework.noView;
		}],
		execute: function () {
			CodeEditorCustomElement = (function () {
				_createClass(CodeEditorCustomElement, null, [{
					key: 'inject',
					value: [Element, EventAggregator],
					enumerable: true
				}]);

				function CodeEditorCustomElement(element, ea) {
					_classCallCheck(this, _CodeEditorCustomElement);

					ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
					this.eventAggregator = ea;
					this.element = element;
					console.log('hello hello hello');
				}

				_createClass(CodeEditorCustomElement, [{
					key: 'attached',
					value: function attached() {
						this.editor = ace.edit(this.element);
						this.editor.setTheme("ace/theme/monokai");
						this.editor.getSession().setMode("ace/mode/javascript");

						this.editor.getSession().on('change', function (e) {});
					}
				}, {
					key: 'onChange',
					value: function onChange(e) {

						var esprimaOptions = {
							loc: true,
							range: true,
							tolerant: true
						};

						var content = this.editor.getSession().getValue();
						var ast;
						var error;

						try {
							ast = esprima.parse(content, esprimaOptions);
						} catch (err) {
							error = err;
						}

						if (!error) {
							this.eventAggregator.publish('draw', ast);
						}
					}
				}]);

				var _CodeEditorCustomElement = CodeEditorCustomElement;
				CodeEditorCustomElement = noView(CodeEditorCustomElement) || CodeEditorCustomElement;
				return CodeEditorCustomElement;
			})();

			_export('CodeEditorCustomElement', CodeEditorCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0Q0FNYSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs2Q0FKNUIsZUFBZTs7OEJBQ2YsTUFBTTs7O0FBR0QsMEJBQXVCO2lCQUF2Qix1QkFBdUI7O1lBQ25CLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQzs7OztBQUUvQixhQUhDLHVCQUF1QixDQUd0QixPQUFPLEVBQUUsRUFBRSxFQUFHOzs7QUFDMUIsUUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGlEQUFpRCxDQUFDLENBQUM7QUFDOUUsU0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDMUIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsWUFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0tBQ2hDOztpQkFSVyx1QkFBdUI7O1lBVTNCLG9CQUFHO0FBQ1YsVUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxVQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFDLFVBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O0FBRXhELFVBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBSyxFQUUvQyxDQUFDLENBQUM7TUFDSDs7O1lBRU8sa0JBQUMsQ0FBQyxFQUFFOztBQUVYLFVBQUksY0FBYyxHQUFHO0FBQ3BCLFVBQUcsRUFBRSxJQUFJO0FBQ1QsWUFBSyxFQUFFLElBQUk7QUFDWCxlQUFRLEVBQUUsSUFBSTtPQUNkLENBQUM7O0FBRUYsVUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsRCxVQUFJLEdBQUcsQ0FBQztBQUNSLFVBQUksS0FBSyxDQUFDOztBQUVWLFVBQUk7QUFDSCxVQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBRSxPQUFPLEVBQUcsY0FBYyxDQUFFLENBQUM7T0FDaEQsQ0FDRCxPQUFNLEdBQUcsRUFBRTtBQUNWLFlBQUssR0FBRyxHQUFHLENBQUM7T0FDWjs7QUFFRCxVQUFHLENBQUMsS0FBSyxFQUFFO0FBQ1YsV0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBRSxDQUFDO09BQzNDO01BRUQ7OzttQ0EzQ1csdUJBQXVCO0FBQXZCLDJCQUF1QixHQURuQyxNQUFNLENBQ00sdUJBQXVCLEtBQXZCLHVCQUF1QjtXQUF2Qix1QkFBdUIiLCJmaWxlIjoiY29kZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiLi4vcHVibGljL3NyYy8ifQ==