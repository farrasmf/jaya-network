import React from 'react'
import { PieChart, Pie, Cell, Legend } from 'recharts'

export default function PieChartComponent({data}) {
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const COLORS = ["#7C00BE", "#003AEC", "#38E232", "#7496FF", "#880386", "#880F11", "#AFEB9D", "#C3F500", "#E232DF", "#E489E3", "#F24545", "#F2D845"];

    const style = {
        top: 100,
        left: 350,
        width: "100%",
        lineHeight: "24px",
    };

    return (
        <PieChart width={300} height={300}>
        <Pie
            data={data}
            cx={150}
            cy={150}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
        />
    </PieChart>
    )
}
