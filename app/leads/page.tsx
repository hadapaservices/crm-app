import { db } from "@/lib/db";
export default async function LeadsPage() {
  const leads = await db.lead.findMany({ take: 10 });
  return (
    <div>
      <h1>Leads</h1>
      <ul>
        {leads.map(l => <li key={l.id}>{l.firstName} {l.lastName} - {l.email}</li>)}
      </ul>
    </div>
  )
}
