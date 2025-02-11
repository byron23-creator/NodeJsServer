# Cómo Ejecutar el Servidor

Este documento explica paso a paso cómo ejecutar el servidor para calcular la secuencia de Collatz.

## Pasos para Ejecutar el Servidor

1.  **Guardar el código:**

    *   Guardar el código que se ha desarrollado en un archivo con un nombre descriptivo, `server.js`. Este archivo contiene toda la lógica necesaria para el servidor y el cálculo de la secuencia de Collatz.

2.  **Abrir la terminal:**

    *   Abrrir la terminal, también es posible utilizar la terminal integrada en Visual Estudio Code.

3.  **Navegar al directorio:**

    *   Utilizando el comando `cd` (Change Directory) para navegar al directorio donde se guardó el archivo `server.js`. 

4.  **Ejecutar el comando:**

    *   Una vez que hemos ubicado el directorio correcto, ejecutar el comando `node server.js` para iniciar el servidor. Este comando ejecutará el código del archivo `server.js` y el servidor comenzará a escuchar las solicitudes entrantes en el puerto especificado (por ejemplo, el puerto 3000).

5.  **Acceder a la URL:**

    *   Abrir un navegador web o utiliza una herramienta como Postman para acceder a la URL `http://localhost:3000/collatz?numero=<valor>`, reemplazando `<valor>` con el número inicial que se desea probar.

    *   `http://localhost:3000` es la dirección local del servidor. Si el servidor está configurado para usar un puerto diferente, se deberá ajustar la URL.

    *   `/collatz` es la ruta que has definido en el código para manejar las solicitudes de cálculo de la secuencia de Collatz.

    *   `?numero=<valor>` es un parámetro de consulta que se utiliza para pasar el número inicial al servidor. Reemplazar `<valor>` con el número que deseas utilizar.

## Ejemplo de Uso

Si se desea calcular la secuencia de Collatz para el número 10, la URL sería:

`http://localhost:3000/collatz?numero=10`

Al acceder a esta URL, el servidor ejecutará el código para calcular la secuencia de Collatz para el número 10 y responderá con un array JSON que contiene la secuencia:

```json
[10, 5, 16, 8, 4, 2, 1]
