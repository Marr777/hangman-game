import styles from './lives-count.styles.module.scss';
import cn from 'classnames';
type LivesCountProps = {
  lives: number;
}

const LIVES_TOTAL = 6;

export default function LivesCount ({lives} : LivesCountProps) {

  const livesClass = cn(styles.lives, {
    [styles.lives_1]: lives === 1,
    [styles.lives_2]: lives === 2,
    [styles.lives_3]: lives === 3,
    [styles.lives_4]: lives === 4,
    [styles.lives_5]: lives === 5,
    [styles.lives_6]: lives === 6,
  });

  return(
    <div className={livesClass}>
      {Array.from({length: LIVES_TOTAL}).map((_, index) => (
        <svg
          key={index}
          width={22}
          height={20}
          viewBox="0 0 22 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.77216 1.77216C-0.59072 4.13503 -0.590718 7.96602 1.77216 10.3289L10.937 19.4937L11 19.4307L11.0631 19.4938L20.2279 10.329C22.5908 7.96609 22.5908 4.13511 20.2279 1.77223C17.865 -0.590642 14.034 -0.59064 11.6712 1.77224L11.3536 2.08978C11.1584 2.28505 10.8418 2.28505 10.6465 2.08978L10.3289 1.77216C7.96601 -0.590719 4.13503 -0.590718 1.77216 1.77216Z"
          />
        </svg>
      ))}
    </div>
  );
}
