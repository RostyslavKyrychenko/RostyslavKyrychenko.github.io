define(
	'controller', ['model', 'view'],
	function() {
		function Controller(model, view) {
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.list__delete', removeItem);
			view.elements.listContainer.on('click', '.list__edit', setEditable);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem (newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};

			function removeItem() {
				var item = $(this).data('value');

				model.removeItem(item);
				view.renderList(model.data);
			};

			function setEditable() {
				var item = $(this).data('value')
				var input = $(this).parent().find('input')
				input.removeAttr('disabled').focus()
				
				input.on('focusout', function() {
					renameItem($(this), item)
					input.attr('disabled','disabled')
				})

			}

			function renameItem(item, dataAttr) {
				var value = $(item).val();
				var index = $(this).parent().index();
				
				item.attr('disabled','disabled')

				model.renameItem(dataAttr, value);
				view.renderList(model.data);
			};

		};
		return Controller;  
	}
);