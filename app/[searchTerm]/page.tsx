import getWikiResults from "../lib/getWikiResults";
import notFound from "../users/[userId]/not-found";
type Props = {
  params: {
    searhTerm: string;
  };
};

export default async function SearchResults({ params: { searhTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searhTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  //   if (!data) {
  //     return notFound();
  //   }
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <p>{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searhTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
