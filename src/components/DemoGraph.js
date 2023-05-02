import React from "react";
import { Chart } from "react-charts";

function DemoGraph() {
    const data = React.useMemo(
        () => [
            { label: "Series 1", data: [[0, 1], [2, 4], [3, 2], [4, 7]] },
            { label: "Series 2", data: [[0, 13], [1, 1], [2, 5], [3, 6], [4, 4]] },
        ],
        []
    );

    const series = { type: "bar" };

    const axes = [
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left", show: false },
    ];

    return (
        <div style={{ width: "400px", height: "300px" }}>
            <Chart data={data} series={series} axes={axes} tooltip />
        </div>
    );
}

export default DemoGraph;
