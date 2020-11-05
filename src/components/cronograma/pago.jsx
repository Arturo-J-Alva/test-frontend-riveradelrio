import React from 'react'
import moment from "moment"
import 'moment/locale/es'

const Pago = ({ quoteDescription, quote, amortization, capitalBalance, dollarExchange, nextExpiration }) => {
    return (
        <div className="my-2 p-2 w-full">
            <div className="rounded overflow-hidden shadow-lg hover:bg-gray-300 border-l-4 border-red-700 block md:flex px-4 md:py-2 py-0">
                <div className="w-full md:w-1/6 flex justify-center items-center my-4 md:my-0 font-bold text-xl">
                    {quoteDescription}
                </div>
                <div className="w-full md:w-5/6">
                    <ul className="flex flex-wrap">
                        <li className="w-1/2">Cuota: {quote} USD</li>
                        <li className="w-1/2">Amortización: {amortization} USD</li>
                        <li className="w-1/2">Balance de capital: {capitalBalance} USD</li>
                        <li className="w-1/2">Cambio de dolar: {dollarExchange} soles</li>
                        <li className="w-1/2">Vencimiento: {moment(nextExpiration).format('DD/MM/YY')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pago
