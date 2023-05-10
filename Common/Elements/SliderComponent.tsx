import { ReactNode, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export type ItemSliderProps = {
   children: ReactNode;
   key: number | string;
}


function SliderComponent(props: ItemSliderProps) {
    const sliderRef = useRef(null);
    const [slider, setSliderRef] = useKeenSlider();

    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 2,
        },
    })

    useEffect(() => {
        if (ref) {
            console.log('slider')
        }
    }, [ref]);

    return (
        <div ref={sliderRef} className="keen-slider">
            {props.children}
        </div>
    );
}

export default SliderComponent;
