export const CardVideo = ({ titulo, reproduzVideo }) => {

    return (

        <section className="painel-de-videos">

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=2 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=3 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=4 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=5 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=6 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=7 " alt="" />
                <h4>{titulo}</h4>
            </div>

            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=8 " alt="" />
                <h4>{titulo}</h4>
            </div>

        </section>
    )
}

export default CardVideo