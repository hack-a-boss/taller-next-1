import Link from "next/link";
import SEO from "../../components/SEO";

export default function Photos() {
  return (
    <>
      <SEO title="Mis Fotos" />

      <ul>
        <li>
          <Link href="/photos/view/drone">Foto de un dron</Link>
        </li>
        <li>
          <Link href="/photos/view/grass">Foto de un prado</Link>
        </li>
        <li>
          <Link href="/photos/view/laptop">Foto de mi portátil</Link>
        </li>
      </ul>
    </>
  );
}
