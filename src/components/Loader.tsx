import Image from 'next/image'

const Loader = () => {
  return (
      <Image
          alt="loader"
          height={150}
          width={150}
          src="/loading-unscreen.gif"
      />
  );
}

export default Loader
