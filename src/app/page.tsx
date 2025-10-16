'use client'

import { useState } from 'react';
import Image from "next/image";


/*MEDIA*/
import headerimg from '../images/header-image.png';

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [acompanantes, setAcompanantes] = useState('1'); // Estado para el selector
  const [enviado, setEnviado] = useState(false); // Para manejar el envío

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return;
    }
    // Simular envío (puedes reemplazar con una API real)
    console.log({ nombre, acompanantes });
    setEnviado(true);
    setNombre(''); // Limpiar campos
    setAcompanantes('1');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Primera Sección: Foto con marco */}
      <section className="py-8 px-4">
        <div className="relative w-full h-full max-w-md mx-auto bg-black border-4 border-black overflow-hidden">
          <Image 
            src={headerimg}
            alt="Marco decorativo" 
            width={800}
            height={300}
            className="w-full h-auto object-cover border-50 border-gray-300"
          />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            
            <h1 className="text-xl italic font-serif text-black">Nos casamos</h1>
          </div>
        </div>
      </section>

      {/* Segunda Sección: Cita bíblica y agradecimiento */}
      <section className="py-32 px-4 bg-gray-300">
        <div className="max-w-md mx-auto text-center space-y-4">
          <p className="text-red-800 italic font-serif text-lg">
            "Por encima de todo, vístanse de amor, que es el vínculo perfecto." - Colosenses 3:14
          </p>
          <p className="text-black italic font-serif">
            Agradecemos a nuestros queridos padres por su amor incondicional y guía en este camino hacia el matrimonio.
          </p>
        </div>
      </section>

      {/* Tercera Sección: Invitación y fecha */}
      <section className="py-8 px-4 bg-black text-center">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-gray-300 italic font-serif text-base">
            Con honor y orgullo te invitamos a nuestra boda
          </p>
          <h2 className="text-3xl font-bold text-red-800">13 de Diciembre</h2>
          <p className="text-xl italic font-serif text-gray-300">5:30 PM</p>
        </div>
      </section>

      {/* Cuarta Sección: Foto grande de la pareja */}
      <section className="py-8 px-4">
        <div className="max-w-md mx-auto">
          <img 
            src="" 
            alt="Foto grande de Angel y Alondra" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
        </div>
      </section>

      {/* Quinta Sección: Direcciones */}
      <section className="py-8 px-4 bg-gray-300">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-xl text-red-800 italic font-serif">Parroquia</h3>
            <p className="text-black">Iglesia Inmaculada Concepción, Av. Miguel Hidalgo 363, San Luis Rio Colorado</p>
            <a 
              href="https://maps.app.goo.gl/XPfro8oDiLChLQdo9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-red-800 text-white py-2 px-4 rounded hover:bg-red-300"
            >
              MAPA
            </a>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-red-800 italic font-serif">Salón</h3>
            <p className="text-black">Salón Khaled, Cjon. Miguel Hidalgo y 17, San Luis Rio Colorado</p>
            <a 
              href="https://maps.app.goo.gl/ZPm7fN217pFVmr9i9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-red-800 text-white py-2 px-4 rounded hover:bg-red-300"
            >
              MAPA
            </a>
          </div>
        </div>
      </section>

      {/* Sexta Sección: Información adicional */}
      <section className="py-8 px-4 bg-black text-center">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-gray-300 italic font-serif">
            Respetuosamente, no se permiten niños en el evento.
          </p>
          <p className="text-blt-gray-300 italic font-serif">
            El código de vestimenta es formal.
          </p>
        </div>
      </section>

      {/* Séptima Sección: Nuevo Formulario */}
      <section className="py-8 px-4 bg-gray-300">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-center text-xl text-red-800 italic font-serif">Confirma tu Asistencia</h2>
          {enviado ? (
            <p className="text-black text-center">¡Gracias por confirmar! Te esperamos.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black italic font-serif" htmlFor="nombre">
                  Tu nombre (requerido)
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  required
                  className="w-full bg-black text-gray-300 placeholder-gray-700 px-3 py-2 rounded border border-red-800"
                />
              </div>
              <div>
                <label className="block text-black italic font-serif" htmlFor="acompanantes">
                  Número de acompañantes
                </label>
                <select
                  id="acompanantes"
                  value={acompanantes}
                  onChange={(e) => setAcompanantes(e.target.value)}
                  className="w-full bg-black text-gray-300 px-3 py-2 rounded border border-red-800"
                >
                  <option value="1">Sin acompañantes</option>
                  <option value="3">Un acompañante</option>
                  <option value="2">Dos acompañantes</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-2 rounded hover:bg-red-300"
              >
                Enviar Confirmación
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Octava Sección: Galería (anteriormente séptima) */}
      <section className="py-8 px-4 bg-black">
        <h2 className="text-center text-xl text-red-800 italic font-serif mb-4">Galería</h2>
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img 
            src="https://via.placeholder.com/200x200/000000/808080?text=Foto+1" 
            alt="Foto 1 de la galería" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
          <img 
            src="https://via.placeholder.com/200x200/000000/808080?text=Foto+2" 
            alt="Foto 2 de la galería" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
          <img 
            src="https://via.placeholder.com/200x200/000000/808080?text=Foto+3" 
            alt="Foto 3 de la galería" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
        </div>
      </section>

      {/* Novena Sección: Recomendación de regalo (anteriormente octava) */}
      <section className="py-8 px-4 bg-gray-300 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-black italic font-serif">
            Como recomendación de regalo, apreciamos cualquier contribución para nuestro nuevo hogar.
          </p>
        </div>
      </section>

      {/* Décima Sección: 2 fotos de la pareja (anteriormente novena) */}
      <section className="py-8 px-4 bg-black">
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img 
            src="https://via.placeholderblack/000000/808080?text=Foto+de+nosotros+1" 
            alt="Foto 1 de la pareja" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
          <img 
            src="https://via.placeholderblack/000000/808080?text=Foto+de+nosotros+2" 
            alt="Foto 2 de la pareja" 
            className="w-full h-auto object-cover rounded-lg border-2 border-black"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-300">
        <p>© 2025 Angel & Alondra</p>
      </footer>
    </div>
  );
};

export default Home;
