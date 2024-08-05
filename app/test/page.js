import Table from '@/components/Table'
import React from 'react'

const page = async () => {

    const res = await fetch(`${process.env.URL}/api/item`, { cache: 'no-store' });
    const items = await res.json();
    // console.log(items)

    return (
        <div>
            <Table items={items} />
        </div>
    )
}

export default page