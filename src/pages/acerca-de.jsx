import React from 'react'
import SEO from '../components/Seo'
import Layout from '../layouts/layout'
import logo from '../images/logo.svg'

const About = () => {
  return (
    <Layout>
      <SEO
        title="Acerca de"
        keywords="blog, programación, tecnología"
        description="Esta página muestra información del blog."
        imageCard="https://code-blog.pages.dev/static/a5e1a3d327887810f79f243cd4886616/9a128/post1-blog.jpg"
      />
      <div className="bg-dark text-white text-center py-2 mb-3">
        <img src={logo} alt="logo" style={{ maxWidth: 200 }} />
        <h2>Code Blog</h2>
      </div>
      <p>
        Este blog tiene el propósito de compartir conocimientos de programación,
        desarrollo web y artículos relacionados a la tecnología. Aprende
        Desarrollo Web, Programación, Freelancing, y temas relacionados a
        tecnología e Informática.
      </p>
      <p>
        La Educación es una de las actividades más importantes de todo
        profesional de cualquier Area, y este sitio web tiene como objetivo
        aportar ayuda tanto en recursos como en contenido, para que sea mucho
        más sencilo aprender lo que te gusta. Sientete libre de dar sugerencias
        sobre que temas te gustaria ver en este sitio pronto.
      </p>
    </Layout>
  )
}

export default About
