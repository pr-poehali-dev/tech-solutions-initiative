const services = [
  { name: "Классический маникюр", price: "от 1 500 ₽" },
  { name: "Аппаратный маникюр", price: "от 2 000 ₽" },
  { name: "Гель-лак", price: "от 2 500 ₽" },
  { name: "Наращивание ногтей", price: "от 3 500 ₽" },
  { name: "Nail-арт", price: "от 500 ₽" },
];

export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/be24d59c-5261-4a2c-a788-06b807ade0a2/files/ef21155e-f531-4de6-87c3-6b3919d492f4.jpg"
          alt="Nail studio"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-400">О мастере</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-light">
          Более 5 лет создаю идеальное покрытие. Работаю с профессиональными материалами и слежу за каждой деталью — от формы до финального блеска.
        </p>
        <div className="mb-8 border-t border-neutral-100">
          {services.map((s) => (
            <div key={s.name} className="flex justify-between items-center py-3 border-b border-neutral-100">
              <span className="text-neutral-800 text-sm">{s.name}</span>
              <span className="text-neutral-500 text-sm">{s.price}</span>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest"
        >
          Записаться на приём
        </a>
      </div>
    </div>
  );
}