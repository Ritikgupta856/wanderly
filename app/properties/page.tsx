import getCurrenUser from "../actions/getCurrentUser";
import getListings from "../actions/getListing";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";



const PropertiesPage = async () => {

    const currentUser = await getCurrenUser();


    if (!currentUser) {
        return (
            <EmptyState title="Unauthorized" subtitle="Please Login" />
        )
    }

    const listings = await getListings({
        userId: currentUser.id
    })

    if (listings.length === 0) {
        return (
            <EmptyState title="No Properties found" subtitle="Looks like you have no properties" />
        )
    }
   
    return(
        <PropertiesClient
        listings={listings}
        currentUser={currentUser}/>
    )

}

export default PropertiesPage;