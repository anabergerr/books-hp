
const DetailCard = ({ data, type }) => {
    return (
      <div className="container mx-auto p-8 mt-20">
        <h1 className="text-3xl font-bold mb-4">Detalhes da {type}</h1>
        {data ? (
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{data.attributes.name}</h2>
            <p>Outras informações sobre o(a) personagem {type.toLowerCase()} aqui...</p>
          </div>
        ) : (
          <p>{`${type} não encontrado(a).`}</p>
        )}
      </div>
    );
  };
  
  export default DetailCard;
  