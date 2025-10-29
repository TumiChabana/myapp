import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('table_name').select('*');
      if (error) console.error(error);
      else setData(data);
    }
    fetchData();
  }, []);

    return 
    (
        <div>
            <h1>the Dashboard</h1>;
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
export default Dashboard;
