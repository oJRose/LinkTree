import { Instagram, Image, ExternalLink, Mail } from 'lucide-react';

const PreviewImages = [
  {
    url: "https://cdn.myportfolio.com/4646f580-7713-4367-8b44-e2d802967651/3446445e-21ac-4a64-bc5c-cedeb7c2736e_rw_1200.jpg?h=3c998aac8cd326b7f1e961d055ff2b25"
  }
]

const Links = [
  {
    title: "Portfolio Lightroom",
    url: "https://jonasrose.co/",
    icon: <Image size={20}/>,
    color: "hover:bg-blue-500"
  },
  {
    title: "Instagram Noir et Blanc",
    url: "https://www.instagram.com/jo.rose__/",
    icon: <Instagram size={20}/>,
    color: "hover:bg-pink-500"
  },
  {
    title: "Instagram Colour",
    url: "https://",
    icon: <Instagram size={20}/>,
    color: "hover:bg-purple-500"
  },
  {
    title: "Contact / Email",
    url: "mailto:jonas.rose.pictures@gmail.com",
    icon: <Mail size={20}/>,
    color: "hover:bg-gray-700"
  }
];

export default function App() {
  return (
    <div className='relative min-h-screen text-slate-100 flex flex-col items-center px-6 py-20 overflow-hidden font-sans'>
      
      {/* Sphères de couleur animées en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#050505]">
        {/* Sphère 1 */}
          <div className="absolute top-[-20%] left-[10%] w-[80%] h-[70%] rounded-full bg-white/[0.03] blur-[120px] animate-blob"></div>    
        {/* Sphère 2  */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-500/[0.05] blur-[100px] animate-blob [animation-delay:3s]"></div>
      </div>

      {/* Profil Section */}
      <div className='text-center mb-12'>
          <div className='w-24 h-24 bg-linear-to-tr from-yellow-400 to-fuchsia-600 rounded-full p-1 mb-4 mx-auto'>
            <img 
              className='w-full h-full rounded-full object-cover border-slate-950'
              src="https://github.com/oJRose.png" 
              alt="Profil" />
          </div>
          <h1 className='text-2xl font-bold tracking-tight'>
              . Jonas Rose .
          </h1>
          <p className='text-xl font-extralight tracking-tight'>Photography</p>
      </div>

      {/* Preview Galerie */}


      {/* Links Container */} 
        <div className='w-full max-w-[400px] space-y-4'>
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group flex items-center justify-between p-5 w-full 
                        bg-white/[0.02] backdrop-blur-sm
                        border border-white/10 rounded-none /* Carré pour un look plus éditorial */
                        transition-all duration-500
                        hover:bg-white/10 hover:border-white/40 hover:tracking-widest"
            >
              <div className="flex items-center gap-6">
                <span className="text-white/40 group-hover:text-white transition-colors uppercase text-[10px] tracking-tighter">
                  {link.icon}
                </span>
                <span className="font-light text-sm tracking-wide uppercase">{link.title}</span>
              </div>
              <ExternalLink size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      {/* Footer */} 
        <footer className="mt-auto pt-20 text-slate-600 text-[10px] tracking-tighter">
          Developed By Yours Truly • {new Date().getFullYear()}
        </footer>
    </div>
  )
}
