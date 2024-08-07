import PdfStuff from '@/components/PdfStuff'
import React from 'react'

const page = async () => {

    const res = await fetch(`${process.env.URL}/api/list`, { cache: 'no-store' });
    const data = await res.json();

    return (
        <div>
            <PdfStuff data={data} />



        </div>
    )
}

export default page