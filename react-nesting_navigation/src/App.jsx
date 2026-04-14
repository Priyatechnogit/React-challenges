import "./styles.css";

import Logo from "./img/logo.jpg";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Link from "./component/Link";
import Avatar from "./component/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
