import { v4 as uuidv4 } from 'uuid';

type PhotoProps = { src: string };

export type PhotosProps = { photos: Array<PhotoProps> };

const shuffle = (array: Array<PhotoProps>) => {
  let currentIndex = array.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const Photos = ({ photos }: PhotosProps) => {
  const shuffledPhotos = shuffle(photos);
  const selectedPhotos = shuffledPhotos.slice(0, 5);

  const left1 = [selectedPhotos[0], selectedPhotos[1]];
  const left2 = [selectedPhotos[2], selectedPhotos[3]];
  const right = [selectedPhotos[4]];

  const leftInnerClassName = 'flex flex-col justify-around lg:flex-row';

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100 pt-8 px-0 pb-5 md:p-10 lg:flex-row lg:p-15">
      <div className="flex flex-col justify-around">
        <div className={leftInnerClassName}>
          {left1.map(({ src }) => (
            <img
              key={uuidv4()}
              src={src}
              alt={src}
              className="h-auto w-80 m-2 rounded-sm md:w-136 lg:w-52 xl:w-64"
            />
          ))}
        </div>
        <div className={leftInnerClassName}>
          {left2.map(({ src }) => (
            <img
              key={uuidv4()}
              src={src}
              alt={src}
              className="h-auto w-80 m-2 rounded-sm md:w-136 lg:w-52 xl:w-64"
            />
          ))}
        </div>
      </div>
      <div className="flex">
        {right.map(({ src }) => (
          <img
            key={uuidv4()}
            src={src}
            alt={src}
            className="h-auto w-80 m-2 rounded-sm md:w-136 lg:w-[432px] xl:w-[527px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
