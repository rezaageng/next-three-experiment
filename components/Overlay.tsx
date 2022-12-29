import Image from 'next/image';

const Overlay = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-end">
      <div className="w-full flex justify-between p-10">
        <h1 className="text-4xl tracking-widest">&#47;&#47; kaizinn</h1>
        <a
          className="flex items-center"
          href="https://github.com/rezaageng/next-three-experiment"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width={32}
            height={32}
            src="/assets/icons/github.svg"
            alt="github icon"
          />
        </a>
      </div>
    </div>
  );
};
export default Overlay;
