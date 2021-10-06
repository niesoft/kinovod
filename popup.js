var kinovod = {
	index: 300,
	update: undefined,
	updateButton: null,
	start: function()
	{
		this.updateButton = document.querySelector(".kinovod .title > span");
		if (this.updateButton) {
			this.updateButton.onclick = (e) => this.updateIndex();
		}
		this.setSite("kinovod" + this.index + ".cc");
		if (!this.update) {
			this.setFooter("Обновление...");
			this.updateIndex();
		}
	},
	updateIndex: function()
	{
		this.updateButton.classList.add("selected");
		let req = new XMLHttpRequest();
		req.open("GET", "https://tools.niesoft.ru/kinovod/current", true);
		req.send(null);
		req.onreadystatechange = (e) => {
			if (req.readyState != 4) return;
			if (isJson(req.responseText)) {
				let json = JSON.parse(req.responseText);
				if (json.index && json.update) {
					this.save(json.index, json.update);
				}else{
					this.setFooter("Ошибка при обновлении адреса.");
				}
				this.updateButton.classList.remove("selected");
			}else{
				this.setFooter("Ошибка при обновлении адреса.");
				this.updateButton.classList.remove("selected");
			}
		}

	},
	save: function(index, update)
	{
		this.index = index;
		this.update = update;
		this.setSite("kinovod" + index + ".cc");
		if (this.update) {
			this.setFooter("Предыдущее обновление: <strong>" + update + "</strong>");
		}
	},
	setSite: function(domain)
	{
		let href = document.querySelector(".kinovod .title a");
		if (href) {
			href.setAttribute("href", "http://" + domain);
			href.innerHTML = domain;
		}
	},
	getLast: function()
	{
		let index = getCookie("index");
		let update = getCookie('update');
		console.log(document.cookie);
		return [index ? index : this.index, update];
	},
	setFooter: function(text)
	{
		let footer = document.querySelector(".kinovod .footer");
		if (footer) {
			footer.innerHTML = text;
		}
	}
};

function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}


document.addEventListener('DOMContentLoaded', function(){

	kinovod.start();

});