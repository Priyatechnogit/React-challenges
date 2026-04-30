import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage(animals) {
  return (
    <>
      <CounterStats animals={animals}/>

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
