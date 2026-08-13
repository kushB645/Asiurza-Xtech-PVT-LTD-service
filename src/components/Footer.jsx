import { Facebook, Linkedin, Mail, Map, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#303030] text-white">
      <div className="mx-auto grid max-w-[1570px] gap-12 px-6 py-20 lg:grid-cols-4 lg:px-20">
        <div>
          <h3 className="text-2xl font-bold">ASIURZA XTECH PVT LTD</h3>
          <p className="mt-7 text-lg leading-8 text-slate-300">
            Asiurza Xtech PVT LTD (AXPL) offers a wide range of products and
            services with high added value in sectors like electrical, solar,
            electric vehicle, water industry or agriculture..
          </p>
          <div className="mt-7 flex gap-2">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <span key={i} className="grid h-10 w-10 place-items-center bg-[#f51b25]">
                <Icon size={19} />
              </span>
            ))}
            <span className="grid h-10 w-10 place-items-center bg-[#f51b25] font-bold">G+</span>
          </div>
        </div>

        <Office title="HEAD OFFICE" phone="+91 832 776 7456" email="Info@axpl.in">
          House No 103, Harsukh Apartment<br />
          Sector 7 Dwarka, New Delhi - 110077
        </Office>

        <Office title="BRANCH OFFICE: ODISHA" phone="+91 811 482 6766" email="sales@axpl.in">
          Plot No SCR 6, Near Prabhuji School<br />
          VSS Nagar, BHUBANESWER - 751007
        </Office>

        <Office title="BRANCH OFFICE : AP" phone="+91 832 776 7456" email="asish@axpl.in">
          PLOT NO 4, NEAR RADHA MADHAV TOYOTA<br />
          PRSADAM PADU, VIJAYAWADA - 521108
        </Office>
      </div>

      <div className="border-t border-white/20 py-6 text-center text-lg text-slate-300">
        © 2020 All Right Reserved. Design & Developed By Atreyasoft
      </div>
    </footer>
  );
}

function Office({ title, phone, email, children }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-7 space-y-5 text-lg text-slate-300">
        <p className="flex gap-3"><Phone size={19} className="mt-1 text-[#f51b25]" /> {phone}</p>
        <p className="flex gap-3"><Mail size={19} className="mt-1 text-[#f51b25]" /> {email}</p>
        <p className="flex gap-3"><Map size={19} className="mt-1 shrink-0 text-[#f51b25]" /> <span>{children}</span></p>
      </div>
    </div>
  );
}