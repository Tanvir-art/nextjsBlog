import Link from "next/link";

const page = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 py-10">
      {data.map((iteam) => (
        <Link key={iteam.id} href={`blog/${iteam.id}`}>
        <div  className="card  bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {iteam?.title}
          </h2>
        
        </div>
      </div>
      </Link>
      ))}
    </div>
  );
};

export default page;
