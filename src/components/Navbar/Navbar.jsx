import { useContext } from 'react'
import uiSlice from '../../contexts/ui/ui-slice'

function Navbar() {
  const uiCtx = useContext(uiSlice)

  return (
    <div className='fixed top-0 left-0 right-0 lg:left-lg-sidebar h-navbar bg-black text-white flex flex-row items-stretch justify-between z-50'>
      <div className='h-full'></div>
      <div className='h-full flex flex-row items-center px-4 font-bold'>
        <button
          className='rounded-full py-3 px-6 text-gray-300'
          onClick={uiCtx.showSignup}>
          Sign up
        </button>
        <button
          className='rounded-full py-3 px-6 bg-white text-gray-900'
          onClick={uiCtx.showSignin}>
          Log in
        </button>
      </div>
    </div>
  )
}

export default Navbar
