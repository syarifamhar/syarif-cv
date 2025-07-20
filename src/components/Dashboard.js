import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

function TableEditor({ table, fields }) {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRows = async () => {
      setLoading(true);
      const { data } = await supabase.from(table).select('*').order('id', { ascending: false });
      setRows(data || []);
      setLoading(false);
    };
    fetchRows();
  }, [table]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await supabase.from(table).insert([form]);
    setForm({});
    const { data } = await supabase.from(table).select('*').order('id', { ascending: false });
    setRows(data || []);
  };

  const handleDelete = async (id) => {
    await supabase.from(table).delete().eq('id', id);
    setRows(rows.filter(r => r.id !== id));
  };

  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-2">{table.charAt(0).toUpperCase() + table.slice(1)}</h3>
      <form onSubmit={handleAdd} className="flex flex-wrap gap-2 mb-4">
        {fields.map(f => (
          <input
            key={f}
            name={f}
            value={form[f] || ''}
            onChange={handleChange}
            placeholder={f}
            className="px-2 py-1 border rounded"
          />
        ))}
        <button type="submit" className="px-4 py-1 bg-brown-700 text-white rounded">Add</button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              {fields.map(f => <th key={f} className="px-2 py-1 text-left">{f}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                {fields.map(f => <td key={f} className="px-2 py-1">{row[f]}</td>)}
                <td>
                  <button onClick={() => handleDelete(row.id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">CMS Dashboard</h2>
      <TableEditor table="clients" fields={["name", "logo_url"]} />
      <TableEditor table="testimonials" fields={["client_name", "client_company", "text"]} />
    </div>
  );
} 