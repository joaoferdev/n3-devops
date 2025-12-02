export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        width: "400px",
      }}>
        {children}
      </div>
    </div>
  );
}
