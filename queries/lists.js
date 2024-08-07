import List from "@/models/list-model";

export async function createList(list) {
    try {
        await List.create(list);
        return list;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAllLists() {
    try {
        const lists = await List.find();
        return lists;
    } catch (error) {
        throw new Error(error)
    }
}