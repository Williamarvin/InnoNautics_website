export default function Footer() {
  return (
    <footer className="!bg-slate-800 !text-white py-6 border-t border-slate-600" style={{backgroundColor: '#1e293b', color: '#ffffff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo2.png" alt="InnoNautics Logo" className="h-8 w-auto filter brightness-0 invert" />
            <span className="font-heading font-semibold text-xl text-white">InnoNautics</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="!text-slate-300" style={{color: '#cbd5e1'}}>HKSTP</span>
            <span className="!text-slate-300" style={{color: '#cbd5e1'}}>|</span>
            <span className="!text-slate-300" style={{color: '#cbd5e1'}}>Phone: +852 5146 2113</span>
            <span className="!text-slate-300" style={{color: '#cbd5e1'}}>|</span>
            <a 
              href="mailto:innonauticshk@gmail.com" 
              className="!text-cyan-400 hover:!text-white transition-colors"
              style={{color: '#22d3ee'}}
            >
              innonauticshk@gmail.com
            </a>
            <span className="!text-slate-300" style={{color: '#cbd5e1'}}>|</span>
            <a 
              href="https://www.canva.com/design/DAGodmh0eTc/N9tGS0BOPiVPCI5_7vwQ6w/edit?utm_content=DAGodmh0eTc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
              target="_blank"
              rel="noopener noreferrer"
              className="!text-cyan-400 hover:!text-white transition-colors"
              style={{color: '#22d3ee'}}
            >
              Company Pitch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a href="#" className="!text-slate-300 hover:!text-cyan-400 transition-colors" style={{color: '#cbd5e1'}}>
              <i className="fab fa-google-plus text-lg"></i>
            </a>
            <a href="#" className="!text-slate-300 hover:!text-cyan-400 transition-colors" style={{color: '#cbd5e1'}}>
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a href="#" className="!text-slate-300 hover:!text-cyan-400 transition-colors" style={{color: '#cbd5e1'}}>
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a href="#" className="!text-slate-300 hover:!text-cyan-400 transition-colors" style={{color: '#cbd5e1'}}>
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" className="!text-slate-300 hover:!text-cyan-400 transition-colors" style={{color: '#cbd5e1'}}>
              <i className="fab fa-pinterest text-lg"></i>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-left text-sm !text-slate-400" style={{color: '#94a3b8'}}>
          Copyright@2025 | InnoNautics Limited
        </div>
      </div>
    </footer>
  );
}
