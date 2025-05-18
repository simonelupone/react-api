import {useState, useEffect} from "react";
import axios from "axios";

const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/';

const Main = () => {

    // state actress variable
    const [actress, setActress] = useState([])

    // ajax function
    const getActress = () => {
        axios.get(actressEndpoint).then((response) => {
            console.log(response.data)
        })
    }

    useEffect(() => getActress, [])

    return (
        <main>
            <div className='w-full flex justify-center bg-blue-200'>
                <div className="w-3xl p-4">
                    <div>Hello World</div>
                </div>
            </div>
        </main>
    );
};

export default Main;