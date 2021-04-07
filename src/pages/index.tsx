import { GetStaticProps } from 'next';
import Head from 'next/head';
import { stripe } from '../services/stripe';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
    type: string;
    name: string;
    period: string;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | DevNews</title>
      </Head>

      <main className={styles.home_container}>
        <section className={styles.home_content}>
          <h1>É conteúdo de <span>tecnologia</span> que você precisa aprender?</h1>

          <p className={styles.subtitle}>Aqui você encontra assuntos em primeira mão sobre as áreas de Front-end, Back-end, Full-Stack e DevOps.</p>
          <p className={styles.titlePrice}>Por apenas <span>{product.amount}</span> mensal</p>
          
          <div className={styles.colButtons}>
            <SubscribeButton priceId={product.priceId} />
            <a href="#" className={styles.btnAbout}>Sobre Nós</a>
          </div>
        </section>

        <img src="/images/avatar.svg" alt=""/>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IdcKTCCKHCZ5ZutN0Ol07ys', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
    // type: price.type,
    name: price.nickname,
    // period: price.recurring.interval,
  };
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 Horas
  }
}