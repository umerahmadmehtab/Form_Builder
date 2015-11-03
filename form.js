
	var json = {
    		elements: 
           	{}
	}

	function createForm() {
		var name = prompt("Form Name:", "");
		var heading = document.createElement("h3");
		var t = document.createTextNode(name);
		heading.appendChild(t);
		document.getElementById("elements").appendChild(heading);
		var form = document.createElement("form");
		form.name = name;
		document.getElementById("elements").appendChild(form);
		json.elements[name].name = name;
	}

	function createTextbox() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var name = prompt("Name:", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementsByName(formname)[0].appendChild(label);
		var input = document.createElement("input");
		input.type = "text";
		input.name = name;
		document.getElementsByName(formname)[0].appendChild(input);
		json.elements[name].name = name;
	}

	function createPasswordbox() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var label = document.createElement("label");
		var t = document.createTextNode("Password:");
		label.appendChild(t);
		document.getElementsByName(formname)[0].appendChild(label);
		var input = document.createElement("input");
		input.type = "password";
		document.getElementsByName(formname)[0].appendChild(input);
		json.elements["password"].name = "password";
	}

	function createNumberbox() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var name = prompt("Name:", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementsByName(formname)[0].appendChild(label);
		var input = document.createElement("input");
		input.type = "number";
		input.name = name;
		document.getElementsByName(formname)[0].appendChild(input);
	}

	function createCheckbox() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var name = prompt("Name:", "");
		var value = prompt("Value:", "");
		var text = prompt("Text:", "");
		var input = document.createElement("input");
		input.type = "checkbox";
		input.name = name;
		input.value = value;
		input.innerHTML = text;
		document.getElementsByName(formname)[0].appendChild(input);
	}

	function createRadio() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var name = prompt("Name:", "");
		var value = prompt("Value:", "");
		var text = prompt("Text:", "");
		var input = document.createElement("input");
		input.type = "radio";
		input.name = name;
		input.value = value;
		input.innerHTML = text;
		document.getElementsByName(formname)[0].appendChild(input);
	}

	function createSubmit() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var value = prompt("Value:", "");
		var input = document.createElement("input");
		input.type = "submit";
		input.value = value;
		document.getElementsByName(formname)[0].appendChild(input);
	}

	function createFile() {
		var formname = prompt("Form Name:", "Enter the name of the form in which you want to add");
		var name = prompt("Name:", "");
		var input = document.createElement("input");
		input.type = "file";
		input.name = name;
		document.getElementsByName(formname)[0].appendChild(input);
	}

	function display() {
		alert(json);
	}
