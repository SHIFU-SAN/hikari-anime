import "./assets/css/globals.css"

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="bg-neutral-300">{children}</body>
        </html>
    )
}