import { useState, useEffect  } from 'react';
var API_URL = "127.0.0.1:3005";

export default function Visitors(){
    const [count, setCount] = useState();
    useEffect(() => {
        async function getCount(){
            var response = await fetch(`http://${API_URL}/visitors`);
            let data = await response.json();
            setCount(data)
        }
        getCount();
    },[]);
    return(
        <p className="font-semibold text-lg py-4" id="visitorCountTxt">{count}</p>

    );
}