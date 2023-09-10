import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react';
import {fetchVideosByID} from '../api';
import { useParams } from "react-router-dom";

function Video() {
    const params = useParams();
    const [video, setVideo] = useState();

    async function fetchData(){
        const data = await fetchVideosByID(params.id);
        console.log(data);
        setVideo(data);
    }

    useEffect(() => {
        fetchData();
    },[]);

    if (!video){
        return <h1>Loading...</h1>;
    }
    return (
        
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
        <Navbar/>
        <div className="m-12">
        <video controls>
            <source src={video.videoUrl} type="video/mp4"/>
        
        </video>
        <h1 className="font-bold text-lg">
            {video.title}
        </h1>
        </div>
        </div>
    );
}

export default Video;