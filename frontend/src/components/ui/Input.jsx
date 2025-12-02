export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: 10 }}>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
}
