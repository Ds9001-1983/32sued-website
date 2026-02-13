import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Messing Gastronomie GmbH – 32Süd Restaurant Gummersbach. DSGVO-konform.',
};

export default function DatenschutzPage() {
  return (
    <>
      <div className="h-24 bg-primary" />
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-primary mb-12">
              Datenschutzerklärung
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg max-w-none text-primary/80 space-y-8">
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  1. Verantwortlicher
                </h2>
                <p className="leading-relaxed">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
                  nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen
                  ist:
                </p>
                <p className="leading-relaxed">
                  <strong className="text-primary">Messing Gastronomie GmbH</strong>
                  <br />
                  Industriestraße 6, 51709 Marienheide
                  <br />
                  Vertreten durch: Dipl.-Kfm. Christoph Bois
                  <br />
                  Telefon: 02261-919693
                  <br />
                  E-Mail: info@32sued.de
                </p>
              </div>

              {/* 2. Allgemeines zur Datenverarbeitung */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                <p className="leading-relaxed">
                  Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
                  dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
                  Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer
                  Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt
                  in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus
                  tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch
                  gesetzliche Vorschriften gestattet ist.
                </p>
              </div>

              {/* 3. Hosting */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  3. Hosting
                </h2>
                <p className="leading-relaxed">
                  Diese Website wird bei Vercel Inc. gehostet. Der Hoster erhebt in sog. Logfiles
                  folgende Daten, die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher
                  besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage,
                  Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode,
                  übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen
                  zu Browser und Betriebssystem.
                </p>
                <p className="leading-relaxed">
                  Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und
                  Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im
                  Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                </p>
              </div>

              {/* 4. SSL-Verschlüsselung */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  4. SSL-/TLS-Verschlüsselung
                </h2>
                <p className="leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem
                  Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung
                  aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
                  mitgelesen werden.
                </p>
              </div>

              {/* 5. Kontaktformular */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  5. Kontaktformular und E-Mail-Kontakt
                </h2>
                <p className="leading-relaxed">
                  Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden
                  Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                  Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                  bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                  DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
                  zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                  Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                  effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                  DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
                <p className="leading-relaxed">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
                  uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                  der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
                  insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>

              {/* 6. Google Maps */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  6. Google Maps
                </h2>
                <p className="leading-relaxed">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
                  Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="leading-relaxed">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
                  speichern. Diese Informationen werden in der Regel an einen Server von Google in
                  den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen
                  Einfluss auf diese Datenübertragung.
                </p>
                <p className="leading-relaxed">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
                  unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
                  Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
                  Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p className="leading-relaxed">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
                  Datenschutzerklärung von Google:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:underline"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              {/* 7. Cookies */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  7. Cookies
                </h2>
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die
                  im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers
                  gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem
                  Betriebssystem des Nutzers gespeichert werden.
                </p>
                <p className="leading-relaxed">
                  Wir verwenden technisch notwendige Cookies, um unsere Website nutzerfreundlicher
                  zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der
                  aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.
                </p>
                <p className="leading-relaxed">
                  Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung
                  technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für Cookies, die
                  nicht technisch notwendig sind, holen wir Ihre Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO ein.
                </p>
              </div>

              {/* 8. Betroffenenrechte */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  8. Ihre Rechte als betroffene Person
                </h2>
                <p className="leading-relaxed">
                  Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d.
                  DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-primary">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie
                    können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                    verlangen.
                  </li>
                  <li>
                    <strong className="text-primary">Recht auf Berichtigung (Art. 16 DSGVO):</strong>{' '}
                    Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns
                    gespeicherten personenbezogenen Daten verlangen.
                  </li>
                  <li>
                    <strong className="text-primary">Recht auf Löschung (Art. 17 DSGVO):</strong>{' '}
                    Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten
                    verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie
                    Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung
                    oder aus Gründen des öffentlichen Interesses erforderlich ist.
                  </li>
                  <li>
                    <strong className="text-primary">
                      Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
                    </strong>{' '}
                    Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                    verlangen.
                  </li>
                  <li>
                    <strong className="text-primary">
                      Recht auf Datenübertragbarkeit (Art. 20 DSGVO):
                    </strong>{' '}
                    Sie können verlangen, die Sie betreffenden personenbezogenen Daten in einem
                    strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                  </li>
                  <li>
                    <strong className="text-primary">Widerspruchsrecht (Art. 21 DSGVO):</strong>{' '}
                    Sie können jederzeit gegen die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten Widerspruch einlegen.
                  </li>
                  <li>
                    <strong className="text-primary">
                      Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):
                    </strong>{' '}
                    Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen.
                  </li>
                  <li>
                    <strong className="text-primary">
                      Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):
                    </strong>{' '}
                    Sie können sich bei einer Aufsichtsbehörde beschweren, wenn Sie der Ansicht
                    sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                    die DSGVO verstößt.
                  </li>
                </ul>
              </div>

              {/* 9. Aktualität */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary mb-4">
                  9. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch
                  die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
                  geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
                  werden, diese Datenschutzerklärung zu ändern.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
