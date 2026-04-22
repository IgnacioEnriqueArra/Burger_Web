import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MapPin, 
  BarChart3, 
  MessageSquare, 
  LayoutDashboard, 
  ExternalLink,
  ChefHat,
  ArrowRight,
  Menu as MenuIcon,
  X,
  Phone,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState } from 'react';

const FeatureCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white shadow-sm border border-orange-100 flex flex-col gap-4"
  >
    <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center text-white mb-2`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium">
      {description}
    </p>
  </motion.div>
);

const MenuPlaceholderCard = ({ category, name, price, image }: { category: string, name: string, price: string, image: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-orange-50 p-4 transition-all hover:shadow-2xl hover:shadow-orange-200/50"
  >
    <div className="aspect-square rounded-[2rem] bg-orange-50 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center text-orange-200 font-display font-black text-xl italic uppercase opacity-20 rotate-[-15deg] select-none">
        Tu Imagen Aquí
      </div>
      <img 
        src={image} 
        alt={name} 
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="mt-6 px-2 pb-2">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange leading-none mb-2 block">
        {category}
      </span>
      <h4 className="text-xl font-black text-brand-black mb-1">{name}</h4>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-black text-brand-orange">{price}</span>
        <button className="bg-brand-black text-white p-3 rounded-2xl hover:bg-brand-orange transition-colors">
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CONTACT_PHONE = "2616921221";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/90 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5 shadow-lg pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-orange rounded-xl flex items-center justify-center text-white font-display font-black text-sm md:text-base">
              L
            </div>
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight hidden xs:block">
              Tu <span className="text-brand-orange">Logo</span> Aquí
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <button onClick={() => scrollToSection('hero')} className="hover:text-brand-orange transition-colors cursor-pointer">Vibe</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-brand-orange transition-colors cursor-pointer">Funciones</button>
            <button onClick={() => scrollToSection('demo-menu')} className="hover:text-brand-orange transition-colors cursor-pointer">Menú Smash</button>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href={`https://wa.me/${CONTACT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-black text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange transition-all hover:scale-105 active:scale-95"
            >
              Hablemos
            </a>

            <button 
              className="md:hidden p-2 text-brand-black pointer-events-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-orange z-[45] flex flex-col items-center justify-center gap-6 p-6 md:hidden"
          >
            <button onClick={() => scrollToSection('hero')} className="text-3xl font-display font-black text-white">Concepto</button>
            <button onClick={() => scrollToSection('features')} className="text-3xl font-display font-black text-white">Tecnología</button>
            <button onClick={() => scrollToSection('demo-menu')} className="text-3xl font-display font-black text-white">Menú Smash</button>
            <div className="h-0.5 w-16 bg-white/30" />
            <a 
              href={`https://wa.me/${CONTACT_PHONE}`}
              className="text-white flex items-center gap-2 font-bold text-lg"
            >
              <Phone size={18} /> 2616921221
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 md:pt-40 pb-12 md:pb-24 px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full max-w-4xl overflow-hidden opacity-10 pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="aspect-square bg-brand-orange rounded-full blur-[80px] md:blur-[120px] -mr-1/2 -mt-1/2"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-brand-orange px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
            >
             <ChefHat size={14} /> Smash Burger Tech Demo
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-display font-black text-brand-black leading-[0.95] md:leading-[0.9] mb-6 md:mb-8"
            >
              LA WEB QUE <br />
              TUS SMASH <br />
              <span className="text-brand-orange underline decoration-[6px] md:decoration-[10px] decoration-orange-100 underline-offset-4">MERECEN</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 md:mb-10 font-medium leading-relaxed"
            >
              Demo de landing para tu hamburguesería. Pedidos directos, 
              dashboard de precios y experiencia optimizada para móviles. 
              Simple. Rápida. Efectiva.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button onClick={() => scrollToSection('demo-menu')} className="bg-brand-black text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-2.5xl text-[11px] md:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-orange transition-all active:scale-95 cursor-pointer">
                Ver Menú Demo <ArrowRight size={16} />
              </button>
              <a 
                href={`https://wa.me/${CONTACT_PHONE}`}
                className="bg-white border md:border-2 border-gray-100 text-brand-black px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-2.5xl text-[11px] md:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:border-brand-orange transition-all active:scale-95"
              >
                Hablar con Ignacio <Phone size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="flex-1 relative w-full max-w-md lg:max-w-none"
          >
            <div className="relative w-full aspect-square bg-orange-100 rounded-[2.5rem] md:rounded-[4rem] md:rotate-3 overflow-hidden flex items-center justify-center border-[6px] md:border-[10px] border-white shadow-2xl">
              <div className="absolute inset-0 bg-brand-orange mix-blend-overlay opacity-20" />
              <img 
                src="https://picsum.photos/seed/burger-smash/800/800" 
                alt="Smash Burger Concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 glass-card p-4 md:p-6 rounded-2xl md:rounded-3xl">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-orange animate-pulse" />
                  <div className="flex-1 space-y-1.5 md:space-y-2">
                    <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-2.5 md:h-3 bg-gray-100 rounded w-1/2" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <div className="bg-white/95 px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-xl font-display font-black text-lg md:text-2xl rotate-[-5deg] md:rotate-[-10deg] border-2 border-brand-orange">
                  FOTÓN DE TU HAMBURGA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight uppercase">EL PACK PARA TU <br className="hidden md:block"/> NEGOCIO SMASH</h2>
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xl mx-auto">
              Diseño enfocado en Argentina: rápido para el cliente y fácil de administrar para vos. Sin vueltas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={MessageSquare}
              title="Orden Directa WhatsApp"
              description="Recibí el pedido completo: Items, extras y aclaraciones sin tener que preguntar nada. Ahorrá tiempo operativo."
              colorClass="bg-green-500"
            />
            <FeatureCard 
              icon={MapPin}
              title="GPS Delivery"
              description="Nadie se pierde. Te llega el link exacto de Google Maps del cliente. Entrega caliente, entrega feliz."
              colorClass="bg-blue-500"
            />
            <FeatureCard 
              icon={LayoutDashboard}
              title="Dashboard de Precios"
              description="¿Aumentó la carne? Cambiás el precio en 10 segundos desde tu celular. Control total sobre tu stock y menú."
              colorClass="bg-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Menu Demo Section */}
      <section id="demo-menu" className="py-16 md:py-24 px-6 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-brand-orange font-black uppercase tracking-widest text-[10px] md:text-xs">Demo de Menú</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 uppercase">SMASH <br className="md:hidden"/> ARGENTO</h2>
            </div>
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-xs md:text-right">
              Mira estas bombas. Adaptamos el menú con tus fotos y tu estilo.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <MenuPlaceholderCard 
              category="Clásica"
              name="Doble Cheddar"
              price="$7.900"
              image="https://picsum.photos/seed/double/600/600"
            />
            <MenuPlaceholderCard 
              category="Bomba"
              name="Oklahoma Smash"
              price="$8.500"
              image="https://picsum.photos/seed/okla/600/600"
            />
            <MenuPlaceholderCard 
              category="Side"
              name="Papas con Crudo"
              price="$5.200"
              image="https://picsum.photos/seed/fries/600/600"
            />
            <MenuPlaceholderCard 
              category="Veggie"
              name="Smash Falafel"
              price="$7.500"
              image="https://picsum.photos/seed/veggie2/600/600"
            />
          </div>
        </div>
      </section>

      {/* Developer Credits Section */}
      <section className="py-20 md:py-24 px-6 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-brand-orange rounded-3xl mx-auto mb-8 flex items-center justify-center font-display font-black text-3xl rotate-3 shadow-lg shadow-orange-500/20">
            IA
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic uppercase leading-none">VENDÉ MÁS SMASH <br className="hidden md:block"/> CON TU PROPIA WEB</h2>
          <p className="text-sm md:text-base text-white/60 mb-10 max-w-lg mx-auto font-medium">
            Hecho por <span className="text-white font-black underline decoration-brand-orange underline-offset-4 tracking-tight">Ignacio Enrique Arra</span>. Desarrollador Web enfocado en resultados reales para comercios.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/${CONTACT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform text-xs"
            >
              Contactar por WhatsApp <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">
            <p>© 2024 IGNACIO ARRA • MENDOZA ARGENTINA</p>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">PORTFOLIO</span>
              <span className="hover:text-white transition-colors cursor-pointer">IG</span>
              <span className="hover:text-white transition-colors cursor-pointer">LINKEDIN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Floating Action Button */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 right-6 z-[60]"
      >
        <a 
          href={`https://wa.me/${CONTACT_PHONE}`}
          target="_blank"
          style={{ backgroundColor: '#25D366' }}
          className="flex items-center gap-2 md:gap-3 text-white p-3.5 md:p-4 md:px-6 rounded-full shadow-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-110 active:scale-95 transition-all group shadow-green-500/30"
        >
          <span className="hidden sm:inline">Hablar con Ignacio</span>
          <MessageSquare fill="white" size={20} className="md:size-[24px]" />
        </a>
      </motion.div>
    </div>
  );
}
