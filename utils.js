module.exports = {
	randomchoose: function(arr, used) {
		var index = Math.floor(Math.random() * arr.length);
		return arr[index];
	}
}