import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/type/type";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

interface BookProps {
    book: IBook;
}

const BookCard = ({ book }: BookProps) => {
    const navigate = useNavigate();
    const [deleteBook] = useDeleteBookMutation();

    const handleBorrow = (id: string) => {
        navigate(`/borrow/${id}`);
    };

    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteBook(id).unwrap();
                Swal.fire({
                    title: "Deleted!",
                    text: "The book has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    return (
        <div className="card bg-gray-100 shadow-md border border-blue-200 p-3">
            <div className="card-body">
                <h2 className="text-xl font-semibold text-gray-800 text-center pb-3"> {book?.title}</h2>
                <p><span className="font-medium">Author:</span> {book?.author}</p>
                <p><span className="font-medium">Genre:</span> {book?.genre}</p>
                <p><span className="font-medium">ISBN:</span> {book?.isbn}</p>
                <p>
                    <span className="font-medium">Availability:</span>{" "}
                    {book?.available ? (
                        <span className="text-green-600 font-semibold">Available</span>
                    ) : (
                        <span className="text-red-500 font-semibold">Unavailable</span>
                    )}
                </p>
                <p><span className="font-medium">Copies:</span> {book?.copies}</p>
                <div className="pt-3 flex gap-3 justify-center flex-wrap">
                    {/* View Button */}
                    <Link
                        to={`/books/${book?._id}`}
                        className="px-4 py-2 font-semibold rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        View
                    </Link>

                    {/* Edit Button */}
                    <Link to={`/edit-book/${book?._id}`}
                        className="px-4 py-2 rounded-md cursor-pointer bg-yellow-500 text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                    >
                        Edit
                    </Link>

                    {/* Delete Button */}
                    <Button
                        className="px-4 py-2 rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        onClick={() => handleDelete(book?._id)}
                    >
                        Delete
                    </Button>

                    {/* Borrow Button */}
                    <Button
                        className={`px-4 py-2 rounded-md cursor-pointer text-white ${book?.available ? "bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500" : "bg-gray-400 cursor-not-allowed"}`}
                        onClick={() => handleBorrow(book?._id)}
                        disabled={!book?.available}
                    >
                        Borrow
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default BookCard;