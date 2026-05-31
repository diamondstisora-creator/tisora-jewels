export default function GoldDivider({ center = true }) {
  return (
    <div className="gold-divider" style={{ justifyContent: center ? 'center' : 'flex-start' }}>
      <div className="gold-divider__line" />
      <span className="gold-divider__diamond">✦</span>
      <div className="gold-divider__line" />
    </div>
  );
}
