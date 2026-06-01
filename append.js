const fs = require('fs');
const css = `
/* For mobile responsive modal */
@media (max-width: 768px) {
  .modal-body {
    grid-template-columns: 1fr;
  }
  .modal-image {
    min-height: 200px;
    border-right: none;
    border-bottom: 2px solid rgba(212, 160, 23, 0.3);
  }
}
`;
fs.appendFileSync('styles.css', css);
