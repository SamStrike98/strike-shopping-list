'use client'

import { generatePdf } from "@/utils/pdf"
import { useState } from "react"
import Image from "next/image"
import PdfModal from "./PdfModal"


const PdfStuff = ({ data }) => {
    console.log(data);

    const [name, setName] = useState('');

    const handleClick = async () => {

        const savedDoc = generatePdf(name)

        const response = await fetch(`/api/list`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                data: savedDoc
            })
        });

        if (response.status === 201) {
            // setIsLoading(false)
            alert('list added')

            // router.refresh()
        } else {
            alert('list NOT added')
        }

    }


    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="file name" />
            <button onClick={handleClick}>Generate PDF</button>

            {data &&
                <ul className="flex flex-col gap-4">
                    {data.map(list => (

                        <PdfModal key={list.key} list={list} />
                    ))}
                </ul>}

        </div>
    )
}

export default PdfStuff