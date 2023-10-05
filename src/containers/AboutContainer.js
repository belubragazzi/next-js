import React from 'react'
import Image from 'next/image'

function AboutContainer() {
  return (
    <div><section class="text-gray-400  body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <Image class="object-cover object-center rounded" 
        src={`/assets/dc-logo.png`}
        width={500}
        height={64}
        alt={`Logo`}/>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        
        <p class="mb-8 leading-relaxed">
          Fue creada en el año 2015, después de las controversias causadas por Batman v Superman: Dawn of Justice, Warner Bros. Pictures tomó medidas para estabilizar 
          la dirección del Universo extendido de DC. El estudio se reorganizó en mayo de 2016 para tener ejecutivos cinematográficos responsables de género, por lo que las 
          películas de la franquicia de DC Entertainment bajo Warner Bros. se colocaron bajo una división recién creada, DC Films, creada bajo el vicepresidente ejecutivo de 
          Warner Bros., Jon Berg y director de contenido de DC Comics, Geoff Johns. Esto se hizo con la esperanza de competir más directamente con el Universo cinematográfico de 
          Marvel de Marvel Studios. Johns también mantuvo su papel actual en DC Comics. Sin embargo, la formación de la división no fue diseñada para anular el mandato 
          dirigido por el director. </p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AboutContainer 