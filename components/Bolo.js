import Link from "next/link";

const Bolo = ({data}) => {
  return (
    <article>
      <Link href={`/${data.id}`}>
        <div>
        <a>{data.title}</a>
        <p>{data.description}</p>
        </div> 
      </Link>
    </article>
  );
};

export default Bolo;
