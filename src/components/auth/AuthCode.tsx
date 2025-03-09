import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const correctCode = "123456";

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (newCode.join("").length === 6) {
      validateCode(newCode.join(""));
    }

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    keyboardEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (keyboardEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const validateCode = (enteredCode: string) => {
    setIsValid(enteredCode === correctCode);
  };

  useEffect(() => {
    if (isValid) {
      navigate("/auth/create-profile");
    }
  }, [isValid, navigate]);

  return (
    <div className="m-auto w-full flex items-center justify-centerbackdrop-blur-md">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <img
          src="/LogoViflow.webp"
          alt="logo"
          className="w-16 mx-auto pb-10 opacity-70"
        />
        <h3 className="text-lg font-semibold text-white">
          Ingresa el código de verificación enviado a tu correo:
        </h3>

        <div className="flex justify-center gap-3 my-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              ref={(input) => (inputsRef.current[i] = input)}
              type="text"
              value={code[i]}
              onChange={(event) => handleChange(i, event)}
              onKeyDown={(keyboardEvent) => handleKeyDown(i, keyboardEvent)}
              className={`w-12 h-12 text-center text-2xl font-bold rounded-lg border-2 bg-white/20 text-white outline-none transition-all
                ${
                  isValid !== null
                    ? isValid
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-white/30"
                } 
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50`}
              maxLength={1}
            />
          ))}
        </div>

        {isValid !== null && (
          <p
            className={`mt-2 text-lg font-semibold ${
              isValid ? "text-green-400" : "text-red-400"
            }`}
          >
            {isValid ? "✅ Código correcto" : "❌ Código incorrecto"}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthCode;

/* 
   RESUMEN DE LOS MÉTODOS Y EVENTOS USADOS

   Cuando el usuario escribe algo en un input, el evento onChange captura la acción y actualiza el estado correspondiente

  - join(""): Une los elementos de un array en una sola cadena. En este caso, se usa para formar el código completo ingresado.
  - replace(/\D/g, ""): Reemplaza cualquier caracter que no sea un número (\D) dentro de la cadena, asegurando que solo se ingresen números.
  - slice(0, 1): Extrae solo el primer carácter ingresado, limitando la entrada a un solo número por input.
  - focus(): Mueve el cursor a un input específico. Se usa para cambiar automáticamente al siguiente input después de ingresar un número.
  - onKeyDown: Evento que detecta cuando una tecla es presionada. En este caso, se usa para detectar "Backspace" y mover el foco al input anterior.
  - value: Representa el contenido del input. Se usa para actualizar el estado del código ingresado.
  - useRef: Se usa para almacenar referencias a los inputs, lo que permite manipular el foco de los elementos.
  -!code[index] sería true porque !"" (la negación de una cadena vacía) es true.
*/
