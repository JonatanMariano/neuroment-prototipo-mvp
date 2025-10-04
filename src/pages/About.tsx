//src/pages/About.tsx
import React from "react";
import colors from "../styles/colors";
import Logo from "../assets/icons/logo.png";

const About: React.FC = () => {
  const styles = {
    page: {
      backgroundColor: colors.white,
      color: colors.tealDark,
      minHeight: "100vh",
      width: "100%",
      padding: "20px",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column" as const,
    },
    header: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: "40px",
    },
    logo: {
      height: "50px",
    },
    content: {
      flex: 1,
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
      width: "100%",
    },
    section: {
      marginBottom: "24px",
    },
    links: {
      marginTop: "20px",
    },
    link: {
      color: colors.tealMedium,
      textDecoration: "underline",
      display: "block",
      marginBottom: "8px",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <img src={Logo} alt="NeuroMent Logo" style={styles.logo} />
      </header>

      <main style={styles.content}>
        <section style={styles.section}>
          <h1>About NeuroMent</h1>
          <p>
            NeuroMent is an academic and technological project designed to
            provide a personalized learning platform based on neuroscience and
            artificial intelligence. It was created for students and
            professionals who face difficulties with focus, organization, and
            engagement in their studies.
          </p>
          <p>
            Combining principles such as brain plasticity, biological rhythms,
            and strategic gamification, NeuroMent helps users create adaptive
            study plans that respect their own learning pace.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Useful Links</h2>
          <div style={styles.links}>
            <a href="/plans" style={styles.link}>
              Plans and subscriptions
            </a>
            <a href="mailto:support@neuroment.com.br" style={styles.link}>
              Contact: support@neuroment.com.br
            </a>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Icon Credits</h2>
          {/* Empty section as requested */}
        </section>
      </main>
    </div>
  );
};

export default About;
