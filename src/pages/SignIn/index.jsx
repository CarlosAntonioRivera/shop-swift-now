import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/Layout';

function SignIn() {
  const context = useContext(ShoppingCartContext);

  const [view, setView] = useState('user-info');

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

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>

        <Link to='/'>
          <button
            className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'
            // onClick={ () => setView('crete-user-info') }
            disabled={!hasUserAnAccount}
          >
            Log in
          </button>
        </Link>

        <div className='text-center'>
          <a
            className='font-light text-xs underline underline-offset-4'
            href='/'
          >
            Forgot my password
          </a>
        </div>

        <button
          className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
          onClick={() => setView('crete-user-info')}
          disabled={hasUserAnAccount}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form>
        <div className='grid gap-5 grid-cols-2 place-content-center w-full max-w-screen-lg rounded-lg p-5 mb-2 text-lg font-normal bg-[#d1d5db]'>
          <div>
            <p>Name</p>
            <input className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent' />
          </div>
          <div>
            <p>Last Name</p>
            <input className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent' />
          </div>
          <div>
            <p>Email</p>
            <input
              type='mail'
              className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
            />
          </div>
          <div>
            <p>Birthdate</p>
            <input
              type='date'
              className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type='password'
              className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              type='password'
              className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
            />
          </div>
          <div className='col-start-1 col-end-3'>
            <button
              className='bg-black py-3 text-white w-full rounded-lg mb-4'
              type='submit'
            >
              Register
            </button>
          </div>
        </div>
      </form>
    );
  };

  const renderView = () => {
    view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();
  };

  return (
    <>
      <Layout>
        <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome!</h1>

        {renderView()}
      </Layout>

      {/* <form>
          <div className='grid gap-5 grid-cols-2 place-content-center w-full max-w-screen-lg rounded-lg p-5 mb-2 text-lg font-normal bg-[#d1d5db]'>
            <div>
              <p>Name</p>
              <input className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent' />
            </div>
            <div>
              <p>Last Name</p>
              <input className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent' />
            </div>
            <div>
              <p>Email</p>
              <input
                type='mail'
                className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
              />
            </div>
            <div>
              <p>Birthdate</p>
              <input
                type='date'
                className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type='password'
                className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
              />
            </div>
            <div>
              <p>Confirm Password</p>
              <input
                type='password'
                className='rounded-lg border border-black w-96 p-4 mb-6 focus:placeholder:text-transparent'
              />
            </div>
            <div className='col-start-1 col-end-3'>
              <button
                className='bg-black py-3 text-white w-full rounded-lg mb-4'
                type='submit'
              >
                Register
              </button>
            </div>
          </div>
        </form> */}
    </>
  );
}

export default SignIn;
