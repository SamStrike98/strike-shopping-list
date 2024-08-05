import { NextResponse } from "next/server";
import { createItem, getAllItems, removeItem } from "@/queries/items";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request) => {
    try {
        await dbConnect();
        console.log("Database connected");

        const items = await getAllItems();
        // console.log("Fetched items:", items);

        return new NextResponse(JSON.stringify(items), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching items:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};


export const POST = async (request) => {
    // if (request.auth?.user.role === 'admin') {
    try {
        const { name, quantity, regularItem } = await request.json();

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");

        const createdAt = new Date();

        // Form a DB Payload
        const newItem = {
            name, quantity, regularItem, createdAt
        };

        // Update the DB
        await createItem(newItem);
        console.log("Item created:", newItem);


        return new NextResponse("Item has been created", {
            status: 201
        });
    } catch (error) {
        console.error("Error creating Item:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};


