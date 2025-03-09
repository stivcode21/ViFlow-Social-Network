import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"; // Importamos los íconos de Heroicons

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("El correo no es válido.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número."
      );
      return false;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Formulario enviado correctamente:", { email, password });

    // Redirigir al usuario a la página create-profile
    navigate("/auth/create-profile");
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-2xl lg:text-3xl font-extrabold">
          Welcome to ViFlow
        </h1>
        <div className="w-fit bg-gray-500 rounded-full flex mx-auto">
          <Link
            to="/auth/signIn"
            className="py-2 px-8 lg:px-12 rounded-full bg-transparent font-semibold text-white"
          >
            Sign In
          </Link>
          <Link
            to="/auth/signUp"
            className="py-2 px-8 lg:px-12 rounded-full bg-[#6363FF] font-semibold text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 relative">
        {error && (
          <p className="absolute bottom-28 left-10 text-center text-red-500 text-sm w-[85%]">
            {error}
          </p>
        )}

        {/* Input de Email */}
        <input
          type="email"
          className="w-full py-1 border-b-2 border-[#ccc] outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Input de Contraseña */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full py-1 border-b-2 border-[#ccc] outline-none pr-10"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <EyeIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>

        {/* Input de Confirmar Contraseña */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full py-1 border-b-2 border-[#ccc] outline-none pr-10"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <EyeIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>

        {/* button de envio de formulario */}
        <button
          type="submit"
          className="button-theme mt-14 py-3 px-16 rounded-full bg-[#6363FF] shadow-lg font-semibold text-white"
        >
          Send
        </button>

        <button>
          <img
            src="/icons/Google.svg"
            alt="google"
            className="w-6 h-6 mx-auto"
          />
        </button>
      </form>
    </>
  );
};

export default SignUp;
