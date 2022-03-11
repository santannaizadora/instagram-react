function Stories() {
    const perfis = [
        {
            image: './img/9gag.svg',
            username: '9gag'
        },
        {
            image: './img/meowed.svg',
            username: 'meowed'
        },
        {
            image: './img/barked.svg',
            username: 'barked'
        },
        {
            image: './img/nathanwpylestrangeplanet.svg',
            username: 'nathanwpylestrangeplanet'
        },
        {
            image: './img/wawawicomics.svg',
            username: 'wawawicomics'
        },
        {
            image: './img/respondeai.svg',
            username: 'respondeai'
        },
        {
            image: './img/filomoderna.svg',
            username: 'filomoderna'
        },
        {
            image: './img/memeriagourmet.svg',
            username: 'memeriagourmet'
        }
    ]

    return (
        <div className="stories">

            {
                perfis.map((storie, index) =>
                    <Storie image={storie.image} username={storie.username} key={index}/>
                )
            }

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Storie(props) {
    return (
        <div className="story">
        <div className="imagem">
            <img src={props.image} alt="" />
        </div>
        <div className="usuario">
            {props.username}
        </div>
    </div>
    )
}

export default Stories;