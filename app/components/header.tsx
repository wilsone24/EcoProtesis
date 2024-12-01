import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/images/1.png" alt="EcoPrótesis Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold">EcoPrótesis</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">Inicio</Link></li>
              <li><Link href="/acerca" className="hover:underline">Acerca de Nosotros</Link></li>
              <li><Link href="/donar" className="hover:underline">Cómo Donar</Link></li>
              <li><Link href="/personalizacion" className="hover:underline">Personalización de Prótesis</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

