const sugestoes = [
    {
        image: './img/bad.vibes.memes.svg',
        username: 'bad.vibes.memes',
        reason: 'Segue você'
    },
    {
        image: './img/chibirdart.svg',
        username: 'chibirdart',
        reason: 'Segue você'
    },
    {
        image: './img/razoesparaacreditar.svg',
        username: 'razoesparaacreditar',
        reason: 'Novo no Instagram'
    },
    {
        image: './img/adorable_animals.svg',
        username: 'adorable_animals',
        reason: 'Segue você'
    },
    {
        image: './img/smallcutecats.svg',
        username: 'smallcutecats',
        reason: 'Segue você'
    }
]

function SideBar() {

    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="./img/catanacomics.svg" alt='' />
                <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map((sugestao, index) =>
                    <Sugestao image={sugestao.image} username={sugestao.username} reason={sugestao.reason} key={index}/>
                )}

            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props) {

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} alt='' />
                <div className="texto">
                    <div className="nome">{props.username}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}

export default SideBar;