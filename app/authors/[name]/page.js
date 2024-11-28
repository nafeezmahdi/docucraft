import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments();
  // console.log(docs);
  const matchedDocs = getDocumentsByAuthor(docs, name);
  // console.log(matchedDocs);

  return <ContentDisplay id={matchedDocs[0]?.id} />;
}
