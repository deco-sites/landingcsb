import { signal } from "@preact/signals";

const themes = signal([
  { id: 1, theme: "Aviação", icon: "./flight.png" },
  { id: 2, theme: "Cidades Inteligentes", icon: "./smart-city.png" },
  { id: 3, theme: "Robótica", icon: "./robot.png" },
  { id: 4, theme: "Exploração Espacial", icon: "./rocket.png" },
  { id: 5, theme: "Oceanos e meio-ambiente", icon: "./ocean.png" },
  { id: 6, theme: "Comunicação e Storytelling", icon: "./talk.png" },
]);

interface IThemes {
  id: number;
  theme: string;
  icon: string;
}

interface IOrdenatorProps {
  isBlockedDown?: boolean;
  isBlockedUp?: boolean;
  increaseFunction?: () => void;
  deacreaseFunction?: () => void;
}

export const movePosition = (
  array: IThemes[],
  id: number,
  direction: "up" | "down",
): void => {
  const index = array.findIndex((theme) => theme.id === id);
  const isNotTheLast = index !== array.length - 1;
  const isNotTheFirst = index !== 0;
  const newArray = [...array];
  const item = newArray[index];
  newArray.splice(index, 1);
  if (isNotTheLast && direction == "down") {
    newArray.splice(index + 1, 0, item);
    themes.value = newArray;
  }
  if (isNotTheFirst && direction == "up") {
    newArray.splice(index - 1, 0, item);
    themes.value = newArray;
  }
};

const Ordenator = ({
  deacreaseFunction,
  isBlockedUp,
  increaseFunction,
  isBlockedDown,
}: IOrdenatorProps) => {
  const buttonStyle = `h-3 w-4`;
  return (
    <div className="flex flex-col">
      <button
        disabled={isBlockedUp}
        onClick={increaseFunction}
        className={buttonStyle}
      >
        +
      </button>
      <button
        disabled={isBlockedDown}
        onClick={deacreaseFunction}
        className={buttonStyle}
      >
        -
      </button>
    </div>
  );
};

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
          {themes.value.map((theme, index) => (
            <tr key={theme.id}>
              <th>
                <div>{index + 1}</div>
                <Ordenator
                  deacreaseFunction={() =>
                    movePosition(themes.value, theme.id, "down")}
                  increaseFunction={() =>
                    movePosition(themes.value, theme.id, "up")}
                  isBlockedUp={index === 0}
                  isBlockedDown={index === themes.value.length - 1}
                />
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
