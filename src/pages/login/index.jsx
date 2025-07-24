import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(
        "/api/proxy",
        {
          username,
          password,
        },
      );
      localStorage.setItem("token",res.data.token.token);
      toast.success("Login muvaffaqiyatli!")
      setTimeout(() => {
        navigate("/reports");
      }, 1200);
    } catch (err) {
      toast.error("Login xato! Tekshirib qaytadan urinib ko'ring!");
    }finally{
      setLoading(false)
    }
  };
  return (
    <div>
      <ToastContainer/>
      <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Ims kiriting</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Ismingizni kiriting"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Parolingizni kiriting"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              {loading ? "Yuborilmoqda..." : "Kirish"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
