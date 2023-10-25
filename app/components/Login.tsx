import { useEffect, useRef, useState } from 'react';
import { Form, useTransition } from '@remix-run/react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

import Button from '~/components/reusable/Button';

const Login = ({ fieldErrors }: { fieldErrors?: any }) => {
  const { submission, state } = useTransition();

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const mounted = useRef<boolean>(false);

  const isLogging =
    state === 'submitting' &&
    submission.formData.get('login_action') === 'login';

  useEffect(() => {
    if (state === 'idle' && mounted.current) {
      inputRef.current?.select();
    }

    mounted.current = true;
  }, [isLogging, state]);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-600 to-neutral-100'>
      <div className='flex flex-col justify-center items-center bg-neutral-100 rounded-md py-8 px-2 sm:px-6'>
        <h1 className='text-4xl font-bold text-center text-neutral-800 mb-2'>
          Welcome!
        </h1>
        <p className='text-md text-neutral-600 mb-1'>
          Hint: Password in the CV 😉
        </p>
        <p className='text-md text-red-600 mt-2 mb-1'>
          {fieldErrors?.password ? fieldErrors?.password : <>&nbsp;</>}
        </p>
        <Form
          method='post'
          name='login_action'
          className='flex flex-col justify-center items-center relative'
        >
          <Button
            className='absolute top-[18px] right-5 text-neutral-600'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          <input
            ref={inputRef}
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password...'
            className='text-2xl bg-neutral-100 border-solid shadow-lg border-2 rounded-md py-2 px-3 mb-3 w-72 sm:w-80 md:w-96 placeholder:text-neutral-600 placeholder:text-2xl focus:outline-none'
            aria-invalid={Boolean(fieldErrors?.password)}
            aria-errormessage={
              fieldErrors?.password ? 'password-error' : undefined
            }
          />
          <Button
            type='submit'
            value='login'
            name='login_action'
            disabled={isLogging}
            className='text-2xl py-2 font-bold text-neutral-100 bg-neutral-800 shadow-lg rounded-md hover:opacity-80 w-72 sm:w-80 md:w-96'
          >
            {isLogging ? (
              <div className='flex items-center justify-center'>
                <FaSpinner className='animate-spin mx-4' />
                <span>PROCESSING...</span>
              </div>
            ) : (
              'LOGIN'
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
