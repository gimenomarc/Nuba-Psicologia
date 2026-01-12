import { useTranslation } from 'react-i18next';

const PoliticaPrivacidad = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t('footer.privacidad')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              1. Responsable del tratamiento
            </h2>
            <p>
              Núria Llurba Puig, con NIF [NIF], es la responsable del tratamiento
              de los datos personales que se recopilan a través de este sitio
              web.
            </p>
            <p>
              <strong>Datos de contacto:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Email: nuriallurba@nubapsicologia.com</li>
              <li>Colegiada nº: 33667</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              2. Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales recopilados se utilizarán para:
            </p>
            <ul className="list-disc pl-6">
              <li>Gestionar las solicitudes de información y citas previas</li>
              <li>Responder a consultas y comunicaciones</li>
              <li>Prestar los servicios solicitados</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              3. Legitimación
            </h2>
            <p>
              El tratamiento de datos se basa en el consentimiento del
              interesado, la ejecución de un contrato o medidas precontractuales,
              y el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              4. Conservación de datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario
              para cumplir con la finalidad para la que fueron recopilados y,
              en su caso, durante los plazos establecidos por la legislación
              aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              5. Derechos del interesado
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, suprimir, oponerte al
              tratamiento, solicitar la portabilidad de tus datos y limitar el
              tratamiento. Para ejercer estos derechos, puedes contactar en:
              nuriallurba@nubapsicologia.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              6. Medidas de seguridad
            </h2>
            <p>
              Se han adoptado las medidas técnicas y organizativas necesarias
              para garantizar la seguridad de los datos personales y evitar su
              alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
