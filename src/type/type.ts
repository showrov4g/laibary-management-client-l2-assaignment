export interface IBook {
    _id: string,
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description?: string,
    copies: number
    available: boolean
};

export interface IBorrow {
    book: string,
    quantity: number,
    dueDate: Date
}

export interface IAllBorrow {
    _id: string,
    book: {
        title: string,
        isbn: string,
    },
    totalQuantity: number
}