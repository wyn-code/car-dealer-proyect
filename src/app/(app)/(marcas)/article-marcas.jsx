export default function ArticleMarcas({ img, alter, url }) {
  return (
    <article className="h-50 !max-w-50">
      <a href={url} className="w-full h-full flex items-center justify-center">
        <img src={img} alt={alter} />
      </a>
    </article>
  );
}
