'use client'
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react'
import ItemsCount from "./ItemsCount";
import AddItemModelForm from "./AddItemModelForm";
import { useRouter } from "next/navigation";

// const items = [
//     {
//         id: 1,
//         name: 'Bananas',
//         quantity: 2,
//         regurlarItem: true
//     },
//     {
//         id: 2,
//         name: 'Apples',
//         quantity: 1,
//         regurlarItem: true
//     },
//     {
//         id: 3,
//         name: 'Pears',
//         quantity: 1,
//         regurlarItem: true
//     },
//     {
//         id: 4,
//         name: 'Deodorant',
//         quantity: 1,
//         regurlarItem: false
//     },
// ]

const Table = ({ items }) => {
    const router = useRouter();
    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleDelete = async (id) => {
        const response = await fetch(`/api/item/${id}`, {
            method: 'DELETE',
        });

        if (response.status === 201) {
            alert('Item Deleted')
            router.refresh()
        } else {
            alert('Item not deleted')
        }

        console.log(id)
    }

    return (
        <div className="overflow-x-auto">
            <ItemsCount itemsAmount={items.length} />
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className='text-center'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Regular Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center'>
                        <td></td>
                        <td><input type="text" placeholder="Search items" className="input input-bordered w-full max-w-xs" onChange={handleChange} /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* row 1 */}
                    {items ? items.filter(item => item.name.toLowerCase().includes(search)).map(item => (
                        <tr key={item._id} className='text-center'>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.regularItem ? 'true' : 'false'}</td>
                            <td className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrashAlt color='red' size={25} /></td>
                        </tr>
                    ))
                        :
                        <span className="loading loading-ring loading-lg"></span>

                    }

                </tbody>
            </table>

            <AddItemModelForm />
        </div>
    )
}

export default Table