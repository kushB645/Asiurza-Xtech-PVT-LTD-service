import { Clock3, Mail, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const nav = [
  ["HOME", "/"],
  ["ABOUT US", "/about"],
  ["SERVICES", "/services/solar-cold-storages"],
  ["PRODUCTS", "/products"],
  ["UPDATES", "/updates"],
  ["CAREER", "/career"],
  ["CONTACT", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex max-w-[1570px] items-center justify-between gap-8 px-6 py-6 lg:px-20">
          <Link to="/" className="shrink-0">
            <div className="text-[34px] font-bold leading-none tracking-tight text-[#0b0b58] sm:text-[42px]">
              Asiurza <span className="text-[#ed1c24]">X</span>tech <span className="text-[#ed1c24]">PVT LTD</span>
            </div>
          </Link>

          <div className="hidden items-center gap-10 xl:flex">
            <Contact icon={<Mail />} title="Email address" value="info@axpl.in" />
            <Contact icon={<Phone />} title="Phone" value="+91-83277-67456" />
            <Contact icon={<Clock3 />} title="Phone" value="+91 8114826766" />
          </div>

          <button className="xl:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <nav className="bg-[#080853]">
        <div className="mx-auto flex max-w-[1570px] items-center px-6 lg:px-20">
          <div className="hidden items-stretch lg:flex">
            {nav.map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className={`px-5 py-7 text-[17px] font-bold text-white transition hover:bg-[#f51b25] ${label === "SERVICES" ? "bg-[#f51b25]" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {open && (
          <div className="space-y-1 px-6 pb-5 lg:hidden">
            {nav.map(([label, path]) => (
              <Link
                key={label}
                to={path}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 font-bold text-white hover:bg-[#f51b25]"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function Contact({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[#ed1c24]">{icon}</span>
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-1 text-lg text-slate-600">{value}</div>
      </div>
    </div>
  );
}