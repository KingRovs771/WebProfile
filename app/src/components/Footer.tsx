import Link from 'next/link';

const Footer = () => (
  <footer className="py-8 border-t border-white/[0.08] bg-[#09090b]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
      <div className="flex items-center gap-3">
        <span className="text-zinc-300 font-semibold">KINGROVS // RIZKY BUDIARTO</span>
        <span>·</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/edukabyte" className="hover:text-zinc-200 transition-colors">
          EDUKABYTE SUITE
        </Link>
        <a href="mailto:rovsgame771@gmail.com" className="hover:text-zinc-200 transition-colors">
          rovsgame771@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
