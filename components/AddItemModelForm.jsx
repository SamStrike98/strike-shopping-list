import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddItemModelForm = () => {
    const router = useRouter()


    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [regularItem, setReqularItem] = useState(true);
    const [item, setItem] = useState();

    const [error, setError] = useState('')
    const [added, setAdded] = useState(false)

    const handleAddItem = async () => {
        // setIsLoading(true)

        const response = await fetch(`/api/item`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                quantity: quantity,
                regularItem: regularItem
            })
        });

        if (response.status === 201) {
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
        // document.getElementById('my_modal_5').close()

        setName('');
        setQuantity(1);
        setReqularItem(true)

        setAdded(false)

    }
    return (
        <div className='mt-5'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className='flex flex-row justify-center'> <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Item</button></div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add an Item</h3>

                    <div className='flex flex-col gap-4'>
                        <label className={`input input-bordered flex items-center gap-2 `}>
                            Name
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="grow" placeholder="Apples" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Quantity
                            <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" className="grow" placeholder={1} />
                        </label>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Regular Item</span>
                                <input onChange={(e) => setReqularItem(e.target.checked)} checked={regularItem} type="checkbox" className="toggle" />
                            </label>
                        </div>

                        <div className='flex flex-row justify-center'>
                            <button onClick={handleAddItem} disabled={name.length < 3 && 'disabled'} className="btn btn-primary w-[100px]">Add Item</button>
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
                                <span>Item Added</span>
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

export default AddItemModelForm