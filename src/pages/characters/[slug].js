import { getCharactersDetails } from '../../utils/api';
import DetailCard from '@/components/DetailCard';

const CharacterDetail = ({ character }) => {
  return <DetailCard data={character} type="Personagem" />;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await getCharactersDetails(slug)
    const characters = response.data.data;

    const character = characters.find((char) => char.attributes.slug === slug);

    return {
      props: {
        character,
      },
    };
  } catch (error) {
    console.error('Erro para carregar os dados:', error);
    return {
      props: {
        character: null,
      },
    };
  }
}

export default CharacterDetail;
