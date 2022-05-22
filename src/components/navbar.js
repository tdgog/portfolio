import React, { useState } from "react"
import { Link } from 'react-router-dom';

const textStyle = 'font-roboto text-cultured mx-5'

function NavigationButton({ pageData, selectedPage, setSelectedPage }){
    const hoverP = () => {
        if (selectedPage !== pageData.path) {
            return 'hover:text-coral-dark'
        }
    }

    return <div className="flex">
        <Link to={pageData.path} onClick={() => setSelectedPage(pageData.path)}>
            <p className={`${textStyle} text-2xl ${selectedPage === pageData.path ? 'text-coral' : null} ${hoverP()}`}>{pageData.title}</p>
        </Link>
    </div>
}

export default function Navbar(){
    const pages = [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/2' },
        { title: 'My Work', path: '/3' },
        { title: 'Contact', path: '/_'}
    ]

    const [selectedPage, setSelectedPage] = useState('/')

    return <div className="flex">
        <div className="w-screen h-20 bg-jet flex flex-row items-center">
            <p className={`${textStyle} text-5xl`}>tdgog</p>
            {pages.map((data, i) =>
                <NavigationButton pageData={data} 
                                  selectedPage={selectedPage} 
                                  setSelectedPage={setSelectedPage} 
                />
            )}
        </div>
    </div>
}
