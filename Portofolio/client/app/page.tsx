import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Carte principale */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-16 relative">
        
        {/* Nom */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
            Gabriel DALIBERT
          </h1>
        </div>

        {/* Infos */}
        <div className="p-6 space-y-6 text-center">
          <p className="text-xl">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              École:
            </span>{' '}
            {`ECE - École d'Ingénieurs`}
          </p>
          <p className="text-xl">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Promotion: 
            </span>{' '}
            {`Ing4 - Cybersécurité`}
          </p>
          <p className="text-xl">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Localisation:
            </span>{' '}
            Paris, France
          </p>
          <p className="text-xl">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              E-mail: 
            </span>{' '}
            gabriel.dalibert@edu.ece.fr
          </p>
        </div>

        {/* Icônes de contact */}
        <div className="flex justify-center gap-10 mt-12">
          {/* CV */}
          <a
            href="/documents/CV_GABRIEL_DALIBERT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaFilePdf size={40} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gabriel-dalibert-375a9a29b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={40} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gabbbbbbbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </section>
  )
}
