const otherWorks = [
  { name: 'Drip Dessert House', url: 'https://drip-dessert-house-api-server.vercel.app' },
  { name: 'Pavlova Bakery', url: 'https://pavlova-bakery-api-server.vercel.app' },
  { name: 'The Coffee by Hand', url: 'https://the-coffee-by-hand.vercel.app' },
  { name: 'Tao Boba', url: 'https://tao-boba-tao-boba.vercel.app' },
  { name: 'Casa Juliette', url: 'https://casa-juliette.vercel.app' },
  { name: 'Daynight Boba & Ramen', url: 'https://daynight-boba-ramen.vercel.app' },
  { name: '4estea', url: 'https://4estea-4estea-home.vercel.app' },
  { name: 'Pho Sister', url: 'https://pho-sister-pho-sister.vercel.app' },
  { name: 'Mon Petit Choux', url: 'https://mon-petit-choux-api-server.vercel.app' },
  { name: 'Thai Pearl', url: 'https://thai-pearl-kappa.vercel.app' },
  { name: 'Teatery Tea & Tapioca', url: 'https://teatery-tea-tapioca.vercel.app' },
  { name: 'Yokai Musubi', url: 'https://yokai-musubi-api-server.vercel.app' },
];

export default function OtherWorksPage() {
  return (
    <main className="other-works-page" data-testid="page-other-works">
      <header className="other-works-header">
        <a href={`${import.meta.env.BASE_URL}`}>Studio 1801</a>
        <a href={`${import.meta.env.BASE_URL}`}>← Back home</a>
      </header>
      <section className="other-works-content">
        <span className="other-works-kicker">More work</span>
        <h1>See Other Works</h1>
        <p>A few more digital homes for places worth remembering.</p>
        <div className="other-works-list">
          {otherWorks.map((work, index) => (
            <a
              key={work.name}
              href={work.url}
              target="_blank"
              rel="noreferrer"
              className="other-work-link"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{work.name}</strong>
              <em>View site ↗</em>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}