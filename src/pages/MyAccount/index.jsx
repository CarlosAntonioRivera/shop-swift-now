import { useContext, useRef, useState } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/Layout';

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  const [view, setView] = useState('user-info');

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

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
      <div className='flex flex-col gap-4 w-96 p-5 bg-[#d1d5db] rounded-lg'>
        <p>
          <span className='font-medium text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className='font-medium text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className='border border-black bg-white rounded-lg mt-4 py-3'
          onClick={() => setView('edit-user-info')}
        >
          Edit
        </button>
      </div>
    );
  };

  const renderEditUserInfo = () => {
    return (
      <form
        ref={form}
        className='flex flex-col gap-4 w-96 p-5 bg-[#d1d5db] rounded-lg'
      >
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='name'
            className='font-normal text-sm'
          >
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Armando Casas'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='email'
            className='font-normal text-sm'
          >
            Email:
          </label>
          <input
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='hi@example.com'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='password'
            className='font-normal text-sm'
          >
            Password:
          </label>
          <input
            type='password'
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='*******'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none focus:placeholder:text-transparent py-2 px-4'
          />
        </div>

        <button
          className='bg-black text-white w-full rounded-lg py-3'
          onClick={() => {
            setView('user-info'), editAccount();
          }}
        >
          Edit
        </button>
      </form>
    );
  };

  const renderView = () =>
    view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo();

  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>My Account</h1>

      {renderView()}
    </Layout>
  );
}

export default MyAccount;
