export default function Footer() {
  return (
    <footer className="mt-20 mb-10 mx-auto max-w-6xl glass-card p-6 text-sm text-white/90">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} esite. All rights reserved.</p>
        <p className="opacity-80">Liquid Glass UI shell</p>
      </div>
    </footer>
  );
}
