import { NextResponse } from "next/server";
import { removeItem, updateItem } from "@/queries/items";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request, { params }) => {
    try {
        const id = params.id;

        await dbConnect();
        console.log('Databse connected');

        const item = await getItemById(id);

        return new NextResponse(JSON.stringify(item), {
            status: 200
        })
    } catch (error) {
        console.log('Error fetching item', error);

        return new NextResponse(error.message, {
            status: 500
        })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const id = params.id
        console.log('id', id)

        await dbConnect();
        console.log("Database connected");

        const item = await removeItem(id);
        // console.log(item)

        return new NextResponse(JSON.stringify(item), {
            status: 201
        });
    } catch (error) {
        console.error("Error deleting item:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};

export const PATCH = async (request, { params }) => {

    try {
        const { name, quantity, regularItem } = await request.json();
        const id = params.id;
        await dbConnect();
        console.log('Database Connected');

        const item = await updateItem(id, { name, quantity, regularItem });

        return new NextResponse(JSON.stringify(item), {
            status: 200
        })

    } catch (error) {
        console.log("Error updating item", error);
        return new NextResponse(error.message, {
            status: 500
        })
    }
}