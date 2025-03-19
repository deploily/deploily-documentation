import React from "react";
import styles from "./styles.module.css"; // Create CSS module for styling if needed.

const features = [
  {
    title: "EFFORTLESS DEPLOYMENT SIMPLIFIED",
    description:
      "Skip the complexities of DevOps! With Deploily, just connect your Git repo, configure your settings, and deploy in seconds — no expertise needed. Whether you're a solo developer or a growing team, Deploily streamlines your workflow, eliminating technical barriers so you can focus on building, not troubleshooting. Deploy faster, smarter, and .",
    image: "/img/devops.png",
  },
  {
    title: "INFRASTRUCTURE MADE EASY",
    description:
      "Deploying your app is just the beginning! With Deploily, you can easily set up the infrastructure your solution requires, including databases, storage, and networking. We provide everything your application needs to run smoothly, with scalable and customizable environments that grow with you. Simplify infrastructure management and let Deploily handle the heavy lifting!",
    image: "/img/infrastructure.png",
  },
  {
    title: "APIS SIMPLIFIED FOR INNOVATION",
    description:
      "Unlock the full potential of your applications with our powerful and easy- to - use API services.Seamlessly integrate authentication, databases, and real - time data—without the hassle of backend management.Whether you're launching a startup, scaling an enterprise, or prototyping your next big idea, our APIs handle the complexity, so you can focus on innovation. No server setup, no maintenance—just fast, efficient development.",
    image: "/img/api.png",
  },
];

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.featureCard} ${index % 2 !== 0 ? styles.reverse : ""}`}
        >
          <img src={feature.image} alt={feature.title} className={styles.featureImage} />
          <div className={styles.featureText}>
            <h3>{feature.title}</h3>
            <h4>{feature.description}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
