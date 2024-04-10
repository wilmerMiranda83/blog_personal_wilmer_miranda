const pass = document.getElementById("pass"),
	  icon = document.querySelector(".ojo");


icon.addEventListener("click", e =>{
	if (pass.type==="password") {
		pass.type = "text";
		icon.removeAttribute('src');
		icon.setAttribute('src', 'img/invisible.ico')
	}
	else{
		pass.type="password"
		icon.removeAttribute('src');
		icon.setAttribute('src', 'img/visible.ico')
	}
})