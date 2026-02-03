import { useState, useEffect } from 'react';

const CalendarioReservas = ({ onDateSelect, onTimeSelect, selectedDate, selectedTime }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [view, setView] = useState('calendar'); // 'calendar' o 'times'

  // Horas disponibles (ejemplo - esto debería venir de una API o configuración)
  const defaultAvailableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '16:00', '17:00', '18:00', '19:00'
  ];

  // Generar días disponibles (ejemplo: lunes a viernes de las próximas 4 semanas)
  useEffect(() => {
    const dates = [];
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 28); // Próximas 4 semanas

    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayOfWeek = d.getDay();
      // Solo lunes a viernes (1-5)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        dates.push(new Date(d));
      }
    }
    setAvailableDates(dates);
  }, []);

  // Obtener horas disponibles para el día seleccionado
  useEffect(() => {
    if (selectedDate) {
      // Aquí podrías filtrar horas según disponibilidad real
      // Por ahora, mostramos todas las horas disponibles
      setAvailableTimes(defaultAvailableTimes);
      setView('times');
    }
  }, [selectedDate]);

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Días del mes anterior (para completar la primera semana)
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
        isAvailable: false
      });
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isAvailable = availableDates.some(availDate => 
        availDate.toDateString() === date.toDateString()
      );
      days.push({
        date,
        isCurrentMonth: true,
        isAvailable
      });
    }

    // Días del mes siguiente (para completar la última semana)
    const remainingDays = 42 - days.length; // 6 semanas * 7 días
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: new Date(year, month + 1, day),
        isCurrentMonth: false,
        isAvailable: false
      });
    }

    return days;
  };

  const handleDateClick = (date) => {
    if (date.isAvailable) {
      onDateSelect(date.date);
    }
  };

  const handleTimeClick = (time) => {
    onTimeSelect(time);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ca-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const monthNames = [
    'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
    'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
  ];

  const weekDays = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'];

  if (view === 'times' && selectedDate) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => {
              setView('calendar');
              onDateSelect(null);
            }}
            className="flex items-center gap-2 text-salmon-600 hover:text-salmon-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tornar al calendari
          </button>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Selecciona una hora
          </h3>
          <p className="text-gray-600">
            {formatDate(selectedDate)}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeClick(time)}
              className={`py-4 px-4 rounded-xl font-semibold transition-all ${
                selectedTime === time
                  ? 'bg-gradient-to-r from-salmon-500 to-rose-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-salmon-50 border-2 border-gray-200 hover:border-salmon-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {getDaysInMonth().map((day, index) => {
          const isSelected = selectedDate && 
            day.date.toDateString() === selectedDate.toDateString();
          const isToday = day.date.toDateString() === new Date().toDateString();
          
          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              disabled={!day.isAvailable}
              className={`
                aspect-square rounded-xl font-semibold transition-all
                ${!day.isCurrentMonth ? 'text-gray-300 cursor-not-allowed' : ''}
                ${!day.isAvailable && day.isCurrentMonth 
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                  : ''}
                ${day.isAvailable && day.isCurrentMonth && !isSelected
                  ? 'text-gray-700 bg-white hover:bg-salmon-50 border-2 border-gray-200 hover:border-salmon-300'
                  : ''}
                ${isSelected
                  ? 'bg-gradient-to-r from-salmon-500 to-rose-500 text-white shadow-lg scale-105'
                  : ''}
                ${isToday && !isSelected && day.isAvailable
                  ? 'ring-2 ring-salmon-400'
                  : ''}
              `}
            >
              {day.date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-salmon-500 to-rose-500"></div>
          <span>Dia seleccionat</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-white border-2 border-gray-200"></div>
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-100"></div>
          <span>No disponible</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarioReservas;
