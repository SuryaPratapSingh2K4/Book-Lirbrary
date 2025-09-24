import React, { useState } from "react"
import { generateBooks } from "./utils/generateBooks"
import DataTable from "./components/DataTable";
function App() {
  const [books, setBooks] = useState([]);
  const [Loader, setLoader] = useState(false);

  const handleGenerateBooks = () => {
    setLoader(true);
    const fakeBooks = generateBooks();
    fakeBooks.sort((a, b) => b.PublishedYear - a.PublishedYear);
    setBooks(fakeBooks);
    console.log(fakeBooks);
    setLoader(false);
  };

  return (
    <div className="w-full h-screen p-4 sm:p-6 bg-gray-100 flex flex-col">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">CSV Book Editor</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={handleGenerateBooks}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Generate 10000 Fake Books
        </button>
      </div>

      {Loader ? (
        <Loader />
      ) : (
        <div className="flex-1 ">
          <DataTable books={books} />
        </div>
      )}

    </div >
  );
}


export default App
