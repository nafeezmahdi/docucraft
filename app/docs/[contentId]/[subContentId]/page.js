import ContentDisplay from "@/components/ContentDisplay";

export default function SubContentPage({ params }) {
  const { subContentId } = params;

  return <ContentDisplay id={subContentId} />;
}
