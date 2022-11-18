var kinovod = {
	updateButton: null,
	start: function()
	{
		this.getDate();
	},
	getDate: function()
	{
		let today = new	Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yy = today.getFullYear();
		let domain = "kinovod" +  dd + mm + yy.toString().substring(2) + ".cc";
		let href = document.querySelector(".kinovod .title a");
		if (href) {
			href.setAttribute("href", "http://" + domain);
			href.innerHTML = domain;
		}
	}
};


document.addEventListener('DOMContentLoaded', function(){

	kinovod.start();

});
