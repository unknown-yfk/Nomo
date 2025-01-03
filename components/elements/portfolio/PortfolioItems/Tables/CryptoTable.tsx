'use client'
import { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { MiniGraph } from './Charts/MiniGraph';
import { MiniGraph } from '../Charts/MiniGraph';
import { createTableData } from '../utils/tableUtils';


function TableFilter({ onFilterChange }: { onFilterChange: (value: string) => void }) {
    return (
        <div className="mb-4 flex space-x-4">
            <Select onValueChange={onFilterChange} defaultValue="today">
                <SelectTrigger className="w-[180px] bg-gray-700 text-white border-none">
                    <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="last-week">Last Week</SelectItem>
                </SelectContent>
            </Select>
            <Select defaultValue="ncoin">
                <SelectTrigger className="w-28 bg-transparent text-white border-none">
                    <SelectValue placeholder="NCOIN" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ncoin">NCOIN</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}

export function CryptoTable() {
    const [period, setPeriod] = useState('today');
    const [currency, setCurrency] = useState('ncoin');
    const tableData = createTableData(period, currency);

    return (
        <>
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">Транзакції</h1>
                </div>
                <div>
                    <TableFilter
                        onFilterChange={(value) => {
                            if (['today', 'this-week', 'last-week'].includes(value)) {
                                setPeriod(value);
                            } else {
                                setCurrency(value);
                            }
                        }}
                    />
                </div>
            </div>

            <Table className="bg-[#0F0F0F] border border-none">
                <TableHeader>
                    <TableRow className="border-b border-gray-700">
                        <TableHead className="px-10 py-2">#</TableHead>
                        <TableHead className="px-4 py-2">Токен</TableHead>
                        <TableHead className="px-4 py-2">Ціна</TableHead>
                        <TableHead className="px-4 py-2">24h</TableHead>
                        <TableHead className="px-4 py-2">Торгівля</TableHead>
                        <TableHead className="px-4 py-2">Ринок</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} className="hover:bg-gray-700 border-b border-gray-700">
                            <TableCell className="px-4 py-2">{row.id}</TableCell>
                            <TableCell className="px-4 py-5">{row.token}</TableCell>
                            <TableCell className="px-4 py-2">{row.price}</TableCell>
                            <TableCell className={`px-4 py-2 ${row.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {row.change}
                            </TableCell>
                            <TableCell className="px-4 py-2">
                                <MiniGraph data={row.graphData} color={row.graphColor} />
                            </TableCell>
                            <TableCell className="px-4 py-2 text-green-500">{row.market}</TableCell>
                            <TableCell className="px-4 py-2"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

