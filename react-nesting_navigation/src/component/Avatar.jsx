import Image from "./Image";
import avatar from "../assets/avatar.jpg"; 

export default function Avatar() {
  return (
    <button>
      <Image src={avatar} alt="User Avatar" />
    </button>
  );
}