
export enum Category {
    Fiction = "Fiction",
    Science = "Science",
    SelfDevelopment = "SelfDevelopment",
    Poetry = "Poetry",
    Religious = "Religious",
  }

export interface IBook{
    title: string;
    author: string;
    price: number;
    category: Category;
    description: string;
    quantity: number;
    inStock: boolean;
    isDelete: boolean;
    createdAt?: Date; 
    updatedAt?: Date; 
}
