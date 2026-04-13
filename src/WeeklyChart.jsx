import { useMemo } from "react";
import {
  ResponsiveContainer, BarChart, Bar, CartesianGrid,
  XAxis, YAxis, Tooltip, Legend
} from "recharts";
import { 
  parseISO, 
  isSameDay, 
  startOfWeek, 
  endOfWeek, 
  addDays, 
  format, 
  isWithinInterval 
} from "date-fns";
import { useQuery } from "@tanstack/react-query";

const Chart = ({ barSize = 20 }) => {
  const {
    data: reservations = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ["Reservations"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/v1/reservations/daily");
      if (!res.ok) throw new Error("Failed to fetch reservations");
      const result = await res.json();
      return result.data.reservations;
    }
  });

  const chartData = useMemo(() => {
    // 1. Define the current week boundaries (Monday to Sunday)
    const now = new Date();
    const startOfCurrWeek = startOfWeek(now, { weekStartsOn: 1 });
    const endOfCurrWeek = endOfWeek(now, { weekStartsOn: 1 });

    // 2. Filter raw data so we ONLY look at items from this specific week
    const currentWeekReservations = reservations.filter((r) => {
      if (!r.createdAt) return false;
      const date = parseISO(r.createdAt);
      return isWithinInterval(date, { start: startOfCurrWeek, end: endOfCurrWeek });
    });

    // 3. Map to the 7-day display format
    return Array.from({ length: 7 }).map((_, i) => {
      const dayDate = addDays(startOfCurrWeek, i);
      
      // Count matches within our already-filtered "current week" list
      const count = currentWeekReservations.filter((r) => 
        isSameDay(parseISO(r.createdAt), dayDate)
      ).length;

      return {
        name: format(dayDate, "EEE"), // Mon, Tue...
        fullDate: format(dayDate, "yyyy-MM-dd"),
        count: count
      };
    });
  }, [reservations]);

  return (
    <div style={{ width: "100%", maxWidth: "700px", height: 300, margin: "0 auto" }}>
      {isLoading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip labelKey="fullDate" />
            <Legend />
            <Bar 
              dataKey="count" 
              name="Reservations" 
              fill="green" 
              barSize={barSize} 
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;