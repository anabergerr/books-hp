// components/DetailCard.js

const DetailCard = ({ data, type }) => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Detalhes da {type}</h1>
        {data ? (
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">{data.attributes.name}</h2>
            {/* Adicione outras informações específicas da entidade aqui */}
            <p>Outras informações sobre o(a) {type.toLowerCase()} aqui...</p>
          </div>
        ) : (
          <p>{`${type} não encontrado(a).`}</p>
        )}
      </div>
    );
  };
  
  export default DetailCard;
  