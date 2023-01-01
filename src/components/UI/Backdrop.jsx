import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

function Backdrop({
  children,
  show = false,
  noZ = false,
  layout = 'fixed',
  className = '',
  onClick = () => {},
}) {
  const nodeRef = useRef()
  const zClass = !noZ ? 'z-[60]' : ''

  const clickHandler = () => {
    onClick()
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames='fade'
      in={show}
      timeout={300}
      unmountOnExit>
      <div
        ref={nodeRef}
        className={`${layout} inset-0 bg-black/80 ${zClass} ${className}`}
        onClick={clickHandler}>
        {children}
      </div>
    </CSSTransition>
  )
}

export default Backdrop
