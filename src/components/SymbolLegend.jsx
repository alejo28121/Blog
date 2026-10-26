import "../assets/styles/SymbolLegend.css";

export default function SymbolLegend() {
    return (
        <section className="symbol-legend">
        <h3 className="symbol-legend-title">
            Significado de los símbolos
        </h3>

        <table className="symbol-legend-table">
            <thead>
            <tr>
                <th>Símbolo</th>
                <th>Significado</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>
                <span className="symbol-shape symbol-square" />
                </td>
                <td>Hombre</td>
            </tr>

            <tr>
                <td>
                <span className="symbol-shape symbol-circle" />
                </td>
                <td>Mujer</td>
            </tr>

            <tr>
                <td>
                <span className="symbol-line" />
                </td>
                <td>Unión de pareja</td>
            </tr>

            <tr>
            <td>
                <div className="symbol-lines-vertical">
                <span className="symbol-line-vertical" />
                <span className="symbol-line-vertical symbol-line-dashed" />
                </div>
            </td>
            <td>Hijo de crianza</td>
            </tr>

            <tr>
                <td>
                <span className="symbol-line symbol-line-vertical" />
                </td>
                <td>Descendencia entre generaciones</td>
            </tr>
        
            <tr>
                <td>
                    <svg
                    className="legend-unknown-symbol"
                    viewBox="0 0 32 32"
                    aria-label="Cuadrado con diagonal y dos signos de interrogación"
                    >
                    <rect
                        x="3"
                        y="3"
                        width="26"
                        height="26"
                        fill="white"
                        stroke="#26334d"
                        strokeWidth="2"
                    />
                    <line
                        x1="4"
                        y1="28"
                        x2="28"
                        y2="4"
                        stroke="#26334d"
                        strokeWidth="2"
                    />
                    <text x="5" y="13" fontSize="11" fill="#26334d">?</text>
                    <text x="17" y="27" fontSize="11" fill="#26334d">?</text>
                    </svg>
                </td>
                <td>Desaparecido</td>
            </tr>

            <tr>
            <td>
                <span className="symbol-shape symbol-square symbol-deceased">
                ×
                </span>
            </td>
            <td>Hombre fallecido</td>
            </tr>

            <tr>
            <td>
                <span className="symbol-shape symbol-circle symbol-deceased">
                ×
                </span>
            </td>
            <td>Mujer fallecida</td>
            </tr>

            </tbody>
        </table>
        </section>
    );
}
