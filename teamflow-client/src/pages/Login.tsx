import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });
const data = res.data;
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={login}
        className="bg-white p-8 rounded-xl shadow w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 rounded w-full mb-6"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 w-full text-white py-3 rounded">
          Login
        </button>

        <p className="mt-4 text-center">
          No account?
          <Link className="text-blue-600 ml-2" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}