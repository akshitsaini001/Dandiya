import React from 'react';

function Card({ name, image, number }) {
  const rawNumber = number ? number.toString() : '';
  const cleanNumber = rawNumber.replace(/[^0-9+]/g, '');
  const digitsOnly = cleanNumber.replace(/\+/g, '');

  const defaultMessage = `Hi ${name || 'there'}, saw your profile for a Garba partner!`;
  const whatsappUrl = digitsOnly
    ? `https://wa.me/${digitsOnly}?text=${encodeURIComponent(defaultMessage)}`
    : '#';
  const callUrl = cleanNumber ? `tel:${cleanNumber}` : '#';

  const fallbackImage =
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80';

  return (
    /* col-12: 1 card per row on small & tablet screens
       col-lg-6: 2 cards per row on large desktop screens */
    <div className="col-12 col-lg-6 p-2">
      <div
        className="card border-0 rounded-4 overflow-hidden h-100 bg-white shadow-sm"
        style={{
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <div className="row g-0 h-100">
          {/* Profile Image */}
          <div className="col-5 position-relative">
            <img
              src={image || fallbackImage}
              alt={name || 'Partner Profile'}
              className="w-100 h-100 object-fit-cover"
              style={{
                minHeight: '210px',
                maxHeight: '260px',
                objectPosition: 'top center',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImage;
              }}
            />

            <span
              className="position-absolute top-0 start-0 m-2 badge rounded-pill px-2 py-1 text-white shadow-sm"
              style={{
                backgroundColor: '#D81B60',
                fontSize: '0.72rem',
                backdropFilter: 'blur(4px)',
              }}
            >
              ✨ Dandiya Ready
            </span>
          </div>

          {/* Details & Actions */}
          <div className="col-7 d-flex flex-column">
            <div className="card-body p-3 d-flex flex-column justify-content-between h-100">
              <div>
                <h5
                  className="card-title fw-bold text-dark mb-1 text-truncate"
                  title={name}
                >
                  {name || 'Dance Partner'}
                </h5>
                <p className="text-muted small mb-3 d-flex align-items-center">
                  <i className="bi bi-music-note-beamed text-warning me-1"></i>
                  <span>Ready for non-stop Raas beats</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2 mt-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm rounded-pill py-2 px-3 d-inline-flex align-items-center justify-content-center gap-2 text-white fw-semibold shadow-sm text-decoration-none"
                  style={{
                    backgroundColor: '#25D366',
                    border: 'none',
                  }}
                >
                  <i className="bi bi-whatsapp fs-6"></i>
                  <span>WhatsApp</span>
                </a>

                <a
                  href={callUrl}
                  className="btn btn-sm btn-outline-dark rounded-pill py-2 px-3 d-inline-flex align-items-center justify-content-center gap-2 fw-medium text-decoration-none"
                >
                  <i className="bi bi-telephone-fill text-primary"></i>
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;