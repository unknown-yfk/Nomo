'use client'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { BiTransfer } from "react-icons/bi";

export function RightPanel({ className }: { className?: string }) {
    return (
        <aside className="w-full md:w-96">
            <Card className="bg-gray-800 border-none text-gray-300 p-6 mb-6">
                <h3 className="text-lg font-bold">Кошти на рахунку</h3>
                <p className="text-3xl font-bold mt-2">$3,753.15</p>
                <p className="text-sm text-green-500 mt-1">▲ $173.85</p>
                <p className="text-sm text-gray-400 mt-4">1 NCOIN = $0.5112</p>

                <div className="space-y-4 mt-6 relative">
                    <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                        <span className="text-sm text-gray-400">Віддати</span>
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                placeholder="0.00"
                                className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
                            />
                            <Select>
                                <SelectTrigger className="w-28 bg-transparent text-white border-none">
                                    <SelectValue placeholder="NCOIN" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ncoin">NCOIN</SelectItem>
                                    <SelectItem value="btc">BTC</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <button
                                className="bg-white p-2 rounded-full border border-gray-600 shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
                            >
                                <BiTransfer className="h-6 w-6 text-gray-800 rotate-90" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                        <span className="text-sm text-gray-400">Отримати</span>
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                placeholder="0.00"
                                className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
                            />
                            <Select>
                                <SelectTrigger className="w-28 bg-transparent text-white border-none">
                                    <SelectValue placeholder="USDT" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usdt">USDT</SelectItem>
                                    <SelectItem value="eth">ETH</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4 py-2 text-lg font-semibold">
                    Придбати Tether US
                </Button>
            </Card>

            <Card className="bg-gray-800 border-none text-gray-300 p-6">
                <h3 className="text-lg font-bold">Завдання</h3>
                <div className="mt-4 text-gray-400">Немає завдань.</div>
            </Card>
        </aside>
    );
}

