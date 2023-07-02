import Image from 'next/image';

export const Player = () => {
  return (
    <div className="max-h-[430px] max-w-[276px] rounded-2xl bg-grayPlayer">
      <div className="flex flex-col gap-[30px] p-8">
        <h2 className="text-center text-white"> Now playing</h2>
        <Image
          src="https://fakeimg.pl/215x129"
          width={215}
          height={129}
          priority
          alt="Picture of the author"
        />
        <div>
          <h2 className="text-center text-white">A Promised Land</h2>
          <h3 className="text-center text-white"> Barack Obama</h3>
        </div>
        <div>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </button>
          <input type="button" />
          <input type="button" />
          <input type="button" />
          <input type="button" />
        </div>
      </div>
    </div>
  );
};
