import { XMarkIcon } from '@heroicons/react/24/outline'
import Backdrop from './Backdrop'

function Modal({
  show,
  onHide = () => {},
  children,
  backdropClass = '',
  modalClass = '',
  containerClass = '',
}) {
  return (
    <Backdrop
      show={show}
      onClick={onHide}
      className={`flex flex-col justify-start items-start overflow-y-auto overflow-x-hidden c-scroll py-4 ${backdropClass}`}>
      <div
        onClick={ev => ev.stopPropagation()}
        className={`relative w-full max-w-sm mx-auto my-auto ${containerClass}`}>
        <button
          onClick={onHide}
          className='absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-6 h-6 p-0.5 bg-red-500 rounded-full'>
          <XMarkIcon className='w-full h-full text-white' />
        </button>
        <div className={`w-full bg-neutral-800 p-4 rounded-2xl ${modalClass}`}>
          {children}
        </div>
      </div>
    </Backdrop>
  )
}

export default Modal
