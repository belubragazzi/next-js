import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div
      className={`hero flex justify-center items-center w-full h-[600px] `}
    >



      <section class="text-gray-600 body-font m-28">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w--1/2"><Image src={`/assets/nombre.png`} width={500} height={64} alt={`nombre`} />
      </div>
      <p class="mb-8 leading-relaxed">¿Es un ave? ¿Es un avión? ¡Claro que no! Es la super mega wiki de Superman. Descubrí todos los shows que salieron sobre este adorado superheroe.</p>
      <div class="flex justify-center">
        <Link href={"/about"}>
        
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About</button>
        </Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image src={`/assets/senior.png`} width={400} height={64} alt={`superman`} />
    </div>
  </div>
</section>
    </div>
  );
};

export default Hero;
