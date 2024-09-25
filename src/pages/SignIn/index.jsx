import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Link, Navigate } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/Layout';

function SignIn() {
  const context = useContext(ShoppingCartContext);

  const [showPassword, setShowPassword] = useState(false);

  const [view, setView] = useState('user-info');

  // Registration Form
  const form = useRef(null);

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(false);
    context.closeProductDetail();
    //Redirect
    return (
      <Navigate
        replace
        to={'/'}
      />
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Create account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);

    // Sign In
    handleSignIn();
  };

  const renderLogIn = () => {
    return (
      <section className='flex flex-col gap-5 w-96 p-6 border border-black rounded-lg'>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='email'
            className='font-semibold text-lg'
          >
            Email
          </label>

          <input
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            disabled
            placeholder='email@address.com'
            className='rounded-lg bg-[#F7F7F7] placeholder:text-sm focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='password'
            className='font-semibold text-lg'
          >
            Password
          </label>

          <div className='flex w-full'>
            <div className='flex justify-between items-center w-full'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                defaultValue={parsedAccount?.password}
                disabled
                placeholder='*******'
                className='w-full rounded-lg bg-[#F7F7F7] placeholder:text-sm focus:outline-none focus:placeholder:text-transparent py-2 px-4'
              />

              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='ml-2'
              >
                {showPassword ? (
                  <EyeSlashIcon className='h-6 w-6' />
                ) : (
                  <EyeIcon className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        <Link to='/'>
          <button
            className='bg-black disabled:bg-black/40 text-white font-bold w-full rounded-lg py-3 mt-4'
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}
          >
            Login
          </button>
        </Link>

        <div className='text-center'>
          <a
            className='text-sm underline underline-offset-4'
            href='/'
          >
            Forgot my password
          </a>
        </div>

        <button
          className='border border-black bg-white font-bold disabled:text-black/40 disabled:border-black/40 rounded-lg mt-1 py-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}
        >
          Sign Up
        </button>
      </section>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form
        ref={form}
        className='flex flex-col gap-5 w-96 p-6 border border-black rounded-lg'
      >
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='name'
            className='font-semibold text-lg'
          >
            Name
          </label>

          <input
            type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Full name'
            className='rounded-lg bg-[#F7F7F7] placeholder:text-sm focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='email'
            className='font-semibold text-lg'
          >
            Email
          </label>

          <input
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='email@address.com'
            className='rounded-lg bg-[#F7F7F7] placeholder:text-sm focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='password'
            className='font-semibold text-lg'
          >
            Password
          </label>

          <div className='flex w-full'>
            <div className='flex justify-between items-center w-full'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                defaultValue={parsedAccount?.password}
                placeholder='*******'
                className='w-full rounded-lg bg-[#F7F7F7] placeholder:text-sm focus:outline-none focus:placeholder:text-transparent py-2 px-4'
              />

              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='ml-2'
              >
                {showPassword ? (
                  <EyeSlashIcon className='h-6 w-6' />
                ) : (
                  <EyeIcon className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        <Link to='/'>
          <button
            className='bg-black text-white font-bold w-full rounded-lg py-3'
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();

  return (
    <Layout>
      <h1 className='font-semibold text-2xl text-center mb-6 w-96'>
        ¡Welcome!
      </h1>

      {renderView()}
    </Layout>
  );
}

export default SignIn;
