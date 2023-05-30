function Character(props) {
    return ( 
        <div className="card text-center bg-dark">
        <div className="card-body text-white">
            <h4 className="card-title">{props.character.name}</h4>
            <p className="card-text">Especie: {props.character.species}</p>
            <p className="card-text">Genero: {props.character.gender}</p>
            <img className="img-fluid rounded-pill" src={props.character.image} alt={props.character.name} />
        </div>
        </div>
    )
}

export default Character