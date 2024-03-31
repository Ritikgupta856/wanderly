export const dynamic = 'force-dynamic'
import getCurrenUser from "./actions/getCurrentUser";
import getListings, { IlistingsParams } from "./actions/getListing";
import Container from "./components/Container"
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps{
  searchParams:IlistingsParams
}

const Home = async ({searchParams}:HomeProps) => {

  const listings = await getListings(searchParams);
  const currentUser = await getCurrenUser();


  if(listings.length === 0){
    return(
      <EmptyState showReset/>
    )
  }

  return (
  <Container>
    <div className="pt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" >
     {listings.map((listing:any)=>{
      return(
       <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
      )
     })}
     
    </div>
  </Container>
  )
}

export default Home