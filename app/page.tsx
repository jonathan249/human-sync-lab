import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 px-4 lg:px-0 mx-auto space-y-10 max-w-xl">
      <div>
        <h1 className="font-semibold text-xl">Human Sync Lab</h1>
        <p>A playground for human-AI interaction experiments.</p>
      </div>

      <div>
        <p>This project is a work in progress. The idea behind this project is to explore ways on linking personal health data (provided via Garmin Health API) with AI to create meaningful insights and interactions.</p>
      </div>

      <Link href="/privacy-draft" className="transition-all hover:underline active:underline underline-offset-2">View Privacy Statement Draft</Link>
    </div>
  )
}