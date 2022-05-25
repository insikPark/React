import { useEffect, useState } from "react";

export default function useFetch(url){
   
    const[data, setData] = useState([]);

    useEffect(() => {          
        fetch(url)  
        .then(res => {                                
            return res.json()
        })
        .then(data =>{
            setData(data);
        })
    }, [url]);

    return data;    // 필요로 하는 것은 data 이기 때문에 return 해준다.
}