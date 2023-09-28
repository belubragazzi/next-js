import Image from 'next/image';
import ButtonBack from './ButtonBack';
import index from '@/pages/index';
import Footer from '@/components/Footer';


const ShowSingleCard = ({ show }) => {
  return (
    <div class="text-gray-400 bg-gray-900 body-font">
      <section class="text-gray-400 bg-gray-900 body-font">

<div class="pt-10"> 
      <h2>{show.name}</h2>
      </div> 
  <div class="container px-10 py-0 mx-auto flex flex-wrap">
    <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    {show.image && (
        <Image
          src={show.image?.original}
          width={1000}
          height={500}
          alt={show.name}
        />
      )}
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        <div class="flex-grow">
          <h2 class="text-white text-left	text-lg title-font font-medium mb-3">Summary</h2>
          <p class="leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        <div class="flex-grow">
          <h2 class="text-white text-left text-lg title-font font-medium mb-3">Genres</h2>
          <p class="leading-relaxed text-base">{show.genres ? show.genres?.join(', ') : "Ni idea bro"}</p>
          
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
       
        <div class="flex-grow">
          <h2 class="text-white text-left text-lg title-font font-medium mb-3">Language</h2>
          <p class="leading-relaxed text-base"> {show.language}</p>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
       
        <div class="flex-grow">
          <h2 class="text-white text-left text-lg title-font font-medium mb-3">  <ButtonBack /></h2>
          
        
        </div>
      </div>
    </div>
  </div>
</section>   
      

<Footer />
    </div>

  );

};

export default ShowSingleCard;
