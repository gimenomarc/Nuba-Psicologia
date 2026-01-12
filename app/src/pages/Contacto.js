import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    modalidad: '',
    observaciones: '',
  });
  const [citaData, setCitaData] = useState({
    fecha: '',
    hora: '',
  });
  const [activeForm, setActiveForm] = useState('informacion');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCitaChange = (e) => {
    setCitaData({
      ...citaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Formulario enviado. Te contactaremos pronto.');
  };

  const handleCitaSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar la solicitud de cita
    alert('Solicitud de cita enviada. Te contactaremos para confirmar.');
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-salmon-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          {t('nav.contacto')}
        </h1>

        {/* Tabs para seleccionar tipo de formulario */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveForm('informacion')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeForm === 'informacion'
                  ? 'bg-salmon-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('formularios.informacion.titulo')}
            </button>
            <button
              onClick={() => setActiveForm('cita')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeForm === 'cita'
                  ? 'bg-salmon-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('formularios.cita.titulo')}
            </button>
          </div>
        </div>

        {/* Formulario de Información */}
        {activeForm === 'informacion' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('formularios.informacion.titulo')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('formularios.informacion.nombre')}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('formularios.informacion.apellidos')}
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('formularios.informacion.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {t('formularios.informacion.telefono')}
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.tipoServicio')}
                </label>
                <select
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                >
                  <option value="">Seleccionar...</option>
                  <option value="consulta">{t('formularios.informacion.consulta')}</option>
                  <option value="taller">{t('formularios.informacion.taller')}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.modalidad')}
                </label>
                <input
                  type="text"
                  name="modalidad"
                  value={formData.modalidad}
                  onChange={handleInputChange}
                  placeholder="Ej: Terapia de pareja, Taller de gestión emocional..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.observaciones')}
                </label>
                <textarea
                  name="observaciones"
                  value={formData.observaciones}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-salmon-500 text-white py-3 rounded-lg font-semibold hover:bg-salmon-600 transition-colors"
              >
                {t('formularios.informacion.enviar')}
              </button>
            </form>
          </div>
        )}

        {/* Formulario de Cita Previa */}
        {activeForm === 'cita' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('formularios.cita.titulo')}
            </h2>
            <form onSubmit={handleCitaSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.cita.seleccionarFecha')}
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={citaData.fecha}
                  onChange={handleCitaChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.cita.hora')}
                </label>
                <input
                  type="time"
                  name="hora"
                  value={citaData.hora}
                  onChange={handleCitaChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.nombre')}
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('formularios.informacion.telefono')}
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salmon-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-salmon-500 text-white py-3 rounded-lg font-semibold hover:bg-salmon-600 transition-colors"
              >
                Solicitar Cita
              </button>
            </form>
          </div>
        )}

        {/* Información de contacto adicional */}
        <div className="mt-12 bg-gradient-to-r from-lilac-100 to-rose-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            O contacta directamente
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            Email:{' '}
            <a
              href="mailto:nuriallurba@nubapsicologia.com"
              className="text-salmon-600 hover:text-salmon-700 font-semibold"
            >
              nuriallurba@nubapsicologia.com
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/nubapsicologia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 font-semibold"
            >
              Instagram
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/nubapsicologia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
