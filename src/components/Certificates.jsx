import React from 'react'
import { certificates } from '../data';
import { MdOutlineArrowOutward } from "react-icons/md";
const Certificates = () => {
  return (
    <section id='certificates'>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">My Certificates</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {certificates.slice(0, 4).map((cert, idx) => (
        <div key={idx} className="relative bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-neutral-900 dark:border-neutral-700 overflow-hidden transform transition-transform duration-300 hover:scale-105">
         
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {cert.title || 'Certificate Title'}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400 text-sm">
              {cert.description || "Some quick example text to build on the card title and make up the bulk of the card's content."}
            </p>
            {/* Issued By and Date */}
            <p className="mt-2 text-sm text-gray-700 dark:text-neutral-300">
              <span className="font-semibold">Issued By:</span> {cert.issuedBy}
            </p>
            <p className="mt-1 text-sm text-gray-700 dark:text-neutral-300">
              <span className="font-semibold">Date:</span> {cert.date }
            </p>

            {/* View Certificate Button */}
            <div className="mt-4">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-cyan-600 hover:text-cyan-800 disabled:opacity-50 disabled:pointer-events-none dark:text-cyan-500 dark:hover:text-cyan-400"
              >
                View Certificate
                <MdOutlineArrowOutward/>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Certificates;