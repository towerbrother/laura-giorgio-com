import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  title: 'Good to know 😎',
});

export default function Index() {
  return (
    <h1 style={{ textAlign: 'center', padding: '200px 0px', fontSize: '58px' }}>
      Coming soon...
    </h1>
  );
}
