define(
	'view', 
	['jquery', 'model'],
	function() {
		function View(model) {
			var self = this;

			function init () {
				var wrapper = tmpl($('#wrapper-template').html());
				
				$('body').append(wrapper);
				self.elements = {
					input: $('.control__item-value'),
					addBtn: $('.control__item-add'),
					listContainer: $('.list'),
				};
				self.renderList(model.data);
			}; 

			self.renderList = function (data) {
				var list = tmpl($('#list-template').html(), {data: data})
				self.elements.listContainer.html(list);
			}
			init();
		};
		return View;
	}
);