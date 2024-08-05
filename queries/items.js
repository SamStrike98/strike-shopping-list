import Item from "@/models/item-model";

export async function createItem(item) {
    try {
        await Item.create(item);
        return item;
    } catch (error) {
        throw new Error(error)
    }
}

export async function getAllItems() {
    try {
        const items = await Item.find();
        return items;
    } catch (error) {
        throw new Error(error)
    }
}

export async function removeItem(itemId) {
    try {
        const item = await Item.findByIdAndDelete(itemId)
        return item;
    } catch (error) {
        throw new Error(error)
    }
}