
function VideoCard (props) {
    return(
        <a href={'/video' + '/' + props.id}>
            
        <div className="relative m-8 h-[299px] w-[180px] bg-secondary overflow-hidden rounded-md">
           <img className="h-full w-full" 
           src={props.thumbnailURL}
           alt={props.title}
           />
           
           <div className="absolute bottom-0 rounded-md w-full h-2/5 bg-gradient-to-t from-black to-transparent"></div>
            <h1 className="absolute left-4 bottom-4 font-semibold">
                {props.title}
                </h1>
        </div>
        </a>
    )
}

export default VideoCard;