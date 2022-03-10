function Posts() {
    const posts = [
        {
            profilePic: './img/meowed.svg',
            username: 'meowed',
            postPic: './img/gato-telefone.svg',
            likedByPic: './img/respondeai.svg',
            likedBy: 'respondeai',
            likes: '101.523'
        },
        {
            profilePic: './img/barked.svg',
            username: 'barked',
            postPic: './img/dog.svg',
            likedByPic: './img/adorable_animals.svg',
            likedBy: 'adorable_animals',
            likes: '99.159'
        }
    ]

    return (
        <div className="posts">
            {posts.map((post, index) =>
                <div className="post" key={index}>
                    <div className="topo">
                        <div className="usuario">
                            <img src={post.profilePic} alt=''/>
                            {post.username}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={post.postPic} alt='' />
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src={post.likedByPic} alt=''/>
                            <div className="texto">
                                Curtido por <strong>{post.likedBy}</strong> e <strong>outras {post.likes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Posts;