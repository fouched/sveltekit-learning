
export const actions = {

	default: async ({request }) => {
		const formData = await request.formData();
		const firstName = formData.get('firstName');
		const lastName = formData.get('lastName');
		const email = formData.get('email');
		const password = formData.get('password');
		console.log("firstName:", firstName)
		console.log("lastName:", lastName)
		console.log("email:", email)
		console.log("password:", password)

		// Process the form data and perform actions - fake it for now
		const returnVal = firstName === 'Fouche' || firstName === 'John';
		return { success: returnVal};
	}
}