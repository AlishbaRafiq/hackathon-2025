export default function FeatureSection() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Free Delivery */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold">Free Delivery</h3>
          <p className="text-gray-500 text-sm sm:text-base">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold">90 Days Return</h3>
          <p className="text-gray-500 text-sm sm:text-base">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold">Secure Payment</h3>
          <p className="text-gray-500 text-sm sm:text-base">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
