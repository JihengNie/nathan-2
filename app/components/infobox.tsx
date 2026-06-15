import Image from "next/image";

type InfoboxRow = {
  label: string;
  value: React.ReactNode;
};

type Props = {
  title: string;
  image?: string;
  caption?: string;
  rows: InfoboxRow[];
};

export default function Infobox({
  title,
  image,
  caption,
  rows,
}: Props) {
  return (
    <aside className="w-[280px] border border-gray-300 text-black bg-white">
      
      {/* TITLE */}
      <div className="px-3 py-2 text-center font-semibold border-b border-gray-300">
        {title}
      </div>

      {/* IMAGE */}
      {image && (
        <div className="border-b border-gray-300 px-3 py-3 text-center">
          <Image
            src={image}
            alt={title}
            width={260}
            height={260}
            className="mx-auto h-auto w-full object-contain"
          />

          {caption && (
            <div className="mt-2 text-[12px] leading-snug">
              {caption}
            </div>
          )}
        </div>
      )}

      {/* TABLE */}
      <table className="w-full border-collapse text-[13px]">
        <tbody>
          {rows
            .filter((row) => row.value !== null && row.value !== undefined)
            .map((row, i) => (
              <tr key={i} className="border-t border-gray-200 align-top">
                <th className="w-[38%] px-3 py-2 text-left font-semibold align-top">
                  {row.label}
                </th>
                <td className="px-3 py-2 leading-snug">
                  {row.value}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </aside>
  );
}