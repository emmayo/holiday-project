// Student Class - Represents a Student
class Grocieries {
	constructor(Name_of_Item, price, quantity, category, quantitySold, quantityLeft){
		this.Name_of_Item = Name_of_Item;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
		this.quantitySold = quantitySold;
		this.quantityLeft = quantityLeft;
		    				
	}
}

//UI Class - Represents UI Tasks
class UI {
	static displayGrocieries() {
		const grocieries = Store.getGrocieries();

		grocery.forEach((grocieries) => UI.addGrocieries(grocieries))
	}


	static addGrocieries(grocieries) {
		const list = document.getElementById('grocieries');

		const row = document.createElement('tr');
		row.innerHTML = `
                 <td>${grocieries.Name_of_Item}</td>
                 <td>${grocieries.price}</td>
                 <td>${grocieries.quantity}</td>
				 <td>${grocieries.category}</td>
				 <td>${grocieries.quantitySold}</td>
				 <td>${grocieries.quantityLeft}</td>
                 <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;
		list.appendChild(row);
	}
	static deleteGrocieries(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
			UI.showAlert('Grocieries deleted successfully', 'success');

		}
	}
	static clearForm() {
		document.getElementById('Name_of_Item').value = '';
		document.getElementById('price').value = '';
		document.getElementById('quantity').value = '';
		document.getElementById('category').value = '';
		document.getElementById('quantitySold').value = '';
		document.getElementById('quantityLeft').value = '';
	}
	static showAlert(message, className) {
		if (document.querySelector('.alert')) {
			document.querySelector('.alert').remove()
		}
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#grocieries-form');
		container.insertBefore(div, form);

		setTimeout(() => {
			div.remove()
		}, 5000);
 
		}
	}
 


 // Store Class - Handles storage in db

 class Store {
 	static getGrocieries() {
 		let grocieries;
 		if (localStorage.getItem('grocieries') === null) {
 			grocieries = [];
 		} else {
 			grocieries = JSON.parse(localStorage.getItem('grocieries'));
 		}
 		return grocieries;
 	}
 	static addGrocieries(grocieries) {
 		const grocery = Store.getGrocieries()
 		grocery.push(grocieries);
 		localStorage.setItem('grocieries',  JSON.stringify(grocieries));
 	}
 	static deleteGrocieries(name) {
 		const grocieries = Store.getGrocieries();
 		grocieries.map((grocieries, index) => {
 			if (grocieries.reg_no === name) {
 				grocieries.splice(index, 1);
 			}
 		});
 		localStorage.setItem('grocieries', JSON.stringify(grocieries));	
 		}
 	}
 //Event - Display students	
document.addEventListener('DOMContentLoaded', UI.displayGrocieries); 
// Event - add new student
 document.getElementById('grocieries-form').addEventListener('submit', (e) => {

 // prevent from submission default
 e.preventDefault();
 //get form values
 const Name_of_Item = document.getElementById('Name_of_Item').value;
 const price = document.getElementById('price').value;
 const quantity = document.getElementById('quantity').value;
 const category = document.getElementById('category').value;
 const quantitySold = document.getElementById('quantitySold').value;
 const quantityLeft = document.getElementById('quantityLeft').value;

 if (Name_of_Item == "" || price == "" || quantity == "" || category == "" || quantitySold == "" || quantityLeft == "") {
 	//Please fill in all fields
 	UI.showAlert('Please, fill in all fields', 'danger');
 } else {
 	const grocieries = new Grocieries(Name_of_Item, price, quantity, category, quantitySold, quantityLeft);
 	// console.log(grocieries);
 	UI.addGrocieries(grocieries);
 	Store.addGrocery(grocieries);
 	UI.showAlert('Grocieries added successfully', 'success');
 	UI.clearForm();
 }

})
// Remove a Grocieries 
document.getElementById('grocieries').addEventListener('click', (e) => {
	UI.deleteGrocieries(e.target);

	//remove from storage
	Store.deleteGrocieries(e.target.parentElement.previousElementSibling.textContent)
});