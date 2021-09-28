import Image from 'next/image';
import Location from '../public/location.png'
import RightIcon from './RightIcon';

const titles = {
    'Area': 'area',
    'Return Target': 'returnTarget', 
    'Price psf': 'pricePsf',
    'Funding Status':'fundStatus',
    'Yield':'yield'
}

const Card = ({each}) => {
    const color = each.funded < 100 ? '#CB912C' : '#0F524B';
    const statement = each.funded < 100 ? 'Invest now': 'View Opportunity';
    const containerClass = each.funded < 100 ? 'relative w-full lg:flex bg-white rounded-xl shadow-md overflow-hidden max-w-xl md:max-w-2xl lg:max-w-7xl' : 'rounded-xl relative overflow-hidden shadow-lg';
    const imgClass = each.funded < 100 ? 'h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' : 'w-full h-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden';
    const subContainClass = each.funded < 100 ? 'flex flex-col md:flex md:flex-row w-full' : 'flex-col';
    const contentClass = each.funded < 100 ? 'p-6 md:p-10 lg:p-16 w-auto bg-white' : 'p-6 md:p-8 w-auto bg-white';
    const status = each.funded < 100 ? 'ACTIVE' : 'FUNDED';
    return (
        <div className={containerClass}>
            <span className="absolute md:flex-shrink-1 top-4 left-4 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white rounded-full" style={{ backgroundColor: color }}>{status}</span>
            <div className={subContainClass}>
                <div className={imgClass} style={{backgroundImage: `url(${each.image})`}} title="buildings">
                {/* 
                h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden
                */}
                </div>
                {/* lg:max-h-48 lg:w-auto md:max-h-48 md:h-auto md:w-80 */}
                {/* <div className="md:flex-shrink-0"> */}
                    {/* <img width="3648" height="5472" className="h-48 w-full object-cover md:h-full md:w-48" src={each.image} alt="Man looking at item at a store" /> */}
                    {/* <Image width={3648} height={5472} layout="responsive" className="h-48 w-full object-cover md:h-full md:w-48" src={each.image} alt="Man looking at item at a store" />
                </div> */}
                <div className={contentClass}>
                    <h1 className="text-2xl font-extrabold font-thicccboim">{each.name}</h1>
                    <div className="flex flex-row content-center items-center my-2">
                        <Image alt="location" src={Location} height={16} width={12} />
                        <p className="ml-2 text-sm md:text-base">{each.location}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-center justify-center">
                        <div className="relative h-1 rounded">
                            <div className="absolute w-full h-full" style={{borderRadius: '69px', backgroundColor: '#f5f3f0'}} />
                            <div className="absolute h-full" style={{ borderRadius: '69px', width: each.funded+'%', backgroundColor: '#0f524b'}} />
                        </div>
                        <span className="text-sm font-bold">{`${each.funded}% funded`}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 md:my-5">
                        {
                            Object.keys(titles).map(
                                (item, index) => (
                                    <div key={index} className="flex justify-between border-b-2 py-2">
                                        <span>{item}</span>
                                        <span className="font-bold">{each[titles[item]]}</span>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <button className="p-4 md:px-8 rounded-md flex flex-row items-center m-0" style={{backgroundColor: color, color: 'white'}}>
                        {statement}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {/* <RightIcon /> */}
                    </button>
                    {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                    <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> */}
                </div>
            </div>
        </div>
    )
};

export default Card