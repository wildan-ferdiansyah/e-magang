import { CirclePlay, PhoneOutgoing } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BerandaSection() {
  return (
    <section className="min-h-screen flex items-center justify-center" id="beranda">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-sky-800 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Sistem Informasi Magang
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-sm leading-relaxed">
            E-Magang adalah platform digital yang dirancang untuk memfasilitasi
            proses pengelolaan kegiatan magang pada PT. Publika Investa Karya.
            Dengan menggunakan E-Magang, karyawan magang dapat mengelola dan mengatur
            kegiatan magang dengan mudah dan efisien.
          </p>
            <Button size="lg" className="rounded-full text-sm mt-12">
              <Link href="https://wa.me/6285225959650" target="_blank" className="flex items-center gap-2">
                Hubungi Pemilik <PhoneOutgoing className="h-4! w-5!" />
              </Link>
            </Button>
        </div>
        <img src="/hero-logo.png" className="w-full aspect-video bg-accent rounded-xl shadow-xl" />
      </div>
    </section>
  );
}
