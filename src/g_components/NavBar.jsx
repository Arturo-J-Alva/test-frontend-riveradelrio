import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div>
            <ul className="flex w-1/2 mx-auto justify-around border-b-2 border-red-800">
                <li className="text-lg text-red-700 hover:text-blue-700">
                    <Link href="/inicio">
                        <a>
                            Presentación
                            </a>
                    </Link>
                </li>
                <li className="text-lg text-red-700 hover:text-blue-700">
                    <Link href="/membresias">
                        <a>
                            Membresías
                            </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
