'use client'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { useState } from 'react'
import ItemsCount from "./ItemsCount";
import AddItemModelForm from "./AddItemModelForm";
import { useRouter } from "next/navigation";
import UpdateItemModelForm from "./UpdateItemModalForm";
import DeleteItemModelForm from "./DeleteItemModalForm";


const Table = ({ items }) => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('e');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        console.log(e.target.value)

        let value = e.target.value;

        if (value === "true" || value === "false") {
            setFilter(value)
        } else {
            setFilter('e')
        }
    }


    return (
        <div className="overflow-x-auto h-[calc(100vh - 100px)]">
            <div className="flex flex-row justify-center mt-5"><ItemsCount itemsAmount={items.length} /></div>
            <div className="overflow-y-scroll h-[55vh]">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className="">
                        <tr className='text-center'>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Regular Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            {/* <td></td> */}
                            <td><input type="text" placeholder="Search items" className="input input-bordered w-full max-w-xs" onChange={handleChange} /></td>
                            <td></td>
                            <td><select onChange={handleSelectChange} className="select select-bordered w-full max-w-xs">
                                <option value={null} defaultValue>All Items</option>
                                <option value={true}>Regular Items</option>
                                <option value={false}>Unregular Items</option>
                            </select></td>
                            <td></td>
                        </tr>
                        {/* row 1 */}
                        {items ? items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && item.regularItem.toString().includes(filter)).reverse().map(item => (
                            <tr key={item._id} className='text-center'>
                                {/* <td>{item._id}</td> */}
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.regularItem ? 'true' : 'false'}</td>
                                {/* <td className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrashAlt color='red' size={25} /></td> */}
                                <td className="flex flex-row justify-between">
                                    <DeleteItemModelForm item={item} />
                                    <UpdateItemModelForm prevItem={item} />
                                </td>
                            </tr>
                        ))
                            :
                            <span className="loading loading-ring loading-lg"></span>

                        }

                    </tbody>
                </table>
            </div>

            <AddItemModelForm />
        </div>
    )
}

export default Table