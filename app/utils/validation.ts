export function validatePassword(input: string) {
  if (input.length === 0) {
    return 'The password field cannot be empty!';
  }

  if (input !== process.env.ENTRY_PASSWORD) {
    return 'Oh no! Wrong password, try again!';
  }
}

export function validateName(input: string) {
  if (input.length === 0) {
    return 'The name field cannot be empty!';
  }
}

export function validateSurname(input: string) {
  if (input.length === 0) {
    return 'The surname field cannot be empty!';
  }
}

export function validateEmail(input: string) {
  const validRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.length === 0) {
    return 'The email field cannot be empty!';
  }

  if (!validRegex.test(input)) {
    return 'You have entered an invalid email address!';
  }
}

export function validateDate(input: string) {
  if (input.length === 0) {
    return 'The date field cannot be empty!';
  }
}

export function validateFoodPreference(input: string) {
  if (input.length === 0) {
    return 'The food preference field cannot be empty!';
  }
}
