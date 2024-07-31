import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from '../PlaceImg'


export default function PlacesPage(){
    
    const [places , setPlaces] = useState([])

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        })
    },[])

    return (
        <div>
            <AccountNav />
                <div className="text-center">
                {places.length === 0 && <span className="text-3xl mb-10" >You have not added any accomodations yet :(</span>}
                <br></br>   
                <Link className = "inline-flex gap-1 bg-primary text-white px-6 py-2 rounded-full text-2xl items-center  mb-4 mt-8" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add new place
                </Link>
            </div>
            <div className="mt-4">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} className="cursor-pointer flex gap-4 bg-gray-200 p-4 rounded-2xl mb-8 items-center">
                        <div className="flex w-32 h-32 bg-gray-200 grow shrink-0 ">
                            <PlaceImg place={place} />
                        </div>
                        <div className="grow-0 shrink">
                            <h2 className="text-xl font-extrabold border-b border-black">{place.title}</h2>
                            <p>{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}