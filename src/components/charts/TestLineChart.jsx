"use client";
import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const TestLineChart = () => {
    const canvasEl = useRef(null);

    useEffect(() => {
        if (canvasEl.current !== null) {
            const ctx = canvasEl.current;

            const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Line Chart',
                        data: [2, 0, 9, 0, 6, 0, 0, 3, 3, 16],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    },
                ],
            };

            const myLineChart = new Chart(ctx, {
                type: 'line',
                data: data,
            });

            return function cleanup() {
                myLineChart.destroy();
            };
        }
    });

    return (
        <>
            <canvas ref={canvasEl} />
        </>
    );
};

export default TestLineChart;