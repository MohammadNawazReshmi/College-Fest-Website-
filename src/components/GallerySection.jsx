import { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

const GALLERY_PHOTOS = [
  { id: 1, category: 'pronite', title: 'EDM Main Stage Night', src: '/fest_hero.jpg', tag: 'Pronite Stage' },
  { id: 2, category: 'tech', title: '24hr Hackathon Coding Hall', src: '/hackathon.jpg', tag: 'Innovation Arena' },
  { id: 3, category: 'cultural', title: 'Cosmic Runway Fashion Show', src: '/fashion.jpg', tag: 'Main Stage' },
  { id: 4, category: 'pronite', title: 'Celebrity DJ Live Performance', src: '/performer.jpg', tag: 'Star Night' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" /> Fest Highlights & Gallery
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            MEMORIES OF <span className="gradient-text-accent">PULSE</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Immerse yourself in moments from high-octane music nights, hackathon sprints, and cultural battles.
          </p>
        </div>

        {/* Filters */}
         <div className="flex justify-center gap-2 mb-12">
          {['all', 'pronite', 'tech', 'cultural'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-white border border-teal-200 text-slate-600 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveImage(photo)}
              className="teal-glass-card rounded-2xl overflow-hidden group cursor-pointer relative h-64 border-teal-200/60 image-shine glow-teal-shadow"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080914] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase mb-1 inline-block">
                    {photo.tag}
                  </span>
                  <h4 className="font-bold text-white text-sm">{photo.title}</h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border-white/20">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="w-full max-h-[75vh] object-cover" />
            <div className="p-6 bg-[#080914]/90 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-cyan-400 font-bold uppercase">{activeImage.tag}</span>
                <h3 className="text-xl font-bold text-white">{activeImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
