import { FileDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const services = () => {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="uppercase cursor-pointer text-xl md:text-2xl font-bold">
                        Какие вагоны мы предоставляем?
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 uppercase h-auto leading-loose text-foreground text-base pl-5">
                        <span>
                            полувагоны
                        </span>
                        <br />
                        <span>
                            крытые вагоны
                        </span>
                        <br />
                        <span>
                            цистерны для нефтепродуктов
                        </span>
                        <br />
                        <span>
                            лесовозные платформы
                        </span>
                        <br />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="uppercase cursor-pointer text-xl md:text-2xl font-bold">
                        Что если у меня нет договора с РЖД и нет подъездных путей для погрузки вагона?
                    </AccordionTrigger>
                    <AccordionContent className="h-auto leading-7 text-foreground text-base pl-5">
                        Для погрузки и оформления груженого вагона нужен договор с РЖД с открытием лицевого счета (ЕЛС)
                        для оплаты железнодорожного тарифа, а также работник со зданными экзаменами на знания правил
                        погрузки и крепления груза. Мы предоставляем данные услуги в любом регионе России.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="uppercase cursor-pointer text-xl md:text-2xl font-bold">Как происходит перевозка поэтапно?</AccordionTrigger>
                    <AccordionContent className="h-auto leading-7 text-foreground text-base pl-5">
                        1. Рассчитываем стоимость перевозки. Железнодорожный тариф, стоимость вагона, услуги погрузки.
                        <br />
                        2. Договариваемся о необходимых услугах. Находим ближайшую грузовую станцию и контрагента у
                        которого сможем осуществить погрузку и крепление груза вагоне.
                        <br />
                        3. Заключаем договор.
                        <br />
                        4. Производите частичную оплату, обычно мы берем предоплату 100% в размере ж.-д. тарифа.
                        <br />
                        5. Начинаем отгрузку. Заказываем вагон. Пополняем ЕЛС. Отправляем ежедневную дислокацию.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="uppercase cursor-pointer text-xl md:text-2xl font-bold">Документы</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2 h-auto text-foreground text-base pl-5">
                            <button className="h-auto leading-7 flex gap-2 cursor-pointer hover:text-red-800">
                                <FileDown />
                                <p>Договор на предоставление вагонов</p>
                            </button>
                            <button className="h-auto leading-7 flex gap-2 cursor-pointer hover:text-red-800">
                                <FileDown />
                                <p>Реквизиты организации</p>
                            </button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="uppercase cursor-pointer text-xl md:text-2xl font-bold">Стоимость услуг погрузки и хранения груза</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-1 text-foreground text-base pl-5">
                            <p>Подача уборка вагона - <b>0 ₽</b></p>
                            <p>Погрузка груза в вагон за тонну - <b>197 ₽</b></p>
                            <p>Хранение груза за тонну в сутки - <b>19 ₽</b></p>
                            <p>Хранение груза за тонну в сутки на площадке - <b>8 ₽</b></p>
                            <p>Оформление одного документа - <b>787 ₽</b></p>
                            <p>Крепление груза в вагоне чел / час - <b>1492 ₽</b></p>
                            <span><b>Средняя стоимость погрузки вагона варьируется от 60 000 до 90 000 рублей</b></span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default services;
