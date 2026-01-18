import { Link } from "react-router";
import Header from "../components/Header.jsx";

function OrdersPage() {
  return (
    <>
      <title>Orders</title>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Header />

        <main className="pt-[100px] max-w-[1000px] mx-auto px-6 pb-20">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Your Orders
            </h1>
            <div className="text-gray-500 text-sm">
              <span className="font-medium text-gray-900">2</span> orders placed
            </div>
          </div>

          {/* ORDER LIST CONTAINER */}
          <div className="space-y-8">
            {/* --- ORDER #1 --- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Order Header (Gray Strip) */}
              <div className="bg-gray-50 p-6 border-b border-gray-200 flex flex-wrap gap-y-4 justify-between items-center text-sm">
                <div className="flex gap-x-8">
                  <div>
                    <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                      Order Placed
                    </div>
                    <div className="font-bold text-gray-900">August 12</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                      Total
                    </div>
                    <div className="font-bold text-gray-900">$35.06</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    Order ID
                  </div>
                  <div className="font-mono text-gray-600">
                    27cba69d-4c3d-4098-b42d-ac7fa62b7664
                  </div>
                </div>
              </div>

              {/* Order Body (Product List) */}
              <div className="p-6 space-y-8">
                {/* Product 1 */}
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-6 items-center">
                  {/* Image */}
                  <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <img
                      className="max-h-full max-w-full object-contain p-2 mix-blend-multiply"
                      src="/images/products/athletic-cotton-socks-6-pairs.jpg"
                      alt="Socks"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Black and Gray Athletic Cotton Socks - 6 Pairs
                    </h3>
                    <div className="text-gray-600 text-sm mb-4">
                      Arriving on:{" "}
                      <span className="font-bold text-green-700">
                        August 15
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-medium text-gray-900">1</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4 text-sm font-bold transition shadow-sm active:scale-95">
                      <img
                        className="h-4 w-4 mr-2 invert brightness-0"
                        src="/images/icons/buy-again.png"
                        alt="Buy again"
                      />
                      Buy it again
                    </button>

                    {/* CHANGED: <button> -> <Link> */}
                    <Link
                      to="/tracking"
                      className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full py-2 px-4 text-sm font-medium transition active:scale-95 flex items-center justify-center"
                    >
                      Track package
                    </Link>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Product 2 */}
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-6 items-center">
                  <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <img
                      className="max-h-full max-w-full object-contain p-2 mix-blend-multiply"
                      src="/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
                      alt="Shirt"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Adults Plain Cotton T-Shirt - 2 Pack
                    </h3>
                    <div className="text-gray-600 text-sm mb-4">
                      Arriving on:{" "}
                      <span className="font-bold text-green-700">
                        August 19
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-medium text-gray-900">2</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4 text-sm font-bold transition shadow-sm active:scale-95">
                      <img
                        className="h-4 w-4 mr-2 invert brightness-0"
                        src="/images/icons/buy-again.png"
                        alt="Buy again"
                      />
                      Buy it again
                    </button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full py-2 px-4 text-sm font-medium transition active:scale-95">
                      Track package
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ORDER #2 --- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-200 flex flex-wrap gap-y-4 justify-between items-center text-sm">
                <div className="flex gap-x-8">
                  <div>
                    <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                      Order Placed
                    </div>
                    <div className="font-bold text-gray-900">June 10</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                      Total
                    </div>
                    <div className="font-bold text-gray-900">$41.90</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-gray-500 uppercase text-xs tracking-wide mb-1">
                    Order ID
                  </div>
                  <div className="font-mono text-gray-600">
                    b6b6c212-d30e-4d4a-805d-90b52ce6b37d
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_200px] gap-6 items-center">
                  <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <img
                      className="max-h-full max-w-full object-contain p-2 mix-blend-multiply"
                      src="/images/products/intermediate-composite-basketball.jpg"
                      alt="Basketball"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Intermediate Size Basketball
                    </h3>
                    <div className="text-gray-600 text-sm mb-4">
                      Arriving on:{" "}
                      <span className="font-bold text-green-700">June 17</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-medium text-gray-900">2</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-2 px-4 text-sm font-bold transition shadow-sm active:scale-95">
                      <img
                        className="h-4 w-4 mr-2 invert brightness-0"
                        src="/images/icons/buy-again.png"
                        alt="Buy again"
                      />
                      Buy it again
                    </button>
                    <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full py-2 px-4 text-sm font-medium transition active:scale-95">
                      Track package
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default OrdersPage;
