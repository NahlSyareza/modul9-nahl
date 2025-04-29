export default function Card({ content }) {
  return (
    <div className="rounded-xl text-white bg-gray-700 w-[500px] m-2">
      <div className="m-2">
        <p>User ID: {content.userId}</p>
        <p>ID: {content.id}</p>
        <p>Title: {content.title}</p>
        <p>Body: {content.body}</p>
        <p>Image:</p>
        <img src={content.image} />
      </div>
    </div>
  );
}
