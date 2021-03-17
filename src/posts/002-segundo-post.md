---
title: '¿Qué es HTML? 🤔'
date: 2021-03-03 12:00:00
author: 'Pedro Vega'
image: '../images/post2-html.jpg'
tags:
  - code
  - html
---

## ¿Qué es HTML?

Actualmente la mayoría de las personas han visto cientos de páginas web pero muchos se preguntarán ¿Qué es HTML? ¿Para qué me sirve? ¿Cómo funciona? ¿Es difícil escribir en HTML? ¿Dónde puedo escribir HTML? Y otras preguntas como estas serán respondidas a continuación.

Si buscas en GOOGLE o en cualquier otro buscador la definición de HTML, probablemente encontrarás está:

> _"HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto"_

No obstante, este tipo de definiciones no nos dice mucho porque la definición es técnica. Para algunas personas al leer esto, piensan que HTML incluye el diseño gráfico de las páginas web, sin embargo, eso no es cierto ya que HTML sólo sirve para indicar como va ordenado el contenido de una página web. Esto lo hace por medio de las marcas de hipertexto las cuales son etiquetas conocidas en inglés como tags.

---

Hasta el momento ya tenemos una idea sobre lo que hace HTML pero aún no sabemos cómo funcionan las etiquetas. Para esto vamos a imaginar que tienen que hacer un ensayo sobre algún tema, consideraremos que el ensayo será nuestra página web y la manera en la que va ordenado un ensayo es por un título, la introducción, el desarrollo y la conclusión, si se tiene en cuenta que esto nos dice cómo debe ir nuestro ensayo podemos considerar que éstas serían las etiquetas porque nos dicen la estructura que lleva, es decir, la forma en que se acomoda el texto en nuestro ensayo. Cabe mencionar que las etiquetas no sólo sirven para ordenar nuestro contenido sino que ayudan a los buscadores como Google, Yahoo search y muchos otros a encontrar la información por medio de las etiquetas.

Ahora que entendemos el concepto de etiquetas, necesitamos poder identificarlas. Éstas se caracterizan porque van dentro de los caracteres menor que `<` y mayor que `>`, como en este ejemplo: `<Aquí dentro va el nombre de la etiqueta>`

Aunque eso no es todo debido a que deben tener un inicio y un fin. El inicio de una etiqueta es normal, en otras palabras lleva los dos caracteres que mencioné anteriormente y dentro de estos se encuentra el nombre, sin embargo, existe una diferencia para el fin de la etiqueta ya que antes de escribir el nombre de la etiqueta debemos escribir una diagonal `/`. Como en este ejemplo:

```
<Inicio de la etiqueta>
</Fin de la etiqueta>
```

Existes ciertas excepciones con el fin de las etiquetas, ya que algunas usualmente sólo se utilizan con el inicio de la etiqueta, ejemplos de esto son las etiquetas BR (salto de línea), IMG (etiqueta para poner una imagen), entre otras.

---

Ya casi estamos listos para escribir HTML pero todavía nos falta ver la estructura de un código de HTML. Nuestro código siempre debe iniciar con la etiqueta HTML. A continuación se muestra un ejemplo de la estructura del código HTML. Ahora veremos un pequeño ejemplo del cuerpo de un código de HTML con algunos efectos en el texto como cursiva, subrayado, negrita.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="268" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/Haross/embed/VLNdwm?height=268&amp;theme-id=0&amp;slug-hash=VLNdwm&amp;default-tab=result&amp;user=Haross&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_VLNdwm"></iframe>

---

Finalmente, sólo nos falta saber dónde escribir código en HTML y para ello sólo es necesario un editor de texto como el bloc de notas, aunque en mi opinión te recomendaría que descargaras <a href="https://code.visualstudio.com/download" target="_blank" >VSCode</a> debido a que facilita la escritura de código HTML. Si aún quieres saber si HTML es fácil de escribir, te diría que sí, porque no hay mayor obstáculo en el aprendizaje que tus propias ganas de aprender, además del hecho que desde niños hemos aprendido a distinguir y clasificar todo a nuestro alrededor y es básicamente de lo que se encarga HTML así que no habrá una gran dificultad.
