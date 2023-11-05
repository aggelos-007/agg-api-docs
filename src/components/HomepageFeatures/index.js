import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Friendly',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Agg-API is begginer friendly with a lot of codes to use the API are displayed in our community
      </>
    ),
  },
  {
    title: 'Online 24/7',
    Svg: require('@site/static/img/lighting.svg').default,
    description: (
      <>
        This API is running 24/7 without any problems and has 100% uptime most of the time
      </>
    ),
  },
  {
    title: 'No Ratelimits',
    Svg: require('@site/static/img/monitor.svg').default,
    description: (
      <>
        No more worries on ratelimits! You can use the endpoints whenever you want with no Ratelimites
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
