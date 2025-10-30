import React from "react";

const ListaImagens = ({ photos }) => {
  return photos.map((photo) => (
    // colocar um atributo chamado key nessa div
    // o valor associado deve ser o id da photo da vez
    <div key={photo.id}>
      {/* passe a usar o Imagem */}
      <Imagem
        src={photo.src.small}
        alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`}
      />
    </div>
  ));
};

export default ListaImagens;
