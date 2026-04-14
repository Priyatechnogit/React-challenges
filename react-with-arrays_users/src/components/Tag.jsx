import "./Tag.css";

export default function Tag({ tag }) {
  // 
  const ClassName = tag === "admin" ? "tag tag--highlight" : "tag";
  return <li className={ClassName}>{tag}</li>;
}
