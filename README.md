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
- Valibot
  - **_npm i valibot_**
  - Valibot en React sirve para validar datos de forma segura, rápida y con tipado fuerte en TypeScript, especialmente en formularios y datos que vienen de APIs.
  - Es muy parecido a Zod, pero está enfocado en ser más ligero y rápido.
- Zod
  - **_npm i_**
- Axios
  - **_npm i axios_**
- Loaders - React Router
  - Utiliza _Loaders_ para obtener datos de una _API_, similar a _useEffect_ y colocar la respuesta en un _State_.
  - Para ello deberás crear una función y en tu _router_ decirle que función debe ejecutarse en el _loader_.
- Fecher
  - Es para que se actualice dentro de la misma página, ejemplo: un _like_ de _facebook_.

### CORS

- Por sus siglas en inglés: _Cross-Origin Resource Sharing (Compartir recursos entre diferentes orígenes), es un mecanismo de seguridad utilizado en los navegadores _web_ para controlar las solicitudes de recursos entre dominios diferentes.
- En esencia, _CORS_ es una política de seguridad implementada en el lado del servidor que permite o deniega las solicitudes de recursos _web_ de un origen cruzado.
- Cuado un recurso (como una fuente, una imagen o una hoja de estilos) se solicita desde un dominio o puerto diferente al del origen del recurso actual, se considera una solicitud de origen cruzado.
- Antes de que se implementará _CORS_, los navegadores modernos restringían automáticamente las solicitudes de origen cruzado para prevenir ataques de seguridad como el secuestro de sesiones y la inyección de _scripts_ maliciosos.
- ## Ventajas
  - **Seguridad**
    - _CORS_ permite a los servidores tener un contorl más granular sobre qué dominios pueden acceder a los recursos.
    - Esto reduce la posibilidad de ataques maliciosos de origen cruzado.
  - **Acceso controlado a recursos**
    - _CORS_ permite a los sitios _web_ controlar qué recursos están disponibles para ser solicitados por dominios externos y qué recursos están restringidos.
    - Esto brinda mayor contorl sobre los datos y recursos del sitio _web_.
  - **Interoperabilidad**
    - _CORS_ facilita el intercambio de datos y recursos entre diferentes dominios.
    - Estos es particularmente útil en situaciones en las que una págnia _web_ necesita cargar recursos de múltiples dominios para funcionar correctamente, como los casos de uso de _API_ o la carga de fuentes externas.

## USELOADERDATA - USE ACTIONDATA

- _useLoaderData_ usarlo cuando quieres obtener el resultado de un _loader_.
- _useActionData_ cuando quieras obtener el resultado de un _action_.

### CHECKLIST

- _Deployment proyectos con Node y React_.
- Nuestro proyecto consta de 3 partes:
  - _Frontend (React)_.
  - _Backend: (Express)_.
  - _Base de datos (PostgreSQL)_.
- Las 3 deberán estar en un servidor que permita conexiones externas.
- No todos los _hostings_ soportan _Node_, es necesario un _hosting_ especial como: _Railwa, fl0, Render, etc_.
- En cuanto al _Frontend_ se puede publicar en: _Netlify_, pero otra opción es: _Vercel_.

## HOSPEDAJE 

- _Render (backend)_
- _Vercel (frontend)_
- _Base de datos ()_
