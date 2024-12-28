import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
    },
    {
        id: 2,
        section: "Support",
        link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    }
]

const footer = () => {
    return (
        <div className="bg-gray-900 -mt-64" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-18">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <img src={'/logo.png'} alt="logo" className='pb-4' />
                        <h3 className='text-white  text-lg font-medium leading-9 mb-4 lg:mb-20'> Level up your skills, and get dream <br /> job with passion. </h3>
                        <div className='flex gap-10'>
                            <Link href="https://www.instagram.com/cinetoon_studio?igsh=djdrcHB2N3Z3aTB5" target="blank"><img src={'/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/" target="blank" ><img src={'/footer/dribble.svg'} alt="dribble" className='footer-icons' /></Link>
                            <Link href="https://x.com/NftCine" target="blank"><img src={'/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/" target="blank"><img src={'/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-xl font-semibold mb-6'>Stay up to date</h3>
                        <div className="relative text-white focus-within:text-white flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-white bg-gray-700 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-gray-600" placeholder="Your email address" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline w-8 h-8">
                                    <img src={'/footer/send.png'} alt="inputicon" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-10 px-4'>
                <h3 className='text-center text-white'>@2024 - All Rights Reserved by <Link href="" target="_blank"> cinetoon.site</Link></h3>
            </div>

        </div>
    )
}

export default footer;
