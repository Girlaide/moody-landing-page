import { Button } from './Button';
import HeroImg from '../assets/background.png';
export function Hero() {
  return (
    <section>
      <div>
        <div>
          <img
            src={HeroImg}
            alt="hero-image"
            className="w-[350px] h-[750px] md:w-[500px] md:h-[800px] xl:w-[9110px] ps-5 pl-2 pr-2 p-18  "
          />
        </div>
      </div>
    </section>
  );
}
