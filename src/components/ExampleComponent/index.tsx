'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { tThemeName } from '@/types/styled';
import { useBoundStore } from '@/store/useBoundStore';

import { Button, CustomLink, MainContainer } from './styles';

export const ExampleComponent = (): JSX.Element => {
  const t = useTranslations('common');
  const { themeName, onChangeTheme } = useBoundStore((state) => state);
  const [currentThemeName, setCurrentThemeName] = useState<tThemeName>('light');
  const [currentLocale, setCurrentLocale] = useState('pt-br');

  const handleChangeTheme = (): void => {
    if (themeName === 'light') {
      onChangeTheme('dark');
      return;
    }

    onChangeTheme('light');
  };

  const handleChangeLocale = (): void => {
    if (currentLocale === 'pt-br') {
      setCurrentLocale('en');
      return;
    }

    setCurrentLocale('pt-br');
  };

  useEffect(() => {
    if (themeName === 'light') {
      setCurrentThemeName('dark');
      return;
    }

    setCurrentThemeName('light');
  }, [themeName]);

  return (
    <MainContainer>
      <div className='description'>
        <p>
          Get started by editing&nbsp;
          <code className='code'>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='vercelLogo'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className='center'>
        <Button onClick={handleChangeTheme} as='a'>
          {t('btn-label-one', {
            name: currentThemeName
          })}
        </Button>
        <CustomLink
          href='/'
          locale={currentLocale}
          onClick={handleChangeLocale}
        >
          {t('btn-label-two', {
            lang: currentLocale
          })}
        </CustomLink>
      </div>

      <div className='center'>
        <Image
          className='logo'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='grid'>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='card'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='card'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='card'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='card'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </MainContainer>
  );
};
