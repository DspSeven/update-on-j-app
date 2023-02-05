import Cookies from 'js-cookie'
import {Component} from 'react'

class JobCard extends Component {
  componentDidMount() {
    this.getSpecificJob()
  }

  getSpecificJob = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/jobs/${id}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}
export default JobCard
