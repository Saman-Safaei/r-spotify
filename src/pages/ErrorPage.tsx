import { Link, useRouteError } from 'react-router-dom';
import errors from '../assets/data/errors.json';
import { AxiosError } from 'axios';

function ErrorPage() {
  const routeError = useRouteError() as { status: '404' | '500'; statusText: string };
  const errorMessage = errors[routeError.status] || 'Unknown error occurred.';

  return (
    <div className='absolute top-0 right-0 h-full w-full flex flex-col items-center'>
      <div className='my-auto'>
        <h1 className='whitespace-pre-wrap text-2xl font-bold text-center mb-2'>Spotify | {routeError.statusText}</h1>
        <p className='text-gray-400 mb-4'>{errorMessage}</p>
        <Link to='/' className='block w-full text-center bg-green-600 py-2 px-4 rounded-full'>
          Go to home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
