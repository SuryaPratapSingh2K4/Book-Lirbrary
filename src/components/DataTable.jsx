import React, { useEffect, useState } from "react";
import { handleDownload } from "../utils/handleDownload";

function DataTable({ books }) {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setData(books);
    }, [books]);

    const handleEdit = () => setEdit(!edit);

    const handleChange = (e, index, field) => {
        const updated = [...data];
        updated[index][field] = e.target.value;
        setData(updated);
    };

    const filteredData = data.filter((book) => Object.values(book).join("").toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="bg-white p-4 rounded shadow mt-6 border border-gray-300 w-full h-screen flex flex-col">
            {/* Header + Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h1 className="text-xl sm:text-2xl font-bold">Book List</h1>
                <input type="text" className="border rounded p-2 w-2/3" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {/* <button
                        onClick={() => handleDownload(data)}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex-1 sm:flex-none"
                    >
                        Sort
                    </button> */}
                    <button
                        onClick={() => handleDownload(data)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex-1 sm:flex-none"
                    >
                        Download
                    </button>
                    <button
                        onClick={handleEdit}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex-1 sm:flex-none"
                    >
                        {edit ? "Save" : "Edit"}
                    </button>
                </div>
            </div>

            {/* Scrollable Table */}
            <div className=" flex-1">
                <div className="min-w-[600px] w-full">
                    {/* Table Header */}
                    <div className="flex font-semibold border-b border-gray-400 py-2 bg-gray-100 sticky top-0 z-10">
                        <div className="w-1/5 px-2 text-xs sm:text-sm">Title</div>
                        <div className="w-1/5 px-2 text-xs sm:text-sm">Author</div>
                        <div className="w-1/5 px-2 text-xs sm:text-sm">Genre</div>
                        <div className="w-1/5 px-2 text-xs sm:text-sm">Published Year</div>
                        <div className="w-1/5 px-2 text-xs sm:text-sm">ISBN</div>
                    </div>

                    {/* Table Rows */}
                    {filteredData.map((book, index) => (
                        <div
                            key={index}
                            className="flex border-b border-gray-200 py-2 text-xs sm:text-sm hover:bg-gray-50"
                        >
                            {edit ? (
                                <>
                                    <input
                                        type="text"
                                        value={book.Title}
                                        onChange={(e) => handleChange(e, index, "Title")}
                                        className="w-1/5 px-2 border rounded text-xs sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        value={book.Author}
                                        onChange={(e) => handleChange(e, index, "Author")}
                                        className="w-1/5 px-2 border rounded text-xs sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        value={book.Genre}
                                        onChange={(e) => handleChange(e, index, "Genre")}
                                        className="w-1/5 px-2 border rounded text-xs sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        value={book.PublishedYear}
                                        onChange={(e) => handleChange(e, index, "PublishedYear")}
                                        className="w-1/5 px-2 border rounded text-xs sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        value={book.ISBN}
                                        onChange={(e) => handleChange(e, index, "ISBN")}
                                        className="w-1/5 px-2 border rounded text-xs sm:text-sm"
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="w-1/5 px-2 truncate text-xs sm:text-sm">{book.Title}</div>
                                    <div className="w-1/5 px-2 truncate text-xs sm:text-sm">{book.Author}</div>
                                    <div className="w-1/5 px-2 truncate text-xs sm:text-sm">{book.Genre}</div>
                                    <div className="w-1/5 px-2 truncate text-xs sm:text-sm">{book.PublishedYear}</div>
                                    <div className="w-1/5 px-2 truncate text-xs sm:text-sm">{book.ISBN}</div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DataTable;
