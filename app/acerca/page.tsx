import Header from '../components/header'
import { Target, Eye, Leaf, Users, Lightbulb, Coins, Heart, BookOpen } from 'lucide-react'

export default function AcercaDeNosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">Acerca de Nosotros</h1>
        
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card icon={<Target className="text-green-600" size={40} />} title="Misión" content="Proveer prótesis accesibles y de alta calidad a personas de bajos recursos mediante tecnología 3D y materiales reciclados, promoviendo la inclusión social y la sostenibilidad ambiental." />
            <Card icon={<Eye className="text-green-600" size={40} />} title="Visión" content="Ser líderes nacionales en prótesis sostenibles, inspirando un cambio positivo a través de la innovación y la economía circular." />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard icon={<Leaf />} title="Sostenibilidad" content="Priorizar el uso de materiales reciclados." />
            <ValueCard icon={<Users />} title="Inclusión" content="Hacer accesibles las soluciones a quienes más las necesitan." />
            <ValueCard icon={<Lightbulb />} title="Innovación" content="Usar tecnología avanzada para crear impacto." />
            <ValueCard icon={<Coins />} title="Accesibilidad" content="Garantizar que nuestras prótesis sean asequibles." />
            <ValueCard icon={<Heart />} title="Compromiso Social" content="Contribuir al bienestar comunitario." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Historia del Proyecto</h2>
          <Card icon={<BookOpen className="text-green-600" size={40} />} title="Nuestros Inicios" content="EcoPrótesis nació de la visión de un grupo de ingenieros y diseñadores comprometidos con el cambio social y ambiental. Desde nuestros humildes comienzos en un pequeño taller, hemos crecido hasta convertirnos en un referente nacional en prótesis sostenibles, impactando positivamente la vida de cientos de personas y contribuyendo a la reducción de residuos plásticos." />
        </section>
      </main>
    </div>
  )
}

function Card({ icon, title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

function ValueCard({ icon, title, content }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
      <div className="text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

