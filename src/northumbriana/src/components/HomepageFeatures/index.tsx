import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: string; //React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Morpeth Northumbrian Gathering',
    //Svg: require('@site/static/img/Alex_Swailes_Town_Crier_2.png').default,
    Svg: require('@site/static/img/clarence-for-ads.gif').default,
    href: "gathering",
    description: (
      <>
        An exciting three-day annual festival of street entertainment, indoor events, music, dance, craft, dialect, heritage and traditional fun - held the weekend after Easter in the medieval market town of Morpeth, 14 miles north of Newcastle upon Tyne.
      </>
    ),
  },
  {
    title: 'Northumbrian Language Society',
    Svg: require('@site/static/img/nls-man.gif').default,
    href: "language-society",
    description: (
        <>
          The Northumbrian Language Society has existed since 1983 to promote, preserve, research, publish and enjoy those rich dialects from Northumberland to NW Durham (including Tyneside), descendants of the speech of the Angles, which have survived particularly in the Northumbrian 'burr' area.
        </>
    ),
  },
  {
    title: 'Northumbriana Events',
    Svg: require('@site/static/img/crawhall-guitar-woman.gif').default,
    href: "events",
    description: (
        <>
          Upcoming events run by the family of Northumbriana partners – concerts, talks, exhibitions and special themed activities.
        </>
    ),
  },
  {
    title: 'Morpeth Antiquarian Society',
    Svg: require('@site/static/img/mas-pretend-crawhall.png').default,
    href: "antiquarian-society",
    description: (
        <>
          The Society is your local history society, providing:
          lectures, exhibitions, research, and publications, founded in 1946.
        </>
    ),
  },
  {
    title: 'Northumbriana Magazine',
    Svg: require('@site/static/img/crawhall-printers.jpg').default,
    href: "magazine",
    description: (
        <>
          The magazine was launched in 1975 by its founder, Roland Bibby, its "frenzied editor", scribe, artist, sales distributor and treasurer until his untimely death in January 1997.
        </>
    ),
  },
];

function Feature({title, Svg, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={href} className={styles.featureCardLink} aria-label={title}>
        <div className="text--center">
          <img src={Svg} className={styles.featureSvg} role="img"  alt="image"/>
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
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
