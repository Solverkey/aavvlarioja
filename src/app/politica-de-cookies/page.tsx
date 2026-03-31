export const metadata = {
  title: "Política de Cookies | Federación de AAVV de La Rioja",
  description: "Política de cookies de la Federación de Asociaciones Vecinales de La Rioja.",
};

export default function PoliticaCookies() {
  return (
    <>
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-warm rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Política de Cookies</h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-text-muted">
          <p>
            Conforme a lo ordenado por el artículo 22.2 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, te informa de que este sitio web utiliza cookies propias y de terceros.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">¿Qué es una cookie?</h2>
          <p>
            Las cookies son archivos que se descargan en tu dispositivo mientras navegas y que tienen diversas finalidades, entre otras, reconocerte como usuario, obtener información sobre preferencias y hábitos de navegación, o personalizar la forma en que se muestra el contenido del sitio web.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">¿Qué tipos de cookies utiliza esta web?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text-dark">Cookies de análisis:</strong> permiten realizar mediciones y estadísticas del uso que hacen quienes navegan en nuestra web.</li>
            <li><strong className="text-text-dark">Cookies técnicas:</strong> nos permiten por ejemplo reconocerte como usuario o comprobar la aceptación de las cookies.</li>
          </ul>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">¿Quién utiliza las cookies de esta web?</h2>

          <h3 className="text-lg font-semibold text-text-dark mt-6 mb-3">Cookies de terceros</h3>
          <p>
            <strong className="text-text-dark">Google Analytics</strong>, cookies de análisis de la compañía Google Inc. Utilizamos estas cookies con finalidad estadística y de análisis de la web y como servicio de medición de las interacciones de los usuarios con el sitio web, de qué parte del mundo proceden las visitas, partes del web más populares, tiempo de permanencia en ellas, etc.
          </p>
          <p>
            Puedes obtener más información en:{" "}
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://policies.google.com/technologies/cookies</a>
          </p>

          <h3 className="text-lg font-semibold text-text-dark mt-6 mb-3">Cookies propias</h3>
          <p>
            Se utilizan cookies técnicas necesarias para rastrear las acciones del usuario al rellenar los formularios, para hacer el seguimiento de las reservas que el usuario ha seleccionado o detectar intentos erróneos.
          </p>
          <p>
            También las técnicas necesarias para la identificación de la sesión o de aceptación de la política de cookies, de privacidad y de las condiciones generales.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">¿Cómo modificar, denegar o eliminar las cookies?</h2>
          <p>
            Puedes permitir o bloquear las cookies de terceros, así como eliminar las ya aceptadas, desde el navegador que estés utilizando, consulta las instrucciones y opciones que el propio navegador te ofrece. Las instrucciones para los navegadores más comunes se pueden encontrar aquí:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-text-dark">Firefox:</strong>{" "}
              <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">https://support.mozilla.org/es/kb/Borrar%20cookies</a>
            </li>
            <li>
              <strong className="text-text-dark">Chrome:</strong>{" "}
              <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">https://support.google.com/chrome/answer/95647?hl=es</a>
            </li>
            <li>
              <strong className="text-text-dark">Edge / Internet Explorer:</strong>{" "}
              <a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">https://support.microsoft.com/es-es/help/278835</a>
            </li>
          </ul>
          <p>
            Si deseas saber más sobre el uso de cookies consulta la Guía sobre el uso de las cookies publicada por la Agencia Española de Protección de Datos.
          </p>
        </div>
      </section>
    </>
  );
}
