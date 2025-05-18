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

## 🧪 Ejemplos de entradas

### ✅ Ejemplos válidos

#### Ejemplo 1 – Suma simple
```js
function sumar(a, b) {
  console.log(a + b);
}
```

#### Ejemplo 2 – Resta con identificadores distintos
```js
function restar(x, y) {
  console.log(x - y);
}
```

#### Ejemplo 3 – Expresión entre paréntesis
```js
function total(p, q) {
  console.log((p + q));
}
```

#### Ejemplo 4 – Identificadores largos
```js
function calcularPromedio(valor1, valor2) {
  console.log(valor1 + valor2);
}
```

#### Ejemplo 5 – Suma y cambio de formato
```js
function resultadoFinal(nota, extra) {
  console.log(nota + extra);
}
```

---

### ❌ Ejemplos inválidos

#### Ejemplo 1 – Palabra clave mal escrita
```js
functin sumar(a, b) {
  console.log(a + b);
}
```
❗ **Error esperado:** falta la palabra clave `function` correctamente escrita.

#### Ejemplo 2 – Falta de paréntesis
```js
function sumar a, b) {
  console.log(a + b);
}
```
❗ **Error esperado:** falta el paréntesis izquierdo `(`.

#### Ejemplo 3 – Falta de punto y coma
```js
function sumar(a, b) {
  console.log(a + b)
}
```
❗ **Error esperado:** falta el `;` al final de `console.log(...)`.

#### Ejemplo 4 – Token inesperado
```js
function sumar(a, b) {
  console.log(a * b);
}
```
❗ **Error esperado:** el símbolo `*` no está definido en la gramática (solo `+` y `-`).

#### Ejemplo 5 – Cierre de llave faltante
```js
function sumar(a, b) {
  console.log(a + b);
```
❗ **Error esperado:** falta la llave `}` de cierre del bloque de la función.

---

## 💻 ¿Qué hace el programa?

- Realiza análisis léxico y sintáctico.
- Construye un árbol de derivación.
- Recorre el árbol con una función interna `walk(...)`.

---
