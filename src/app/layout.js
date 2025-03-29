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
  
{/* Yandex.Metrika */}
<script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t), a=e.getElementsByTagName(t)[0], k.async=1, k.src=r, a.parentNode.insertBefore(k,a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100664947, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
          `}} />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/100664947"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

      </body>
    </html>
  );
}
