import React from 'react'


export default function OpportunityFilters({ onFilter }) {
return (
<div className="mb-6 flex gap-4">
<input onChange={e => onFilter({ keyword: e.target.value })} placeholder="Search opportunities" className="border rounded px-3 py-2 flex-1" />
<select onChange={e => onFilter({ category: e.target.value })} className="border rounded px-3 py-2">
<option value="">All</option>
<option value="education">Education</option>
<option value="health">Health</option>
<option value="environment">Environment</option>
</select>
</div>
)
}