// src/components/cards/VentureCard.tsx
import { Venture } from "@/data/ventures";
import { Badge } from "../common/Badge";

type VentureCardProps = {
  venture: Venture;
};

export default function VentureCard({ venture }: VentureCardProps) {
  const { title, stage, description, role, ask, tags, metrics, website } = venture;

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">{title}</h4>
          <Badge variant="secondary">{stage}</Badge>
        </div>

        <p className="text-neutral-600 dark:text-neutral-300">{description}</p>

        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <strong>Role:</strong> {role}
        </p>

        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <strong>Looking for:</strong> {ask}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {metrics && (
          <ul className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 list-disc list-inside">
            {metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
      </div>

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}
