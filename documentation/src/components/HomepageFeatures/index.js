import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build Deployment Infrastructure',
    imageSrc: '/img/deployement.webp', 
    description: (
      <>
        Our platform simplifies building and managing deployment infrastructure. Whether for a single app or multiple services, our
        scalable solutions grow with you. We provide tools for seamless pipelines, automated scaling, and customizable environments 
        to ensure a robust, reliable system.
      </>
    ),
  },
  {
    title: 'API Services',
    imageSrc: '/img/api.webp', 
    description: (
      <>
        Our API offers powerful, easy-to-use endpoints for integrating features like authentication, databases, and real-time data.
        Simplify backend complexity and focus on building your app—no server setup, just seamless integration for faster development.
      </>
    ),
  },
  {
    title: 'Deploy from Git Without DevOps',
    imageSrc: '/img/git.webp', 
    description: (
      <>
       
        Forget traditional DevOps complexities. With our platform, deploy projects 
        directly from Git with a few clicks—no DevOps experience needed. Connect your
         repository, configure settings, and deploy quickly, streamlining the process 
         and getting your code live faster.
      </>
    ),
  },
];

function Feature({ imageSrc, title, description }) { // Ajout de `description` ici
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} alt={title} style={{ width: '100%', height: 'auto', maxWidth: '150px' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p> {/* Utilisation correcte de `description` */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
