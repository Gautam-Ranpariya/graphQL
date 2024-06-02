import React, { useState } from 'react';
import spaceXLogo from '../../assets/logo/logo.svg';

export default function SideBar() {
    const menu = ["company", "landpads", "launchpads", "capsules", "cores", "coresUpcoming", "launchLatest", "missions", "roadster", "rockets", "ships", "launches"]

    const [activeItem, setActiveItem] = useState(menu[0]);

    const handleClick = (item) => {
        setActiveItem(item);
    }
    return (
        <div>
            <div className="mainSideBar py-3 w-52 xs:w-60  sm:w-72 md:w-80 h-screen bg-darkblue overflow-x-hidden overflow-y-auto scroll-smooth">
                <div className="innerSideBar flex items-center  flex-col h-full">
                    <div className="logo flex items-center justify-center flex-col w-full p-2 py-4 border-b border-b-white px-3">
                        <img src={spaceXLogo} alt="spaceX Logo" className='object-cover h-full mx-auto xxs:max-w-52 xxs:max-h-52 max-w-32 max-h-32 ' />
                    </div>
                    <div className="menu w-full py-4 ">
                        {
                            menu.map((item, index) => {
                                const isActive = item === activeItem;
                                return (
                                    <div key={index} className={`py-2.5 max-w-xs:px-3 w-full flex items-center justify-between group ${isActive ? 'bg-gray-600' :  ''} px-3 transition-all duration-200`} onClick={() => handleClick(item)}>
                                        <p className={`leading-6 text-left group-hover:text-white ${isActive ? 'text-white' :  'text-gray-400'}`}>{item}</p>
                                        <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 256 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 group-hover:fill-white menuItem-hover:fill-white ${isActive ? 'fill-white' :  'fill-gray-400'}`}>
                                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                        </svg>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
