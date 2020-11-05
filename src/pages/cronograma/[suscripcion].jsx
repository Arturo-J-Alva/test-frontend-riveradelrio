import Link from 'next/link'
import React from 'react'
import Pago from '../../components/cronograma/pago'
import Layout from '../../g_components/layout'

const Cronograma = ({ data, suscripcion }) => {
    //console.log(data)
    return (
        <Layout>
            <h1 className="capitalize text-4xl font-bold text-center underline text-blue-700">cronograma de pagos</h1>
            <h2 className="text-2xl capitalize text-center">(Membresía: {suscripcion})</h2>
            {
                data.map((dat, ind) => <Pago key={ind} {...dat} />)
            }
            <div className="text-center my-4">
                <Link href="/inicio">
                    <a><button className=" rounded-lg text-xl border border-red-300 bg-blue-600 px-2 py-1 text-white hover:bg-blue-700 focus:outline-none">
                        Regresar
                    </button></a>
                </Link>
            </div>
        </Layout>
    )
}

//Obteniendo los path dinamicamente
export async function getStaticPaths() {
    //En un entorno real se usaría un endpoint del backend de Ribera Del Río
    //const res = await Axios.get("https://backend.cieneguillariberadelrio.com/consulta/subscripciones")
    //const data = res.data
    //Pero en este caso se usará un dato de un json:
    const suscriptions = require("../../data/suscription.json")
    //Obteniendo los nombres de cada tipo de suscripción:
    let nombres = suscriptions.objModel.map(dat => dat.package.name)
    //Como en este caso los nombres se repiten, filtro los repetidos (en un entorno real no debería de repetirse)
    nombres = Array.from(new Set(nombres))
    //Generando paths separados por guión
    nombres = nombres.map(nombre => {
        const nombreArray = nombre.split(" ")
        const nombreConGuion = nombreArray.join("-").toLowerCase()
        return nombreConGuion
    })
    const paths = nombres.map((nombre) => ({
        params: { suscripcion: nombre }
    }))
    return { paths, fallback: false }

}

//Obteniendo datos para generar sitio estático, que favorece al posicionamiento de GOOGLE:
export async function getStaticProps(ctx) {
    console.log("ctx:", ctx)
    const path = ctx.params.suscripcion
    //En un entorno real se usaría un endpoint del backend de Ribera Del Río
    //const res = await Axios.get(`https://backend.cieneguillariberadelrio.com/consulta/cronograma/${path}`)
    //En este caso el resultado de cada consulta es el mismo (ya que)
    const cronograma = require("../../data/data.json")
    //console.log(json)
    return { props: { data: cronograma.objModel, suscripcion:path.split("-").join(" ") } }
}

export default Cronograma
