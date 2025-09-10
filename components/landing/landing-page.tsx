import { NavbarUser } from "../layouts/navbar/navbar-user";
import BerandaSection from "../sections/beranda-section";

export default function LandingPage() {
  return (
    <>
      <NavbarUser />
      <main>
        <BerandaSection />
      </main>
    </>
  )
}