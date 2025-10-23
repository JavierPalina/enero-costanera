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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <p style={{ maxWidth: 500, marginBottom: 20 }}>
          En Enero Costanera valoramos tu opinión.  
          En unos segundos te redirigiremos a nuestra página de reseñas en Google.
        </p>

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
