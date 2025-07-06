// book interface 
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

// borrow interface 
export interface IBorrow {
    book: string,
    quantity: number,
    dueDate: Date
}

// all borrow book interface 


export interface IAllBorrow {
    _id: string,
    book: {
        title: string,
        isbn: string,
    },
    totalQuantity: number
}