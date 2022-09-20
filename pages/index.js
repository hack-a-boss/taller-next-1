import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (counter === 5) {
      //navegamos a la página de fotos
      router.push("/photos");
    }
  }, [counter, router]);

  return (
    <>
      <SEO title="Portada" description="Bienvenidas a mi web" />
      <h1>Ola amigas!</h1>
      <p>Aumenta el contador hasta 5 para ir a la página de fotos</p>
      <p>Valor actual: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aumentar contador</button>
    </>
  );
}
