const DATA = [
    { id: 1, name: "Подача уборка вагона", price: 0 },
    { id: 2, name: "Погрузка груза в вагон за тонну", price: 197 },
    { id: 3, name: "Хранение груза за тонну в сутки", price: 19 },
    { id: 4, name: "Хранение груза за тонну в сутки на площадке", price: 8 },
    { id: 5, name: "Оформление одного документа", price: 787 },
    { id: 6, name: "Крепление груза в вагоне чел / час", price: 1492 },
];

export default function LadingPage() {
    return (
        <div className="mt-10 flex flex-col gap-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground px-4 md:px-10">
                Терминальные услуги
            </h2>

            <div className="w-full border-t bg-[#242424] rounded-3xl p-4 md:p-10">
                <h3 className="text-muted text-2xl md:text-4xl font-medium mb-6 border-b pb-4">
                    Погрузка груза (+ хранение)
                </h3>

                <div className="overflow-hidden rounded-xl border border-white/10">
                    {/* header */}
                    <div className="grid grid-cols-2 bg-white/5 text-muted text-sm md:text-base font-semibold p-4">
                        <span>Вид услуги</span>
                        <span className="text-right">Стоимость</span>
                    </div>

                    {/* rows */}
                    <div className="divide-y divide-white/10">
                        {DATA.map((d) => (
                            <div
                                key={d.id}
                                className="grid grid-cols-2 items-center p-4 text-muted text-base md:text-lg hover:bg-white/5 transition"
                            >
                                <span>{d.name}</span>

                                <span className="text-right font-semibold text-white">
                                    {d.price} ₽
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
