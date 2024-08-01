type HeadingProps = {
    description: string;
    title?: string;
}

export default function Heading({description, title}: HeadingProps) {
    return (
      <div className="flex flex-col justify-start items-start gap-y-4">
        <p className="uppercase text-[#E58411] text-sm font-semibold">{title}</p>
        <h2 className="text-3xl font-bold text-start capitalize text-wrap">{description}</h2>
      </div>
    );
}

