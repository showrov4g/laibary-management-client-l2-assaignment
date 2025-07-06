import App from "@/App";
import AllBooks from "@/pages/AllBooks/AllBooks";
import Borrow from "@/pages/Borrow/Borrow";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import CreateBook from "@/pages/CreateBook/CreateBook";
import EditBook from "@/pages/EditBook/EditBook";
import Home from "@/pages/Home/Home";
import SingleBook from "@/pages/SingleBook/SingleBook";
import { createBrowserRouter } from "react-router";
// import EditBook from "@/pages/EditBook/EditBook";
// import AllBooks from "@/pages/AllBooks/AllBooks";
// import CreateBook from "@/pages/CreateBook/CreateBook";
// import SingleBook from "@/pages/SingleBook/SingleBook";
// import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
// import Borrow from "@/pages/Borrow/Borrow";
// import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/books",
                Component: AllBooks
            },
            {
                path: "/books/:id",
                Component: SingleBook
            },
            {
                path: "/create-book",
                Component: CreateBook
            },
            {
                path: "/edit-book/:id",
                Component: EditBook
            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary
            },
            {
                path: "/borrow/:bookId",
                Component: Borrow
            }
        ]
    }
]);

export default router;