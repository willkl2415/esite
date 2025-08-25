export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Help & Information
      </h1>

      <ul className="space-y-4 text-lg text-gray-800">
        <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
        <li><a href="/shop" className="hover:text-orange-500">Shop</a></li>
        <li><a href="/terms" className="hover:text-orange-500">Website Terms</a></li>
        <li><a href="/refunds" className="hover:text-orange-500">Refunds & Returns</a></li>
        <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
        <li><a href="/account" className="hover:text-orange-500">My Account</a></li>
      </ul>
    </div>
  );
}
