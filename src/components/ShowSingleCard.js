import Image from 'next/image';
import ButtonBack from './ButtonBack';
import index from '@/pages/index';

const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && (
        <Image
          src={show.image?.original}
          width={340}
          height={500}
          alt={show.name}
        />
      )}
      {show.summary}
      <ButtonBack id={index} />


    </div>
  );
};

export default ShowSingleCard;
