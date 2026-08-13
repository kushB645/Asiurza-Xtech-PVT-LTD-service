import { useParams, useNavigate, NavLink, Link } from "react-router-dom";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ServiceSidebar() {
  return (
    <aside className="space-y-10">

      {/* All Services */}
      <div className="bg-white p-5">
        <div className="bg-[#f51b25] px-8 py-5">
          <h3 className="text-xl font-bold text-white">
            All services
          </h3>
        </div>

        <div className="mt-2">
          {services.map((service) => (
            <NavLink
              key={service.slug}
              to={`/services/${service.slug}`}
              className={({ isActive }) =>
                `block px-5 py-5 text-lg transition ${
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
          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>
        </div>

        <div className="mt-2">
          <Link
            to="/about"
            className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
          >
            About Us
          </Link>

          <Link
            to="/products"
            className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
          >
            Products
          </Link>

          <Link
            to="/portfolio"
            className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
          >
            Portfolio
          </Link>

          <Link
            to="/career"
            className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
          >
            Career
          </Link>

          <Link
            to="/contact"
            className="block px-5 py-5 text-lg text-[#111827] transition hover:text-[#f51b25]"
          >
            Contact
          </Link>
        </div>
      </div>

    </aside>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service =
    services.find((item) => item.slug === slug) || services[0];

  const index = services.findIndex(
    (item) => item.slug === service.slug
  );

  const next = services[(index + 1) % services.length];

  const previous =
    services[(index - 1 + services.length) % services.length];

  return (
    <>
      {/* Page Title */}
      <section className="bg-[#c90000] py-14 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {service.title}
        </h1>
      </section>

      {/* Main Content */}
      <main className="mx-auto grid max-w-[1570px] gap-10 px-6 py-28 lg:grid-cols-[2.1fr_1fr] lg:px-20">

        {/* Service Content */}
        <article className="bg-white p-5 md:p-6">

          {/* Service Image */}
          <div className="relative overflow-hidden">

            <img
              src={service.image}
              alt={service.title}
              className="h-[430px] w-full object-cover"
            />

            {/* Previous Button */}
            <button
              onClick={() =>
                navigate(`/services/${previous.slug}`)
              }
              aria-label={`Previous service: ${previous.title}`}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-5 text-white transition hover:bg-[#d9151e]"
            >
              <ArrowLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                navigate(`/services/${next.slug}`)
              }
              aria-label={`Next service: ${next.title}`}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-5 text-white transition hover:bg-[#d9151e]"
            >
              <ArrowRight size={28} />
            </button>

          </div>

          {/* Service Text */}
          <div className="px-1 py-7">

            <h2 className="text-3xl font-bold uppercase text-[#24384d] md:text-4xl">
              {service.title}
            </h2>

            <div className="mt-7 space-y-7 text-lg leading-8 text-slate-600">

              {service.paragraphs.map((paragraph, i) => {

                const isHighlightedHeading =
                  (service.slug === "automation-water-system" &&
                    i === 1) ||
                  (service.slug === "electrical-vehicle" &&
                    i === 1);

                const isBullet =
                  (service.slug === "automation-water-system" &&
                    i >= 2) ||
                  (service.slug === "electrical-vehicle" &&
                    i >= 2);

                return (
                  <p
                    key={i}
                    className={
                      isHighlightedHeading
                        ? "text-2xl font-bold text-[#f51b25]"
                        : ""
                    }
                  >
                    {isBullet ? `• ${paragraph}` : paragraph}
                  </p>
                );
              })}

            </div>
          </div>

        </article>

        {/* Sidebar */}
        <ServiceSidebar />

      </main>
    </>
  );
}