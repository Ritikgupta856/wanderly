import getCurrenUser from "@/app/actions/getCurrentUser";
import getListingsById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";

interface Iparams{
    listingId?:string;
}

const ListingPage = async({params}:{params:Iparams}) => {

    const listing = await getListingsById(params);
    const currentUser = await getCurrenUser();
    const reservations = await getReservations(params)

    if(!listing){
        return(
            <EmptyState/>
        )
    }

   
    return (
        <>
        <ListingClient listing={listing} reservation={reservations} currentUser={currentUser}/>
        
        </>
      
    );
}

export default ListingPage;