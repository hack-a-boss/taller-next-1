import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <main>
      <hr />
      {children}
      <hr />
      <footer>(c) 2022 - Berto Yáñez</footer>
    </main>
  );
}
