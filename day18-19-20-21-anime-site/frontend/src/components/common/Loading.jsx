export default function Loading() {
  return (
    <>
      <div className="mt-10 items-center justify-center text-center text-xl font-semibold text-white">
        <img
          style={{ mixBlendMode: "hard-light" }}
          className="w-full overflow-hidden"
          src="/loading.gif"
        ></img>
        <div className="mt-8">Loading ...</div>
      </div>
    </>
  );
}
