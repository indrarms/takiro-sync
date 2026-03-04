"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase"; 
import { ref, onValue } from "firebase/database";

export default function RealtimeSensor() {
  const [data, setData] = useState({ suhu: 0, kelembaban: 0 });

  useEffect(() => {
    const sensorRef = ref(db, '/'); 

    const unsubscribe = onValue(sensorRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setData(val);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Temperature Card */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
        <h3 className="text-gray-500 text-sm font-medium">Temperatur</h3>
        <p className="text-4xl font-bold text-red-600 mt-2">
          {data.suhu || 0}°C
        </p>
      </div>

      {/* Humidity Card */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h3 className="text-gray-500 text-sm font-medium">Kelembaban Tanah</h3>
        <p className="text-4xl font-bold text-blue-600 mt-2">
          {data.kelembaban || 0}%
        </p>
      </div>
    </div>
  );
}