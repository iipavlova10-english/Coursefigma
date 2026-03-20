import { Plane } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#14b8a6] to-[#0d9488] flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#14b8a6] to-[#f59e0b] bg-clip-text text-transparent">
              Английский для путешествий
            </span>
          </div>
          
          <p className="text-sm text-gray-400 text-center md:text-right">
            © 2026 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
