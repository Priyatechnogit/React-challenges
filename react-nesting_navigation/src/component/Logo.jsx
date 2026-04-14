import Image from "./Image";
import logo from "../assets/logo.jpg";

export default function Logo() {
  return (
    <a href="#home">
      <Image src={logo} alt="Logo" />
    </a>
  );
}