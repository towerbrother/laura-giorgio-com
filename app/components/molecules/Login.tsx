import { Form } from '@remix-run/react';
import Button from '~/components/atoms/Button';

const Login = () => (
  <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-cyan-100">
    <Form
      method="post"
      action="/set-user-auth"
      className="flex flex-col justify-center items-center"
    >
      <input
        name="password"
        type="password"
        placeholder="Password..."
        className="text-2xl bg-neutral-100 border-none shadow-lg border-2 rounded-md py-2 px-3 mb-3 w-72 sm:w-80 md:w-96 placeholder:text-neutral-800 placeholder:text-2xl focus:outline-none"
        required
      />
      <Button
        type="submit"
        className="text-2xl py-2 font-bold text-neutral-100 bg-neutral-800 shadow-lg rounded-md hover:opacity-80 w-72 sm:w-80 md:w-96"
      >
        LOGIN
      </Button>
    </Form>
  </div>
);

export default Login;
