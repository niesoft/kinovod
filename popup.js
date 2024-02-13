var kinovod = {
	updateButton: null,
	start: function()
	{
		this.setTitle();
		this.setButtons();
	},
	getDomain: function(index)
	{
		let today = new	Date();
		if (index > 0) {
			today = new Date(today.getTime() + (24 * 60 * 60 * 1000));
		}
		if (index < 0) {
			today = new Date(today.getTime() - (24 * 60 * 60 * 1000));
		}
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yy = today.getFullYear();
		return "kinovod" +  dd + mm + yy.toString().substring(2) + ".pro";
	},
	setTitle: function()
	{
		let domain = this.getDomain(0);
		let href = document.querySelector(".kinovod .title a");
		if (href) {
			href.setAttribute("href", "http://" + domain);
			href.innerHTML = domain;
		}
	},
	setButtons: function()
	{
		let leftButton = document.querySelector(".footer .left");
		let rightButton = document.querySelector(".footer .right");

		leftButton.setAttribute("href", "http://" + this.getDomain(-1));
		rightButton.setAttribute("href", "http://" + this.getDomain(1));
	}
};


document.addEventListener('DOMContentLoaded', function(){

	kinovod.start();

});
