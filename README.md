# Descripción del Proyecto como Prueba Técnica

Este proyecto responde a los requerimientos de la prueba técnica de Toolbox. En ningún momento pretende ser llevado más allá que las pruebas locales o de pruebas por parte de la empresa. Este correponde al back-end del aplicativo.

### Tech
El proyecto del lado del back-end usa diferentes librerías para su funcionamiento


* [Node.js](https://nodejs.org/es/) - Node.js
* [Express.js](https://expressjs.com/) - Espress.js
* [Chai.js](https://www.chaijs.com/) - Chai.js
* [Mocha.js](https://mochajs.org/) - Mocha.js
* [SuperTest](https://github.com/visionmedia/supertest#readme) - SuperTest

# Instalación

El proyecto requiere [Node.js](https://nodejs.org/es/) para correr. Está estabilizado para correr con la v12 de node si se requiere. 


## Correr App Directamente

### Instalacción de dependencias mencionadas

```sh
$ npm install 
```

### Levantar proyecto local en forma de producción

```sh
$ npm start
```

### Levantar proyecto local en desarrollo

```sh
$ npm start:dev
```

### Correr tests
```sh
$ npm test
```

## Correr App en Docker
Nota: asegurarse de tener docker instalado en el equipo.

```sh
$ docker build -t [IMAGE-NAME] .
```

```sh
$ docker run -p [USER-PORT]:5000 [IMAGE-NAME]
```

## Consideraciones varias sobre la realización del proyecto
- Se usa 'Dockerfile' para la instancia de docker en el proyecto.
- Se realizan las pruebas unitarias según lo requerido
- El linter del proyecto es standard.js
- Aunque no estaba especificado, las validaciones de las rutas se hacen a través de middlewares.
- [USER-PORT]: Puerto que desee usar el usario para levantar la api desde docker
- [IMAGE-NAME]: Nombre de la imagen que el usuario desee dar a la api.
- El objeto que devuelve la API tiene proiedades añadidas según lo requerido en el test. Sin embargo se cumple con presentar la propiedad estrictamente solicitada.
 
 
