import { Route, Routes, Navigate } from 'react-router-dom';

// import Books from './pages/Books';
// import AddBook from './pages/AddBook';
// import EditBookPage from './pages/EditBookPage';
// import BorrowFormPage from './pages/BorrowFormPage';
// import BorrowSummaryPage from './pages/BorrowSummaryPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          {/* <Route path="/books" element={<Books />} />
          <Route path="/create-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/borrow/:bookId" element={<BorrowFormPage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;