import React from 'react'
import classNames from 'classnames'

export default function Button({ children, className, outline }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  )
}
