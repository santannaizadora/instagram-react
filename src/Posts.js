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
                <Post key={index} profilePic={post.profilePic} username={post.username} postPic={post.postPic} likedByPic={post.likedByPic} likedBy={post.likedBy} likes={post.likes}/>
            )}
        </div>
    )

}

function Post(props){
    return(
        <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={props.profilePic} alt=''/>
                            {props.username}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={props.postPic} alt='' />
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
                            <img src={props.likedByPic} alt=''/>
                            <div className="texto">
                                Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Posts;