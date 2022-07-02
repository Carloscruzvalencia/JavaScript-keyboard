# JavaScript-keyboard

## Inpiracion del proyecto & objetivo

-  El objetivo del proyecto es crear un teclado digital en JavaScript que permita la entrada de texto. 

-  tiene que poder mostrar la ultima letra ingresada y mostrat la tecla que se a presionado mas veces.

El diseño web se ha creado en [Figma](https://www.figma.com/file/kP0SJhf4iDDa9kAzsz1LM1/Github-projects?node-id=0%3A1) por Carlos cruz valencia

## Tecnologias usadas

- Ide
    <!-- visual studio code -->
    <code><img height="25" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"></code>

- Programas usados
    <!-- figma -->
    <code><img height="30" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"></code>
- lenguajes/frameworks usados
    <!-- html -->
    <code><img height="30" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></code><!-- css -->
    <code><img height="30" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></code><!-- sass -->
    <code><img height="30" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"></code><!-- javascript -->
    <code><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img></code>
    <code><img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"></img></code>
    
## Vista previa del proyecto

<!-- ``vista no disponible`` -->
<img src="pr-project\project-preview.png" aling="center"></img>
<!-- <img src="project-preview.gif" aling="center"></img> -->

## Estado del proyecto

|Trabajando en el proyecto|✔️|
| -------------------------- | :----------------: |
|            Web responsive  |      ❌        |
|           Hosting          |   Github-pages |
| Websever app online        |         ✔️    |  
| Dispone de trello          |         ❌    |  
<details>
<summary>⚙️ documentacion del proyecto ⚙️</summary>

1. Creacion de la pagina web en figma
    ![](pr-project/project-preview.png)
1. Maketa de la pagina web en html y css/sass
    ![](pr-project/1.png)
    ``codigo del landing page`` [_landing.scss](assets/styles/sass/layouts/_landing.scss)
    ``codigo del teclado`` [_keys.scss](assets/styles/sass/components/_keys.scss)

2. Se añaden efectos a las teclas del teclado
    ![](pr-project/1.gif)
3. Se crea el javascript para detectar la tecla presionada
    ```javascript
    document.addEventListener('keydown', (event) => {
            var name = event.key;
            cosole.log(name);
    }, false);
    ```
    ![](pr-project/2.gif)
4. Pasamos el input del keyboard a una lista 
   
    ```javascript
    // lista que almacena las teclas presionadas
    list = [];

    document.addEventListener('keydown', (event) => {
            var name = event.key;
            // agregamos la tecla presionada a la lista
            list.push(name);
            // Eliminamos las , de la lista
            var string = list.join("");
            // pasamos el valor de la lista a el input text
            document.querySelector('input[name="input-text"]').value = string;
    }, false);
    ```
    ![](pr-project/3.gif)
5. Se añaden efectos a las teclas del teclado
    ``imagen no disponible``
</details>

<details >
<summary>📁 Estructura de carpetas 📁</summary>

```text
/
└── assets/
│    ├── js/
│    │   ├++ jquery.js "cdn"
│    │   └── app.js
│    └── media/
│    │    └── img
│    └── styles/
│        ├── css/
│        │   ├── main.css
│        │   └── main.css.map
│        └── sass/
│            ├── base/
│            │   └──_settings.scss
│            ├── components/
│            │   └──_keys.scss
│            ├── layouts/
│            │   └──_landing.scss
│            └── main.scss
├── pr-project/
├── index.html
├── Licence
└── README.md
```

</details>


<!-- └── / ├── │ -->


## Licencia

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md)  para mas detalles

<!-- ## !codigo temporal¡
## git update code
```shell
git add -A && git commit -a -m \"update\" && git push
```

## sass compiler code
```shell
sass -w --style compressed assets/styles/sass/main.scss assets/styles/css/main.css
``` -->

<!-- ## otros links de interes para hacer la documentacion del proyecto -->

<!-- emojis  -->
<!-- https://tutorialmarkdown.com/emojis -->

<!-- badges/shields -->
<!-- https://naereen.github.io/badges/ -->
<!-- https://github.com/Ileriayo/markdown-badges -->