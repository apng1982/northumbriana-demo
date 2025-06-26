import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Morpeth Northumbrian Gathering',
    Svg: require('@site/static/img/Alex_Swailes_Town_Crier_2.png').default,
    href: "gathering",
    description: (
      <>
        An exciting three-day annual festival of street entertainment, indoor events, music, dance, craft, dialect, heritage and traditional fun - held the weekend after Easter in the medieval market town of Morpeth, 14 miles north of Newcastle upon Tyne.
      </>
    ),
  },
  {
    title: 'Morpeth Antiquarian Society',
    Svg: require('@site/static/img/Morpeth_Clock_Tower.png').default,
    href: "antiquarian-society",
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
    href: "language-society",
    description: (
        <>
          The Northumbrian Language Society has existed since 1983 to promote, preserve, research, publish and enjoy those rich dialects from Northumberland to NW Durham (including Tyneside), descendants of the speech of the Angles, which have survived particularly in the Northumbrian 'burr' area.
        </>
    ),
  },
  {
    title: 'Northumbriana Magazine',
    Svg: require('@site/static/img/Magazine.png').default,
    href: "magazine",
    description: (
        <>
          The magazine was launched in 1975 by its founder, Roland Bibby, its "frenzied editor", scribe, artist, sales distributor and treasurer until his untimely death in January 1997.
        </>
    ),
  },
  {
    title: 'Northumbriana Events',
    Svg: require('@site/static/img/Events.png').default,
    href: "events",
    description: (
        <>

        </>
    ),
  }
];

function Feature({title, Svg, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img"  alt="image"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={href}><h3>{title}</h3></Link>
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
