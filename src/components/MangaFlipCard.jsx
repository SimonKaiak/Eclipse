import React, { useState } from "react";

export default function MangaFlipCard({
  coverUrl,
  tomoLabel = "Tomo 1",
  chapters = [],

  // ✅ Control de título:
  showLabelFront = true,   // "Tomo 1" aparece al frente (sin girar)
  showLabelBack = false,   // "Tomo 1" NO aparece atrás
}) {
  const [flipped, setFlipped] = useState(false);

  const onCardClick = () => {
    if (!flipped) setFlipped(true);
  };
  const openChapter = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`mflip ${flipped ? "is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onCardClick();
      }}
      aria-label={`Abrir ${tomoLabel}`}
    >
      <div className="mflip__inner">
        {/* FRONT */}
        <div className="mflip__face mflip__front">
          <img className="mflip__img" src={coverUrl} alt={tomoLabel} />
          {showLabelFront && <div className="mflip__caption">{tomoLabel}</div>}
        </div>

        {/* BACK */}
        <div className="mflip__face mflip__back">
          {showLabelBack && <div className="mflip__backTitle">{tomoLabel}</div>}

          {/* ✅ NUEVO: título arriba del grid */}
          <div className="mflip__chaptersTitle">Capítulos</div>

          <div className="mflip__chaptersGrid">
            {chapters.map((cap) => (
              <button
                key={cap.number}
                type="button"
                className="mflip__chapter"
                onClick={(e) => openChapter(e, cap.url)}
                aria-label={`Leer capítulo ${cap.number}`}
              >
                {cap.number}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mflip__btn mflip__btn--ghost"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(false);
            }}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}