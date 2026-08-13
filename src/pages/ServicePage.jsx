import { useParams, useNavigate, NavLink, Link } from "react-router-dom";

import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";

import { services } from "../data/services";

function ServiceSidebar() {
  return (
    <aside className="space-y-10">
      {/* All Services */}
      <div className="bg-white p-5">
        <div className="bg-[#f51b25] px-8 py-5">
          <h3 className="text-xl font-bold text-white">All services</h3>
        </div>

        <div className="mt-2">
          {services.map((service) => (
            <NavLink
              key={service.slug}
              to={`/services/${service.slug}`}
              className={({ isActive }) =>
                `block border-b border-gray-100 px-5 py-5 text-lg transition ${
                  isActive
                    ? "font-bold text-[#f51b25]"
                    : "text-[#111827] hover:text-[#f51b25]"
                }`
              }
            >
              {service.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-5">
        <div className="bg-[#f51b25] px-8 py-5">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
        </div>

        <div className="mt-2">
          {[
            ["About Us", "/about"],
            ["Products", "/products"],
            ["Portfolio", "/portfolio"],
            ["Career", "/career"],
            ["Contact", "/contact"],
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((item) => item.slug === slug) || services[0];

  const index = services.findIndex((item) => item.slug === service.slug);

  const next = services[(index + 1) % services.length];

  const previous = services[(index - 1 + services.length) % services.length];

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#c90000] py-14 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {service.title}
        </h1>
      </section>

      {/* Main Area */}
      <main className="mx-auto max-w-[1570px] px-6 py-12 lg:px-20 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-[#f51b25]">
            Home
          </Link>

          <span>/</span>

          <span>Services</span>

          <span>/</span>

          <span className="font-semibold text-[#24384d]">{service.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2.1fr_1fr]">
          {/* LEFT CONTENT */}
          <article className="bg-white p-5 shadow-sm md:p-6">
            {/* Service Image */}
            <div className="group relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[430px]"
              />

              {/* Previous */}
              <button
                onClick={() => navigate(`/services/${previous.slug}`)}
                aria-label={`Previous service: ${previous.title}`}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-4 text-white transition hover:bg-[#d9151e] md:p-5"
              >
                <ArrowLeft size={26} />
              </button>

              {/* Next */}
              <button
                onClick={() => navigate(`/services/${next.slug}`)}
                aria-label={`Next service: ${next.title}`}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-4 text-white transition hover:bg-[#d9151e] md:p-5"
              >
                <ArrowRight size={26} />
              </button>
            </div>

            {/* Service Title */}
            <div className="py-8">
              <h2 className="text-3xl font-bold uppercase text-[#24384d] md:text-4xl">
                {service.title}
              </h2>

              {/* Overview */}
              {service.overview && (
                <div className="mt-7 border-l-4 border-[#f51b25] bg-slate-50 p-5">
                  <p className="text-lg leading-8 text-slate-600">
                    {service.overview}
                  </p>
                </div>
              )}

              {/* Description */}
              <div className="mt-8 space-y-7 text-lg leading-8 text-slate-600">
                {service.paragraphs.map((paragraph, i) => {
                  const isHighlightedHeading =
                    (service.slug === "automation-water-system" && i === 1) ||
                    (service.slug === "electrical-vehicle" && i === 1);

                  const isBullet =
                    (service.slug === "automation-water-system" && i >= 2) ||
                    (service.slug === "electrical-vehicle" && i >= 2);

                  return (
                    <p
                      key={i}
                      className={
                        isHighlightedHeading
                          ? "text-2xl font-bold leading-9 text-[#f51b25]"
                          : ""
                      }
                    >
                      {isBullet ? `• ${paragraph}` : paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Key Benefits */}
            {service.benefits && (
              <section className="border-t border-gray-200 pt-10">
                <h3 className="text-2xl font-bold uppercase text-[#24384d] md:text-3xl">
                  Key Benefits
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border border-gray-200 p-5 transition hover:border-[#f51b25] hover:shadow-md"
                    >
                      <CheckCircle
                        size={22}
                        className="mt-1 shrink-0 text-[#f51b25]"
                      />

                      <p className="text-base leading-7 text-slate-600">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Service Counter */}
            <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
              <span className="text-sm font-semibold text-slate-500">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>

              <span className="text-sm text-slate-500">Service</span>
            </div>

            {/* Contact CTA */}
            <section className="mt-10 bg-[#f51b25] p-7 md:p-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    Need a solution for your project?
                  </h3>

                  <p className="mt-2 text-white/90">
                    Get in touch with our team to discuss your requirements.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-2 bg-white px-7 py-4 font-semibold text-[#f51b25] transition hover:bg-gray-100"
                >
                  <Phone size={19} />
                  Contact Us
                </Link>
              </div>
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <ServiceSidebar />
        </div>
      </main>
    </>
  );
}
