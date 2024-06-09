/api/sign-up = { firstname, lastnmae, email, password }
/api/sign-in = { email, password} => return { token }


/api/todos (get) ( attach {token}) (which user? is token expired? )
/api/todos (post)