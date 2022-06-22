import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Layout } from 'antd';

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Header />

      <Layout.Content>{children}</Layout.Content>

      <Footer />
    </Layout>
  );
}
