import {useState, useEffect} from 'react';
import axios from 'axios';

const actressesEndpoint = 'https://lanciweb.github.io/demo/api/actresses/';
const actorsEndpoint = 'https://lanciweb.github.io/demo/api/actors/';

const Main = () => {

    // state actress variable
    const [actresses, setActresses] = useState([])
    const [actors, setActors] = useState([])

    const [cast, setCast] = useState([])

    // ajax function
    const getActress = () => {
        axios.get(actressesEndpoint).then((response) => {
            console.log(response.data)
            setActresses(response.data)
        })
    }

    const getActors = () => {
        axios.get(actorsEndpoint).then((response) => {
            console.log(response.data)
            setActors(response.data)
        })
    }

    useEffect(() => {
        getActress();
        getActors();
    }, [])

    useEffect(() => {
        if (actresses.length > 0 || actors.length > 0) {
            setCast([...actresses, ...actors]);
        }
    }, [actresses, actors]);

    return (
        <main>
            <div className='w-full flex justify-center'>
                <div className='w-7xl p-4'>
                    <h2 className='text-3xl py-4'>Actresses</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cast.map((c) => (
                            <div key={`${c.name}-${c.id}`}
                                 className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 hover:bg-neutral-200 cursor-pointer">
                                <div className="h-64 w-full">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src={c.image}
                                        alt={c.name}
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{c.name}</div>
                                    <p className="text-gray-700 text-base">{c.biography}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <div><span className='font-semibold'>Birthday:</span> {c.birth_year}</div>
                                    <div><span className='font-semibold'>Nationality:</span> {c.nationality}</div>
                                    <div><span className='font-semibold'>Awards:</span> {c.awards}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*<h2 className='text-3xl py-8'>Actors</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {actors.map((actor) => (
                            <div key={`actor-${actor.id}`}
                                 className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 hover:bg-neutral-200 cursor-pointer">
                                <div className="h-64 w-full">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={actor.image}
                                        alt={actor.name}
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{actor.name}</div>
                                    <p className="text-gray-700 text-base">{actor.biography}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <div><span className='font-semibold'>Birthday:</span> {actor.birth_year}</div>
                                    <div><span className='font-semibold'>Nationality:</span> {actor.nationality}</div>
                                    <div><span className='font-semibold'>Awards:</span> {actor.awards.join(', ')}</div>
                                </div>
                            </div>
                        ))}
                    </div>*/}
                </div>
            </div>
        </main>
    );
};

export default Main;