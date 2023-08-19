# Challenge React + TypeScript + Test unitarios

[despliegue](https://fabriciojrepetto.github.io/challenge-ncr/)

## Instrucciones para desplegar de manera local
> **Nota:** es necesario tener instalado **npm** y/o **git** en caso de querer clonar el proyecto

- Descargar el proyecto en un .zip [aqui](https://github.com/FabricioJRepetto/challenge-galicia/archive/refs/heads/main.zip) y extraerlo en el directorio deseado.

- O clonar el siguiente repositorio:<br>
    ````
    HTTPS: https://github.com/FabricioJRepetto/challenge-ncr.git

    SSH: git@github.com:FabricioJRepetto/challenge-ncr.git

    GitHub CLI: gh repo clone FabricioJRepetto/challenge-ncr
    ````
    [cómo clonar con HTTPS](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)<br>
    [cómo clonar con SSH](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)<br>
    [cómo clonar con GitHub CLI](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-github-cli)
<br>
<br>
- Crear un archivo `.env` en la raiz del proyecto con la siguiente linea:

    ```
    VITE_API_URL='https://api.npoint.io/97d89162575a9d816661'
    ```

    el directorio debe verse así:
    
![img](https://res.cloudinary.com/dsyjj0sch/image/upload/v1692478798/portfolio-preview/Screenshot_2023-08-19_175548_g5zqrb.png)

- Abrir una terminal en el directorio del proyecto
- Ejecutar los siguientes comandos:

    ```
    npm install
    npm run dev
    ```

- Entrar a la url que aparecerá en la consola para ver despligue de la aplicación.

- Para correr los tests ejecutar este comandoen el directorio del proyecto:

    ```
    npm run test
    ```