import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { skillsData } from '../../../constants/common';

export default function HomeSkillsSection() {
    return (
        <div>
            <div id='skillsSection' className="container bg-gray-800 p-6 mt-7">
                <h2 className="border-b border-gray-400 pb-2 mb-4">My Skills</h2>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: 'loop',
                        drag: 'free',
                        perPage: 6,
                        pagination: false,
                        arrows: false,
                        gap: "20px",
                        autoScroll: {
                            speed: 1,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {skillsData.map(({ image, name }, index) => {
                        return <SplideSlide key={"skills " + index}>
                            <img className='h-[150px] mx-auto rounded-xl' src={image} alt={name} />
                            <h3 className='text-center mt-2'>{name}</h3>
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </div>
    )
}
