import { TailSpin } from 'react-loader-spinner';
import css from '../Styles/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="rgb(255, 136, 0)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
