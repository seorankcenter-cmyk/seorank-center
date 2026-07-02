export default function OurServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-10 py-2 text-sm font-semibold text-blue-600">
        Our Services
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
        
          </h2>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">📍</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Local SEO
            </h3>

            <p className="mt-4 text-gray-600">
              Improve your local search rankings and attract more nearby customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🌍</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Google Business Profile
            </h3>

            <p className="mt-4 text-gray-600">
              Optimize your Google Business Profile for maximum visibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🏢</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Citation Building
            </h3>

            <p className="mt-4 text-gray-600">
              Build high-quality citations that strengthen your local authority.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">💻</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Website Development
            </h3>

            <p className="mt-4 text-gray-600">
              Fast, responsive, and SEO-friendly websites built for conversions.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">📈</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Technical SEO
            </h3>

            <p className="mt-4 text-gray-600">
              Fix technical issues that improve website performance and rankings.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">✍️</div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              SEO Content Writing
            </h3>

            <p className="mt-4 text-gray-600">
              High-quality SEO content that attracts visitors and converts them into customers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}