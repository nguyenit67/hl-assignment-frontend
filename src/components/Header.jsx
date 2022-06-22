import { WEBSITE_NAME } from '@/constants/common';
import { Layout } from 'antd';

export default function Header() {
  // @ts-ignore
  return (
    <Layout.Header>
      <div className="container">
        <h1>{WEBSITE_NAME}</h1>
      </div>
    </Layout.Header>
  );
}
