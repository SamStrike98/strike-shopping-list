import { NextResponse } from "next/server";
import { removeItem } from "@/queries/items";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

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