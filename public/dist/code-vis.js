System.register(['esprima', 'escope', 'aurelia-event-aggregator'], function (_export) {
	'use strict';

	var esprima, escope, EventAggregator, CodeVisCustomElement;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_esprima) {
			esprima = _esprima['default'];
		}, function (_escope) {
			escope = _escope;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}],
		execute: function () {
			CodeVisCustomElement = (function () {
				_createClass(CodeVisCustomElement, null, [{
					key: 'inject',
					value: [Element, EventAggregator],
					enumerable: true
				}]);

				function CodeVisCustomElement(element, ea) {
					_classCallCheck(this, CodeVisCustomElement);

					this.element = element;
					this.eventAggregator = ea;
				}

				_createClass(CodeVisCustomElement, [{
					key: 'attached',
					value: function attached() {
						this.eventAggregator.subscribe('draw', function (payload) {

							var scopeManager = escope.analyze(payload);
							var globalScope = scopeManager.acquire(payload);

							console.log(globalScope);
						});
					}
				}, {
					key: 'draw',
					value: function draw() {}
				}]);

				return CodeVisCustomElement;
			})();

			_export('CodeVisCustomElement', CodeVisCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtdmlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1Q0FJYSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs2Q0FGekIsZUFBZTs7O0FBRVYsdUJBQW9CO2lCQUFwQixvQkFBb0I7O1lBRWhCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQzs7OztBQUUvQixhQUpDLG9CQUFvQixDQUluQixPQUFPLEVBQUUsRUFBRSxFQUFHOzJCQUpmLG9CQUFvQjs7QUFLL0IsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsU0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDMUI7O2lCQVBXLG9CQUFvQjs7WUFTeEIsb0JBQUc7QUFDVixVQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBQyxPQUFPLEVBQUs7O0FBT25ELFdBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsV0FBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFaEQsY0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQUV4QixDQUFDLENBQUM7TUFDSDs7O1lBRUcsZ0JBQUcsRUFFTjs7O1dBM0JXLG9CQUFvQiIsImZpbGUiOiJjb2RlLXZpcy5qcyIsInNvdXJjZVJvb3QiOiIuLi9wdWJsaWMvc3JjLyJ9