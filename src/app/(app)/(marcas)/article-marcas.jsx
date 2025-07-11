export default function ArticleMarcas({ url, alter }) {
  return (
    <article className="!max-w-50">
      <img src={url.src} alt={alter} />
    </article>
  );
}

