/api/sign-up = { firstname, lastnmae, email, password }
/api/sign-in = { email, password} => return { token }


/api/todos (get) ( attach {token}) (which user? is token expired? )
/api/todos (post)


<!-- /api/todos/edity
=> gate (authenticate) => gate 2(admin) => gate 3 (edit-action)=> lift (check) => room (edit function) -->

// Remaing For basic express: file upload, request validation, pagination api.