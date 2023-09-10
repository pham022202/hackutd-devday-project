import {apiBaseURL} from './constants';
export async function fetchAllVideos() {
    const res = await fetch(apiBaseURL)

// ]   const data = await fetch(apiBaseURL)
//         .then(response => {
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error);
//             return [];
//         }

//         )
    console.log(res.status)

    if (res.status !== 200){
        console.error("API failed to load - Error Code" + res.status)
        return []
    }

    const data = await res.json();
    return data;
}

export async function fetchVideosByID(id) {
    const res = await fetch(apiBaseURL + "/" + id)

    console.log(res.status);

    if (res.status !== 200){
        console.error("API failed to load - Error Code" + res.status)
        return []
    }

    const data = await res.json();
    return data;
}

