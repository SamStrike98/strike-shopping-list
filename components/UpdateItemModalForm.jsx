import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaPencilAlt } from 'react-icons/fa'

const UpdateItemModelForm = ({ prevItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [regularItem, setReqularItem] = useState(true);



    const router = useRouter()



    const [item, setItem] = useState();

    const [error, setError] = useState('')
    const [added, setAdded] = useState(false)

    const handleChange = () => {

    }

    const handleOpenModal = () => {
        setName(prevItem.name)
        setQuantity(prevItem.quantity)
        setReqularItem(prevItem.regularItem)

        document.getElementById(`update_modal${prevItem._id}`).showModal()
    }

    const handleUpdateItem = async () => {
        // setIsLoading(true)

        const response = await fetch(`/api/item/${prevItem._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                regularItem: regularItem
            })
        });

        if (response.status === 200) {
            // setIsLoading(false)

            router.refresh()
        } else {
            // alert('Not added to cart')
        }



        if (name === '' || name.length < 3) {
            setError('Enter Item Name!')
        }
        setAdded(true)

        console.log(name, quantity, regularItem)
        document.getElementById(`update_modal${prevItem._id}`).close()

        // setName('');
        // setQuantity(1);
        // setReqularItem(true)

        setAdded(false)

    }
    return (
        <div className=''>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <div className='flex flex-row justify-center'> <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Item</button></div> */}
            <span className='cursor-pointer' onClick={handleOpenModal}><FaPencilAlt color='green' size={25} /></span>
            <dialog id={`update_modal${prevItem._id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add an Item</h3>

                    <div className='flex flex-col gap-4'>
                        <label className={`input input-bordered flex items-center gap-2 `}>
                            Name
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="grow" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Quantity
                            <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" className="grow" />
                        </label>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Regular Item</span>
                                <input onChange={(e) => setReqularItem(e.target.checked)} checked={regularItem} type="checkbox" className="toggle" />
                            </label>
                        </div>

                        <div className='flex flex-row justify-center'>
                            <button onClick={handleUpdateItem} disabled={name.length < 3 && 'disabled'} className="btn btn-primary w-[100px]">Update Item</button>
                        </div>

                        {/* ADDED ITEM ALERT */}
                        {added &&
                            <div role="alert" className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Item Updated</span>
                            </div>
                        }

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

export default UpdateItemModelForm