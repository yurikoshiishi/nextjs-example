import Head from 'next/head';
import { useAmp } from 'next/amp';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Header } from './Layout.styles';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  const isAmp = useAmp();

  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            {isAmp ? (
              <amp-img
                src="/images/profile.jpg"
                className="borderCircle"
                height={144}
                width={144}
                alt={name}
              />
            ) : (
              <Image
                priority
                src="/images/profile.jpg"
                className="borderCircle"
                height={144}
                width={144}
                alt={name}
              />
            )}
            <h1 className="heading2Xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href={isAmp ? '/?amp=1' : '/'}>
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="borderCircle"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="headingLg">
              <Link href={isAmp ? '/?amp=1' : '/'}>
                <a className="colorInherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <div className=".backToHome">
          <Link href={isAmp ? '/?amp=1' : '/'}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Layout;
