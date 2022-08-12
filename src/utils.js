import axios from "axios";

export function GET(url){
    const resp = axios.get(url)
    return resp.then(function(response){
        return response;
    }).catch(function(error){
        console.warn(error)
        return error
    })
}

export function POST(url, requestPayload){
    const resp = axios.post(url, requestPayload)
    return resp.then(function(response){
        return response;
    }).catch(function(error){
        console.warn(error)
        return error
    })
}