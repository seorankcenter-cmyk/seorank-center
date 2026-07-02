import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4 md:grid-cols-4">

          {/* Company */}
          <div>
            <Image
              src="/seorank-logo.png"
              alt="SEOrank Center"
              width={220}
              height={80}
              className="mb-4 h-30 w-auto"
            />

            <p className="leading-7 text-gray-400">
              SEOrank Center helps local businesses grow with
              professional Local SEO, Google Business Profile
              optimization, Citation Building and Website Development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#">Our Services
                </Link>
              </li>

              <li>
                <Link href="#">Order Dashboard</Link>
              </li>

              <li>
                <Link href="#">Free SEO Audit</Link>
              </li>
                
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                Email: seorankcenter@gmail.com
              </p>

              <p>
                Phone: +8801783874824
              </p>

              <p>
                Address: Uttara Sector 13, Dhaka, Bangladesh, 1230
              </p>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Follow Us
            </h3>

            <div className="space-y-4">

              <a
                href="https://facebook.com/seorankcenter"
                target="_blank"
                className="block rounded-xl bg-gray-800 px-5 py-3 transition hover:bg-blue-600"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com/seorankcenter"
                target="_blank"
                className="block rounded-xl bg-gray-800 px-5 py-3 transition hover:bg-pink-600"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/in/seorankcenter"
                target="_blank"
                className="block rounded-xl bg-gray-800 px-5 py-3 transition hover:bg-blue-700"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        <div className="my-10 border-t border-gray-700"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-gray-400 md:flex-row">

          <p>
            © 2026 SEOrank Center. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}