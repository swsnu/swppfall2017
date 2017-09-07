class Form {
	constructor(
		public email: string,
		public password: string,
		public password_confirmation: string,
		public website: string,
		public phone_number: string,
		public fname: string,
		public lname: string,
		public blood_type: string,
		public birth_date: string) {}
}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the function

    var form : Form

    // Hint: you can use the RegExp class for matching a string with the `test` method
    // Hint: use the `alert` function for modals
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
}
document.body.appendChild(but)
