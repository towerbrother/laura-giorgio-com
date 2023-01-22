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

  return (
    <div>
      <div>
        <div>
          {left1.map(({ src }) => (
            <img key={uuidv4()} src={src} alt={src} />
          ))}
        </div>
        <div>
          {left2.map(({ src }) => (
            <img key={uuidv4()} src={src} alt={src} />
          ))}
        </div>
      </div>
      <div>
        {right.map(({ src }) => (
          <img key={uuidv4()} src={src} alt={src} />
        ))}
      </div>
    </div>
  );
};

export default Photos;

/*
 * export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 20px 0px;
  background-color: ${colors.offWhite};

  @media ${devices.tablet} {
    padding: 40px;
  }

  @media ${devices.laptop} {
    flex-direction: row;
    padding: 60px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LeftInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const Right = styled.div`
  display: flex;
`;

export const SmallImg = styled.img`
  height: auto;
  width: 320px;
  margin: 10px;
  border-radius: 3px;

  @media ${devices.tablet} {
    width: 550px;
  }

  @media ${devices.laptop} {
    width: 200px;
  }

  @media ${devices.laptopL} {
    width: 250px;
  }
`;

export const BigImg = styled.img`
  height: auto;
  width: 320px;
  margin: 10px;
  border-radius: 3px;

  @media ${devices.tablet} {
    width: 550px;
  }

  @media ${devices.laptop} {
    width: 420px;
  }

  @media ${devices.laptopL} {
    width: 520px;
  }
`;

 */
