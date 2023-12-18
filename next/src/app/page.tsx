import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/one">one</Link>
      </div>
      <div>
        <Link href="/two">two</Link>
      </div>
      <div>
        <Link href="/three">three</Link>
      </div>
      <div>
        <Link href="/four">four</Link>
      </div>
      <div>
        <Link href="/five">five</Link>
      </div>
    </div>
  );
}
