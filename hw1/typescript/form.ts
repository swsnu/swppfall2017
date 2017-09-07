class Form {
	constructor(
		public email: string,
		public password: string,
		public password_confirmation: string,
		public website: string,
		public phone_number: string,
		public fname: string,
		public lname: string,
		public age: number,
		public birth_month: string,
		public birth_day: number,
		public birth_year: number) {}
	// TODO: You may fill in functions in the class.

}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email : string = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the function. Use the Form class defined above

    var form : Form

    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: use the `alert` function for modals.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
