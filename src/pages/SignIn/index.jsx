import Layout from '../../components/Layout';

function SignIn() {
  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-2xl'>Sign In</h1>
        </div>

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
      </Layout>
    </>
  );
}

export default SignIn;
