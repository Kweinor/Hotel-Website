import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  {
    name: 'Mon',
    uv: 40
   
  },
  {
    name: 'Tue',
    uv: 30
    
  },
  {
    name: 'Wed',
    uv: 20
   
  },
  {
    name: 'Thu',
    uv: 80
  
  },
  {
    name: 'Fri',
    uv: 10
    
  },
  {
    name: 'Sat',
    uv: 90
   
  },
  {
    name: 'Sun',
    uv: 34
  },
];

const Chart = ({ barSize = 20 }) => {
  return (
    <div style={{ width: '100%', maxWidth: '500px', height: 300, margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" barSize={barSize} />
          <Bar dataKey="pv" fill="#82ca9d" barSize={barSize} />
          <Bar dataKey="amt" fill="#86d4ed" barSize={barSize} />
          <RechartsDevtools />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;