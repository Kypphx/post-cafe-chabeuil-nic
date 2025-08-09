import { HeroButton } from "@/components/ui/hero-button"
import { Clock, MapPin, Phone } from "lucide-react"
import cafeHero from "@/assets/cafe-hero.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cafeHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-warm/80 via-cafe-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cafe-cream mb-6 leading-tight">
          Le Café de la Poste
          <span className="block text-cafe-gold text-4xl md:text-5xl mt-2">chez Nico</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-cafe-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Un lieu authentique et chaleureux au cœur de Chabeuil, 
          où tradition et convivialité se rencontrent.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <HeroButton variant="primary" size="lg" className="w-full sm:w-auto">
            Découvrir nos spécialités
          </HeroButton>
          <HeroButton variant="secondary" size="lg" className="w-full sm:w-auto">
            Nous contacter
          </HeroButton>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-cafe-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cafe-gold/20">
            <MapPin className="w-8 h-8 text-cafe-gold mx-auto mb-3" />
            <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-2">Adresse</h3>
            <p className="font-inter text-cafe-cream/80">5 pl Gén de Gaulle<br />26120 Chabeuil</p>
          </div>
          
          <div className="bg-cafe-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cafe-gold/20">
            <Clock className="w-8 h-8 text-cafe-gold mx-auto mb-3" />
            <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-2">Horaires</h3>
            <p className="font-inter text-cafe-cream/80">Tous les jours<br />8h30 - 1h00</p>
          </div>
          
          <div className="bg-cafe-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cafe-gold/20">
            <Phone className="w-8 h-8 text-cafe-gold mx-auto mb-3" />
            <h3 className="font-playfair text-lg font-semibold text-cafe-cream mb-2">Contact</h3>
            <p className="font-inter text-cafe-cream/80">04 75 59 02 62</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection