export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-24 pb-12 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="text-3xl font-bold tracking-tight text-white mb-6">N-39 CLASS</div>
          <p className="text-white/50 max-w-sm">
            Next-generation maritime defense platforms engineered for unparalleled speed, precision, and endurance.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Explore</h4>
          <ul className="space-y-4 text-white/50">
            <li><a href="/product" className="hover:text-[var(--color-brand-cyan)] transition-colors">Products</a></li>
            <li><a href="/components" className="hover:text-[var(--color-brand-cyan)] transition-colors">Components</a></li>
            <li><a href="/about" className="hover:text-[var(--color-brand-cyan)] transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-white/50">
            <li><a href="/contact" className="hover:text-[var(--color-brand-cyan)] transition-colors">General Inquiry</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-brand-cyan)] transition-colors">Request Quotation</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/30 text-sm">
        <p>© {new Date().getFullYear()} N-39 Naval Defense. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
