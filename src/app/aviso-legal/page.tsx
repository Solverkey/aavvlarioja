export const metadata = {
  title: "Aviso Legal | Federación de AAVV de La Rioja",
  description: "Aviso legal de la Federación de Asociaciones Vecinales de La Rioja.",
};

export default function AvisoLegal() {
  return (
    <>
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-warm rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Aviso Legal</h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-text-muted">
          <p>
            <a href="https://www.aavvlarioja.org" className="text-accent hover:underline">www.aavvlarioja.org</a> es una web de información, defensa, fomento y mejora de los intereses generales de los vecinos y vecinas de Logroño y de La Rioja; es propiedad de la <strong className="text-text-dark">Federación de Asociaciones Vecinales de la Rioja</strong>, inscrita en el Registro de Asociaciones Autonómico n.º 9 y Municipal n.º 16. Declarada de utilidad municipal por el Ayuntamiento de Logroño en 2005, con NIF G26108928 y domicilio C/ San Pablo n.º 2, bajo 26001 Logroño.
          </p>
          <p>
            Para cualquier consulta o contacto con nosotros podéis comunicaros a través del e-mail{" "}
            <a href="mailto:federacion@aavvlarioja.org" className="text-accent hover:underline">federacion@aavvlarioja.org</a>.
          </p>
          <p>
            Estas condiciones describen los términos que serán aplicables a las personas que accedan y naveguen por esta web y es recomendable consultarlas periódicamente para estar informado.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">1. Acceso</h2>
          <p>
            El acceso a www.aavvlarioja.org es gratuito e implica la aceptación de estas condiciones, bajo tu exclusiva responsabilidad y cumpliendo siempre con la legalidad vigente.
          </p>
          <p>
            Los contenidos y servicios de www.aavvlarioja.org a los que se accede, tienen como finalidad la información y defensa de los intereses vecinales de Logroño y La Rioja.
          </p>
          <p>
            www.aavvlarioja.org no asumirá ninguna responsabilidad derivada del mal uso de la página Web y todo su contenido por parte de la persona usuario, asumiendo éste, las consecuencias, daños o acciones que pudieran derivarse de su acceso o mal uso.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">2. Contenido</h2>
          <p>
            www.aavvlarioja.org pondrá todos los medios a su alcance para que la información incluida en esta web sea exacta y esté actualizada. Nos reservamos la facultad de realizar, en cualquier momento y sin necesidad de preaviso, cualquier modificación o actualización de los contenidos y servicios de la web.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">3. Propiedad intelectual y propiedad industrial</h2>
          <p>
            Todos los contenidos de www.aavvlarioja.org están sujetos a derecho de propiedad intelectual e industrial de la Federación de Asociaciones Vecinales de la Rioja o de terceros titulares cuyo uso se ha obtenido debidamente para su inclusión en la página Web.
          </p>
          <p>
            El usuario acepta que el acceso a www.aavvlarioja.org y a sus contenidos no le otorga derecho alguno sobre la propiedad del contenido de la web, y se compromete a no llevar a cabo, ni directa ni indirectamente, ninguna explotación comercial de los contenidos, ni de cualquier otra acción que afecte a los derechos de imagen, propiedad industrial y/o propiedad intelectual de sus titulares.
          </p>

          <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">4. Compromisos y responsabilidades</h2>
          <p>
            www.aavvlarioja.org se compromete a no realizar publicidad engañosa.
          </p>
          <p>
            www.aavvlarioja.org no se hace responsable del uso ilegítimo que el usuario no autorizado pueda hacer de los nombres de marca, nombres de producto, marcas comerciales que, no siendo propiedad de la Federación de Asociaciones Vecinales de la Rioja, aparezcan en www.aavvlarioja.org o cualquiera de sus directorios. Tampoco se responsabiliza de la integridad, veracidad y licitud del contenido de los enlaces a las webs a las que pueda accederse desde la página web.
          </p>
        </div>
      </section>
    </>
  );
}
