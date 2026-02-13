import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Messing Gastronomie GmbH – 32Süd Restaurant Gummersbach. DSGVO-konform.',
};

export default function DatenschutzPage() {
  return (
    <>
      <div className="h-24 bg-dark" />
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="gold-line mb-6" />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mb-12">Datenschutzerklärung</h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-8 text-gray leading-relaxed">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">1. Verantwortlicher</h2>
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:</p>
                <p><strong className="text-cream">Messing Gastronomie GmbH</strong><br />Industriestraße 6, 51709 Marienheide<br />Vertreten durch: Dipl.-Kfm. Christoph Bois<br />Telefon: 02261-919693<br />E-Mail: info@32sued.de</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">2. Allgemeines zur Datenverarbeitung</h2>
                <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">3. Hosting</h2>
                <p>Diese Website wird bei Vercel Inc. gehostet. Der Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen zu Browser und Betriebssystem.</p>
                <p>Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">4. SSL-/TLS-Verschlüsselung</h2>
                <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">5. Kontaktformular und E-Mail-Kontakt</h2>
                <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
                <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">6. Google Maps</h2>
                <p>Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
                <p>Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">https://policies.google.com/privacy</a></p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">7. Cookies</h2>
                <p>Unsere Website verwendet Cookies. Wir verwenden technisch notwendige Cookies, um unsere Website nutzerfreundlicher zu gestalten. Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für Cookies, die nicht technisch notwendig sind, holen wir Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO ein.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">8. Ihre Rechte als betroffene Person</h2>
                <p>Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray">
                  <li><strong className="text-cream">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-cream">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-cream">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-cream">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-cream">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong className="text-cream">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einlegen.</li>
                  <li><strong className="text-cream">Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen.</li>
                  <li><strong className="text-cream">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie können sich bei einer Aufsichtsbehörde beschweren.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-cream mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
