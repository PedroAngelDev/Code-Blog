import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/Seo'
import Layout from '../layouts/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: No encontrado"
      keywords="not found, 404"
      description="Ruta no encontrada"
    />
    <div className="text-center">
      <h1>Error 404: Ruta No Encontrada</h1>
      <p className="h4">Llegaste a una ruta inexistente..</p>
      <p className="h3">
        <span role="img" aria-label="click aquí">
          👉
        </span>{' '}
        <Link to="/">Volver al inicio</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
