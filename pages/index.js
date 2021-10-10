import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// components
import Layout from "../components/Layout";
import About from "../components/About";

export default function Home() {
  return (
    <Layout>
      <About />
      
    </Layout>

  )
}
