document.addEventListener('DOMContentLoaded', () => {
	
	var incognito = document.getElementById('incognito')
	var cognito = document.getElementById('cognito')
	var ability1 = document.getElementById('a1');
	var ability2 = document.getElementById('a2');
	var ability3 = document.getElementById('a3');
	var ability4 = document.getElementById('a4');
	var ability5 = document.getElementById('a5');
	var ability6 = document.getElementById('a6');
	var ability7 = document.getElementById('a7');
	var abilities = [];
	var lenguaje1 = document.getElementById('l1');
	var lenguaje2 = document.getElementById('l2');
	var lenguaje3 = document.getElementById('l3');
	var lenguaje4 = document.getElementById('l4');
	var lenguaje5 = document.getElementById('l5');
	var lenguaje6 = document.getElementById('l6');
	var lenguaje7 = document.getElementById('l7');
	var lenguaje8 = document.getElementById('l8');
	var lenguaje9 = document.getElementById('l9');
	var lenguaje10 = document.getElementById('l10');
	var lenguaje11= document.getElementById('l11');
	var lenguaje12= document.getElementById('l12');
	var lenguajes = [];
	var abi_state,level_state= false;
	
	var englishlvl = document.getElementsByName('ilevel');
	document.addEventListener('click', function()
	{
		abilities = [];
		lenguajes = [];
		for (var i = 0;i < 4; i++)
		{
			if (englishlvl[i].checked == true)
				level_state=true;
		}

		if (ability1.checked == true)
			abilities.push(ability1.value);
		if (ability2.checked == true)
			abilities.push(ability2.value);
		if (ability3.checked == true)
			abilities.push(ability3.value);
		if (ability4.checked == true)
			abilities.push(ability4.value);
		if (ability5.checked == true)
			abilities.push(ability5.value);
		if (ability6.checked == true)
			abilities.push(ability6.value);
		if (ability7.checked == true)
			abilities.push(ability7.value);
		incognito.setAttribute('value', abilities);
		if (abilities[0])
			abi_state = true;
		else
			abi_state = false;
		if (lenguaje1.checked == true)
			lenguajes.push(lenguaje1.value);
		if (lenguaje2.checked == true)
			lenguajes.push(lenguaje2.value);
		if (lenguaje3.checked == true)
			lenguajes.push(lenguaje3.value);
		if (lenguaje4.checked == true)
			lenguajes.push(lenguaje4.value);
		if (lenguaje5.checked == true)
			lenguajes.push(lenguaje5.value);
		if (lenguaje6.checked == true)
			lenguajes.push(lenguaje6.value);
		if (lenguaje7.checked == true)
			lenguajes.push(lenguaje7.value);
		if (lenguaje8.checked == true)
			lenguajes.push(lenguaje8.value);
		if (lenguaje9.checked == true)
			lenguajes.push(lenguaje9.value);
		if (lenguaje10.checked == true)
			lenguajes.push(lenguaje10.value);
		if (lenguaje11.checked == true)
			lenguajes.push(lenguaje11.value);
		if (lenguaje12.checked == true)
			lenguajes.push(lenguaje12.value);
		cognito.setAttribute('value', lenguajes);
	})
	var control01,control02,control04,control05 = false;
	document.querySelector('#submit');
	//console.log(document.querySelector('#name'));
	document.querySelector('#submit').disabled = true;
	document.querySelector('#name').onkeyup = () => {
		if (document.querySelector('#name').value.length > 0)
			control01 = true;
			//console.log(":v");
	}
	document.querySelector('#occupation').onkeyup = () => {
		if (document.querySelector('#occupation').value.length > 0)
			control02 = true;
			//console.log(":v");
	}
	document.querySelector('#Skills').onkeyup = () => {
		if (document.querySelector('#Skills').value.length > 0)
			control04 = true;
			//console.log("-_-");
	}
	document.querySelector('#profile').onkeyup = () => {
		if (document.querySelector('#profile').value.length > 0)
			control05 = true;
			//console.log("-_-");
	}
	document.addEventListener('click', function()
	{
		if (control01 == true & control02 == true & control04 == true & abi_state == true & level_state == true & control05 == true)
			//console.log("e_e");
			document.querySelector('#submit').disabled = false;
		else 
			//console.log("e_e");
			document.querySelector('#submit').disabled = true;
	})
});