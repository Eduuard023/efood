import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { RestaurantList } from '../../components/RestaurantList'
import { useGetAllRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetAllRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <div className="container">
          <RestaurantList restaurants={restaurants} />
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <div className="container">
        <Loader />
      </div>
    </>
  )
}

export default Home
