export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-blue-100">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 text-center">

        {/* Badge */}
        <span className="inline-block rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          We've Helped 1200+ Digital Marketing Agencies Scale Their Business With Our SEO Services
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-5xl">
          <span className="text-gray-800">
            SCALE YOUR LOCAL AGENCY
          </span>

          <br />

          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            WITH OUR SEO SERVICES
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-700">
          We help local businesses rank higher on Google, generate more leads,
          and build high-converting websites that grow your business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <button className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">
            Get Free SEO Audit
          </button>

          <button className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">
            Our Services
          </button>

        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl border bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
            <p className="mt-2 text-gray-600">Client</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-blue-600">1200+</h3>
            <p className="mt-2 text-gray-600">Agencies</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-blue-600">6+</h3>
            <p className="mt-2 text-gray-600">YEARS OF EXPERIENCE</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="mt-2 text-gray-600">Support</p>
          </div>

        </div>

        {/* Trust Items */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-base font-semibold text-gray-600">
          <span>⭐ GOOGLE BUSINESS PROFILE</span>
          <span>📍 LOCAL SEO SERVICES</span>
          <span>🌍 AUTHORITY LINK BUILDING</span>
          <span>💻 ORGANIC SEO</span>
        </div>

      </div>
              {/* 100% SATISFACTION GUARANTEE */}
        <div className="mt-24 rounded-3xl border border-green-200 bg-gradient-to-r from-green-50 via-white to-blue-50 p-10 shadow-2xl">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
              🛡️ Risk-Free Guarantee
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              100% SATISFACTION GUARANTEE
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              If you're not completely satisfied with the service we've done for you, just let us know and we'll make it right or send you a full refund. It's up to you.
              <span className="font-bold text-blue-600">
                {" "}100% SATISFACTION GUARANTEE.
              </span>
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-5xl">💯</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Money-Back Guarantee
                </h3>
                <p className="mt-2 text-gray-600">
                  Your satisfaction is our priority. If we fail to deliver the agreed SEO services, you are protected with our 100% Money Back Guarantee.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-5xl">🚀</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Proven Results
                </h3>
                <p className="mt-2 text-gray-600">
                  We use proven SEO strategies that help improve rankings, drive more traffic, and generate quality leads for your business.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-5xl">🤝</div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Trusted Support
                </h3>
                <p className="mt-2 text-gray-600">
                  Handing off your client work to just anyone can be risky! See our references and results to learn more about why we're the #1 place trust to get their client work done.
                </p>
              </div>

            </div>

          </div>

        </div>
    </section>
  );
}