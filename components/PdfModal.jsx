import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaPencilAlt } from 'react-icons/fa'

const PdfModal = ({ list }) => {

    const router = useRouter()

    const handleOpenModal = () => {

        document.getElementById(`update_modal${list._id}`).showModal()
    }

    return (
        <div className=''>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <div className='flex flex-row justify-center'> <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Item</button></div> */}
            <span className='cursor-pointer' onClick={handleOpenModal}>{list.name}</span>
            <dialog id={`update_modal${list._id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">PDF</h3>

                    <div className='flex flex-col gap-4'>

                        <iframe src={list.data} type="application/pdf" width="400" height="500"></iframe>

                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default PdfModal;