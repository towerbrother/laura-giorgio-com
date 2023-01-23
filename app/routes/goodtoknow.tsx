import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  title: 'Good to know 😎',
});

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-5xl text-neutral-800 mt-20">
        Coming soon...
      </h1>
    </div>
  );
}
