import { WEBSITE_NAME } from '@/constants/common';
import { Layout } from 'antd';

export default function Footer() {
  // @ts-ignore
  return (
    <Layout.Footer>
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {WEBSITE_NAME}. All rights reserved.
        </p>
      </div>
    </Layout.Footer>
  );
}
