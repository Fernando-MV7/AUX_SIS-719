![alt text whidth ](https://miro.medium.com/v2/resize:fit:1400/1*nJ6KbCq5IBhSMaqpmUwR-Q.png "logo 1")

# `Introduccion a Solid`

SolidJS es un marco de JavaScript declarativo que se utiliza para crear interfaces de usuario y aplicaciones web de forma pragmática y performativa. Aunque es relativamente nuevo, su similitud con otros marcos de JavaScript como React y Svelte lo ha hecho más adaptable para la comunidad de desarrolladores.

Entonces, en este tutorial, te brindaré un recorrido completo por SolidJS y te ayudaré a comprender lo esencial. También creará una aplicación web sencilla con SolidJS para dominar mejor los conceptos básicos. Finalmente, lo compararé y contrastaré con el marco más popular de la ciudad: React.


# `¿Qué es Solid?`

SOLID se compone de una serie de principios y de buenas prácticas que se deberían tener como base antes de proponer una arquitectura de software para el desarrollo de nuestras aplicaciones.

Los principios SOLID nos permiten administrar la mayoría de problemas de diseño de software, y si seguimos los mismos, vamos a conseguir desarrollar un código más limpio, más mantenible, más escalable a futuro y menos propenso a errores.

  <center> <img width="80%" src="https://www.comerline.es/wp-content/uploads/2022/04/1XOMTPWTpDLypkp079p9XXg-970x686.png" alt="solid-markdown"> </center>

* SOLID es un acrónimo, y cada una de las letras que lo componen tiene un significado:

* S: se refiere al Principio de Responsabilidad Única (Single Responsibility Principle), que en resumidas cuentas lo que dice es que cada módulo de software debe tener una única razón para cambiar.
* O: hace referencia al Principio de Abierto/Cerrado (Open/Closed Principle), que dice que el código debería estar abierto para extenderlo y para añadirle nuevas funcionalidades, pero en cambio debería estar cerrado a modificaciones, salvo las modificaciones que se deban realizar si se encuentra algún error.
* L: viene a referirse al Principio de Sustitución de Liskov (Liskov Substitution Principle), que en resumen lo que dice es que una clase derivada debe poder ser sustituida por su clase base.
* I: se refiere al Principio de Segregación de Interfaces (Interface Segregation Principle), que dice que se han de utilizar interfaces con propósito específicos, o sea que tengan responsabilidades únicas y que se piensen bien y no se hagan interfaces grandes.
* D: hace referencia al Principio de Inversión de la Tendencia (Dependency Inversion Principle), que para conseguirlo se hace uso de la inyección de dependencias.

## `Beneficios de utilizar Principios SOLID`
El principal beneficio de seguir los Principios SOLID en el desarrollo es la obtención de mejor código para legibilidad, el mantenimiento y testeo.

Un mejor código facilita la colaboración entre desarrolladores, quienes pueden ampliar, modificar y probar sus programas con menos complicaciones.

En definitiva, la implementación de los Principios Solid en el desarrollo de software permitirá que tu empresa o proyecto cumpla estándares globales de la industria.

“Es bastante amplio el tema de SOLID en general, para quienes deseen profundizar recomiendo el libro Clean Javascript que explica al detalle qué es y cómo aplicarlo”, finaliza Estevez. 

## `Instalación`
```bash
npm install solid-markdown
```
## `Conclusión`
Como se puede observar, los principios S.O.L.I.D le muestran al programador una vía distinta por la cual desarrollar sus programas, mostrándole que a través de la descentralización de responsabilidades en clases, extensibilidad de módulos, aplicación de herencia de una manera controlada, creación de pequeñas interfaces que permiten realizar implementaciones flexibles de métodos, y la implementación de dependencias de interfaces en vez de objetos concretos, sus soluciones llegan a tener un mejor ciclo de vida. De esta manera, puede evitar muchos dolores de cabeza a la hora de realizar cambios en el código fuente de sus aplicaciones.
![alt text](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7b7u8mkkfjd4khrhxlsg.jpeg "logo")