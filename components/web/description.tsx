import Services from "@/components/web/services";

const description = () => {
    return (
        <div className="p-4 md:p-10 flex justify-between mx-auto border-b">
            <div>
                <p className="text-[#505254] font-medium uppercase hidden md:block">Подробная информация</p>
            </div>

            <div className="md:w-full">
                <p className="text-red-800 text-xl font-bold text-left pb-4 border-b">Общие вопросы</p>
                <Services />
            </div>
        </div>
    );
};

export default description;
