'use client'

import { useState } from 'react'
import Header from '../components/header'
import { Send, Truck, MapPin } from 'lucide-react'

export default function PersonalizacionProtesis() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    medidas: '',
    color: '',
    diseno: '',
    funcionalidad: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', formData)
    // Resetear el formulario o mostrar un mensaje de éxito
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">Personalización de Prótesis</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Formulario de Solicitud</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Tu nombre completo"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="tu@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                type="tel"
                placeholder="Tu número de teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medidas">
                Medidas
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="medidas"
                placeholder="Describe las medidas necesarias para tu prótesis"
                name="medidas"
                value={formData.medidas}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                Color preferido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="text"
                placeholder="Color deseado para tu prótesis"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diseno">
                Diseño
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="diseno"
                type="text"
                placeholder="Describe el diseño que te gustaría"
                name="diseno"
                value={formData.diseno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="funcionalidad">
                Funcionalidad requerida
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="funcionalidad"
                placeholder="Describe la funcionalidad que necesitas en tu prótesis"
                name="funcionalidad"
                value={formData.funcionalidad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                type="submit"
              >
                <Send className="mr-2" size={16} />
                Enviar Solicitud
              </button>
            </div>
          </form>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Políticas de Entrega y Envío</h2>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex items-center mb-4">
              <Truck className="text-green-600 mr-4" size={24} />
              <p className="text-gray-700">Envíos gratuitos en áreas cercanas.</p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-green-600 mr-4" size={24} />
              <p className="text-gray-700">Posibilidad de recoger directamente en puntos establecidos.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

