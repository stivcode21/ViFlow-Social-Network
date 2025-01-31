import { useState, useRef } from "react";

const AuthCode = () => {
  const [code, setCode] = useState(["2", "2", "2", "1"]); // Estado para los 4 números
  const [isValid, setIsValid] = useState<boolean | null>(null); // Estado de validación
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Referencia a los inputs

  const correctCode = "1234"; // Código esperado (simulado)

  // Captura el número ingresado en cada input
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 1); // Solo 1 número

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Si se completa el código, validar
    if (newCode.join("").length === 4) {
      validateCode(newCode.join(""));
    }

    // Mueve el foco al siguiente input si hay un valor
    if (value && index < 3) {
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

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <input
            key={i}
            ref={(input) => (inputsRef.current[i] = input)}
            type="text"
            value={code[i]}
            onChange={(event) => handleChange(i, event)}
            onKeyDown={(keyboardEvent) => handleKeyDown(i, keyboardEvent)}
            className="w-12 h-12 border text-center text-2xl font-bold"
            maxLength={1} // Solo un número por input
          />
        ))}
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
