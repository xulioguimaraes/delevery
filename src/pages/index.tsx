

import type { NextPage } from 'next'
import Head from 'next/head'
import { ListButtonHome } from "../components/ListButtonHome/ListButtonHome"
import {FooterPage} from "../components/FooterPage/FooterPage"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Kawaii Sushi</title>
      </Head>
      <ListButtonHome/>
      <FooterPage/>
    </>
  )
}

export default Home
