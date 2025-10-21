'use client'

import { useState } from 'react';
import Image from "next/image";


/*MEDIA*/
import headerimg from '../images/header-img-2.jpeg';
import dateimg from '../images/date-img.jpg';
import curchico from '../images/church.svg';
import wineico from '../images/wine.png';
import touchico from '../images/touch.svg';

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
    <div className="min-h-screen bg-black text-white font-poppins uppercase">
      {/* Primera Sección: Foto con marco */}
      <section className="py-8 px-4 border-r-5 border-l-5 border-[#c8bdb4]">
        <div className="relative w-full h-full max-w-md mx-auto bg-black border-4 border-black overflow-hidden">
          <h1 className="text-4xl font-gwendolyn text-white text-center py-7 capitalize">Alondra & Angel</h1>
          <div className='border-t-30 border-b-70 border-l-30 border-r-30 border-[#c8bdb4]'>
            <Image
              src={headerimg}
              alt="Marco decorativo"
              width={800}
              height={300}
              className="w-full h-auto object-cover grayscale-100"
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h2 className="text-2xl font-poppins text-black tracking-widest border-t-3 border-b-3 border-black inline-block">NUESTRA BODA</h2>
          </div>
        </div>
      </section>

      {/* Segunda Sección: Cita bíblica y agradecimiento */}
      <section className="py-20 px-4 bg-[#c8bdb4]">
        <div className="max-w-md mx-auto text-center space-y-15">
          <div>
            <p className="text-black font-poppins text-xl tracking-wider font-semibold">
              &quot;Por encima de todo, vístanse de amor, que es el vínculo perfecto.&quot;
            </p>
            <p className="text-gray-700 font-poppins text-xl tracking-wider">
              - Colosenses 3:14
            </p>
          </div>
          <div>
            <p className="text-black font-poppins tracking-wider text-lg mb-4">
              CON LA BEDICION DE DIOS, DE NUESTROS PADRES Y NUESTROS PADRINOS
            </p>
            <div className='text-2xl'>
              <p className="text-gray-700 font-birthstone capitalize">
                Jose Angel Tapia & Leticia Ramírez
              </p>
              <p className="text-gray-700 font-birthstone capitalize">
                Jose Zavala & Paola Romero
              </p>
              <p className="text-gray-700 font-birthstone capitalize">
                Olivia Zavala & Carlos Garcia
              </p>
              <p className="text-gray-700 font-birthstone capitalize">
                Guadalupe Aparicio & Gustavo Ayala
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera Sección: Invitación y fecha */}
      <section className="py-8 px-4 bg-black text-center border-r-5 border-l-5 border-[#c8bdb4]">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-gray-300 font-poppins text-base">
            Tenemos el honor de invitarlos a celebrar nuestra unión el día
          </p>
          <p className="text-gray-300 font-poppins text-base font-bold">
            SÁBADO
          </p>
          <div className="flex justify-center items-center text-white text-5xl font-poppins divide-x divide-white ">
            <span className="px-3">13</span>
            <span className="px-3">DIC</span>
            <span className="px-3">2025</span>
          </div>

          <p className="text-xl font-poppins text-gray-400">5:30 PM</p>
          <Image
            src={dateimg}
            alt="Foto grande de Angel y Alondra"
            className="w-full h-auto grayscale-75 object-cover rounded-lg border-2 border-black"
          />
        </div>
      </section>

      {/* Quinta Sección: Direcciones */}
      <section className="py-8 px-4 bg-[#c8bdb4]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <div className='flex justify-center items-center'>
              <div className="h-0.5 bg-black w-full mx-4"></div>
              <Image
                src={curchico}
                alt='Icono de iglesia'
                className='size-12'
              />
              <div className="h-0.5 bg-black w-full mx-4"></div>
            </div>
            <h3 className="text-4xl text-red-800 font-gwendolyn capitalize">Ceremonia Religiosa</h3>
            <p className="text-black">Iglesia Inmaculada Concepción, Av. Miguel Hidalgo 363, San Luis Rio Colorado</p>
            <p className="text-xl font-poppins text-gray-700">5:30 PM</p>
            <a
              href="https://maps.app.goo.gl/XPfro8oDiLChLQdo9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block border-black border-3 text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all duration-300"
            >
              MAPA
              <Image
                src={touchico}
                alt='Icono de toque'
                className='inline-block size-6 ml-2 hover:fill-white'
              />
            </a>
          </div>
          <div className="text-center">
            <div className='flex justify-center items-center'>
              <div className="h-0.5 bg-black w-full mx-4"></div>
              <Image
                src={wineico}
                alt='Icono de copa'
                className='size-12'
              />
              <div className="h-0.5 bg-black w-full mx-4"></div>
            </div>
            <h3 className="text-4xl text-red-800 font-gwendolyn capitalize ">Recepcion</h3>
            <p className="text-black">Salón Khaled, Cjon. Miguel Hidalgo y 17, San Luis Rio Colorado</p>
            <a
              href="https://maps.app.goo.gl/ZPm7fN217pFVmr9i9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block border-3 border-black text-black py-2 px-4 rounded  hover:bg-black hover:text-white transition-all duration-300"
            >
              MAPA
              <Image
                src={touchico}
                alt='Icono de toque'
                className='inline-block size-6 ml-2 hover:fill-white'
              />
            </a>
          </div>
        </div>
      </section>

      {/* Séptima Sección: Nuevo Formulario */}
      <section className="py-8 px-4 bg-[#c8bdb4]">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-center text-5xl text-red-800 font-gwendolyn capitalize">Confirma tu Asistencia</h2>
          {enviado ? (
            <p className="text-black text-center">¡Gracias por confirmar! Te esperamos.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black font-poppins" htmlFor="nombre">
                  Tu nombre (requerido)
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  required
                  className="w-full bg-white text-gray-300 placeholder-gray-700 px-3 py-2 rounded border border-black"
                />
              </div>
              <div>
                <label className="block text-black font-poppins" htmlFor="acompanantes">
                  Número de acompañantes
                </label>
                <select
                  id="acompanantes"
                  value={acompanantes}
                  onChange={(e) => setAcompanantes(e.target.value)}
                  className="w-full bg-white text-gray-700 px-3 py-2 rounded border border-black"
                >
                  <option value="1">Sin acompañantes</option>
                  <option value="3">Un acompañante</option>
                  <option value="2">Dos acompañantes</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full border-3 border-black text-black py-2 px-4 rounded  hover:bg-black hover:text-white transition-all duration-300"
              >
                Enviar Confirmación
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sexta Sección: Información adicional */}
      <section className="py-8 px-4 bg-black text-center border-r-5 border-l-5 border-[#c8bdb4]">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-gray-300 font-poppins">
            Respetuosamente, no se permiten niños en el evento.
          </p>
          <p className="text-blt-gray-300 font-poppins">
            El código de vestimenta es formal.
          </p>
        </div>
      </section>

      {/* Octava Sección: Galería (anteriormente séptima) */}
      <section className="py-8 px-4 bg-black border-r-5 border-l-5 border-[#c8bdb4]">
        <h2 className="text-center text-xl text-red-800 font-poppins mb-4">Galería</h2>
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
      <section className="py-8 px-4 bg-[#c8bdb4] text-center">
        <div className="max-w-md mx-auto">
          <p className="text-black font-poppins">
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
      <footer className="py-4 text-center text-gray-300 text-l">
        <p>© 2025 Angel & Alondra</p>
      </footer>
    </div>
  );
};

export default Home;
