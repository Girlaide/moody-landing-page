import { Button } from './Button';
import HeroImg from '../assets/background.png';
export function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:*:grid-cols-2 min-h-[650] relative">
        <div className="flex flex-col justify-center py-14 md:py-0 ">
          <div className="flex justify-center items-center">
            <img
              src={HeroImg}
              alt="hero-image"
              className="w-[350px] h-[750px] md:w-[450px] md:h-[650px] xl:w-[9100px] ps-5 pl-2 pr-2  p-15  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
