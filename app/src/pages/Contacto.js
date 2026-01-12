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
    <div className="py-32 bg-gradient-to-b from-white via-salmon-50/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-salmon-200 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-salmon-600 uppercase tracking-wider">Contacte</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-salmon-600 via-rose-600 to-lilac-600 bg-clip-text text-transparent">
            {t('nav.contacto')}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Estic aquí per escoltar-te i acompanyar-te en el teu camí cap al benestar emocional
          </p>
        </div>

        {/* Tabs para seleccionar tipo de formulario */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 shadow-xl border border-gray-100 inline-flex gap-2">
            <button
              onClick={() => setActiveForm('informacion')}
              className={`px-8 py-3 rounded-full transition-all font-semibold ${
                activeForm === 'informacion'
                  ? 'bg-gradient-to-r from-salmon-500 to-rose-500 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t('formularios.informacion.titulo')}
            </button>
            <button
              onClick={() => setActiveForm('cita')}
              className={`px-8 py-3 rounded-full transition-all font-semibold ${
                activeForm === 'cita'
                  ? 'bg-gradient-to-r from-salmon-500 to-rose-500 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t('formularios.cita.titulo')}
            </button>
          </div>
        </div>

        {/* Formulario de Información */}
        {activeForm === 'informacion' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-salmon-500 to-rose-500 text-white py-4 rounded-xl font-bold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] text-lg"
              >
                {t('formularios.informacion.enviar')}
              </button>
            </form>
          </div>
        )}

        {/* Formulario de Cita Previa */}
        {activeForm === 'cita' && (
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-800 bg-gradient-to-r from-salmon-600 to-rose-600 bg-clip-text text-transparent">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-salmon-500 focus:border-salmon-500 transition-all hover:border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-salmon-500 to-rose-500 text-white py-4 rounded-xl font-bold hover:from-salmon-600 hover:to-rose-600 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] text-lg"
              >
                Solicitar Cita
              </button>
            </form>
          </div>
        )}

        {/* Información de contacto adicional */}
        <div className="mt-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-lilac-100/30 to-rose-100/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
          <div className="relative bg-gradient-to-br from-lilac-50 via-rose-50 to-salmon-50 rounded-3xl p-12 shadow-2xl border border-white/50 text-center">
            <h3 className="text-3xl font-extrabold mb-6 text-gray-800">
              O contacta directament
            </h3>
            <div className="space-y-4">
              <p className="text-xl text-gray-700">
                <strong className="text-gray-800">Email:</strong>{' '}
                <a
                  href="mailto:nuriallurba@nubapsicologia.com"
                  className="text-salmon-600 hover:text-salmon-700 font-bold underline decoration-2 underline-offset-4 transition-colors"
                >
                  nuriallurba@nubapsicologia.com
                </a>
              </p>
              <div className="flex justify-center items-center gap-6 mt-8">
                <a
                  href="https://www.instagram.com/nubapsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
                >
                  <svg className="w-7 h-7 text-rose-600 group-hover:text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nubapsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
                >
                  <svg className="w-7 h-7 text-rose-600 group-hover:text-rose-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
