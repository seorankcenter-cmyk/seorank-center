export default function Pricing() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Choose the Perfect Plan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Flexible Local SEO packages designed to help businesses of every size
            grow faster on Google.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Basic */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Basic
            </h3>

            <p className="mt-2 text-gray-500">
              Best for Small Businesses
            </p>

            <h2 className="mt-6 text-5xl font-extrabold text-blue-600">
              $199
            </h2>

            <p className="mt-2 text-gray-500">
              / Month
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Google Business Profile</li>
              <li>✔ Local SEO Optimization</li>
              <li>✔ Monthly Report</li>
              <li>✔ Email Support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Standard */}
          <div className="rounded-3xl border-2 border-blue-600 bg-blue-50 p-8 shadow-2xl">

            <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
              Most Popular
            </span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Standard
            </h3>

            <p className="mt-2 text-gray-500">
              Best Value
            </p>

            <h2 className="mt-6 text-5xl font-extrabold text-blue-600">
              $399
            </h2>

            <p className="mt-2 text-gray-500">
              / Month
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Everything in Basic</li>
              <li>✔ Citation Building</li>
              <li>✔ On-Page SEO</li>
              <li>✔ Priority Support</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Get Started
            </button>

          </div>

          {/* Premium */}
          <div className="rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-gray-900">
              Premium
            </h3>

            <p className="mt-2 text-gray-500">
              Complete SEO Solution
            </p>

            <h2 className="mt-6 text-5xl font-extrabold text-blue-600">
              $699
            </h2>

            <p className="mt-2 text-gray-500">
              / Month
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✔ Everything in Standard</li>
              <li>✔ Technical SEO</li>
              <li>✔ Content Strategy</li>
              <li>✔ Dedicated Manager</li>
            </ul>

            <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
              Get Started
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}