export function errorHandler(err, req, res, next) {
  console.error("ERRO:", err.message);
  res.status(400).json({ error: err.message });
}
