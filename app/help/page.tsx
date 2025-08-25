export default function HelpPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#ff9800]">
        Help & Information
      </h1>
      <ul className="space-y-4 text-lg">
        <li>
          <a href="/website-terms" className="text-black hover:text-[#ff9800]">
            Website Terms
          </a>
        </li>
        <li>
          <a href="/refunds-returns" className="text-black hover:text-[#ff9800]">
            Refunds & Returns
          </a>
        </li>
        <li>
          <a href="/privacy-policy" className="text-black hover:text-[#ff9800]">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/my-account" className="text-black hover:text-[#ff9800]">
            My Account
          </a>
        </li>
      </ul>
    </div>
  );
}
