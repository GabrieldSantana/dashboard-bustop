"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

interface TemperatureRecord {
  temperatura: number;
  timestamp: string;
}

export default function Home() {
  const [data, setData] = useState<TemperatureRecord[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/dados").then((res) => {
      const formatted = res.data.map((d: TemperatureRecord) => ({
        temperatura: d.temperatura,
        timestamp: new Date(d.timestamp).toLocaleTimeString(),
      }));
      setData(formatted);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2 drop-shadow-sm">
        🌡️ Dashboard BuStop
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Monitoramento em tempo real das temperaturas coletadas pelos sensores IoT.  
        O eixo <strong>X</strong> representa o horário da coleta e o eixo <strong>Y</strong> indica a temperatura (°C).
      </p>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="timestamp">
              <Label value="Horário da leitura" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis domain={["auto", "auto"]}>
              <Label
                value="Temperatura (°C)"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip
              contentStyle={{ backgroundColor: "#f0f9ff", borderRadius: "8px" }}
              labelStyle={{ color: "#0070f3", fontWeight: "bold" }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="temperatura"
              name="Temperatura (°C)"
              stroke="#0070f3"
              strokeWidth={3}
              dot={{ r: 4, stroke: "#0070f3", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <footer className="text-sm text-gray-500 mt-6">
        Atualizado automaticamente a cada leitura do sensor.
      </footer>
    </main>
  );
}
