import React from 'react'
import { certificates } from '../data'
const Certificates = () => {
  return (
    <section id='certificates'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.slice(0, 4).map((cert, idx) => (
            <div key={idx} className="relative bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-neutral-900 dark:border-neutral-700 overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 object-cover rounded-t-xl" src={cert.image} alt={`${cert.title} Image`} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/CCCCCC/000000?text=Image+Not+Found'; }}/>
              <div className="p-4 md:p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title || 'Certificate Title'}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400 text-sm">
                  {cert.description || "Some quick example text to build on the card title and make up the bulk of the card's content."}
                </p>
                <p className="mt-4 text-xs text-gray-500 dark:text-neutral-500">
                  Last updated 5 mins ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates