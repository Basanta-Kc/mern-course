class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  const age = 10;
  adfdf;
  if (age < 18) {
    throw new CustomError("Your age must be 18");
  } else {
    console.log("you can enter");
  }
} catch (error) {
  if (error instanceof CustomError) {
    console.log(error.message);
  } else {
    // log somewhere for future reference
    console.log("this should be logged somewhere", error)
  }
}
