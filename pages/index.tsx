import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Opiná sobre Enero Costanera</title>
        <meta
          name="description"
          content="Dejanos tu reseña en Google sobre tu experiencia en Enero Costanera."
        />
        <meta
          name="google-site-verification"
          content="2_LRr1twtNtAgbAF79JL6lRsvjJzvm05yA1CPIjkrn0"
        />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Gracias por visitarnos 🍽️</h1>
        <p>Serás redirigido a nuestra página de reseñas en Google en unos segundos.</p>

        <a
          href="https://search.google.com/local/writereview?placeid=ChIJLacwtXu1vJURGCvVrKf1bA4"
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Dejar reseña ahora
        </a>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(() => {
                window.location.href = "https://search.google.com/local/writereview?placeid=ChIJLacwtXu1vJURGCvVrKf1bA4";
              }, 4000);
            `,
          }}
        />
      </main>
    </>
  );
}
