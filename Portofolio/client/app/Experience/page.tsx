'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ExperiencesProfessionnellesPage() {
  const experiences = [
    {
      slug: 'advens',
      role: 'Stage Ingénieur Cybersécurité',
      company: 'Advens',
      date: 'Janv. 2025 - Fév. 2025',
      location: 'Paris 1er, France',
      description: `Immersion chez un leader français de la cybersécurité (Pure Player).
      - Automatisation de processus commerciaux via VBA (Gain de productivité).
      - Montée en compétence offensive (Pentesting Web, Burp Suite).
      - Initiation à la détection d'incidents (SOC, EDR SentinelOne & Crowdstrike).`,
      tags: ['Cybersécurité', 'VBA', 'Burp Suite', 'SOC', 'SentinelOne'],
      image: '/images/advens.png',
    },
    {
      slug: 'thermofisher',
      role: 'Stage support Ventes & Opérations',
      company: 'Thermo Fisher Scientific',
      date: 'Janv. 2024 - Fév. 2024',
      location: 'Villebon-sur-Yvette, France',
      description: `Optimisation des processus commerciaux et support opérationnel pour l'équipe Inside Sales.
      - Mapping stratégique de 50 instituts de recherche (+3000 contacts qualifiés).
      - Gestion de la facturation et résolution des litiges sur Chorus Pro.
      - Contrôle qualité technique des machines (Countess 3) avant expédition.`,
      tags: ['Mapping', 'Excel', 'Commercial'],
      image: '/images/thermo.png',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      
      {/* --- Header --- */}
      <section className="text-center mb-20">
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 pb-2">
            Expériences Professionnelles
            </h1>
        </motion.div>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Un parcours marqué par la polyvalence, allant de l&apos;optimisation opérationnelle à la cybersécurité offensive et défensive.
        </motion.p>
      </section>

      {/* --- Card --- */}
      <section className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              
              {/* Colonne Gauche : Contenu */}
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 transition-colors">
                        {exp.role}
                    </h2>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200">
                        {exp.date}
                    </span>
                </div>

                {/* Sous-titre Entreprise */}
                <div className="mb-6 flex items-center gap-2">
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                        {exp.company}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-sm italic">{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line text-base">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.tags.map((tag) => (
                    <span 
                        key={tag} 
                        className="px-3 py-1 text-xs font-medium text-blue-500 bg-blue-50/50 border border-blue-100 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bouton Outline */}
                <Link 
                    href={`/Experience/${exp.slug}`}
                    className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm border border-blue-200 hover:border-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-xl transition-all duration-300 group/btn"
                >
                    En savoir plus
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
              </div>

              {/* Colonne Droite : Image */}
              <div className="w-full lg:w-1/3 order-1 lg:order-2 flex flex-col gap-4">
                {exp.image && (
                  <div className="relative w-full h-48 lg:h-full min-h-[200px] rounded-2xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100">
                    <Image 
                        src={exp.image} 
                        alt={exp.company} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}