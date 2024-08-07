import { NextResponse } from "next/server";
import { createList, getAllLists } from "@/queries/lists";
import dbConnect from "@/lib/mongo";
import mongoose from "mongoose";

export const GET = async (request) => {
    try {
        await dbConnect();
        console.log("Database connected");

        const lists = await getAllLists();
        // console.log("Fetched items:", items);

        return new NextResponse(JSON.stringify(lists), {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching lists:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};


export const POST = async (request) => {
    // if (request.auth?.user.role === 'admin') {
    try {
        const { name, data } = await request.json();

        // Create a DB Connection
        await dbConnect();
        console.log("Database connected");

        const createdAt = new Date();

        // Form a DB Payload
        const newList = {
            name, data, createdAt
        };

        // Update the DB
        await createList(newList);
        console.log("List created:", newList);


        return new NextResponse("List has been created", {
            status: 201
        });
    } catch (error) {
        console.error("Error creating List:", error);
        return new NextResponse(error.message, {
            status: 500
        });
    }
};