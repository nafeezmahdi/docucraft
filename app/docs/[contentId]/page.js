import ContentDisplay from "@/components/ContentDisplay";

export default function ContextPage({ params }) {
  const { contentId } = params;
  return <ContentDisplay id={contentId} />;
}
