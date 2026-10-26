import "../assets/styles/FamilyHistory.css";
import pdfUrl from "../assets/documents/historia-familiar.pdf";

export default function FamilyHistory() {
    return (
        <section className="family-history" id="historia">
            <div className="family-history__header">
                <span className="family-history__eyebrow">
                    NUESTRA MEMORIA FAMILIAR
                </span>

                <h2>La historia de nuestra familia</h2>

                <p>
                    Un recorrido por los recuerdos, las experiencias y
                    las generaciones que forman nuestra historia familiar.
                </p>

                <a
                    className="family-history__button"
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver PDF en otra pestaña
                    <span aria-hidden="true">↗</span>
                </a>
            </div>

            <div className="family-history__viewer">
                <iframe
                    src={pdfUrl}
                    title="Historia de nuestra familia"
                    className="family-history__pdf"
                />
            </div>
        </section>
    );
}

