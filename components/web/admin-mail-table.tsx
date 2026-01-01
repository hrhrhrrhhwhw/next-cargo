"use client";

import { useState } from "react";

export type TableRow = {
    destination: string;
    distance: string;
    wagonType: string;
    wagonModel: string;
};

const emptyRow: TableRow = {
    destination: "",
    distance: "",
    wagonType: "",
    wagonModel: "",
};

export default function AdminMailTable({ rows, setRows }: { rows: TableRow[]; setRows: (rows: TableRow[]) => void }) {
    function updateRow(index: number, field: keyof TableRow, value: string) {
        const next = [...rows];
        next[index] = { ...next[index], [field]: value };
        setRows(next);
    }

    function addRow() {
        setRows([...rows, emptyRow]);
    }

    function removeRow(index: number) {
        setRows(rows.filter((_, i) => i !== index));
    }

    return (
        <div className="space-y-4">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Станция назначения</th>
                            <th className="border p-2">Расстояние (км)</th>
                            <th className="border p-2">Тип вагона</th>
                            <th className="border p-2">Модель вагона</th>
                            <th className="border p-2 w-10"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                {(Object.keys(row) as (keyof TableRow)[]).map((field) => (
                                    <td key={field} className="border p-1">
                                        <input
                                            className="w-full border p-1"
                                            value={row[field]}
                                            onChange={(e) => updateRow(i, field, e.target.value)}
                                        />
                                    </td>
                                ))}

                                <td className="border text-center">
                                    <button onClick={() => removeRow(i)} className="text-red-600">
                                        ✕
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button onClick={addRow} className="border px-4 py-2">
                + Добавить строку
            </button>
        </div>
    );
}
