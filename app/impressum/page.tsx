import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Messing Gastronomie GmbH – 32Süd Restaurant, Café & Bar in Gummersbach.',
};

export default function ImpressumPage() {
  return (
    <>
      <div className="h-24 bg-primary" />
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-12">
              Impressum
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none text-primary/80 space-y-8">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="leading-relaxed">
                  <strong className="text-primary">32 SÜD · Café · Restaurant · Bar</strong>
                  <br />
                  Messing Gastronomie GmbH
                  <br />
                  Industriestraße 6
                  <br />
                  51709 Marienheide
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Vertreten durch
                </h2>
                <p>Dipl.-Kfm. Christoph Bois</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Kontakt
                </h2>
                <p>
                  Telefon:{' '}
                  <a href="tel:+492261919693" className="text-highlight hover:underline">
                    02261-919693
                  </a>
                  <br />
                  Fax: 02261-913689
                  <br />
                  E-Mail:{' '}
                  <a href="mailto:info@32sued.de" className="text-highlight hover:underline">
                    info@32sued.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Handelsregister
                </h2>
                <p>
                  HRB 76207
                  <br />
                  Registergericht: Amtsgericht Köln
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: wird auf
                  Anfrage mitgeteilt.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Bildnachweise
                </h2>
                <p>
                  Dietmar Brensing (AVttention)
                  <br />
                  Klaus Stange &amp; Judith Uessem (do it uessem)
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  Haftungsausschluss
                </h2>

                <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary mb-2 mt-6">
                  Haftung für Inhalte
                </h3>
                <p className="leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                  Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                  bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
                  oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary mb-2 mt-6">
                  Haftung für Links
                </h3>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                  zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>

                <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary mb-2 mt-6">
                  Urheberrecht
                </h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                  Gebrauch gestattet.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
