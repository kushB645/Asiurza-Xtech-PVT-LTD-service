import { useParams } from "react-router-dom";
import ServiceSidebar from "../components/ServiceSidebar";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  const previous = services[(index - 1 + services.length) % services.length];

  return (
    <>
      <section className="bg-[#c90000] py-14 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">{service.title}</h1>
      </section>

      <main className="mx-auto grid max-w-[1570px] gap-10 px-6 py-28 lg:grid-cols-[2.1fr_1fr] lg:px-20">
        <article className="bg-white p-5 md:p-6">
          <div className="relative overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-[430px] w-full object-cover"
            />

            <button
              onClick={() => window.location.href = `/services/${previous.slug}`}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-5 text-white"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => window.location.href = `/services/${next.slug}`}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#f51b25] p-5 text-white"
            >
              <ArrowRight />
            </button>
          </div>

          <div className="px-1 py-7">
            <h2 className="text-3xl font-bold uppercase text-[#24384d] md:text-4xl">
              {service.title}
            </h2>

            <div className="mt-7 space-y-7 text-lg leading-8 text-slate-600">
              {service.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    service.slug === "automation-water-system" && i === 1
                      ? "text-2xl font-bold text-[#f51b25]"
                      : service.slug === "electrical-vehicle" && i === 1
                        ? "text-2xl font-bold text-[#f51b25]"
                        : ""
                  }
                >
                  {(service.slug === "automation-water-system" && i >= 2) ||
                  (service.slug === "electrical-vehicle" && i >= 2)
                    ? `• ${paragraph}`
                    : paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        <ServiceSidebar />
      </main>
    </>
  );
}