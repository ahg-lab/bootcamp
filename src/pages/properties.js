import Paragraph from "@components/paragraph";
import Title from "@components/title";

export default function Properties() {
  return (
    <>
      <div>
        <p>PROPERTIES</p>
      </div>
      <div>
        <Title name="A" school="B" mall="C" />
        <Paragraph name="A" school="B" mall="C" />
      </div>
    </>
  );
}
