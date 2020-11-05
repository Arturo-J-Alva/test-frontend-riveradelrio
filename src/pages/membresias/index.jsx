import React from 'react'
import Subscripcion from '../../components/inicio/subscripcion'
//import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../g_components/layout'

const Inicio = ({ data }) => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    //console.log(data)
    return (
        <Layout title="Home">
            <h1 className=" text-6xl font-bold uppercase underline text-center text-blue-700 tracking-wide">Rivera del río</h1>
            <div >
                <img src="/images/banner.jpg" alt="banner" className="mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-red-70 tracking-tighter text-red-700">Elige una de nuestras membresías:</h2>
            <div className="flex flex-wrap">
                {
                    data.map((dat, ind) => <Subscripcion key={ind} {...dat.package} />)
                }
            </div>
        </Layout>
    )
}

//Obteniendo datos para generar sitio estático, que favorece al posicionamiento de GOOGLE:
export async function getStaticProps() {
    try {
        //En un entorno real se usaría un endpoint del backend de Ribera Del Río
        //const res = await Axios.get("https://backend.cieneguillariberadelrio.com/consulta/subscripciones")
        //const data = res.data
        //Pero en este caso se usará un dato de un json:
        const suscriptions = require("../../data/suscription.json")
        return { props: { data: suscriptions.objModel }, revalidate: 2 }
    } catch (e) {
        console.log(e)
        return { props: { data: [] } }
    }

}

export default Inicio
