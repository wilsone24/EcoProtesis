import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import { Heart, Users, ShipWheelIcon as Wheelchair } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Image
              src="/images/2.png"
              alt="Beneficiario usando una prótesis hecha con plástico reciclado"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mb-6 mx-auto"
            />
            <h2 className="text-3xl font-bold mb-4">Transformamos plástico en oportunidades de vida</h2>
            <p className="text-xl mb-8">EcoPrótesis combina tecnología 3D y reciclaje para mejorar vidas de manera sostenible</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/donar" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              <Heart className="mr-2" size={20} />
              Dona Ahora
            </Link>
            <Link href="/aliados" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              <Users className="mr-2" size={20} />
              Conviértete en Aliado
            </Link>
            <Link href="/solicitar" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              <Wheelchair className="mr-2" size={20} />
              Solicita una Prótesis
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

