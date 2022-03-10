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
                    <div className="story" key={index}>
                        <div className="imagem">
                            <img src={storie.image} alt="" />
                        </div>
                        <div className="usuario">
                            {storie.username}
                        </div>
                    </div>
                )
            }

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

export default Stories;