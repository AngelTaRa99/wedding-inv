'use client'

import { useState } from 'react';
import Image from "next/image";


/*MEDIA*/
import headerimg from '../images/header-img-2.jpeg';
import footerimg from '../images/footer-img.jpeg';
import img1 from '../images/image-1.jpeg';
import img2 from '../images/image-2.jpeg';
import img3 from '../images/image-3.jpeg';
import img4 from '../images/image-4.jpeg';
import img5 from '../images/image-5.jpg';
import dateimg from '../images/date-img.jpg';
import curchico from '../images/church.svg';
import wineico from '../images/wine.png';
import touchico from '../images/touch.svg';
import dividerf from '../images/FloralDivider.svg';
import dressico from '../images/wedding-dress.png';
import suitico from '../images/suit-and-tie-outfit.png';
import envelopeico from '../images/email.png';
import crossico from '../images/cross.png';

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [acompanantes, setAcompanantes] = useState('0'); // Estado para el selector
  const [enviado, setEnviado] = useState(false); // Para manejar el envío
  const [cargando, setCargando] = useState(false); // Para mostrar el estado de carga


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nombre.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return;
    }

    setCargando(true); // Muestra el spinner

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          acompanantes,
        }),
      });

      setEnviado(true);
      setNombre('');
      setAcompanantes('0');
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar tu confirmación. Intenta de nuevo.");
    } finally {
      setCargando(false); // Oculta el spinner
    }
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
          <div className='h-[50vh] flex flex-col justify-center items-center'>
            <Image
              src={crossico}
              alt='Divider decorativo 1'
              className='mb-4 size-12 opacity-65'
            />
            <p className="text-black font-poppins text-xl tracking-wider font-semibold">
              &quot;Por encima de todo, vístanse de amor, que es el vínculo perfecto.&quot;
            </p>
            <p className="text-gray-700 font-poppins text-xl tracking-wider">
              - Colosenses 3:14
            </p>
            <Image
              src={dividerf}
              alt='Divider decorativo 3'
              className='mt-4 size-70 opacity-75'
            />
          </div>
        </div>
        <div className='text-center'>
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
          <div className="flex justify-center items-center text-white text-5xl font-poppins divide-x divide-white border-t-3 border-b-3 border-white ">
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

      {/* Quinta Sección: Dir ecciones */}
      <section className="py-8 px-4 bg-[#c8bdb4]">
        <div className=" mx-auto space-y-2">
          <div className="text-center h-[50vh]">
            <div className='flex justify-center items-center text-center'>
              <div className="h-0.5 bg-black w-full mx-4"></div>
              <Image
                src={curchico}
                alt='Icono de iglesia'
                className='size-12 fill-white'
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

            <Image
              src={dividerf}
              alt='Divider decorativo 5'
              className='mx-auto size-60 opacity-45'
            />
          </div>


          <div className="text-center h-[50vh]">
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
            <p className="text-xl font-poppins text-gray-700">8:00 PM</p>
            <a
              href="https://maps.app.goo.gl/ZPm7fN217pFVmr9i9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block border-3 border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-all duration-300"
            >
              MAPA
              <Image
                src={touchico}
                alt='Icono de toque'
                className='inline-block size-6 ml-2 hover:fill-white'
              />
            </a>
            <Image
              src={dividerf}
              alt='Divider decorativo 5'
              className='mx-auto size-60 opacity-45'
            />
          </div>

        </div>
      </section>

      {/* Séptima Sección: Nuevo Formulario */}
      <section className="py-18 px-4 bg-red-950 inner-shadow p-4">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-center text-5xl text-gray-300 font-gwendolyn capitalize">Confirma tu Asistencia</h2>
          {enviado ? (
            <p className="text-gray-300 text-center">¡Gracias por confirmar! Te esperamos.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-poppins" htmlFor="nombre">
                  Tu nombre (requerido)
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  required
                  className="w-full bg-white text-gray-700 placeholder-gray-700 px-3 py-2 rounded border border-black"
                />
              </div>
              <div className='hidden'>
                <label className="block text-gray-300 font-poppins" htmlFor="acompanantes">
                  Número de acompañantes
                </label>
                <select
                  id="acompanantes"
                  value={acompanantes}
                  onChange={(e) => setAcompanantes(e.target.value)}
                  className="w-full bg-white text-gray-700 px-3 py-2 rounded border border-black"
                >
                  <option value="0">Sin acompañantes</option>
                  <option value="1">Un acompañante</option>
                  <option value="2">Dos acompañantes</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={cargando}
                className={`w-full border-3 border-gray-300 text-gray-300 py-2 px-4 rounded transition-all duration-300
    ${cargando ? 'bg-gray-700 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
              >
                {cargando ? (
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Enviar Confirmación'
                )}
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Octava Sección: Galería (anteriormente séptima) */}
      <section className="py-12 px-4 bg-black border-r-5 border-l-5 border-[#c8bdb4]">
        <div className="relative max-w-md mx-auto">
          {/* Imagen grande al centro */}
          <div className="relative">
            <Image
              src={img5}
              alt="Foto grande de la galería"
              width={400}
              height={400}
              className="w-full h-auto object-cover grayscale-100 border-45 border-b-65"
              priority
            />
          </div>

          {/* Imagen pequeña superior derecha */}
          <div className="absolute top-0 left-[-25] -rotate-23 translate-x-1/4 -translate-y-1/4">
            <Image
              src={img4}
              alt="Foto 2 de la galería"
              width={150}
              height={150}
              className="border-18 border-b-30 shadow-2xl grayscale-100"
            />
          </div>

          {/* Imagen pequeña inferior derecha */}
          <div className="absolute bottom-0 right-15 rotate-25 translate-x-1/4 translate-y-1/4">
            <Image
              src={img1}
              alt="Foto 3 de la galería"
              width={150}
              height={150}
              className=" border-18 border-b-30 shadow-2xl grayscale-100"
            />
          </div>
        </div>
      </section>

      {/* Sexta Sección: Información adicional */}
      <section className="py-8 px-4 bg- text-center border-r-5 border-l-5 border-[#c8bdb4] bg-[#c8bdb4]">
        <div className="max-w-md mx-auto space-y-4">
          <div className='border-t-2 border-black h-[25vh] flex flex-col justify-center items-center'>
            <p className="text-black font-gwendolyn text-5xl capitalize">
              Respetuosamente
            </p>
            <p className='tracking-widest text-gray-700'> NO NIÑOS </p>
          </div>
          <Image
            src={dividerf}
            alt='divisor de flores'
          />
          <div className='border-b-2 border-black h-[25vh] flex flex-col justify-center items-center'>
            <p className="text-black font-birthstone text-4xl capitalize">
              código de vestimenta.
            </p>
            <div className='my-4'>
              <Image
                src={dressico}
                alt='Icono de vestido de boda'
                className='inline-block size-12'
              />
              <Image
                src={suitico}
                alt='Icono de traje'
                className='inline-block size-12'
              />
            </div>
            <p className='tracking-widest text-gray-700'>FORMAL</p>
          </div>
        </div>
      </section>


      {/* Novena Sección: Recomendación de regalo (anteriormente octava) */}
      <section className="py-8 px-4 bg-[#c8bdb4] text-center">
        <div className="max-w-md mx-auto">
          <p className='font-gwendolyn capitalize text-5xl text-black'>Regalo</p>
          <p className="text-gray-700 font-poppins">
            Su presencia es nuestro mejor regalo. Si deseas  hacernos un obsequio, una colaboración en efectivo nos ayudaría muchísimo a empezar nuestra vida juntos.
          </p>
          <Image
            src={envelopeico}
            alt='Icono de traje'
            className='inline-block size-12 mt-4'
          />
        </div>
      </section>

      {/* Décima Sección: 2 fotos de la pareja (anteriormente novena) */}
      <section className="py-8 px-4 bg-black">
        <div className="max-w-md mx-auto flex gap-4">
          <Image
            src={footerimg}
            alt="Foto 1 de la pareja"
            className="w-auto h-auto object-cover rounded-lg border-2 border-black grayscale-100"
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
