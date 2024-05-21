import Link from "next/link";

const PriceCard = ({ title, price, howOften, link}) => {
    return(
        <div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                    <h5 className="text-xl font-bold mb-2">{title}</h5>
                    <h4 className="text-xl font-bold mb-3">{howOften}</h4>
                    <h3>{price}</h3>
                    <Link
                    href="../public/images/CV_v2_sA.pdf"
                    className="font-bold text-2xl mt-4 px-6 inline-block py-3 w-full sm:w-fit rounded-md mr-4 bg-red-700 from-primary-500 to-secondary-500 hover:bg-white hover:text-red-700  text-white"
                    >{link}</Link>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;