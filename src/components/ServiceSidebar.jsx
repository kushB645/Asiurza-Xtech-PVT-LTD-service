import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceSidebar() {
  return (
    <aside className="space-y-10">
      <div className="bg-white p-5">
        <div className="bg-[#f51b25] px-8 py-5 text-xl font-bold text-white">
          All services
        </div>

        <div>
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="block px-5 py-6 text-lg font-medium text-[#101010] hover:text-[#f51b25]"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white p-5">
        <div className="bg-[#f51b25] px-8 py-5 text-xl font-bold text-white">
          Quick Links
        </div>

        <div>
          {["About Us", "Products", "Portfolio", "career", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-5 py-6 text-lg font-medium text-[#101010] hover:text-[#f51b25]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}