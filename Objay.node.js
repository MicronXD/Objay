function Objay (preventDuplicates){
	this.index = {};
	if(preventDuplicates)
		this.add = function objay_add(key,value) {
			var arr = (this.index[key] = this.index[key] || []);
			if(arr.indexOf(value) === -1)
				arr.push(value);
		};
};

Objay.prototype.add = function objay_add(key,value) {
	(this.index[key] = this.index[key] || []).push(value);
};
Objay.prototype.get = function get(key) {
	var arr = this.index[key];
	return arr&&arr.slice()||arr;
};
Objay.prototype.remove = function objay_remove(key, value) {
	var arr;
	if(arr = this.index[key]) {
		var index = arr.indexOf(value);
		if (index != -1) {
			var ret = arr.splice(index, 1);
			if(arr.length === 0)
				this.wipe(key);
			return ret;
		}
	}
};
Objay.prototype.removeAll = function objay_removeAll(key, value) {
	var arr;
	if(arr = this.index[key]) {
		var index = arr.indexOf(value)
		  , ret;
		while (index != -1) {
			ret = arr.splice(index, 1);
			index = arr.indexOf(value);
			if(arr.length === 0)
				this.wipe(key);
		}
		return ret;
	}
};
Objay.prototype.wipe = function objay_wipe(key) {
	delete this.index[key];
};
Objay.prototype.wipeAll = function objay_wipeAll() {
	this.index = {};
};

module.exports = Objay;