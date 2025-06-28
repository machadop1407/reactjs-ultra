const data = await new Promise((resolve) =>
  setTimeout(() => resolve("Data Was Loaded!"), 3000)
);

export default function MyWidget() {
  return <div> My Widget Component </div>;
}
