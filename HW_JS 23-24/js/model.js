define(
	'model', 
	[],
	function() {

		function Model(data) {
			var self = this;
			self.data = data;

			self.validate = function(value) {
				if($.trim(value).length < 1) {
					return false
				} else {
					return true
				}
			}

			self.addItem = function (item) {
				if(self.validate(item)) self.data.push(item);
				return self.data;
			};

			self.removeItem = function (item) {
				var index = self.data.indexOf(item);
				if (index === -1) return;
				self.data.splice(index, 1); 
				return self.data;
			};

			self.renameItem = function (item, new_value) {
				var index = self.data.indexOf(item);
				if (index === -1) return;
		
				if(self.validate(new_value)) self.data[index] = new_value;	
				
				return self.data;
			};
		};
		return Model;
	}
);