import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSource: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Лучшие инструменты',
    imgSource: 'img/MainPageFeatures/toolbox.png',
    description: (
      <>
        На этом сайте я собрал инструменты которые были проверенны мною в боевых
        условиях и коротко описал их возможности
      </>
    ),
  },
  {
    title: 'Мой блог',
    imgSource: 'img/MainPageFeatures/blog.png',
    description: (
      <>
        В разделе блога я буду делиться своими успехами как в жизни так и в
        программировании
      </>
    ),
  },
  {
    title: 'Вы тоже участник',
    imgSource: 'img/MainPageFeatures/ITCommunity.png',
    description: (
      <>
        Весь код этого сайта находиться в открытом доступе и вы всегда можете
        дополнить его контентом или исправить ошибки в статьях
      </>
    ),
  },
];

function Feature({title, imgSource, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={imgSource}
          className="w-[200px] h-[112.5px] rounded-[10px]"
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
