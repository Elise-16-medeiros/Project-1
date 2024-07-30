type HeadingProps = {
    description: string;
    title?: string;
}

export default function Heading({description, title}: HeadingProps) {
    return (
      <div>
        <p className="uppercase text-[#E58411] text-base">{title}</p>
        <h2 className="text-2xl font-bold text-start" dangerouslySetInnerHTML={{ __html: description }}></h2>
      </div>
    );
}
