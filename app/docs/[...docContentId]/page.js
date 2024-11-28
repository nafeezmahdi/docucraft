export default function page({ params }) {
  const { docContentId } = params;

  return <div>{docContentId}</div>;
}
