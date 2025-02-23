import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // Estado para los 6 números
  const [isValid, setIsValid] = useState<boolean | null>(null); // Estado de validación
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Referencia a los inputs

  const navigate = useNavigate(); //variable de navegacion
  const correctCode = "123456"; // Código esperado (simulado)

  // Captura el número ingresado en cada input
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/^[A-Z]+$/g, "").slice(0, 1); // Solo 1 número

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Si se completa el código, validar
    if (newCode.join("").length === 6) {
      validateCode(newCode.join(""));
    }

    // Mueve el foco al siguiente input si hay un valor
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Mueve el foco atrás con Backspace
  const handleKeyDown = (
    index: number,
    keyboardEvent: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (keyboardEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Valida el código ingresado
  const validateCode = (enteredCode: string) => {
    setIsValid(enteredCode === correctCode);
  };

  useEffect(() => {
    if (isValid) {
      navigate("/create-profile"); // Redirige a la ruta si el código es válido
    }
  }, [isValid, navigate]);

  return (
    <div className="h-full w-full flex flex-col items-center relative">
      <img
        src="/LogoViflow.webp"
        alt="logo"
        className="w-1/2 h-1/2 object-contain absolute top-25 right-25 -z-10 opacity-10"
      />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h3 className="mb-4 text-center px-4">
          Ingresa el codigo de verificacion enviado a tu correo:
        </h3>
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              ref={(input) => (inputsRef.current[i] = input)}
              type="text"
              value={code[i]}
              onChange={(event) => handleChange(i, event)}
              onKeyDown={(keyboardEvent) => handleKeyDown(i, keyboardEvent)}
              className={`w-12 h-12 border rounded-sm text-center text-2xl font-bold outline-none
                 ${
                   isValid !== null &&
                   (isValid ? "border-green-500" : "border-red-500")
                 }`}
              maxLength={1} // Solo un número por input
            />
          ))}
        </div>
      </div>

      {isValid !== null && (
        <p className={`text-xl ${isValid ? "text-green-500" : "text-red-500"}`}>
          {isValid ? "✅ Código correcto" : "❌ Código incorrecto"}
        </p>
      )}
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
