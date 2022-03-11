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

            <Usuario username='catanacomics' profilePic='./img/catanacomics.svg' name='Catana'/>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map((sugestao, index) =>
                    <Sugestao image={sugestao.image} username={sugestao.username} reason={sugestao.reason} key={index} />
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

function Usuario(props) {
    return (
        <div className="usuario">
            <img src={props.profilePic} alt='' />
            <div className="texto">
                <strong>{props.username}</strong>
                {props.name}
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