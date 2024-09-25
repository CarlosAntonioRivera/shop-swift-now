import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useContext, useRef, useState } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/Layout';

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  const [showPassword, setShowPassword] = useState(false);

  const [view, setView] = useState('user-info');

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Show Password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Edit Account Form
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Update Account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <section className='flex flex-col gap-5 w-96 p-6 border border-black rounded-lg'>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='name'
            className='font-semibold text-lg'
          >
            Name
          </label>

          <input
            value={parsedAccount?.name}
            readOnly
            className='w-full bg-transparent border-none focus:outline-none'
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
            value={parsedAccount?.email}
            readOnly
            className='w-full bg-transparent border-none focus:outline-none'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='password'
            className='font-semibold text-lg'
          >
            Password
          </label>

          <div className='flex justify-between'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={parsedAccount?.password}
              readOnly
              className='w-full bg-transparent border-none focus:outline-none'
            />

            <button
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

        <button
          className='border border-black font-bold rounded-lg py-3'
          onClick={() => setView('edit-user-info')}
        >
          Edit
        </button>
      </section>
    );
  };

  const renderEditUserInfo = () => {
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

        <button
          className='bg-black text-white font-bold w-full rounded-lg py-3'
          onClick={() => {
            setView('user-info'), editAccount();
          }}
        >
          Save
        </button>
      </form>
    );
  };

  const renderView = () =>
    view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
      <h1 className='font-semibold text-2xl text-center mb-6 w-80'>
        My Account
      </h1>

      {renderView()}
    </Layout>
  );
}

export default MyAccount;
