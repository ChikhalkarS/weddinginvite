import {Phone} from 'lucide-react';
import {weddingData as d} from '../data/weddingData';

export function RSVP(){
  return <section className="bg-[#FFF9EF] px-6 py-24">
    <div className="mx-auto max-w-xl text-center">
      <div className="mt-10"></div>
      <a href={`tel:${d.rsvp.phone}`} className="focus-ring mt-8 inline-flex items-center gap-2 text-sm text-[#6E1F2E]">
        <Phone className="h-4 w-4"/> {d.rsvp.name}
      </a>
    </div>
  </section>
}
