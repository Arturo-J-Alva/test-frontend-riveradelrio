import Link from 'next/link'
import React from 'react'
import Layout from '../../g_components/layout'

const Home = () => {
    return (
        <Layout title="Presentación | RiberaDelRío">
            <h1 className="text-5xl text-center underline font-bold text-red-800 uppercase">Examen Frontend</h1>
            <p className="text-center text-3xl text-blue-700 animate-bounce">Programador: Arturo J. Alva</p>
            <div className="my-2 leading-7 border-t-2 border-b-2 border-blue-700 text-gray-800">
                <h2 className="font-bold underline">Tecnologías usadas:</h2>
                <ul>
                    <li className="flex">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        React: Tecnología frontend más demandada en la actualidad.</li>
                    <li className="flex">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        NextJS: Entorno de desarrollo que optimiza el SEO (posicionamiento en buscadores como google) de cada página creada con React.</li>
                    <li className="flex">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        TailwindCss: Framework que agiliza la estelización (css) enfocado en utilidades.</li>
                </ul>
                <h2 className="font-bold underline">Importancia de usa NextJS:</h2>
                <p>
                    <span className="inline-block"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></span>
                     Yo hasta recomiendo usar NextJS para crear webs estáticas de Rivera del Río con React, ya que con esta tecnología se estaría garantizando en la parte técnica que los posibles clientes encuentren el sitio web a través del buscador Google y eso conlleva aumento de ingresos.</p>
                <p>
                    <span className="inline-block"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg></span>
                    En caso que no se necesite que la web sea encontrado en el buscado de google (como una web administrador) se puede prescindir de NextJS y usar otros entornos de React como RCA(React Create App).</p>
                <h2 className="font-bold underline">Observaciones:</h2>
                <p>
                    <span className="inline-block"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>  </span>
                    Al crear los paths de cada cronograma correspondiente a una membresía, se usa el nombre de la membresía para tal, ya que eso favorece al SEO. Usualmente se usa el ID de la membresía para crear el path, siendo desfavorable para el SEO.</p>
            </div>
            <div className="text-center my-4">
                <Link href="/membresias">
                    <a><button className=" rounded-lg text-xl border border-red-300 bg-blue-600 px-2 py-1 text-white hover:bg-blue-700 focus:outline-none">
                        Ver Membresías
                    </button></a>
                </Link>
            </div>
        </Layout>
    )
}

export default Home
