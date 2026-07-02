export default function OurProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Our Simple 4-Step SEO Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We follow a proven process that helps your business achieve higher
            rankings, more traffic, and more customers.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              1
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Free Audit
            </h3>

            <p className="mt-3 text-gray-600">
              We analyze your website and identify SEO opportunities.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              2
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Strategy
            </h3>

            <p className="mt-3 text-gray-600">
              We create a customized Local SEO strategy for your business.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              3
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Optimization
            </h3>

            <p className="mt-3 text-gray-600">
              We optimize your website and Google Business Profile.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
              4
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Growth
            </h3>

            <p className="mt-3 text-gray-600">
              Watch your rankings, traffic, and leads continue to grow.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}