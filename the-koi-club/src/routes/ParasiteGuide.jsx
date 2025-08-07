import { useState } from 'react'
import data from '../data/parasites.sample.json'

export default function ParasiteGuide() {
  const [selected, setSelected] = useState(null)
  if (!selected) {
    return (
      <div className="grid grid-cols-1 gap-3">
        {data.map((p,i) => (
          <div key={i} className="card cursor-pointer" onClick={() => setSelected(p)}>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">Symptoms: {p.symptoms.join(', ')}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="space-y-3">
      <button className="text-blue-600" onClick={() => setSelected(null)}>← Back</button>
      <div className="card space-y-2">
        <h2 className="text-lg font-bold">{selected.name}</h2>
        <img src={selected.image_url} alt={selected.name} className="w-full rounded-lg" />
        <div><strong>Symptoms:</strong> {selected.symptoms.join(', ')}</div>
        <div className="space-y-2">
          <h3 className="font-semibold">Treatments</h3>
          {selected.treatments.map((t,i) => (
            <div key={i} className="border-l-4 border-blue-600 pl-3">
              <div><strong>{t.brand}</strong>: {t.product} {t.recommended && <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700">Koi Club Recommended</span>}</div>
              <div className="text-xs text-gray-600">Dosage: {t.dosage}</div>
              <button className="btn mt-2">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
