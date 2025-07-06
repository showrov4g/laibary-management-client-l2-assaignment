import Swal from "sweetalert2";
import type { IBook } from "@/type/type";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { useCreateBookMutation } from "@/redux/api/baseApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateBookMutation } from "@/redux/api/bookApi";

const CreateBook = () => {
    const navigate = useNavigate();

    const form = useForm<IBook>({
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 0,
            available: true,
        },
    });

    const { handleSubmit, control } = form;
    const [createBook] = useCreateBookMutation();

    const onSubmit: SubmitHandler<IBook> = async (data) => {
        try {
            const bookData: IBook = {
                ...data,
                available: true,
            };
            // console.log(bookData);
            await createBook(bookData).unwrap();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book created successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/books");
            form.reset();
        } catch (error: any) {
            let errorMessage;
            if (error?.data?.error?.code === 11000) {
                errorMessage = "This ISBN already exists!";
            } else if (error?.data?.error?.message) {
                errorMessage = error?.data?.error?.errors?.copies?.message;
            }
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error",
                text: errorMessage,
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6 border border-blue-200">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Add a New Book</h2>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Title */}
                        <FormField
                            control={control}
                            name="title"
                            rules={{ required: "Title is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter book title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Author */}
                        <FormField
                            control={control}
                            name="author"
                            rules={{ required: "Author is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter author name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Genre */}
                        <FormField
                            control={control}
                            name="genre"
                            rules={{ required: "Genre is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full cursor-pointer">
                                                <SelectValue placeholder="Select Genre" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="FICTION">FICTION</SelectItem>
                                                <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                <SelectItem value="FANTASY">FANTASY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ISBN */}
                        <FormField
                            control={control}
                            name="isbn"
                            rules={{
                                required: "ISBN is required",
                                pattern: {
                                    value: /^\d{13}$/,
                                    message: "ISBN must be a 13-digit number",
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. 9781234567890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={control}
                            name="description"
                            rules={{
                                minLength: {
                                    value: 10,
                                    message: "Description must be at least 10 characters",
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Write a short description..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Copies */}
                        <FormField
                            control={control}
                            name="copies"
                            rules={{
                                required: "Number of copies is required",
                                min: {
                                    value: 1,
                                    message: "At least 1 copy is required",
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Number of copies" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-white cursor-pointer">
                            Add Book
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateBook;