export const metadata = {
  title: "Burgos Abogados",
  description: "Despacho jurídico en Mérida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}