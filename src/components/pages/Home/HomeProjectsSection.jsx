import { Splide, SplideSlide } from '@splidejs/react-splide';
import { projectData } from '../../../constants/common';
import SpotlightCard from '../../widgets/SpotlightCard';
import Tilt from "react-parallax-tilt";
export default function HomeProjectsSection() {
    return (
        <div>
            <div id='projectSection' className="container p-6 mt-10">
                <h2 className="border-b border-gray-400 pb-2 mb-4">Projects</h2>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: 'slide',
                        perPage: 3,
                        perMove: 1,
                        snap: true,
                        pagination: false,
                        arrows: true,
                        gap: "20px",
                    }}
                >
                    {projectData.map((v) => {
                        return (<SplideSlide>
                            <SpotlightCard className="h-full bg-gray-900" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <Tilt tiltReverse className='h-full'>
                                    <img src={v.image} className='w-full h-[250px] object-cover rounded-t-2xl' alt="project image" />
                                    <div className='p-6'>
                                        <h3 className="text-xl font-semibold">{v?.title}</h3>
                                        <p className="text-gray-200 text-lg">(skills: {v.skills})</p>
                                        <p className="text-gray-300 mt-2">{v.description} {v.description}</p>
                                    </div>
                                </Tilt>
                            </SpotlightCard>
                        </SplideSlide>)
                    })}
                </Splide>
            </div>
        </div>
    )
}
