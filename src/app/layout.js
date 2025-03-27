import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";



export const metadata = {
  title: "Перевозка и доставка сборных грузов по выгодной цене – компания TransNext",
  description: "Выполним перевозку и доставку сборных грузов, контейнеров автомобильным транспортом, в жд контейнерах – рассчитать стоимость вы можете на сайте или по тел: +7(966)0113995",
  openGraph: {
    title: "Перевозка и доставка сборных грузов по выгодной цене – компания TransNext",
    description: "Выполним перевозку и доставку сборных грузов, контейнеров автомобильным транспортом, в жд контейнерах – рассчитать стоимость вы можете на сайте или по тел: +7(966)0113995",
    url: "https://transnext.ru/", // Укажи свой домен
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="ico.png" type="image/x-icon" />
        </head>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
