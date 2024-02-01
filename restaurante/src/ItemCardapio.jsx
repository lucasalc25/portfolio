/* eslint-disable react/prop-types */

export function ItemCardapio(props) {
    return (
        <div className='container-item-cardapio'>
            <div>
                <h2>{props.nome}</h2>
                <h2>{props.preco}</h2>
                <h5>{props.descricao}</h5>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}