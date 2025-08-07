const initial = [
  { name: 'pH', value: 7.3, range: '6.8–8.2' },
  { name: 'Ammonia', value: 0.2, range: '0.00–0.25 mg/L' },
  { name: 'Nitrite', value: 0.1, range: '0.00–0.25 mg/L' },
  { name: 'Nitrate', value: 25, range: '< 40 mg/L' },
  { name: 'KH', value: 80, range: '50–100 ppm' },
  { name: 'GH', value: 140, range: '100–160 ppm' },
  { name: 'Chlorine', value: 0.02, range: '< 0.05 ppm' }
]

export default function WaterOverview() {
  return (
    <div className="card space-y-2">
      <h2 className="text-lg font-semibold">Water Quality</h2>
      {initial.map(p => (
        <div key={p.name} className="flex justify-between py-1 border-b last:border-b-0">
          <div>
            <div className="font-medium">{p.name}</div>
            <div className="text-xs text-gray-500">Safe: {p.range}</div>
          </div>
          <div className="font-semibold">{p.value}</div>
        </div>
      ))}
    </div>
  )
}
