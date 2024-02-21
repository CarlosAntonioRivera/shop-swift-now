import Layout from '../../components/Layout';

function MyAccount() {
  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-2xl'>My Account</h1>
        </div>

        <div className='grid gap-5 grid-cols-2 place-content-center w-full max-w-screen-lg rounded-lg p-5 mb-2 text-lg font-normal bg-[#d1d5db]'>
          <div>
            <p className='font-medium'>Name</p>
            <p>Carlos</p>
          </div>
          <div>
            <p className='font-medium'>Last Name</p>
            <p>Rivera</p>
          </div>
          <div>
            <p className='font-medium'>Email</p>
            <p>carlosrivera@gmail.com</p>
          </div>
          <div>
            <p className='font-medium'>Birthdate</p>
            <p>2001</p>
          </div>
          <div>
            <p className='font-medium'>Password</p>
            <p>**********</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
