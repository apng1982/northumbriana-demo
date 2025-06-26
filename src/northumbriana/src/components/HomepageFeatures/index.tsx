import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Morpeth Northumbrian Gathering',
    Svg: require('@site/static/img/Alex_Swailes_Town_Crier_2.png').default,
    description: (
      <>
        An exciting three-day annual festival of street entertainment, indoor events, music, dance, craft, dialect, heritage and traditional fun - held the weekend after Easter in the medieval market town of Morpeth, 14 miles north of Newcastle upon Tyne.
      </>
    ),
  },
  {
    title: 'Morpeth Antiquarian Society',
    Svg: require('@site/static/img/Morpeth_Clock_Tower.png').default,
    description: (
      <>
        The Society is your local history society, providing:
        lectures, exhibitions, research, and publications, founded in 1946.
      </>
    ),
  },
  {
    title: 'Northumbrian Language Society',
    Svg: require('@site/static/img/Northumbrian_Language_Society.png').default,
    description: (
        <>
          The Northumbrian Language Society has existed since 1983 to promote, preserve, research, publish and enjoy those rich dialects from Northumberland to NW Durham (including Tyneside), descendants of the speech of the Angles, which have survived particularly in the Northumbrian 'burr' area.
        </>
    ),
  },
  {
    title: 'Northumbriana Magazine',
    Svg: require('@site/static/img/Magazine.png').default,
    description: (
        <>
          The magazine was launched in 1975 by its founder, Roland Bibby, its "frenzied editor", scribe, artist, sales distributor and treasurer until his untimely death in January 1997.
        </>
    ),
  },
  {
    title: 'Northumbriana Events',
    Svg: require('@site/static/img/Events.png').default,
    description: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
          ahead and move your docs into the <code>docs</code> directory.
        </>
    ),
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img"  alt="image"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
