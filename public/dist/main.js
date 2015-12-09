System.register(['ace', './sample.txt!text'], function (_export) {
	'use strict';

	var ace, myText, Editor, container, editor, expanded;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_ace) {
			ace = _ace['default'];
		}, function (_sampleTxtText) {
			myText = _sampleTxtText['default'];
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

					this.aceEditor.setReadOnly(true);

					this.aceEditor.setOptions({
						fontSize: "4pt",
						wrap: true
					});
				}

				_createClass(Editor, [{
					key: 'changeFont',
					value: function changeFont(to) {
						this.aceEditor.setOptions({
							fontSize: to + "pt"
						});
					}
				}, {
					key: 'resize',
					value: function resize() {
						this.aceEditor.resize();
					}
				}]);

				return Editor;
			})();

			container = document.getElementById('my-editor');
			editor = new Editor(container);
			expanded = false;

			container.addEventListener('click', function () {
				console.log('CLICKS');

				if (expanded !== true) {

					container.className += ' small';

					setTimeout(function () {
						editor.resize();
						expanded = true;
					}, 550);
				} else {

					expanded = false;
				}
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQUtNLE1BQU0sRUE2QlIsU0FBUyxFQUNULE1BQU0sRUFFTixRQUFROzs7Ozs7Ozs7Ozs7O0FBaENOLFNBQU07QUFDQSxhQUROLE1BQU0sQ0FDQyxPQUFPLEVBQUU7MkJBRGhCLE1BQU07O0FBRVYsUUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGlEQUFpRCxDQUFDLENBQUM7QUFDOUUsU0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2xDLFNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUV2QixTQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdDLFNBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDM0QsU0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRWhDLFNBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVqQyxTQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUN4QixjQUFRLEVBQUUsS0FBSztBQUNmLFVBQUksRUFBRSxJQUFJO01BQ1gsQ0FBQyxDQUFDO0tBQ0g7O2lCQWhCSSxNQUFNOztZQWtCRCxvQkFBQyxFQUFFLEVBQUM7QUFDYixVQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUN4QixlQUFRLEVBQUUsRUFBRSxHQUFHLElBQUk7T0FDcEIsQ0FBQyxDQUFDO01BQ0g7OztZQUVLLGtCQUFHO0FBQ1IsVUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztNQUN4Qjs7O1dBMUJJLE1BQU07OztBQTZCUixZQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDaEQsU0FBTSxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUU5QixXQUFRLEdBQUcsS0FBSzs7QUFFcEIsWUFBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0FBQzlDLFdBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7O0FBRXJCLFFBQUcsUUFBUSxLQUFLLElBQUksRUFBRTs7QUFNckIsY0FBUyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7O0FBRWhDLGVBQVUsQ0FBRSxZQUFXO0FBQ3RCLFlBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDO01BQ2hCLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FFUCxNQUFNOztBQU1OLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDakI7SUFFRCxDQUFDLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuLi9wdWJsaWMvc3JjLyJ9