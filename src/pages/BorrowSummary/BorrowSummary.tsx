
import Loading from "@/components/Loading/Loading";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllBorrowQuery } from "@/redux/api/bookApi";
import type { IAllBorrow } from "@/type/type";

const BorrowSummary = () => {
    const { data: borrows, isLoading, isError } = useGetAllBorrowQuery(undefined);

    if (isLoading) return <Loading />;
    if (isError || !borrows) {
        return (
            <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
                Failed to load borrow summary
            </p>
        );
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-10 w-full max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
                Borrow Summary
            </h2>

            <div className="overflow-x-auto rounded-lg border border-x-4 border-blue-200 shadow-2xl bg-white">
                <Table className="w-full text-sm text-gray-700">
                    <TableHeader className="bg-blue-100">
                        <TableRow>
                            <TableHead className="text-center font-semibold text-blue-500">
                                #
                            </TableHead>
                            <TableHead className="text-center font-semibold text-blue-500">
                                Book Title
                            </TableHead>
                            <TableHead className="text-center font-semibold text-blue-500">
                                ISBN
                            </TableHead>
                            <TableHead className="text-center font-semibold text-blue-500">
                                Total Quantity
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            borrows?.data?.map((borrow: IAllBorrow, idx: number) => (
                                <TableRow
                                    key={borrow?._id}
                                    className="hover:bg-blue-50 transition duration-200"
                                >
                                    <TableCell className="text-center font-medium">
                                        {idx + 1}
                                    </TableCell>
                                    <TableCell className="text-center">{borrow?.book?.title}</TableCell>
                                    <TableCell className="text-center">{borrow?.book?.isbn}</TableCell>
                                    <TableCell className="text-center font-semibold text-green-600">
                                        {borrow?.totalQuantity}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default BorrowSummary;