import React from 'react';
import { Col, Row, Typography, Layout, Card, Input, Checkbox, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './App.css';

const { Title, Link } = Typography;

function App() {
  return (
    <Layout style={{ maxWidth: 1360, margin: '0 auto', marginTop: 40 }}>
      <Card style={{ borderRadius: 20, padding: '80px' }}>
        <Row>
          {/* left */}
          <Col span={12}>
            <Row style={{ gap: 40, flexDirection: 'column', padding: '0 40px' }}>
              {/* title */}
              <Title style={{ fontWeight: 700 }}>Sign Up</Title>

              {/* fields */}
              <Row style={{ flexDirection: 'column', gap: 20 }}>
                <Input
                  placeholder="Your name"
                  prefix={<UserOutlined style={{ marginRight: 10 }} />}
                  style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0', boxShadow: 'none' }}
                />
                <Input
                  placeholder="Your email"
                  type='email'
                  prefix={<MailOutlined style={{ marginRight: 10 }} />}
                  style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0', boxShadow: 'none' }}
                />
                <Input
                  placeholder="Your password"
                  type='password'
                  prefix={<LockOutlined style={{ marginRight: 10 }} />}
                  style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0', boxShadow: 'none' }}
                />
                <Input
                  placeholder="Repeat your password"
                  type='password'
                  prefix={<LockOutlined style={{ marginRight: 10 }} />}
                  style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0', boxShadow: 'none' }}
                />
                <Checkbox style={{ margin: '0 10px' }}>I agree all statements in <Link>Terms of Service</Link> </Checkbox>
              </Row>

              <Button type="primary" style={{ width: 'fit-content', padding: '0 40px', height: '60px' }}>Register</Button>
            </Row>
          </Col>

          {/* right */}
          <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Row style={{ flexDirection: 'column', gap: 10 }}>
              <img src='/images/bg.jpg' alt='bg' style={{ width: '100%', height: 'auto' }} />

              <Link style={{ textAlign: 'center', textDecoration: 'underline' }}>I am already memeber</Link>
            </Row>
          </Col>
        </Row>
      </Card>
    </Layout>
  );
}

export default App;
