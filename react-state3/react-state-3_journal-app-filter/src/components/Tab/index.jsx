import "./Tab.css";

export default function Tab({ children, isActive , onclick}) {
  return (
    <button className={`tab${isActive ? " tab--active" : ""}`} onClick={onclick}>
      {children}
    </button>
  );
}
