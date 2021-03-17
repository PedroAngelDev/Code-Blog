import React from 'react'
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container d-flex flex-column flex-md-row-reverse justify-content-between align-items-center py-3">
        <div>
          <p className="h5">Sigueme en las redes sociales</p>
          <div className="d-flex justify-content-center">
            <a
              className="m-1"
              href="https://www.facebook.com/pedroangel.vd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                title="facebook"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
            <a
              className="m-1"
              href="https://www.instagram.com/pedroangelvd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                title="instagram"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
            <a
              className="m-1"
              href="https://twitter.com/PedroAngelVD"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                title="twitter"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
            <a
              className="m-1"
              href="https://github.com/PedroAngelVD"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                title="github"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
            <a
              className="m-1"
              href="https://www.youtube.com/channel/UCvqr-EF2eyMjkjnjNG7NL3g"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube
                title="youtube"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
            <a
              className="m-1"
              href="https://www.linkedin.com/in/pedroangelvd/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                title="linkedin"
                className="text-white"
                style={{ fontSize: '2rem' }}
              />
            </a>
          </div>
        </div>
        <p className="m-0 text-center">
          Copyright © {new Date().getFullYear()} PedroAngelVD
        </p>
      </div>
    </footer>
  )
}

export default Footer
