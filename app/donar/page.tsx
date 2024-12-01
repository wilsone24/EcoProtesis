import Header from '../components/header'
import { DollarSign, Recycle } from 'lucide-react'

export default function ComoDonar() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">Cómo Donar</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <DonationOption 
            icon={<DollarSign className="text-green-600" size={40} />}
            title="Donación Monetaria"
            content="Apoya nuestro proyecto con una donación segura en línea. Cada contribución nos ayuda a crear más prótesis y cambiar vidas."
          >
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Donar Ahora
            </button>
          </DonationOption>

          <DonationOption 
            icon={<Recycle className="text-green-600" size={40} />}
            title="Donación de Materiales"
            content="Ayúdanos reciclando. Asegúrate de que el plástico esté limpio y déjalo en nuestras eco-tiendas."
          >
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Encuentra tu Eco-tienda más cercana
            </button>
          </DonationOption>
        </div>
      </main>
    </div>
  )
}

function DonationOption({ icon, title, content, children }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      {children}
    </div>
  )
}

