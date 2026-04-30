export default function Footer({animals}) {
  const dragonCount = animals?.find((a) => a.name === "Dragons")?.count || 0;
  return (
    <span>
      Counting since 1899 — Currently there are <strong>{dragonCount}</strong>{" "}
      dragons.
    </span>
  );
}
