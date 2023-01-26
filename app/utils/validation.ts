export function validatePassword(password: string) {
  if (password.length === 0) {
    return 'The password field cannot be empty!';
  }

  if (password !== process.env.ENTRY_PASSWORD) {
    return 'Oh no! Wrong password, try again!';
  }
}
