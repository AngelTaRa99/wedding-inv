'use client'

import Image from "next/image";
import Particles from '../components/Particles';
import SplitText from "../components/SplitText";

/*MEDIA*/
import headerimg from '../images/header-image.png';

export default function Home() {


  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={headerimg}
          alt="Header de boda en blanco y negro"
          width={800}
          height={600}
          className="inset-0 w-full h-full object-cover mask-b-from-60%"
        />
        <div className="inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={500}
              particleSpread={13}
              speed={0.1}
              particleBaseSize={50}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
            <div className="absolute text-center text-white flex-col flex">
              <SplitText
                text="Angel & Alondra"
                className="text-4xl font-semibold text-center"
                delay={200}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="Nos casamos"
                className="text-2xl font-semibold text-center"
                delay={200}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Detalles */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8 bg-gray-50 border-2 border-white rounded-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl text-black mb-2">Nuestra Boda</h2>
            <p className="text-gray-600">Unidos en amor y compromiso eterno</p>
          </div>
          <div className="text-center mb-6">
            <div className="text-black font-semibold text-lg mb-1">Angel Tapia</div>
            <div className="text-black text-2xl mb-1">&</div>
            <div className="text-black font-semibold text-lg">Alondra Zavala</div>
          </div>

          <div className="border-t border-white pt-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Fecha</span>
              <span className="text-black font-medium">13 de diciembre, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Hora Ceremonia</span>
              <span className="text-black font-medium">5:30 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 font-medium">Hora Recepción</span>
              <span className="text-black font-medium">8:00 PM</span>
            </div>

            {/* Ubicaciones */}
            <div className="space-y-4 mt-4">
              <div className="bg-white p-3 rounded-lg border border-white">
                <h3 className="font-semibold text-black mb-1">Ceremonia</h3>
                <p className="text-gray-700 text-sm">Iglesia de San José</p>
                <p className="text-gray-700 text-sm">Av. Reforma 123, Ciudad de México</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-white">
                <h3 className="font-semibold text-black mb-1">Recepción</h3>
                <p className="text-gray-700 text-sm">Salón Hacienda Real</p>
                <p className="text-gray-700 text-sm">Calle Jardín 456, Ciudad de México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-center mb-4 text-white">Nuestros Momentos</h2>
          <div className="grid grid-cols-2 gap-2">
            {['1', '2', '3', '4'].map((i) => (
              <div key={i} className="aspect-square border border-white rounded-lg overflow-hidden">
                <Image
                  src={headerimg}
                  alt="Header de boda en blanco y negro"
                  width={800}
                  height={600}
                  className="inset-0 w-full h-full object-cover mask-b-from-60%"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}

        {/* Footer */}
        <footer className="text-center py-8 text-gray-600 text-sm border-t border-white mt-8">
          <p>Con la bendición de Dios y el amor de nuestras familias</p>
          <p className="mt-2 text-white">© 2024 Angel & Alondra</p>
        </footer>
      </div>
    </div>
  );
};


