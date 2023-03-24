import React from 'react'
import { useRecoilState } from 'recoil'
import modalState from '../atoms/modalAtoms'

const Modal = () => {
    const [open,setOpen] = useRecoilState(modalState)
  return (
    <div>
    {open && <p>modal is open</p>}
    </div>
  )
}

export default Modal
