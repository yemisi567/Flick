export default function Overview() {
  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mide Ajibade! ☀️</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-green-600 text-white py-2 px-4 rounded">
            Payments
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded">Data</button>
        </div>
      </header>

      {/* Balances Section */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-4">Your balances</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Nigerian Naira</p>
            <p className="text-3xl font-bold">₦0.00</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">United States Dollar</p>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Kenyan Shilling</p>
            <p className="text-3xl font-bold">K0.00</p>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section>
        <h3 className="text-xl font-bold mb-4">Transactions over time</h3>
        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">
            Analytics not available, proceed with transactions.
          </p>
        </div>
      </section>
    </div>
  );
}
