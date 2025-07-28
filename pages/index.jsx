import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Siapa Anda dan bagaimana harapan Anda terhadap TMA?</h1>
      <p>
        <Link href="/second">
          <a>Lihat lelucon dari API</a>
        </Link>
      </p>
    </div>
  )
}
