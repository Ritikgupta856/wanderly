
import useCountries from "../hooks/useCountries";
import Heading from "../Heading";
import Image from "next/image";


interface ListingHeadProps{
    title:string;
    locationValue:string;
    imageSrc:string;
}

const ListingHead:React.FC<ListingHeadProps> = ({
    title,locationValue,imageSrc
}) => {
    const {getByValue} = useCountries();
    const location = getByValue(locationValue)
    return (
        <>
        <Heading 
        title={title}
        subtitle={`${location?.region},${location?.label}`}
        />

        <div className="w-full h-[60vh] overflow-hidden rounded-xl relative z-0">
            <Image alt="image" fill src={imageSrc} className="object-cover w-full" />
        </div>
        </>
    );
}

export default ListingHead;