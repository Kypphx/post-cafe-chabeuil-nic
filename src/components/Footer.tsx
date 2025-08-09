import { Coffee, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-cafe-cream py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Coffee className="w-8 h-8 text-cafe-gold mr-3" />
            <h3 className="font-playfair text-2xl font-bold">
              Le Café de la Poste chez Nico
            </h3>
          </div>
          
          <p className="font-inter text-cafe-cream/80 mb-6 max-w-2xl mx-auto">
            Votre café de quartier à Chabeuil (26120), où tradition et convivialité 
            se rencontrent pour des moments authentiques et chaleureux.
          </p>
          
          <div className="border-t border-cafe-cream/20 pt-6">
            <p className="font-inter text-cafe-cream/60 flex items-center justify-center">
              Fait avec <Heart className="w-4 h-4 mx-2 text-cafe-gold" /> pour Chabeuil
              <span className="mx-2">•</span>
              © 2024 Le Café de la Poste chez Nico
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer