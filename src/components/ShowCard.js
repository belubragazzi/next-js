import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Link from 'next/link';
const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id, image } = show;
  return (
    <div className='show_container col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-3 justify-start items-center '>
     
      
     <Link  href={`/show/${id}`}>
    
      
        <div class="flex relative" >
          
          <Image className="absolute inset-0 w-full h-full object-cover object-center" src={image?.original} width={680} height={1000} alt={name} />
          <div class="px-8 py-10 relative z-10  border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 h-64 w-64">
            <h2 class="tracking-widest text-sm title-font font-large text-indigo-400 mb-1">{name}</h2>
            <h1 class="title-font text-center text-lg font-medium text-white mb-3">Ver más</h1>          
            </div>
        </div>
      
        </Link>
    
    
    
    
    
    
    </div>
    
    
  );
};

export default ShowCard;
