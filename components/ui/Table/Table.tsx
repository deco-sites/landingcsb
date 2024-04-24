export default function Table() {
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
          {/* row 1 */}
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="1"
              />
            </th>
            <td>Aviação</td>
            <td>
              <img src="./flight.png" alt="icon" />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="2"
              />
            </th>
            <td>Cidades Inteligentes</td>
            <td>
              <img src="./smart-city.png" alt="icon" />
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="3"
              />
            </th>
            <td>Robótica</td>
            <td>
              <img src="./robot.png" alt="icon" />
            </td>
          </tr>
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="4"
              />
            </th>
            <td>Exploração Espacial</td>
            <td>
              <img src="./rocket.png" alt="icon" />
            </td>
          </tr>
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="5"
              />
            </th>
            <td>Oceanos e meio-ambiente</td>
            <td>
              <img src="./ocean.png" alt="icon" />
            </td>
          </tr>
          <tr>
            <th>
              <input
                type="text"
                className="text-center text-black w-12 rounded-sm"
                placeholder="6"
              />
            </th>
            <td>Comunicação e Storytelling</td>
            <td>
              <img src="./talk.png" alt="icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
