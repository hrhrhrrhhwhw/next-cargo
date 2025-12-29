"use client";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "../ui/button";
import data from "@/app/data";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import toast, { Toaster } from "react-hot-toast";

type FormValues = {
    departure: string;
    arrive: string;
    cargo: string;
    wagonType: string;
    email: string;
};

export default function App() {
    const notify = () => toast("Ваша заявка успешно отправлена");

    const {
        control,
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        defaultValues: {
            departure: "",
            arrive: "",
            cargo: "",
            wagonType: "",
            email: "",
        },
    });

    const [age, setAge] = useState("");

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const result = await res.json();

                // ошибки с backend (RHF-friendly)
                if (result.errors) {
                    Object.entries(result.errors).forEach(([field, message]) => {
                        setError(field as keyof FormValues, {
                            type: "server",
                            message: message as string,
                        });
                    });
                }

                return;
            }

            reset({
                departure: "",
                arrive: "",
                cargo: "",
                wagonType: "",
                email: "",
            });
            {
                toast.success("Ваша заявка успешно отправлена");
            }
        } catch (error) {
            {
                toast.error("Ваша заявка не отправлена :(");
            }
        }
    };

    const wagonTypes = {
        polyvagon: "Полувагон",
        krytiy: "Крытый вагон",
        cisterna: "Цистерна",
        lesovoz: "Лесовозная платформа",
    };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    return (
        <>
            <h2 className="text-red-800 text-xl font-bold mx-auto flex md:w-3xl px-4  mt-10">
                Заявка на предоставление подвижного состава
            </h2>

            <form className="flex flex-col gap-4 w-full md:w-3xl p-4 md:p-12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="departure">Станция отправления</label>
                <Controller
                    control={control}
                    name="departure"
                    render={({ field }) => (
                        <Autocomplete
                            options={data.RailwayData}
                            value={field.value || ""}
                            onChange={(_, value) => field.onChange(value)}
                            onBlur={field.onBlur}
                            renderInput={(params) => <TextField {...params} required />}
                            className="bg-white rounded-sm"
                        />
                    )}
                />

                <label htmlFor="Arrive">Станция назначения</label>
                <Controller
                    control={control}
                    name="arrive"
                    render={({ field }) => (
                        <Autocomplete
                            options={data.RailwayData}
                            value={field.value || ""}
                            onChange={(_, value) => field.onChange(value)}
                            onBlur={field.onBlur}
                            renderInput={(params) => <TextField {...params} required />}
                            className="bg-white rounded-sm"
                        />
                    )}
                />

                <label htmlFor="Cargo">Груз</label>
                <Controller
                    control={control}
                    name="cargo"
                    render={({ field }) => (
                        <Autocomplete
                            options={data.CargoData}
                            value={field.value || ""}
                            onChange={(_, value) => field.onChange(value)}
                            onBlur={field.onBlur}
                            renderInput={(params) => <TextField {...params} required />}
                            className="bg-white rounded-sm"
                        />
                    )}
                />

                <label htmlFor="">Выберите вид подвижного состава</label>
                <Controller
                    name="wagonType"
                    control={control}
                    render={({ field }) => (
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Select {...field} className="bg-white rounded-sm">
                                    {Object.entries(wagonTypes).map(([key, label]) => (
                                        <MenuItem key={key} value={label}>
                                            {label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    )}
                />

                <label htmlFor="">Укажите email</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="email"
                            placeholder="email@email.ru"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            className="bg-white rounded-sm"
                        />
                    )}
                />

                <Button
                    disabled={isSubmitting}
                    className="cursor-pointer h-12 bg-red-800 mt-5 text-white"
                    type="submit"
                >
                    Отправить заявку
                </Button>
            </form>
        </>
    );
}
