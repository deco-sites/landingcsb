import { useSignal } from "@preact/signals";

const themes = [
  { id: 1, theme: "Aviação", icon: "./flight.png" },
  { id: 2, theme: "Cidades Inteligentes", icon: "./smart-city.png" },
  { id: 3, theme: "Robótica", icon: "./robot.png" },
  { id: 4, theme: "Exploração Espacial", icon: "./rocket.png" },
  { id: 5, theme: "Oceanos e meio-ambiente", icon: "./ocean.png" },
  { id: 6, theme: "Comunicação e Storytelling", icon: "./talk.png" },
];

export default function TableIsland() {
  return (
    <div>
      <table className="table table-zebra text-black">
        {/* head */}
        <thead>
          <tr>
            <th className="text-base font-semibold">Ordem</th>
            <th className="text-base font-semibold" colspan={2}>Tema</th>
          </tr>
        </thead>
        <tbody>
          {themes.map((theme, index) => (
            <tr key={theme.id}>
              <th>
                <div>{index + 1}</div>
              </th>
              <td>{theme.theme}</td>
              <td>
                <img src={theme.icon} alt="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
