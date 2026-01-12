import { useTranslation } from 'react-i18next';

const AvisoLegal = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('footer.avisoLegal')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              1. Datos identificativos
            </h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo
              10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y del Comercio Electrónico, se
              informa de los siguientes datos:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Denominación social:</strong> Núria Llurba Puig
              </li>
              <li>
                <strong>Colegiada nº:</strong> 33667
              </li>
              <li>
                <strong>Email:</strong> nuriallurba@nubapsicologia.com
              </li>
              <li>
                <strong>Dominio web:</strong> nubapsicologia.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              2. Objeto
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio web
              nubapsicologia.com, propiedad de Núria Llurba Puig, psicóloga
              colegiada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              3. Condiciones de uso
            </h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación de las
              condiciones de uso establecidas. El usuario se compromete a hacer
              un uso adecuado de los contenidos y servicios ofrecidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              4. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos,
              imágenes, logotipos y diseño, son propiedad de Núria Llurba Puig
              o de sus respectivos propietarios y están protegidos por las leyes
              de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              5. Responsabilidad
            </h2>
            <p>
              Núria Llurba Puig no se hace responsable de los daños derivados
              del uso de la información contenida en este sitio web. Los
              contenidos tienen carácter meramente informativo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              6. Modificaciones
            </h2>
            <p>
              Núria Llurba Puig se reserva el derecho de modificar cualquier
              información que aparezca en el sitio web, sin necesidad de
              preaviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              7. Legislación aplicable
            </h2>
            <p>
              El presente aviso legal se rige por la legislación española. Para
              cualquier controversia, las partes se someten a los juzgados y
              tribunales del domicilio del titular del sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
