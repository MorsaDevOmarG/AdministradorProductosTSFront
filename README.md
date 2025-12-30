# Proyecto Administrador de Productos FRONT

- **_npm i create vite@latest_**

## Herramientas y/o Tecnologías

- Vite
- React
- TypeScript
- TailwindCSS
  - **_npm i tailwindcss @tailwindcss/vite_**
  - En el archivo de: **vite.config.ts**, agregamos e importamos _TAILWINDCSS_:
  - ```
    import tailwindcss from '@tailwindcss/vite';

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react(), tailwindcss()],
    })
  ```
- React Router
  - **_npm i react-router-dom_**
  - Desde la versión: **6.4** de _React Router_ agregar un nuevo _router_ que te permite utilizar lo que se conoce como: _Data API'S_.
  - Estas _API'S_ te permiten obtener datos de una _API_ de forma muy eficiente.
  - También te permiten manejar entrada de datos desde un formulario.
  - ## ACTIONS
    - Utiliza _Actions_ para procesar la entrada de datos en un formulario.
    - Para ello deberás importar un componente llamado: **<Form>**, crear una función y en tu _router_ decirle que función debe ejecutarse en el _action_.
    