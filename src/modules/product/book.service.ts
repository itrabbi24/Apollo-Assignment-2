import { IBook } from "./book.interface";
import { BookModel } from "./book.model";


// create book
const CreateBook = async (data : IBook) => {
    try {
        const book = await BookModel.create(data);
        return book;
    } catch (error) {
        console.log(error);
    }
};

