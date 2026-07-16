export default function ContactMap({ address }) {
  const query = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="w-full h-72 rounded-xl overflow-hidden border border-border">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Blinks Global Business"
      />
    </div>
  );
}