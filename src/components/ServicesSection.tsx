import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Croissant, Coffee, Sandwich, Wine, Cake, Salad } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Coffee,
      title: "Cafés & Boissons Chaudes",
      description: "Espresso, cappuccino, thés premium et chocolats chauds",
      specialties: ["Espresso traditionnel", "Cappuccino crémeux", "Thés bio", "Chocolat maison"]
    },
    {
      icon: Croissant,
      title: "Viennoiseries Fraîches",
      description: "Croissants, pains au chocolat et brioches du jour",
      specialties: ["Croissants pur beurre", "Pains au chocolat", "Brioches artisanales", "Chaussons aux pommes"]
    },
    {
      icon: Sandwich,
      title: "Restauration Rapide",
      description: "Sandwichs, salades et plats du jour préparés sur place",
      specialties: ["Sandwichs maison", "Salades fraîches", "Plat du jour", "Quiches lorraine"]
    },
    {
      icon: Wine,
      title: "Bar & Apéritifs",
      description: "Sélection de vins locaux et cocktails artisanaux",
      specialties: ["Vins de la Drôme", "Bières locales", "Cocktails maison", "Planches apéro"]
    },
    {
      icon: Cake,
      title: "Pâtisseries Maison",
      description: "Gâteaux, tartes et desserts préparés par nos soins",
      specialties: ["Tarte aux fruits", "Éclair au café", "Tiramisu", "Fondant chocolat"]
    },
    {
      icon: Salad,
      title: "Terrasse & Détente",
      description: "Espace extérieur pour profiter des beaux jours",
      specialties: ["Terrasse ombragée", "Vue sur village", "Wifi gratuit", "Journaux locaux"]
    }
  ]

  return (
    <section className="py-20 bg-cafe-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-brown mb-6">
            Nos Spécialités
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de produits frais et savoureux, 
            préparés avec passion dans le respect de la tradition française.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="p-6 border-cafe-gold/20 bg-card hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="bg-cafe-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-cafe-gold/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-cafe-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-cafe-brown mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.specialties.map((specialty, specialtyIndex) => (
                    <Badge 
                      key={specialtyIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2 bg-cafe-light-brown/30 text-cafe-brown border-cafe-gold/30 hover:bg-cafe-gold/20"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-cafe-brown/5 rounded-2xl p-8 border border-cafe-gold/20">
            <h3 className="font-playfair text-2xl font-semibold text-cafe-brown mb-4">
              Commandes & Réservations
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Contactez-nous pour vos commandes spéciales ou pour réserver votre table sur notre terrasse.
            </p>
            <div className="font-inter text-cafe-brown font-medium">
              Téléphone: 04 XX XX XX XX
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection