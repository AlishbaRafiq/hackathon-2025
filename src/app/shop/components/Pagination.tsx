"use client";

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export default function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }: PaginationProps) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalPages <= 1) return null; // Hide pagination if only 1 page

  return (
    <div className="flex justify-center mt-6 gap-2">
    

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-400"}`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-400"}`}
      >
        Next
      </button>
    </div>
  );
}
