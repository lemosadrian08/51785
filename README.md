# 🧠 Analizador Léxico y Sintáctico en JavaScript con ANTLR4

Este proyecto implementa un **analizador léxico y sintáctico** para un sublenguaje de JavaScript, desarrollado con **ANTLR 4** y **Node.js**. El archivo de entrada `input.txt` se procesa para construir y recorrer el árbol sintáctico, validando su estructura.

---

## 📁 Estructura del proyecto

```
ANALIZADORAL/
├── .antlr/                         ← Archivos de depuración para VS Code
│   ├── AnalizadorALLexer.interp
│   └── AnalizadorALParser.interp
├── .vscode/                        ← Configuración del depurador
│   └── launch.json
├── generated/                      ← (No usada en este caso)
├── node_modules/                   ← Dependencias de Node.js
├── AnalizadorAL.g4                 ← Gramática ANTLR del lenguaje
├── AnalizadorALLexer.js           ← Lexer generado por ANTLR
├── AnalizadorALParser.js          ← Parser generado por ANTLR
├── index.js                        ← Código principal del analizador
├── input.txt                       ← Entrada principal a analizar
├── inputejemplos.txt              ← Otros ejemplos de entrada
├── antlr-4.13.2-complete.jar      ← ANTLR 4 jar
├── package.json                   ← Configuración de Node.js
└── package-lock.json              ← Archivos de dependencias
```

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/)
- [Java 11+](https://adoptium.net/)
- [ANTLR 4.13.2](https://www.antlr.org/download/antlr-4.13.2-complete.jar)

Instalar dependencias con:

```bash
npm install antlr4
```

---

## 🛠️ Generación del analizador

Desde la raíz del proyecto, ejecutar:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -Xexact-output-dir -o . AnalizadorAL.g4
```

Esto generará:
- `AnalizadorALLexer.js`
- `AnalizadorALParser.js`
- Archivos `.tokens`, `.interp`, etc.

---

## ▶️ Ejecución

1. Escribir código válido en el archivo `input.txt`.  
   Ejemplo:

   ```js
   function sumar(a, b) {
     console.log(a + b);
   }
   ```

2. Ejecutar el analizador con:

```bash
node index.js
```

---

## 💻 ¿Qué hace el programa?

- Realiza análisis léxico y sintáctico.
- Construye un árbol de derivación.
- Recorre el árbol con una función interna `walk(...)`.

---

## 🧭 Uso en Visual Studio Code

Para visualizar el árbol de análisis sintáctico y los mensajes de error de forma completa:

### 🖥️ Visualización con F5

1. Asegurate de tener instalada la extensión **ANTLR4 grammar syntax support** (autor: Mike Lischke) en VS Code.
2. Abrí el archivo `AnalizadorAL.g4`.
3. Presioná `F5` para iniciar el depurador.

### 🧩 ¿Qué sucede al ejecutar con F5?

- Se analiza automáticamente el contenido del archivo `input.txt`.
- Los **mensajes de error léxicos y sintácticos** se muestran en la pestaña **"Debug Console"**.
- Se abre automáticamente una pestaña con una **representación gráfica del árbol sintáctico** de la entrada.
  - Podés expandir o colapsar nodos.
  - Cada nodo representa una regla de la gramática o un token.

Esto permite validar de forma visual si la entrada fue procesada correctamente.

---

# 51785
Analizador Léxico y Sintáctico en JavaScript con ANTLR4
