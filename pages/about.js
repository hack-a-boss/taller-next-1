import Link from "next/link";
import SEO from "../components/SEO";

export default function About() {
  return (
    <section className="about">
      <SEO title="Sobre mi" />

      <h1>About</h1>
      <p>Esta es la página de about</p>
      <Link href="/">Volver a la portada</Link>
    </section>
  );
}
