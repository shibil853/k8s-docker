import { useState, useEffect  } from 'react';

var API_URL = "http://127.0.0.1:3005";
export default function Greetings(){
    const [greetings, setGreetings ] = useState();
    const [greetingsList, setgreetingsList] = useState([]);

    useEffect(() => {
        async function getGreetings() {
            var response = await fetch(`${API_URL}/greetings`);
            let data = await response.json();
            setgreetingsList(data)
            setGreetings(data[0])
        }
        getGreetings();
    }, []);
    function changeGreeting() {
        const randomIndex = Math.floor(Math.random() * greetingsList.length);
        setGreetings(greetingsList[randomIndex])
    }

    return(
        <div>
            <p className="font-bold text-2xl py-4" id="greetingTxt">{greetings}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 
            rounded" onClick={changeGreeting} >Change Greeting</button>

        </div>
    )

}