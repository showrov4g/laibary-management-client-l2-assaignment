import Loading from "@/components/Loading/Loading";
import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useGetSingleBookQuery(id as string);
    if (isLoading) return <Loading />;
    if (isError || !book) {
        return (
            <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
                Failed to load book.
            </p>
        );
    };

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Book Information</h2>

            <div className="bg-white dark:bg-gray-800 shadow-lg border border-blue-200 dark:border-gray-700 rounded-xl p-8 space-y-4">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    {book?.data?.title}
                </h2>

                <div className="space-y-2 text-gray-700 dark:text-gray-200 text-[15px]">
                    <p><span className="font-semibold">Author:</span> {book?.data?.author}</p>
                    <p><span className="font-semibold">Genre:</span> {book?.data?.genre}</p>
                    <p><span className="font-semibold">ISBN:</span> {book?.data?.isbn}</p>
                    <p><span className="font-semibold">Description:</span> {book?.data?.description}</p>
                    <p><span className="font-semibold">Copies:</span> {book?.data?.copies}</p>
                    <p>
                        <span className="font-semibold">Availability:</span>{" "}
                        <span className={book?.data?.available ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                            {book?.data?.available ? "Available" : "Unavailable"}
                        </span>
                    </p>
                    <p><span className="font-semibold">Created At:</span> {new Date(book?.data?.createdAt).toLocaleString()}</p>
                    <p><span className="font-semibold">Updated At:</span> {new Date(book?.data?.updatedAt).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;