import { Card } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-brown mb-6">
            Nous Trouver
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Venez nous rendre visite au cœur de Chabeuil. 
            Nous serons ravis de vous accueillir dans notre café chaleureux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-cafe-gold/20 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-cafe-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cafe-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-cafe-brown mb-2">Adresse</h3>
                  <p className="font-inter text-muted-foreground">
                    Le Café de la Poste chez Nico<br />
                    26120 Chabeuil<br />
                    France
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-cafe-gold/20 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-cafe-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cafe-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-cafe-brown mb-2">Horaires d'ouverture</h3>
                  <div className="font-inter text-muted-foreground space-y-1">
                    <p>Lundi - Vendredi: 7h00 - 19h00</p>
                    <p>Samedi: 8h00 - 18h00</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-cafe-gold/20 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-cafe-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cafe-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-cafe-brown mb-2">Téléphone</h3>
                  <p className="font-inter text-muted-foreground">
                    04 XX XX XX XX
                  </p>
                  <p className="font-inter text-sm text-muted-foreground/70 mt-1">
                    N'hésitez pas à nous appeler pour vos réservations
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-cafe-gold/20 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-cafe-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cafe-gold" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-cafe-brown mb-2">Email</h3>
                  <p className="font-inter text-muted-foreground">
                    contact@cafe-poste-chabeuil.fr
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Map & Actions */}
          <div className="space-y-6">
            <Card className="p-6 border-cafe-gold/20 bg-card">
              <h3 className="font-playfair text-2xl font-semibold text-cafe-brown mb-4">
                Comment nous rejoindre
              </h3>
              <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                Situé au cœur de Chabeuil, notre café est facilement accessible. 
                Parking public disponible à proximité. 
                Nous nous trouvons près de la poste du village, d'où notre nom !
              </p>
              
              <div className="space-y-4">
                <HeroButton variant="primary" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Itinéraire GPS
                </HeroButton>
                <HeroButton variant="secondary" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous appeler
                </HeroButton>
              </div>
            </Card>
            
            <div className="bg-cafe-light-brown/20 rounded-xl p-6 border border-cafe-gold/20">
              <h4 className="font-playfair text-lg font-semibold text-cafe-brown mb-3">
                Informations pratiques
              </h4>
              <ul className="font-inter text-muted-foreground space-y-2">
                <li>• Terrasse extérieure disponible</li>
                <li>• Wifi gratuit pour nos clients</li>
                <li>• Parking public à 50m</li>
                <li>• Accès PMR</li>
                <li>• Animaux acceptés en terrasse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection