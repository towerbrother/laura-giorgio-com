import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

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
    <S.Wrapper>
      <S.Left>
        <S.LeftInnerWrapper>
          {left1.map(({ src }) => (
            <S.SmallImg key={uuidv4()} src={src} alt={src} />
          ))}
        </S.LeftInnerWrapper>
        <S.LeftInnerWrapper>
          {left2.map(({ src }) => (
            <S.SmallImg key={uuidv4()} src={src} alt={src} />
          ))}
        </S.LeftInnerWrapper>
      </S.Left>
      <S.Right>
        {right.map(({ src }) => (
          <S.BigImg key={uuidv4()} src={src} alt={src} />
        ))}
      </S.Right>
    </S.Wrapper>
  );
};

export default Photos;
