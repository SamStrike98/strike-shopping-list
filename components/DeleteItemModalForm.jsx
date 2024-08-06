import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaTrashAlt } from 'react-icons/fa'

const DeleteItemModelForm = ({ item }) => {

    const router = useRouter()

    const [error, setError] = useState('')
    const [added, setAdded] = useState(false)

    const handleOpenModal = () => {
        // setName(prevItem.name)
        // setQuantity(prevItem.quantity)
        // setReqularItem(prevItem.regularItem)
        document.getElementById(`delete_modal${item._id}`).showModal()
    }

    const handleDelete = async () => {

        const id = item._id
        console.log(id)
        const response = await fetch(`/api/item/${id}`, {
            method: 'DELETE',
        });

        if (response.status === 201) {
            // alert('Item Deleted')
            router.refresh()
        } else {
            alert('Item not deleted')
        }

        console.log(id)
    }

    return (
        <div className=''>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <div className='flex flex-row justify-center'> <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Item</button></div> */}
            <span className='cursor-pointer' onClick={handleOpenModal}><FaTrashAlt color='red' size={25} /></span>
            <dialog id={`delete_modal${item._id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">You are deleting <span className='font-extrabold text-red-500'>{item.name}</span></h3>

                    <div className='flex flex-row justify-evenly items-center mt-10'>

                        <button onClick={handleDelete} className="btn btn-warning w-[100px]">Delete Item</button>

                        <div className="modal-action m-0">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn w-[100px]">Cancel</button>
                            </form>
                        </div>

                    </div>



                </div>
            </dialog>
        </div>
    )
}

export default DeleteItemModelForm