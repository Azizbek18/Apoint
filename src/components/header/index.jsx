import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Siz tizimdan chiqdingiz");
    setModal(false)
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };
  return (
    <header className="sticky top-0 z-50 bg-[#1f1e1e] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/reports" className="text-2xl font-bold tracking-wide">
          APOINT
        </Link>
        <button
          onClick={()=> setModal(true)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
            <h2 className="text-lg font-bold text-gray-800">
              Rostan ham tizimdan chiqmoqchimisiz?
            </h2>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Ha
              </button>
              <button
                onClick={() => setModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
              >
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
