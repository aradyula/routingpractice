// Write your JS code here
import './index.css'
import UserInfo from '../UserInfo'

import BlogsList from '../BlogsList'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogsList />
  </div>
)

export default Home
