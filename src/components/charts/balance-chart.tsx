import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";

type Props = {
    balanceHistoryData: {
        name: string;
        balance: number;
    }[];
}

const BalanceChart = ({ balanceHistoryData }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={balanceHistoryData} height={160}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={["auto", "auto"]} padding={{ top: 10, bottom: 10 }} />
                <Tooltip />
                <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4a6ff3" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#4a6ff3" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="balance"
                    stroke="#4a6ff3"
                    strokeWidth={1.5}
                    fill="url(#colorBalance)"
                    dot={false}
                    activeDot={{ r: 6 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default BalanceChart;