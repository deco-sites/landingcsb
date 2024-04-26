import { signal } from "@preact/signals";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";

const themes = signal([
  { id: 1, theme: "Aviação", icon: "/image/flight.png" },
  { id: 2, theme: "Cidades Inteligentes", icon: "/image/smart-city.png" },
  { id: 3, theme: "Robótica", icon: "/image/robot.png" },
  { id: 4, theme: "Exploração Espacial", icon: "/image/rocket.png" },
  { id: 5, theme: "Oceanos e meio-ambiente", icon: "/image/ocean.png" },
  { id: 6, theme: "Comunicação e Storytelling", icon: "/image/talk.png" },
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
    <div className="flex flex-col gap-2">
      {isBlockedUp ? <span></span> : (
        <button
          disabled={isBlockedUp}
          onClick={increaseFunction}
          className={buttonStyle}
        >
          {/*<img src="./arrow-up.png" alt="icon" />*/}
          <Picture>
            <Source
              media="(max-width: 768px)"
              src="/image/arrow-up.png"
              width={270}
              height={377}
            />
          </Picture>
        </button>
      )}

      {isBlockedDown ? <span></span> : (
        <button
          disabled={isBlockedDown}
          onClick={deacreaseFunction}
          className={buttonStyle}
        >
          {/*<img src="./arrow-down.png" alt="icon" />*/}
          <Picture>
            <Source
              media="(max-width: 768px)"
              src="/image/arrow-down.png"
              width={270}
              height={377}
            />
          </Picture>
        </button>
      )}
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
              <th className="flex items-center justify-center">
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
                {/*<img src={theme.icon} alt="icon" />*/}
                <Image
                  src={theme.icon}
                  width={100}
                  preload
                  loading="eager"
                  fetchPriority="high"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
