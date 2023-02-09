import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center "
    >
      <h1 className="mb-10 font-dm text-2xl">Oops!</h1>
      <p>Sorry🙁, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
