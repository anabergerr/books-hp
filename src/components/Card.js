import Link from 'next/link';
import Image from 'next/image';

const Card = ({ data, type }) => {
  return (
    <div className="mb-8">
      <div className="bg-white p-6 rounded-md shadow-md">
        <Image src={data.attributes.cover} alt={data.attributes.title} className="mb-4 w-full h-48 object-cover rounded-md" width={100} height={100} />
        <h2 className="text-xl font-semibold mb-2">{data.attributes.title || data.attributes.name}</h2>
        <p className="text-gray-600">{data.attributes.release_date || data.attributes.author}</p>
        {type && (
          <Link href={`/${type}/${encodeURIComponent(data.attributes.slug)}`} passHref>
            <span className="text-blue-500 hover:underline block mt-4">Veja Mais</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
