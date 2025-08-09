import { Card } from "@/components/ui/card"
import { Coffee, Heart, Users } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-brown mb-6">
            Notre Histoire
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis des années, Nico accueille les habitants de Chabeuil dans son café chaleureux, 
            perpétuant la tradition française de l'art de vivre et du bien-être.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-cafe-gold/20 bg-card hover:shadow-lg transition-all duration-300">
            <Coffee className="w-12 h-12 text-cafe-gold mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold text-cafe-brown mb-4">
              Café d'Excellence
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Nos grains sont sélectionnés avec soin et torréfiés selon 
              les méthodes traditionnelles pour vous offrir un café d'exception.
            </p>
          </Card>
          
          <Card className="p-8 text-center border-cafe-gold/20 bg-card hover:shadow-lg transition-all duration-300">
            <Heart className="w-12 h-12 text-cafe-gold mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold text-cafe-brown mb-4">
              Passion Authentique
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Chaque tasse est préparée avec amour et passion, 
              dans le respect des traditions françaises du café.
            </p>
          </Card>
          
          <Card className="p-8 text-center border-cafe-gold/20 bg-card hover:shadow-lg transition-all duration-300">
            <Users className="w-12 h-12 text-cafe-gold mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold text-cafe-brown mb-4">
              Convivialité
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Un lieu de rencontre et d'échange, où chaque client 
              devient un ami dans une atmosphère familiale et chaleureuse.
            </p>
          </Card>
        </div>
        
        <div className="bg-cafe-light-brown/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-playfair text-3xl font-semibold text-cafe-brown mb-6">
            L'Esprit du Café de la Poste
          </h3>
          <p className="font-inter text-lg text-cafe-warm leading-relaxed max-w-4xl mx-auto">
            Plus qu'un simple café, nous sommes un véritable point de rencontre au cœur de Chabeuil. 
            Ici, les générations se mélangent, les histoires se partagent et les amitiés se créent 
            autour d'un excellent café et d'une atmosphère unique. Nico et son équipe vous accueillent 
            avec le sourire pour faire de chaque visite un moment privilégié.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection